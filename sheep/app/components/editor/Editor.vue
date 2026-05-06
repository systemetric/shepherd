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
    display: flex;
    flex-direction: column;
    height: 100%;

    #editor-container {
        position: relative;
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        display: flex;

        > * {
            flex: 1 1 auto;
            width: 100%;
            height: 100%;
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
        }
    }
}
</style>
