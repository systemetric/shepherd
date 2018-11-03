import "./styles.scss";
import "./prism";

import Vue from "vue";
import store, { ACTION_FETCH_PROJECTS } from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash } from "@fortawesome/pro-regular-svg-icons";

library.add(faPlus, faTrash);

import App from "./App.vue";

import IconButton from "./components/IconButton.vue";
import Editor from "./components/editor/Editor.vue";
import Tabs from "./components/editor/Tabs.vue";
import Monaco from "./components/editor/monaco/Monaco.vue";
import Blockly from "./components/editor/blockly/Blockly.vue";
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
Vue.component("Editor", Editor);
Vue.component("Tabs", Tabs);
Vue.component("Monaco", Monaco);
Vue.component("Blockly", Blockly);
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

store.dispatch(ACTION_FETCH_PROJECTS).then(() => {
  // noinspection JSUnusedGlobalSymbols
  new Vue({
    el: "#app",
    store,
    render: h => h(App)
  });
});
