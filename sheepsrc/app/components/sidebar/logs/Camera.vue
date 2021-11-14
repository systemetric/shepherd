<template>
  <div id="camera-preview">
      <img :src="url + '?rnd=' + cacheKey">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { makeFullUrl } from "../../../store";


export default {

  name: 'Images',
  data () {
    return {
      url: makeFullUrl("/static/image.jpg"),
      cacheKey: +new Date(),
    }
  },

  mounted: function () {
    this.interval = window.setInterval(() => {
      try {
        this.cacheKey = +new Date();
      } catch(e) {
        console.log(e);
      }
    }, 1000)
  },

  destroyed() {
    clearInterval(this.interval);
  },

}

</script>

<style lang="scss">
@import "../../../variables";

//noinspection CssOptimizeSimilarProperties
#camera-preview {
  width: 100%;
  height: $sidebar-width * 0.5625;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
