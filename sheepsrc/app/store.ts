//TODO: split this into separate files at some point (see Vuex modules)

// Import statements
import Vue from "vue";
import Vuex from "vuex";
import JSZip from "jszip";
import { BlocksConfiguration } from "./components/editor/blockly/block-loader";
import FileSaver from "file-saver";
import Ajv from "ajv";
import blocksSchema from "./components/editor/monaco/json/schema.json";

/**AJV is a JSON schema see (https://bit.ly/2kXnfiO)
 * this defines the layout of the JSON objects and what data types should
 * go where
*/
const ajv = new Ajv();
const validateBlocks = ajv.compile(blocksSchema);

/**
 * Imports nice functional methods for string formating to startCase and
 * snake case
 */
const _ = {
  startCase: require("lodash/startCase"),
  snakeCase: require("lodash/snakeCase")
};

Vue.use(Vuex);

/**Every file of the user's code is stored in "projects" with the following
 * properties
 */
export interface Project {
  filename: string;
  name: string;
  content: string;
  lastSaveContent?: string;
  blocklyGenerated?: string;
}

/**This is for the projects retreived from the server initally to display the
 * side bar:
 * main: the file path of the "main" file used by monacos language server
 * "/root/shepherd2/robosrc/main.py"
 * The currently opened document is assumed to be at that location which allows
 * the code completetion to work.
 */
interface ProjectsResponse {
  main: string;
  projects: Project[];
  blocks: BlocksConfiguration;
}

/** Notifications can be raised to the user. Here is the interface for all of
 * their settings */
interface Message {
  id: string | number;
  message: string;
  icon: "info-circle" | "exclamation-triangle" | "exclamation-circle";
  timeout?: any;
}

// The user may wish to hide the side bars to increase screen real estate
interface SidebarsHidden {
  leftHidden: boolean;
  rightHidden: boolean;
}

// A "bucket" interface which holds all of the state of the program
interface State {
  loaded: boolean;
  main: string;
  projects: Project[];
  blocksConfiguration?: BlocksConfiguration;
  openProjects: Project[];
  currentProject?: Project;
  running: boolean;
  saving: number;
  createOpen: boolean;
  uploadFileKeyPressId: number;
  messages: Message[];
  messageCount: number;
  textLog: string;
  textLogOutputState: number;
  sidebarsHidden: SidebarsHidden;
}

// Events which can cause the program to change state
const MUTATION_SET_PROJECTS = "SET_PROJECTS";
const MUTATION_OPEN_PROJECT = "OPEN_PROJECT";
const MUTATION_CLOSE_PROJECT = "CLOSE_PROJECT";
export const MUTATION_UPDATE_PROJECT = "UPDATE_PROJECT";
const MUTATION_CREATE_PROJECT = "CREATE_PROJECT";
const MUTATION_DELETE_PROJECT = "DELETE_PROJECT";
const MUTATION_SET_RUNNING = "SET_RUNNING";
const MUTATION_SET_SAVING = "SET_SAVING";
const MUTATION_MARK_PROJECT_SAVED = "MARK_SAVED";
export const MUTATION_SET_CREATE_OPEN = "SET_CREATE_OPEN";
export const MUTATION_SHOW_UPLOAD_DIALOG = "SHOW_UPLOAD_DIALOG";
const MUTATION_SHOW_MESSAGE = "SHOW_MESSAGE";
export const MUTATION_DISMISS_MESSAGE = "DISMISS_MESSAGE";
const MUTATION_SET_TEXT_LOG = "SET_TEXT_LOG";
const MUTATION_RESET_TEXT_LOG_OUTPUT = "RESET_TEXT_LOG_OUTPUT";
export const MUTATION_SET_SIDEBAR_HIDDEN = "SET_SIDEBAR_HIDDEN";

// Actions which the user can take which cause mutations
export const ACTION_FETCH_PROJECTS = "FETCH_PROJECTS";
export const ACTION_OPEN_PROJECT = "OPEN_PROJECT";
export const ACTION_CLOSE_PROJECT = "CLOSE_PROJECT";
export const ACTION_SAVE_PROJECT = "SAVE_PROJECT";
export const ACTION_CREATE_PROJECT = "CREATE_PROJECT";
export const ACTION_DELETE_PROJECT = "DELETE_PROJECT";
export const ACTION_RUN_PROJECT = "RUN_PROJECT";
export const ACTION_STOP_PROJECT = "STOP_PROJECT";
export const ACTION_SHOW_MESSAGE = "SHOW_MESSAGE";

// Messages which can be displayed to the user
const MESSAGE_RUN = "RUN";
const MESSAGE_STOP = "STOP";
const MESSAGE_SAVED = "SAVED";
const MESSAGE_JSON_ERROR = "JSON_ERROR";

// A function which adds host and protocol to make a useable URL
export function makeFullUrl(route: string, protocol?: string): string {
  if (!protocol) protocol = "http";
  let host = window.location.host;
  if (window.location.port === "8080") {
    host = `${window.location.hostname}:80`;
  }
  return `${protocol}://${host}${route}`;
}

// Create a promise which resolves after a certain time
export function wait(time: number): Promise<number> {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(time), time);
  });
}

/** A function used for passing to a `.sort` function for sorting
 * a list of projects.
 * This is for when we supported custom blockly blocks defined using JSON
 * These could then be moved to the top or the bottom of the list
 */
function compareProjects(a: Project, b: Project): number {
  if (a.filename === b.filename) return 0;
  if (a.filename.endsWith(".json")) return 1;
  if (b.filename.endsWith(".json")) return -1;
  return a.filename < b.filename ? -1 : 1;
}

/**Saves a project.
 * Selects the correct mime type from the file extention so that it is
 * saved correctly then creates a blob which can be writen to disk using
 * the FileSaver object
 */
export function saveProject(p: Project) {
  const ext = p.filename.substring(p.filename.lastIndexOf(".") + 1);
  const mime =
    ext === "py"
      ? "application/x-python"
      : ext === "xml"
        ? "application/xml"
        : "text/plain";
  const blob = new Blob([p.content], { type: `${mime};charset=utf-8` });
  FileSaver.saveAs(blob, p.filename);
}

/**The Vuex Store
 * If you are unfamiliar with vuex this may seem a little weird
 * Link to documentation: https://vuex.vuejs.org
 */
export default new Vuex.Store<State>({
  // The state of the program as defined in the "interface State"
  state: {
    loaded: false,
    main: "",
    projects: [],
    openProjects: [],
    blocksConfiguration: undefined,
    currentProject: undefined,
    running: false,
    saving: 0,
    createOpen: false,
    uploadFileKeyPressId: 0,
    messages: [],
    messageCount: 0,
    textLog: "",
    textLogOutputState: 0,
    sidebarsHidden: {
      leftHidden: false,
      rightHidden: false
    }
  },

  // Mutations can change application state
  mutations: {
    /**Unpacks the projects response ignoring the custom blocks definition
     * Sorts the projects using the compare function.
    */
    [MUTATION_SET_PROJECTS](state: State, res: ProjectsResponse) {
      state.loaded = true;
      state.main = res.main;
      state.projects = res.projects.filter(
        test =>
          test.filename !== "blocks.json"
      );
      state.projects.sort(compareProjects);
      state.blocksConfiguration = res.blocks;
    },

    /**Checks if a project is already open.
     * If not then adds the project to the list of currently open projects and
     * sets it as the currently open project
     */
    [MUTATION_OPEN_PROJECT](state: State, filename?: string) {
      const findProject = (project: Project) => project.filename === filename;

      let newProject = state.projects.find(findProject);
      if (!newProject) return;

      if (!state.openProjects.find(findProject))
        state.openProjects.push(newProject);

      state.currentProject = newProject;
    },

    /**Finds a choosen project in the list of open projects
     * If the currently open project is the one to be removed then another
     * openProject is found and that is set as the currently open project.
     * NB there aren't index out of bounds errors in JS. Referencing an empty
     * array therefore sets the current project to zero
     */
    [MUTATION_CLOSE_PROJECT](state: State, filename?: string) {
      let foundIndex = state.openProjects.findIndex(
        project => project.filename === filename
      );
      if (foundIndex >= 0) {
        state.openProjects.splice(foundIndex, 1);

        if (
          state.currentProject
          && state.currentProject.filename === filename
        ) {
          if (foundIndex == state.openProjects.length) {
            foundIndex--;
          }
          state.currentProject = state.openProjects[foundIndex];
        }
      }
    },

    /**
     * Updates the state once the blockly script is compiled
     */
    [MUTATION_UPDATE_PROJECT](
      state: State,
      {
        content,
        blocklyGenerated,
        filename
      }: { content: string; blocklyGenerated?: string; filename?: string }
    ) {
      if (filename) {
        state.projects = state.projects.map(v => {
          if (v.filename === filename) {
            v.content = content;
            v.blocklyGenerated = blocklyGenerated;
          }
          return v;
        });
      } else if (state.currentProject) {
        state.currentProject.content = content;
        state.currentProject.blocklyGenerated = blocklyGenerated;
      }
    },

    //Creates a new project and adds it to the vuex store
    [MUTATION_CREATE_PROJECT](state: State, project: Project) {
      state.projects.push(project);
      state.projects.sort(compareProjects);
    },

    //Removes a project from the vuex store
    [MUTATION_DELETE_PROJECT](state: State, filename: string) {
      const foundIndex = state.projects.findIndex(
        project => project.filename === filename
      );
      if (foundIndex >= 0) {
        state.projects.splice(foundIndex, 1);
      }
    },

    //Change the state.running to running
    [MUTATION_SET_RUNNING](state: State, running: boolean) {
      state.running = running;
    },

    /**This handles when multiple files start/stop saving at the same time.
      */
    [MUTATION_SET_SAVING](state: State, saving: boolean) {
      state.saving += saving ? 1 : -1;
    },

    /**Updates the "lastSaveContent" of all of the states to the currently
     * projects. The calls to openProjects etc maybe need to let the
     * reactively work depending on how vue handels pointers
     */
    [MUTATION_MARK_PROJECT_SAVED](state: State, filename: string) {
      const markSaved = (v: Project) => {
        if (v.filename === filename) {
          v.lastSaveContent = v.content;
        }
        return v;
      };

      if (state.currentProject && state.currentProject.filename) {
        state.currentProject.lastSaveContent = state.currentProject.content;
      }
      state.projects = state.projects.map(markSaved);
      state.openProjects = state.openProjects.map(markSaved);
    },

    //Moves to the create new project dialogue
    [MUTATION_SET_CREATE_OPEN](state: State, open: boolean) {
      state.createOpen = open;
    },

    /**I think this is just in case multiple files are uploaded at the same
     * time
     */
    [MUTATION_SHOW_UPLOAD_DIALOG](state: State) {
      state.uploadFileKeyPressId++;
    },

    /**Create little pop up meesage by either altering a message with the same
     * id or pushing a new message to the messages list
    */
    [MUTATION_SHOW_MESSAGE](state: State, { id, message, icon }: Message) {
      const foundIndex = state.messages.findIndex(test => test.id === id);
      if (foundIndex >= 0) {
        state.messages[foundIndex].message = message;
        state.messages[foundIndex].icon = icon;
      } else {
        state.messages.push({ id, message, icon });
      }
      state.messageCount++;
    },

    /**Clears the time out of a message if it has one and then removes it from
     * the message array
     */
    [MUTATION_DISMISS_MESSAGE](state: State, id: string | number) {
      const foundIndex = state.messages.findIndex(test => test.id === id);
      if (foundIndex >= 0) {
        if (state.messages[foundIndex].timeout) {
          clearTimeout(state.messages[foundIndex].timeout);
        }
        state.messages.splice(foundIndex, 1);
      }
    },

    /**Text log output state is used by ACTION_RUN_PROJECT to determine when
     * the program has been run. By default it's 0, then if the log is empty
     * (i.e. the program has just been started) it's set to 1, then when output
     * is received and the script starts logging it's set to 2. This indicates
     * that sheep can send the virtual start command to run the program.
     */
    [MUTATION_SET_TEXT_LOG](state: State, log: string) {
      if (state.textLog !== log) {
        if (state.textLogOutputState == 0) {
          if (log.trim() === "") state.textLogOutputState = 1;
        } else if (state.textLogOutputState == 1) {
          if (log.trim() !== "") state.textLogOutputState = 2;
        }
      }
      state.textLog = log;
    },

    /**This just resets the log state for when a new program is to be run*/
    [MUTATION_RESET_TEXT_LOG_OUTPUT](state: State) {
      state.textLogOutputState = 0;
    },

    //Sets the state of the side bars to be hidden or not
    [MUTATION_SET_SIDEBAR_HIDDEN](
      state: State,
      { right, hidden }: { right: boolean; hidden: boolean }
    ) {
      if (right) {
        state.sidebarsHidden.rightHidden = hidden;
      } else {
        state.sidebarsHidden.leftHidden = hidden;
      }
    }
  },

  /**Actions are things which can trigger mutations*/
  actions: {
    /**Fetches a list of projects
     * Formats the response from the raw response (more details on this
     * required to be understood)
     * Then does some kinda sorting of the projects in the MUTATION_SET_PROJECTS?
     * Then when all the projects are loaded tries to load the output of the
     * currently selected project
     */
    [ACTION_FETCH_PROJECTS]({ commit }) {
      return fetch(makeFullUrl("/files/"))
        .then(res => res.json())
        .then((res: any) => {
          res.projects.forEach((project: Project) => {
            project.name = _.startCase(
              project.filename.substring(0, project.filename.lastIndexOf("."))
            );
          });
          //TODO add a comment explaining this state
          commit(MUTATION_SET_PROJECTS, res);
          return true;
        })
        .then((loaded: boolean) => {
          if (loaded) {
            const loadText = () => {
              fetch(makeFullUrl("/run/output"))
                .then(res => res.text())
                .then(res => {
                  commit(MUTATION_SET_TEXT_LOG, res);
                  setTimeout(() => loadText(), 1000);
                })
                .catch(e => {
                  console.error(e);
                  e.text = "Unable to load logs!";
                  setTimeout(() => loadText(), 1000);
                });
            };
            loadText();
          }
        });
    },

    /**Opens a new project:
     * First saves the current project
     * Marks it as saved
     * Opens a new the new project
     */
    [ACTION_OPEN_PROJECT]({ state, commit, dispatch }, filename?: string) {
      if (state.currentProject)
        dispatch(ACTION_SAVE_PROJECT, state.currentProject.filename);
      commit(MUTATION_MARK_PROJECT_SAVED, filename);
      commit(MUTATION_OPEN_PROJECT, filename);
    },

    /**Saves and then closes the project*/
    [ACTION_CLOSE_PROJECT]({ commit, dispatch }, filename?: string) {
      dispatch(ACTION_SAVE_PROJECT, filename);
      commit(MUTATION_CLOSE_PROJECT, filename);
    },

    /**Saves the project:
     * First checks if using blockly, if so:
     *  - Validates that all the blocks are okay
     * Then uses a HTTP POST to send the file to the server (in "saving" state)
     * Updates everything to show that it has been saved (in "saved" state)
     */
    [ACTION_SAVE_PROJECT]({ state, commit, dispatch }, filename?: string) {
      if (!filename && state.currentProject) {
        filename = state.currentProject.filename;
      }
      const foundProject = state.projects.find(
        project => project.filename === filename
      );
      if (foundProject) {
        if (foundProject.content === foundProject.lastSaveContent) return;

        if (foundProject.filename.endsWith(".json")) {
          let parsed;
          try {
            parsed = JSON.parse(foundProject.content);
          } catch (e) {
            dispatch(ACTION_SHOW_MESSAGE, {
              id: MESSAGE_JSON_ERROR,
              message:
                "Unable to save block definitions! Failed to parse JSON!",
              icon: "exclamation-circle"
            });
            return;
          }
          const valid = validateBlocks(parsed);
          if (!valid && validateBlocks.errors) {
            console.log(validateBlocks.errors);
            const error = validateBlocks.errors[0];
            dispatch(ACTION_SHOW_MESSAGE, {
              id: MESSAGE_JSON_ERROR,
              message: `Unable to save block definitions! At ${
                error.dataPath
              }, ${error.message}`,
              icon: "exclamation-circle"
            });
            return;
          }
        }

        commit(MUTATION_SET_SAVING, true);
        return fetch(makeFullUrl(`/files/save/${foundProject.filename}`), {
          method: "POST",
          body: foundProject.content
        }).then(res => {
          setTimeout(() => {
            commit(MUTATION_MARK_PROJECT_SAVED, filename);
            commit(MUTATION_SET_SAVING, false);
            dispatch(ACTION_SHOW_MESSAGE, {
              id: MESSAGE_SAVED,
              message: `${foundProject.name} saved!`,
              icon: "info-circle"
            });
          }, 250);
          return res;
        });
      }
      return Promise.resolve();
    },

    /**Creates a new project
     * First converts the filename to snake_case and the name to startcase
     * (not sure why)
     * Checks that a project with that name does not already exist
     * Then creates a new Project object and commits that
     */
    [ACTION_CREATE_PROJECT](
      { state, commit, dispatch },
      {
        type,
        name,
        filename,
        loadContent
      }: { type: string; name: string; filename: string; loadContent: string }
    ) {
      if (filename) {
        name = _.startCase(filename.substring(0, filename.lastIndexOf(".")));
      } else {
        const extension = type === "python" ? "py" : "xml";
        const snakeName = _.snakeCase(name);
        filename = `${snakeName}.${extension}`;
        name = _.startCase(snakeName);
      }

      const foundProject = state.projects.find(
        project => project.filename === filename
      );
      if (foundProject) {
        if (filename) {
          commit(MUTATION_CLOSE_PROJECT, filename);
          commit(MUTATION_UPDATE_PROJECT, {
            filename: filename,
            content: loadContent
          });
          dispatch(ACTION_SAVE_PROJECT, filename);
          dispatch(ACTION_OPEN_PROJECT, filename);
          return;
        } else {
          alert("Project with that name already exists!");
          return;
        }
      }

      const project: Project = {
        name: name,
        filename: filename,
        content:
          loadContent ||
          (type === "python"
            ? ""
            : '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>')
      };
      //project.lastSaveContent = project.content;

      commit(MUTATION_CREATE_PROJECT, project);
      dispatch(ACTION_SAVE_PROJECT, project.filename);
      dispatch(ACTION_OPEN_PROJECT, project.filename);
    },

    /**Delete a project
     * First check if it is open and if so close it
     * Delete the project from the projects array
     * Delete it from the remote server
     */
    [ACTION_DELETE_PROJECT]({ state, commit }, filename: string) {
      const foundOpenProject = state.openProjects.find(
        project => project.filename === filename
      );
      if (foundOpenProject) {
        commit(MUTATION_CLOSE_PROJECT, foundOpenProject.filename);
      }
      commit(MUTATION_DELETE_PROJECT, filename);

      return fetch(makeFullUrl(`/files/delete/${filename}`), {
        method: "DELETE"
      });
    },

    /**Runs the project
     * Checks that there is a project currently open
     * Saves that project
     * If a blockly project get the compiled code
     * Finds any other projects with .py file name and zips them all
     * POSTs the zip to shepherd
     * Shepherd should signal to sheep when the script is ready because
     * shepherd knows but we just wait because this implementation was faster
     * POSTs to shephers run page to run the code
     * Moves to the running state
     */
    async [ACTION_RUN_PROJECT]({ state, commit, dispatch }, noSave: boolean) {
      if (state.running) return;

      if (state.currentProject) {
        commit(MUTATION_SET_RUNNING, true);

        if (!noSave) saveProject(state.currentProject);
        await dispatch(ACTION_SAVE_PROJECT);

        const filename = state.currentProject.filename;
        const zip = new JSZip();

        let filesToPack: Project[] = [];
        if (state.currentProject.filename.endsWith(".xml")) {
          const blocksConfiguration: BlocksConfiguration = state.blocksConfiguration || {
            header: "",
            footer: "",
            requires: [],
            blocks: []
          };

          /*const generated = `${blocksConfiguration.header}\n${
            state.currentProject.blocklyGenerated
          }\n${blocksConfiguration.footer}`;*/
          const generated = state.currentProject.blocklyGenerated;

          zip.file("main.py", generated || "");

          filesToPack = state.projects.filter(
            project =>
              project.filename.endsWith(".py") &&
              blocksConfiguration.requires.includes(project.filename)
          );
        } else {
          zip.file("main.py", state.currentProject.content);

          filesToPack = state.projects.filter(
            project =>
              project.filename.endsWith(".py") && project.filename != filename
          );
        }

        for (let i = 0; i < filesToPack.length; i++) {
          zip.file(filesToPack[i].filename, filesToPack[i].content);
        }

        zip
          .generateAsync({
            type: "blob"
          })
          .then(blob => {
            const uploadFormData = new FormData();
            uploadFormData.append("uploaded_file", blob, "code.zip");

            dispatch(ACTION_SHOW_MESSAGE, {
              id: MESSAGE_RUN,
              message: "Running on Robot...",
              icon: "info-circle"
            });
            commit(MUTATION_RESET_TEXT_LOG_OUTPUT);

            return fetch(makeFullUrl(`/upload/upload`), {
              method: "POST",
              body: uploadFormData
            });
          })
          .then(async () => {
            let i = 0;
            while (state.textLogOutputState !== 2) {
              await wait(500);
              i++;
              if (i == 10) break;
            }
            await wait(1000);
          })
          .then(() => {
            const runFormData = new FormData();
            runFormData.append("zone", "0");
            runFormData.append("mode", "development");

            return fetch(makeFullUrl(`/run/start`), {
              method: "POST",
              body: runFormData
            });
          })
          .then(() => commit(MUTATION_SET_RUNNING, false))
          .catch(e => {
            console.error(e);
            commit(MUTATION_SET_RUNNING, false);
          });
      }
    },

    //Tells shepherd to stop the execution of a project
    [ACTION_STOP_PROJECT]({ dispatch }) {
      dispatch(ACTION_SHOW_MESSAGE, {
        id: MESSAGE_STOP,
        message: "Robot stopped!",
        icon: "info-circle"
      });

      return fetch(makeFullUrl(`/run/stop`), {
        method: "POST"
      });
    },

    /**Shows a message to the user
     * Clears any existing timeout
     * Displayes the message
     * waits for a timeout of 5 seconds
     */
    [ACTION_SHOW_MESSAGE]({ commit, state }, message: Message) {
      message.id = message.id || state.messageCount;
      let foundIndex = state.messages.findIndex(test => test.id === message.id);
      if (foundIndex >= 0) {
        clearTimeout(state.messages[foundIndex].timeout);
      } else {
        foundIndex = state.messages.length;
      }
      commit(MUTATION_SHOW_MESSAGE, message);
      state.messages[foundIndex].timeout = setTimeout(() => {
        commit(MUTATION_DISMISS_MESSAGE, message.id);
      }, 5000);
    }
  }
});
