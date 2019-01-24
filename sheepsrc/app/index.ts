import "./styles.scss";
import "./prism";

import Vue from "vue";
import store, {
  ACTION_FETCH_PROJECTS,
  ACTION_RUN_PROJECT,
  ACTION_SAVE_PROJECT,
  ACTION_STOP_PROJECT,
  MUTATION_SET_CREATE_OPEN,
  MUTATION_SHOW_UPLOAD_DIALOG
} from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faStop } from "@fortawesome/pro-solid-svg-icons";
import {
  faPlus,
  faTrash,
  faSyncAlt,
  faExclamationTriangle,
  faUpload,
  faDownload,
  faInfoCircle,
  faExclamationCircle,
  faArrowAltFromRight
} from "@fortawesome/pro-regular-svg-icons";

library.add(
  faPlay,
  faStop,
  faPlus,
  faTrash,
  faSyncAlt,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faUpload,
  faDownload,
  faArrowAltFromRight
);

import App from "./App.vue";

import IconButton from "./components/IconButton.vue";
import Messages from "./components/Messages.vue";
import Editor from "./components/editor/Editor.vue";
import Tabs from "./components/editor/Tabs.vue";
import Monaco from "./components/editor/monaco/Monaco.vue";
import Blockly from "./components/editor/blockly/Blockly.vue";
// import BlockDefinitions from "./components/editor/block-definitions/BlockDefinitions.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";
import ProjectList from "./components/sidebar/projects/ProjectList.vue";
import ProjectTab from "./components/ProjectTab.vue";
import Logs from "./components/sidebar/logs/Logs.vue";
import Camera from "./components/sidebar/logs/Camera.vue";
import LogText from "./components/sidebar/logs/LogText.vue";
import DialogWrapper from "./components/dialog/DialogWrapper.vue";
import CreateProjectDialog from "./components/dialog/CreateProjectDialog.vue";
import DeleteProjectDialog from "./components/dialog/DeleteProjectDialog.vue";
// @ts-ignore
import Prism from "vue-prism-component";
// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("IconButton", IconButton);
Vue.component("Messages", Messages);
Vue.component("Editor", Editor);
Vue.component("Tabs", Tabs);
Vue.component("Monaco", Monaco);
Vue.component("Blockly", Blockly);
// Vue.component("BlockDefinitions", BlockDefinitions);
Vue.component("Sidebar", Sidebar);
Vue.component("ProjectList", ProjectList);
Vue.component("ProjectTab", ProjectTab);
Vue.component("Logs", Logs);
Vue.component("Camera", Camera);
Vue.component("LogText", LogText);
Vue.component("DialogWrapper", DialogWrapper);
Vue.component("CreateProjectDialog", CreateProjectDialog);
Vue.component("DeleteProjectDialog", DeleteProjectDialog);
Vue.component("Prism", Prism);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.config.productionTip = false;

function init() {
  // noinspection JSUnusedGlobalSymbols
  new Vue({
    el: "#app",
    store,
    render: h => h(App)
  });
}

store
  .dispatch(ACTION_FETCH_PROJECTS)
  .then(init)
  .catch(e => {
    console.error(e);
    init();
  });

window.addEventListener("keydown", e => {
  if (e.key === "F5") {
    e.preventDefault();
    if (e.ctrlKey) {
      // CTRL-F5: Stop
      // noinspection JSIgnoredPromiseFromCall
      store.dispatch(ACTION_STOP_PROJECT);
    } else {
      // F5: Run
      // SHIFT-F5: Run without save as dialog
      // noinspection JSIgnoredPromiseFromCall
      store.dispatch(ACTION_RUN_PROJECT, e.shiftKey);
    }
  }

  // CTRL-S: Save
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    // noinspection JSIgnoredPromiseFromCall
    store.dispatch(ACTION_SAVE_PROJECT);
  }

  // CTRL-ALT-N: New project
  // Must be CTRL-ALT-N as apps can't override CTRL(-SHIFT)-N in Chrome
  if (e.ctrlKey && e.altKey && e.key === "n") {
    e.preventDefault();
    store.commit(MUTATION_SET_CREATE_OPEN, true);
  }

  // CTRL-U: Upload
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
    store.commit(MUTATION_SHOW_UPLOAD_DIALOG);
  }
});
