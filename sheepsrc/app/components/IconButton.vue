<template>
    <a class="icon-button" @click.stop="$emit('click', $event)" :title="tooltip">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "icon-button",
  props: {
    tooltip: {
      type: String
    }
  }
});
</script>

<style lang="scss">
.icon-button {
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin-right: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.1s ease-in-out background-color;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    background-color: transparent;
  }
}
</style>
