<template>
    <pre id="log-text"><code v-text="textLog"></code></pre>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "log-text",
  computed: mapState(["textLog"])
});
</script>

<style lang="scss">
#log-text {
  padding: 10px;
  white-space: pre-wrap;
}
</style>
