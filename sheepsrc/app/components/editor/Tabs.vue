<template>
    <div id="tabs">
         <ProjectTab
                v-for="project in openProjects"
                :key="project.filename"
                :name="project.name"
                :filename="project.filename"
                :unsaved="project.content !== project.lastSaveContent"
                :tab="true"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "tabs",
  computed: mapState(["openProjects"])
});
</script>

<style>
#tabs {
  height: 35px;
  display: flex;
  flex-direction: row;
}
</style>
