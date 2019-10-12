<template>
    <div id="app">
        <template v-if="loaded">
            <Sidebar>
              <ProjectList @create="openCreate" @delete="showDelete" @download="download"/>
          </Sidebar>
          <Editor/>
          <Sidebar :right="true">
              <Logs/>
          </Sidebar>
          <CreateProjectDialog @close="closeCreate" v-show="createOpen"/>
          <DeleteProjectDialog :project="deleteProject" @close="deleteOpen = false" v-show="deleteOpen"/>
        </template>
        <div v-else class="empty-state">
            <FontAwesomeIcon :icon="['far', 'exclamation-triangle']" size="10x"/>
            <h2>Unable to connect to Shepherd!</h2>
        </div>
        <Messages/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { MUTATION_SET_CREATE_OPEN, Project, saveProject } from "./store";

interface Data {
  deleteOpen: boolean;
  deleteProject: any;
}

export default Vue.extend({
  name: "app",
  data(): Data {
    return {
      deleteOpen: false,
      deleteProject: undefined
    };
  },
  computed: mapState(["loaded", "createOpen"]),
  methods: {
    openCreate() {
      this.$store.commit(MUTATION_SET_CREATE_OPEN, true);
    },
    closeCreate() {
      this.$store.commit(MUTATION_SET_CREATE_OPEN, false);
    },
    showDelete(project: Project) {
      this.deleteProject = project;
      this.deleteOpen = true;
    },
    download(project: Project) {
      saveProject(project);
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
  overflow-x: hidden;
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
