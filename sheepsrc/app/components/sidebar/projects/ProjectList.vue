<template>
    <div>
        <ProjectTab key="header" name="Projects" :header="true">
            <IconButton v-if="saving" class="disabled" tooltip="Saving...">
                <FontAwesomeIcon :icon="['fas', 'sync-alt']" spin/>
            </IconButton>
            <input type="file" ref="file" multiple accept=".py,.xml" style="display: none" @change="filesChanged">
            <IconButton @click="selectFiles" tooltip="Upload (CTRL-U)">
                <FontAwesomeIcon :icon="['fas', 'upload']"/>
            </IconButton>
            <IconButton @click="$emit('create')" tooltip="New Project (CTRL-ALT-N)">
                <FontAwesomeIcon :icon="['fas', 'plus']"/>
            </IconButton>
        </ProjectTab>
        <ProjectTab
                v-for="project in projects"
                :key="project.filename"
                :name="project.name"
                :filename="project.filename">
             <IconButton
                    @click="$emit('download', project)"
                    tooltip="Download">
                <FontAwesomeIcon :icon="['fas', 'download']"/>
            </IconButton>
            <IconButton
                    v-if="!project.filename.endsWith('.json')"
                    @click="$emit('delete', project)"
                    tooltip="Delete">
                <FontAwesomeIcon :icon="['fas', 'trash']"/>
            </IconButton>
        </ProjectTab>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { ACTION_CREATE_PROJECT } from "../../../store";

export default Vue.extend({
  name: "project-list",
  computed: mapState(["projects", "saving", "uploadFileKeyPressId"]),
  methods: {
    selectFiles() {
      (this.$refs as any).file.click();
    },
    filesChanged() {
      const files = (this.$refs as any).file.files as FileList | null;
      if (!files) return;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();
        reader.onloadend = () => {
          // noinspection JSIgnoredPromiseFromCall
          this.$store.dispatch(ACTION_CREATE_PROJECT, {
            filename: file.name,
            loadContent: reader.result
          });

          console.log(file.name);
          console.log(reader.result);
        };
        reader.readAsText(file);
      }

      (this.$refs as any).file.value = null;
    }
  },
  watch: {
    uploadFileKeyPressId() {
      this.selectFiles();
    }
  }
});
</script>

<style>
</style>
