<template>
    <div id="app">
        <template v-if="loaded">
            <Sidebar>
            <ProjectList @create="createOpen = true" @delete="showDelete"/>
        </Sidebar>
        <Editor/>
        <Sidebar>
            <Logs/>
        </Sidebar>
        <CreateProjectDialog @close="createOpen = false" v-show="createOpen"/>
        <DeleteProjectDialog :project="deleteProject" @close="deleteOpen = false" v-show="deleteOpen"/>
        </template>
        <div v-else class="empty-state">
            <FontAwesomeIcon :icon="['far', 'exclamation-triangle']" size="10x"/>
            <h2>Unable to connect to Shepherd!</h2>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
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
  computed: mapState(["loaded"]),
  methods: {
    showDelete(project: Project) {
      this.deleteProject = project;
      this.deleteOpen = true;
    }
  }
});
</script>

<style lang="scss">
#app,
.empty-state {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
}

#app {
  flex-direction: row;
}

.empty-state {
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 16px;
    font-size: 24px;
  }
}
</style>
