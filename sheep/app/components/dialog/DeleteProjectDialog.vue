<template>
    <DialogWrapper>
        <template slot="title">Delete Project</template>
        <div class="delete-dialog">
            <p>Are you sure you want to delete <b>{{project && project.name}}</b>?</p>
        </div>
        <template slot="actions">
            <button @click="$emit('close')">Cancel</button>
            <button @click="doDelete">Delete</button>
        </template>
    </DialogWrapper>
</template>

<script lang="ts">
import Vue from "vue";
import { ACTION_DELETE_PROJECT } from "../../store";

export default Vue.extend({
  name: "delete-project-dialog",
  props: {
    project: {
      type: Object
    }
  },
  methods: {
    doDelete() {
      // noinspection JSIgnoredPromiseFromCall
      this.$store.dispatch(ACTION_DELETE_PROJECT, this.project.filename);
      this.$emit("close");
    }
  }
});
</script>
