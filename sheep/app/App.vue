<template>
    <div id="app">
        <template v-if="loaded">
          <Split :gutterSize="4" ref="splitPane" @onDragEnd="splitPaneDragEnd">
            <SplitArea :minSize="250" :size="splitSizes[0]" style="background-color: #222222;">
              <ProjectList @create="openCreate" @delete="showDelete" @download="download"/>
            </SplitArea>
            <SplitArea :size="splitSizes[1]">
              <Editor/>
            </SplitArea>
            <SplitArea :minSize="250" :size="splitSizes[2]" style="background-color: #222222;">
              <Logs @open="openPicture"/>
            </SplitArea>
          </Split>
          <CreateProjectDialog @close="closeCreate" v-show="createOpen"/>
          <DeleteProjectDialog :project="deleteProject" @close="deleteOpen = false" v-show="deleteOpen"/>
          <PictureDialog @close="closePicture" v-show="pictureOpen"/>
          <RunConfigDialog @close="closeRunConfig" v-show="runConfigOpen"/>
        </template>
        <div v-else class="empty-state">
          <FontAwesomeIcon :icon="['fas', 'exclamation-triangle']" size="10x"/>
          <h2>Unable to connect to Shepherd!</h2>
        </div>
        <Messages/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { MUTATION_SET_CREATE_OPEN, MUTATION_SET_PICTURE_OPEN, MUTATION_SET_RUN_CONFIG_OPEN, Project, saveProject } from "./store";
import Editor from "./components/editor/Editor.vue";

interface Data {
  deleteOpen: boolean;
  deleteProject: any;
  splitSizes: number[];
}

export default Vue.extend({
  name: "app",
  data(): Data {
    return {
      deleteOpen: false,
      deleteProject: undefined,
      splitSizes: [20, 60, 20]
    };
  },
  mounted() {
    let sizes = localStorage.getItem("split-pane-sizes");
    if (sizes) {
      const parsed = sizes.split(",").map(Number);
      if (parsed.length === 3 && parsed.every(n => !isNaN(n))) {
        this.splitSizes = parsed;
      }
    }
  },
  computed: mapState(["loaded", "createOpen", "pictureOpen", "runConfigOpen"]),
  methods: {
    openCreate() {
      this.$store.commit(MUTATION_SET_CREATE_OPEN, true);
    },
    closeCreate() {
      this.$store.commit(MUTATION_SET_CREATE_OPEN, false);
    },
    openPicture() {
      this.$store.commit(MUTATION_SET_PICTURE_OPEN, true);
    },
    closePicture() {
      this.$store.commit(MUTATION_SET_PICTURE_OPEN, false);
    },
    closeRunConfig(){
      this.$store.commit(MUTATION_SET_RUN_CONFIG_OPEN, false);
    },
    splitPaneDragEnd(size) {
      this.splitSizes = this.$refs.splitPane.getSizes();
      localStorage.setItem("split-pane-sizes", this.splitSizes.toString());
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

.gutter{
  background-color: #222222 !important;
  background-image: none !important;
}
</style>