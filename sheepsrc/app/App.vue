<template>
    <div id="app">
        <Sidebar>
            <ProjectList @create="createOpen = true" @delete="showDelete"/>
        </Sidebar>
        <Editor/>
        <Sidebar>
            <Logs/>
        </Sidebar>
        <CreateProjectDialog @close="createOpen = false" v-show="createOpen"/>
        <DeleteProjectDialog :project="deleteProject" @close="deleteOpen = false" v-show="deleteOpen"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Project } from "./store";

interface Data {
  createOpen: boolean;
  deleteOpen: boolean;
  deleteProject: any;
}

export default Vue.extend({
  name: "app",
  data(): Data {
    return {
      createOpen: false,
      deleteOpen: false,
      deleteProject: undefined
    };
  },
  methods: {
    showDelete(project: Project) {
      this.deleteProject = project;
      this.deleteOpen = true;
    }
  }
});
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
}
</style>
