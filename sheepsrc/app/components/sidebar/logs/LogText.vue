<template>
    <pre id="log-text"><code v-text="text"></code></pre>
</template>

<script lang="ts">
import Vue from "vue";
import { makeFullUrl } from "../../../store";

interface Data {
  text: string;
}

export default Vue.extend({
  name: "log-text",
  data(): Data {
    return {
      text: ""
    };
  },
  mounted() {
    this.loadText();
  },
  methods: {
    loadText() {
        fetch(makeFullUrl("/run/output"))
          .then(res => res.text())
          .then(res => {
            this.text = res;
            setTimeout(() => this.loadText(), 1000);
          })
          .catch(e => {
            console.error(e);
            e.text = "Unable to load logs!";
            setTimeout(() => this.loadText(), 1000);
          });
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
