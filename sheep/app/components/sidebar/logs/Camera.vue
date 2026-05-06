<template>
  <div id="camera-preview">
    <div id="camera-image">
      <img v-bind:src="imageSrc">
      <div id="expand-image">
        <a class="inverted-icon-button" title="Expand Image" @click="$emit('open')">
          <FontAwesomeIcon :icon="['fas', 'expand']" class="expand-image-button"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "camera-preview",
  computed: mapState(["imageSrc"])
});

</script>

<style lang="scss">
@import "../../../variables";

//noinspection CssOptimizeSimilarProperties
#camera-preview {
  width: 100%;
  height: min-content;
  max-height: 40%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  #camera-image {
    height: 100%;
    width: fit-content;
    display: block;
    margin: 0 auto;
    position: relative;

    img {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }
}

#expand-image {
  position: absolute;
  bottom: calc(3px + 0.2em);
  left: 0.2em;
  opacity: 0;
  pointer-events: none;
}

#camera-preview:hover #expand-image {
  opacity: 0.75;
  pointer-events: all;
}

#expand-image-button path {
  fill: #fff;
}

.inverted-icon-button {
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin-right: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #222;
  transition: 0.1s ease-in-out background-color;

  &:hover {
    background-color: #333;
  }

  &:active {
    background-color: #444;
  }

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
