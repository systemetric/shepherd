<template>
    <div id="blockly-container" v-show="visible">
        <div id="blockly-area" ref="blocklyArea" >
            <div id="blockly" ref="blockly"></div>
        </div>
        <div id="blockly-output"><Prism :code="code" language="python"></Prism></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import {
  ACTION_SAVE_PROJECT,
  MUTATION_UPDATE_PROJECT,
  Project
} from "../../../store";
const Blockly = require("node-blockly/browser");
import loadBlocks from "./blocks";
import loadCustomBlocks from "./block-loader";
import toolbox from "./toolbox.xml";
import EventBus from "@/bus";

interface Data {
  workspace?: any;
  loaded: boolean;
  saveTimeout?: number;
  code: string;
}

export default Vue.extend({
  name: "blockly",
  data(): Data {
    return {
      workspace: undefined,
      loaded: false,
      saveTimeout: undefined,
      code: ""
    };
  },
  computed: {
    ...mapState(["currentProject", "blocksConfiguration"]),
    visible(): boolean {
      const currentProject = (this as any).currentProject as
        | Project
        | undefined;
      return (
        (currentProject && currentProject.filename.endsWith(".xml")) ||
        !this.loaded
      );
    }
  },
  mounted() {
    loadBlocks(Blockly);

    /*const robotToolbox = loadCustomBlocks(
      Blockly,
      (this as any).blocksConfiguration.blocks
    );*/

    this.workspace = Blockly.inject(this.$refs.blockly, {
      toolbox: toolbox,
      trashcan: false
    });
    window.addEventListener("resize", this.onResize, false);
    this.onResize();

    EventBus.$on("resize", this.onResize);

    // noinspection TypeScriptUnresolvedFunction
    Blockly.svgResize(this.workspace);

    // noinspection TypeScriptUnresolvedFunction
    this.workspace.addChangeListener(() => {
      // noinspection TypeScriptUnresolvedFunction
      this.code = `from robot import *
import time

R = Robot()

${Blockly.Python.workspaceToCode(this.workspace)}
`;

      if (this.saveTimeout) clearTimeout(this.saveTimeout);
      if (this.workspace) {
        this.$store.commit(MUTATION_UPDATE_PROJECT, {
          content: this.toXML(),
          blocklyGenerated: this.code
        });
      }
      this.saveTimeout = setTimeout(() => {
        this.saveTimeout = undefined;
        return this.$store.dispatch(ACTION_SAVE_PROJECT);
      }, 3000);
    });

    this.loaded = true;
  },
  methods: {
    onResize() {
      const area = this.$refs.blocklyArea as any;
      const blocklyRef = this.$refs.blockly as HTMLElement;

      blocklyRef.style.width = `${area.offsetWidth}px`;
      blocklyRef.style.height = `${area.offsetHeight}px`;
      // noinspection TypeScriptUnresolvedFunction
      Blockly.svgResize(this.workspace);
    },
    toXML(): string {
      // noinspection TypeScriptUnresolvedVariable, TypeScriptUnresolvedFunction
      const xml = Blockly.Xml.workspaceToDom(this.workspace);
      // noinspection TypeScriptUnresolvedVariable, TypeScriptUnresolvedFunction
      return Blockly.Xml.domToPrettyText(xml);
    },
    fromXML(text: string) {
      // noinspection TypeScriptUnresolvedVariable, TypeScriptUnresolvedFunction
      const xml = Blockly.Xml.textToDom(text);
      this.workspace.clear();
      // noinspection TypeScriptUnresolvedVariable, TypeScriptUnresolvedFunction
      return Blockly.Xml.domToWorkspace(xml, this.workspace);
    }
  },
  watch: {
    ["$store.state.currentProject"](newValue?: Project) {
      if (newValue && newValue.filename.endsWith(".xml") && this.workspace) {
        const load = () => {
          this.fromXML(newValue.content);
          // noinspection TypeScriptUnresolvedFunction
          setTimeout(() => Blockly.svgResize(this.workspace), 500);
        };

        load();
        setTimeout(load, 25);
      }
    },
    visible(newValue) {
      if (newValue) {
        setTimeout(() => {
          if (this.workspace) {
            this.onResize();
          }
        }, 25);
      }
    }
  }
});
</script>

<style lang="scss">
@import "../../../variables";

#blockly-container {
  display: flex;
  flex-direction: row;
}

#blockly-area {
  flex-grow: 1;
}

#blockly-output {
  width: $sidebar-width;
  height: 100%;
  background-color: #1e1e1e;
}

#blockly {
  position: absolute;

  .blocklySvg {
    background-color: #1e1e1e;
  }

  .blocklyMainBackground {
    stroke-width: 0;
  }

  .blocklyToolboxDiv {
    background-color: #222222;
  }

  .blocklyFlyoutBackground {
    fill: #222222;
    fill-opacity: 1;
  }

  .blocklyTreeRow:not(.blocklyTreeSelected):hover {
    background-color: #333333;
  }

  .blocklyTreeSeparator {
    border-bottom-color: #333333;
    border-left-color: #333333 !important;
  }

  .blocklyScrollbarHandle {
    fill: #333333;
  }
}
</style>
