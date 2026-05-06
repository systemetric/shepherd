<template>
    <div id="logs">
        <ProjectTab name="Logs" :header="true">
            <IconButton v-if="currentProject && !currentProject.filename.endsWith('.json')" @click="run" :class="{disabled: running}" tooltip="Run (F5)">
                <FontAwesomeIcon :icon="running ? ['fas', 'sync-alt'] : ['fas', 'play']" :spin="running" class="run-button"/>
            </IconButton>
            <IconButton @click="stop" tooltip="Stop (CTRL-F5)">
                <FontAwesomeIcon :icon="['fas', 'stop']" class="stop-button"/>
            </IconButton>
            <IconButton @click="openRunConfig" tooltip="Run Options">
                <FontAwesomeIcon :icon="['fas', 'cog']" class="run-config-button"/>
            </IconButton>
        </ProjectTab>
        <div id="wrapper">
          <Camera @open="$emit('open')"/>
          <div id="logs-wrapper" ref="logsWrapper">
              <LogText/>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { ACTION_RUN_PROJECT, ACTION_STOP_PROJECT, MUTATION_SET_RUN_CONFIG_OPEN } from "../../../store";
import IconButton from "@/components/IconButton.vue";

export default Vue.extend({
  name: "logs",
  computed: mapState(["running", "currentProject", "textLog"]),
  watch: {
    textLog() {
      this.$nextTick(() => {
        const wrapper = this.$refs.logsWrapper as HTMLElement;
        if (wrapper) {
          wrapper.scrollTop = wrapper.scrollHeight - wrapper.clientHeight;
        }
      });
    }
  },
  methods: {
    run(e: MouseEvent) {
      return this.$store.dispatch(ACTION_RUN_PROJECT, e.shiftKey);
    },
    stop() {
      return this.$store.dispatch(ACTION_STOP_PROJECT);
    },
    openRunConfig() {
      this.$store.commit(MUTATION_SET_RUN_CONFIG_OPEN, true);
    }
  }
});
</script>

<style lang="scss">
@import "../../../variables";

#logs {
  height: 100%;

  #logs-wrapper {
    overflow-y: scroll;

    @include scrollbar();
  }

  #wrapper {
    display: flex;
    flex-direction: column;
    height: calc(100% - 35px);
  }

  .run-button path {
    fill: #5ba55b;
  }

  .stop-button path {
    fill: #a55b5b;
  }

  .run-config-button {
    fill: #fff;
  }
}
</style>
