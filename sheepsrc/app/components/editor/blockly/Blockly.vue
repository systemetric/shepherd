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
import loadBlocks from "./block-loader";

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
    const robotToolbox = loadBlocks(
      Blockly,
      (this as any).blocksConfiguration.blocks
    );

    this.workspace = Blockly.inject(this.$refs.blockly, {
      toolbox: `<xml id="toolbox">
  <category name="Text">
    <block type="text"></block>
    <block type="text_print"></block>
  </category>
  <category name="Logic">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="logic_operation"></block>
    <block type="logic_negate"></block>
    <block type="logic_boolean"></block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>
  </category>
  <category name="Loops">
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <block type="math_number">
          <field name="NUM">10</field>
        </block>
      </value>
    </block>
    <block type="controls_whileUntil"></block>
    <block type="controls_for">
      <field name="VAR">i</field>
      <value name="FROM">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
      <value name="TO">
        <block type="math_number">
          <field name="NUM">10</field>
        </block>
      </value>
      <value name="BY">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
    </block>
    <block type="controls_forEach"></block>
    <block type="controls_flow_statements"></block>
  </category>
  <category name="Math">
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="math_single"></block>
    <block type="math_trig"></block>
    <block type="math_constant"></block>
    <block type="math_number_property"></block>
    <block type="math_round"></block>
    <block type="math_on_list"></block>
    <block type="math_modulo"></block>
    <block type="math_constrain">
      <value name="LOW">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
      <value name="HIGH">
        <block type="math_number">
          <field name="NUM">100</field>
        </block>
      </value>
    </block>
    <block type="math_random_int">
      <value name="FROM">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
      <value name="TO">
        <block type="math_number">
          <field name="NUM">100</field>
        </block>
      </value>
    </block>
    <block type="math_random_float"></block>
  </category>
  <category name="Lists">
    <block type="lists_create_empty"></block>
    <block type="lists_create_with"></block>
    <block type="lists_repeat">
      <value name="NUM">
        <block type="math_number">
          <field name="NUM">5</field>
        </block>
      </value>
    </block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="lists_indexOf"></block>
    <block type="lists_getIndex"></block>
    <block type="lists_setIndex"></block>
  </category>
  <category name="Variables" custom="VARIABLE"></category>
  <sep></sep>
  <category name="Robot">
    ${robotToolbox}
  </category>
</xml>`,
      trashcan: false
    });
    window.addEventListener("resize", this.onResize, false);
    this.onResize();
    // noinspection TypeScriptUnresolvedFunction
    Blockly.svgResize(this.workspace);

    // noinspection TypeScriptUnresolvedFunction
    this.workspace.addChangeListener(() => {
      // noinspection TypeScriptUnresolvedFunction
      this.code = Blockly.Python.workspaceToCode(this.workspace);

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
  }

  .blocklyScrollbarHandle {
    fill: #333333;
  }
}
</style>
