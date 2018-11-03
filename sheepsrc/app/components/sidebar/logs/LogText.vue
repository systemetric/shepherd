<template>
    <pre id="log-text"><code v-text="text"></code></pre>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "log-text",
  computed: {
    text() {
      return "Logs\n".repeat(100);
    }
  }
});
</script>

<style lang="scss">
#log-text {
  padding: 10px;
  white-space: pre-wrap;
}
</style>
