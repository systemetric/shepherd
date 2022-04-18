<template>
    <div id="logs">
        <ProjectTab name="Logs" :header="true">
            <IconButton v-if="currentProject && !currentProject.filename.endsWith('.json')" @click="run" :class="{disabled: running}" tooltip="Run (F5)">
                <FontAwesomeIcon :icon="running ? ['fas', 'sync-alt'] : ['fas', 'play']" :spin="running" class="run-button"/>
            </IconButton>
            <IconButton @click="stop" tooltip="Stop (CTRL-F5)">
                <FontAwesomeIcon :icon="['fas', 'stop']" class="stop-button"/>
            </IconButton>
        </ProjectTab>
        <Camera/>
        <div id="logs-wrapper">
            <LogText/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { ACTION_RUN_PROJECT, ACTION_STOP_PROJECT } from "../../../store";

export default Vue.extend({
  name: "logs",
  computed: mapState(["running", "currentProject"]),
  methods: {
    run(e: MouseEvent) {
      return this.$store.dispatch(ACTION_RUN_PROJECT, e.shiftKey);
    },
    stop() {
      return this.$store.dispatch(ACTION_STOP_PROJECT);
    }
  }
});
</script>

<style lang="scss">
@import "../../../variables";

#logs {
  height: 100%;

  #logs-wrapper {
    height: calc(100vh - #{($sidebar-width * 0.5625) + 35px});
    overflow-y: scroll;

    @include scrollbar();
  }

  .run-button path {
    fill: #5ba55b;
  }

  .stop-button path {
    fill: #a55b5b;
  }
}
</style>
