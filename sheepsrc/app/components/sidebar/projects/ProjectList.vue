<template>
    <div>
        <ProjectTab key="header" name="Projects" :header="true">
            <IconButton @click="$emit('create')">
                <FontAwesomeIcon :icon="['far', 'plus']"/>
            </IconButton>
        </ProjectTab>
        <ProjectTab
                v-for="project in projects"
                :key="project.filename"
                :name="project.name"
                :filename="project.filename">
            <IconButton @click="$emit('delete', project)">
                <FontAwesomeIcon :icon="['far', 'trash']"/>
            </IconButton>
        </ProjectTab>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "project-list",
  computed: mapState(["projects"])
});
</script>

<style>
</style>
