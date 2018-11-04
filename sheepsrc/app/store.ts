import Vue from "vue";
import Vuex from "vuex";
import JSZip from "jszip";
import { BlocksConfiguration } from "./components/editor/blockly/block-loader";

const _ = {
  startCase: require("lodash/startCase"),
  snakeCase: require("lodash/snakeCase")
};

Vue.use(Vuex);

export interface Project {
  filename: string;
  name: string;
  content: string;
  blocklyGenerated?: string;
}

interface ProjectsResponse {
  main: string;
  projects: Project[];
  blocks: BlocksConfiguration;
}

interface State {
  loaded: boolean;
  main: string;
  projects: Project[];
  blocksConfiguration?: BlocksConfiguration;
  openProjects: Project[];
  currentProject?: Project;
  running: boolean;
}

const MUTATION_SET_PROJECTS = "SET_PROJECTS";
const MUTATION_OPEN_PROJECT = "OPEN_PROJECT";
const MUTATION_CLOSE_PROJECT = "CLOSE_PROJECT";
export const MUTATION_UPDATE_PROJECT = "UPDATE_PROJECT";
const MUTATION_CREATE_PROJECT = "CREATE_PROJECT";
const MUTATION_DELETE_PROJECT = "DELETE_PROJECT";
const MUTATION_SET_RUNNING = "SET_RUNNING";

export const ACTION_FETCH_PROJECTS = "FETCH_PROJECTS";
export const ACTION_OPEN_PROJECT = "OPEN_PROJECT";
export const ACTION_CLOSE_PROJECT = "CLOSE_PROJECT";
export const ACTION_SAVE_PROJECT = "SAVE_PROJECT";
export const ACTION_CREATE_PROJECT = "CREATE_PROJECT";
export const ACTION_DELETE_PROJECT = "DELETE_PROJECT";
export const ACTION_RUN_PROJECT = "RUN_PROJECT";
export const ACTION_STOP_PROJECT = "STOP_PROJECT";

export function makeFullUrl(route: string, protocol?: string): string {
  if (!protocol) protocol = "http";
  let host = window.location.host;
  if (window.location.port === "8080") {
    host = `${window.location.hostname}:5000`;
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

export default new Vuex.Store<State>({
  state: {
    loaded: false,
    main: "",
    projects: [],
    openProjects: [],
    blocksConfiguration: undefined,
    currentProject: undefined,
    running: false
  },
  mutations: {
    [MUTATION_SET_PROJECTS](state: State, res: ProjectsResponse) {
      state.loaded = true;
      state.main = res.main;
      state.projects = res.projects;
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
        blocklyGenerated
      }: { content: string; blocklyGenerated?: string }
    ) {
      if (state.currentProject) {
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
      commit(MUTATION_OPEN_PROJECT, filename);
    },
    [ACTION_CLOSE_PROJECT]({ commit, dispatch }, filename?: string) {
      dispatch(ACTION_SAVE_PROJECT, filename);
      commit(MUTATION_CLOSE_PROJECT, filename);
    },
    [ACTION_SAVE_PROJECT]({ state }, filename?: string) {
      if (!filename && state.currentProject)
        filename = state.currentProject.filename;
      const foundProject = state.projects.find(
        project => project.filename === filename
      );
      if (foundProject) {
        return fetch(makeFullUrl(`/files/save/${foundProject.filename}`), {
          method: "POST",
          body: foundProject.content
        });
      }
      return Promise.resolve();
    },
    [ACTION_CREATE_PROJECT](
      { state, commit, dispatch },
      { type, name }: { type: string; name: string }
    ) {
      const extension = type === "python" ? "py" : "xml";
      const snakeName = _.snakeCase(name);
      const filename = `${snakeName}.${extension}`;

      const foundProject = state.projects.find(
        project => project.filename === filename
      );
      if (foundProject) {
        alert("Project with that name already exists!");
        return;
      }

      const project: Project = {
        name: _.startCase(snakeName),
        filename: filename,
        content:
          type === "python"
            ? ""
            : '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'
      };

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

      return fetch(makeFullUrl(`/files/save/${filename}`), {
        method: "DELETE"
      });
    },
    async [ACTION_RUN_PROJECT]({ state, commit, dispatch }) {
      if (state.currentProject) {
        commit(MUTATION_SET_RUNNING, true);

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
    [ACTION_STOP_PROJECT]() {
      return fetch(makeFullUrl(`/run/stop`), {
        method: "POST"
      });
    }
  }
});
