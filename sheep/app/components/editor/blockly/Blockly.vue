<template>
    <div ref="blocklyContainer" id="blockly-container" v-show="visible" onr>
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
import ResizeObserver from 'resize-observer-polyfill';

interface Data {
  workspace?: any;
  loaded: boolean;
  saveTimeout?: number;
  code: string;
  ro?: ResizeObserver;
}

export default Vue.extend({
  name: "blockly",
  data(): Data {
    return {
      workspace: undefined,
      loaded: false,
      saveTimeout: undefined,
      code: "",
      ro: null as any,
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

    this.ro = new ResizeObserver(this.onResize);
    this.ro.observe(this.$refs.blocklyContainer);

    // noinspection TypeScriptUnresolvedFunction
    Blockly.svgResize(this.workspace);

    // noinspection TypeScriptUnresolvedFunction
    this.workspace.addChangeListener(() => {
      // noinspection TypeScriptUnresolvedFunction
      let blocklyGeneratedCode:string = Blockly.Python.workspaceToCode(this.workspace);
      // I apologise in advance - this is gonna be hacky...
      let definesAtStart:string[] = []
      let pwmUses = blocklyGeneratedCode.match(/R\.servos\[[0-3]\]\ \=\ /g) || [];
      for(let i = 0; i < pwmUses.length; i++){
        let pwmIndex = pwmUses[i][9];
        let pythonLine = `R.servos[${pwmIndex}].mode = PWM_SERVO`;
        if(!definesAtStart.includes(pythonLine)){
          definesAtStart.push(pythonLine);
        }
      }
      this.code = `from robot import *
import time

R = Robot()
${definesAtStart.join("\n")}

${blocklyGeneratedCode}
while True:
  time.sleep(1)
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
  beforeDestroy() {
    this.ro.unobserve(this.$refs.blocklyContainer);
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
