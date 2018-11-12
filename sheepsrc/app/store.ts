//TODO: split this into separate files at some point (see Vuex modules)

import Vue from "vue";
import Vuex from "vuex";
import JSZip from "jszip";
import { BlocksConfiguration } from "./components/editor/blockly/block-loader";
import FileSaver from "file-saver";
import Ajv from "ajv";
import blocksSchema from "./components/editor/monaco/json/schema.json";

const ajv = new Ajv();
const validateBlocks = ajv.compile(blocksSchema);

const _ = {
  startCase: require("lodash/startCase"),
  snakeCase: require("lodash/snakeCase")
};

Vue.use(Vuex);

export interface Project {
  filename: string;
  name: string;
  content: string;
  lastSaveContent?: string;
  blocklyGenerated?: string;
}

interface ProjectsResponse {
  main: string;
  projects: Project[];
  blocks: BlocksConfiguration;
}

interface Message {
  id: string | number;
  message: string;
  icon: "info-circle" | "exclamation-triangle" | "exclamation-circle";
  timeout?: any;
}

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
}

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

export const ACTION_FETCH_PROJECTS = "FETCH_PROJECTS";
export const ACTION_OPEN_PROJECT = "OPEN_PROJECT";
export const ACTION_CLOSE_PROJECT = "CLOSE_PROJECT";
export const ACTION_SAVE_PROJECT = "SAVE_PROJECT";
export const ACTION_CREATE_PROJECT = "CREATE_PROJECT";
export const ACTION_DELETE_PROJECT = "DELETE_PROJECT";
export const ACTION_RUN_PROJECT = "RUN_PROJECT";
export const ACTION_STOP_PROJECT = "STOP_PROJECT";
export const ACTION_SHOW_MESSAGE = "SHOW_MESSAGE";

const MESSAGE_RUN = "RUN";
const MESSAGE_STOP = "STOP";
const MESSAGE_SAVED = "SAVED";
const MESSAGE_JSON_ERROR = "JSON_ERROR";

export function makeFullUrl(route: string, protocol?: string): string {
  if (!protocol) protocol = "http";
  let host = window.location.host;
  if (window.location.port === "8080") {
    host = `${window.location.hostname}:80`;
  }
  return `${protocol}://${host}${route}`;
}

export function wait(time: number): Promise<number> {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(time), time);
  });
}

function compareProjects(a: Project, b: Project): number {
  if (a.filename === b.filename) return 0;
  if (a.filename.endsWith(".json")) return 1;
  if (b.filename.endsWith(".json")) return -1;
  return a.filename < b.filename ? -1 : 1;
}

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

export default new Vuex.Store<State>({
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
    messageCount: 0
  },
  mutations: {
    [MUTATION_SET_PROJECTS](state: State, res: ProjectsResponse) {
      state.loaded = true;
      state.main = res.main;
      state.projects = res.projects.filter(
        test =>
          window.location.hash === "#blocks" || test.filename !== "blocks.json"
      );
      state.projects.sort(compareProjects);
      state.blocksConfiguration = res.blocks;
    },
    [MUTATION_OPEN_PROJECT](state: State, filename?: string) {
      const findProject = (project: Project) => project.filename === filename;

      let newProject = state.projects.find(findProject);
      if (!newProject) return;

      if (!state.openProjects.find(findProject))
        state.openProjects.push(newProject);

      state.currentProject = newProject;
    },
    [MUTATION_CLOSE_PROJECT](state: State, filename?: string) {
      let foundIndex = state.openProjects.findIndex(
        project => project.filename === filename
      );
      if (foundIndex >= 0) {
        state.openProjects.splice(foundIndex, 1);

        if (
          state.currentProject &&
          state.currentProject.filename === filename
        ) {
          if (foundIndex == state.openProjects.length) {
            foundIndex--;
          }
          state.currentProject = state.openProjects[foundIndex];
        }
      }
    },
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
    [MUTATION_CREATE_PROJECT](state: State, project: Project) {
      state.projects.push(project);
      state.projects.sort(compareProjects);
    },
    [MUTATION_DELETE_PROJECT](state: State, filename: string) {
      const foundIndex = state.projects.findIndex(
        project => project.filename === filename
      );
      if (foundIndex >= 0) {
        state.projects.splice(foundIndex, 1);
      }
    },
    [MUTATION_SET_RUNNING](state: State, running: boolean) {
      state.running = running;
    },
    [MUTATION_SET_SAVING](state: State, saving: boolean) {
      state.saving += saving ? 1 : -1;
    },
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
    [MUTATION_SET_CREATE_OPEN](state: State, open: boolean) {
      state.createOpen = open;
    },
    [MUTATION_SHOW_UPLOAD_DIALOG](state: State) {
      state.uploadFileKeyPressId++;
    },
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
    [MUTATION_DISMISS_MESSAGE](state: State, id: string | number) {
      const foundIndex = state.messages.findIndex(test => test.id === id);
      if (foundIndex >= 0) {
        if (state.messages[foundIndex].timeout) {
          clearTimeout(state.messages[foundIndex].timeout);
        }
        state.messages.splice(foundIndex, 1);
      }
    }
  },
  actions: {
    [ACTION_FETCH_PROJECTS]({ commit }) {
      return fetch(makeFullUrl("/files/"))
        .then(res => res.json())
        .then((res: any) => {
          res.projects.forEach((project: Project) => {
            project.name = _.startCase(
              project.filename.substring(0, project.filename.lastIndexOf("."))
            );
          });

          commit(MUTATION_SET_PROJECTS, res);
        });
    },
    [ACTION_OPEN_PROJECT]({ state, commit, dispatch }, filename?: string) {
      if (state.currentProject)
        dispatch(ACTION_SAVE_PROJECT, state.currentProject.filename);
      commit(MUTATION_MARK_PROJECT_SAVED, filename);
      commit(MUTATION_OPEN_PROJECT, filename);
    },
    [ACTION_CLOSE_PROJECT]({ commit, dispatch }, filename?: string) {
      dispatch(ACTION_SAVE_PROJECT, filename);
      commit(MUTATION_CLOSE_PROJECT, filename);
    },
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

          const generated = `${blocksConfiguration.header}\n${
            state.currentProject.blocklyGenerated
          }\n${blocksConfiguration.footer}`;

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
              id: "RUNNING"
            });

            dispatch(ACTION_SHOW_MESSAGE, {
              id: MESSAGE_RUN,
              message: "Running on Robot...",
              icon: "info-circle"
            });

            return fetch(makeFullUrl(`/upload/upload`), {
              method: "POST",
              body: uploadFormData
            });
          })
          .then(() => wait(500))
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
