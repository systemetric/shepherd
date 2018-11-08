<template>
    <div id="container">
        <Tabs/>
        <div id="editor-container">
            <Monaco/>
            <Blockly/>
            <!--<BlockDefinitions/>-->
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "editor"
});
</script>

<style lang="scss">
@import "../../variables";

#container {
  flex-grow: 1;

  #editor-container > * {
    position: absolute;
    top: 35px;
    left: $sidebar-width;
    right: $sidebar-width;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
