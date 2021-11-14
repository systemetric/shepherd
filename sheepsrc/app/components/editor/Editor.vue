<template>
    <div id="container">
        <Tabs/>
        <div id="editor-container" :class="sidebarsHidden">
            <Monaco/>
            <Blockly/>
            <!--<BlockDefinitions/>-->
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "editor",
  computed: {
    ...mapState(["sidebarsHidden"])
  }
});
</script>

<style lang="scss">
@import "../../variables";

#container {
  flex-grow: 1;

  #editor-container {
      > * {
          position: absolute;
          top: 35px;
          left: $sidebar-width;
          right: $sidebar-width;
          bottom: 0;
          overflow: hidden;
      }

      &.leftHidden > * {
          left: 0;
      }

      &.rightHidden > * {
          right: 0;
      }
  }
}
</style>
