<template>
    <div id="logs">
        <ProjectTab name="Logs" :header="true">
            <IconButton v-if="currentProject" @click="run" :class="{disabled: running}">
                <FontAwesomeIcon :icon="running ? ['far', 'sync-alt'] : ['fas', 'play']" :spin="running"/>
            </IconButton>
            <IconButton @click="stop">
                <FontAwesomeIcon :icon="['fas', 'stop']"/>
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
    run() {
      if (!(this as any).running) {
        return this.$store.dispatch(ACTION_RUN_PROJECT);
      }
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
}
</style>
