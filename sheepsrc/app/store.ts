import Vue from "vue";
import Vuex from "vuex";

const _ = {
  startCase: require("lodash/startCase"),
  snakeCase: require("lodash/snakeCase")
};

Vue.use(Vuex);

export interface Project {
  filename: string;
  name: string;
  content: string;
}

interface ProjectsResponse {
  main: string;
  projects: Project[];
}

interface State {
  main: string;
  projects: Project[];
  openProjects: Project[];
  currentProject?: Project;
}

const MUTATION_SET_PROJECTS = "SET_PROJECTS";
const MUTATION_OPEN_PROJECT = "OPEN_PROJECT";
const MUTATION_CLOSE_PROJECT = "CLOSE_PROJECT";
export const MUTATION_UPDATE_PROJECT = "UPDATE_PROJECT";

export const ACTION_FETCH_PROJECTS = "FETCH_PROJECTS";
export const ACTION_OPEN_PROJECT = "OPEN_PROJECT";
export const ACTION_CLOSE_PROJECT = "CLOSE_PROJECT";
export const ACTION_SAVE_PROJECT = "SAVE_PROJECT";

export default new Vuex.Store<State>({
  state: {
    main: "",
    projects: [],
    openProjects: [],
    currentProject: undefined
  },
  mutations: {
    [MUTATION_SET_PROJECTS](state: State, res: ProjectsResponse) {
      state.main = res.main;
      state.projects = res.projects;
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
    [MUTATION_UPDATE_PROJECT](state: State, content: string) {
      if (state.currentProject) {
        state.currentProject.content = content;
      }
    }
  },
  actions: {
    [ACTION_FETCH_PROJECTS]({ commit }) {
      return fetch(`http://${location.hostname}:5000/files/`)
        .then(res => res.json())
        .then((res: ProjectsResponse) => {
          res.projects.forEach(project => {
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
        return fetch(
          `http://${location.hostname}:5000/files/save/${
            foundProject.filename
          }`,
          { method: "POST", body: foundProject.content }
        );
      }
      return Promise.resolve();
    }
  }
});
