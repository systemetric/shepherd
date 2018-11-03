<template>
    <div id="camera" ref="camera"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { makeFullUrl } from "../../../store";

interface Data {
  loadTimeout: number;
}

export default Vue.extend({
  name: "camera",
  data(): Data {
    return {
      loadTimeout: -1
    };
  },
  mounted() {
    this.loadImage();
  },
  methods: {
    loadImage() {
      const img = new Image();
      const url = makeFullUrl(`/static/image.jpg?nocache=${Date.now()}`);

      img.src = url;
      img.onload = () => {
        (this.$refs.camera as HTMLElement).style.backgroundImage = `url("${url}")`;
        this.loadTimeout = setTimeout(() => this.loadImage(), 1000);
      };
      img.onerror = () => {
        this.loadTimeout = setTimeout(() => this.loadImage(), 1000);
      }
    }
  }
});
</script>

<style lang="scss">
@import "../../../variables";

#camera {
  width: 100%;
  height: $sidebar-width * 0.5625;
  background-color: #2a2a2a;
}
</style>
