<template>
    <div class="sidebar" :class="{hidden: !visible, right: right}">
        <slot></slot>
        <div class="hide-button">
            <IconButton
                    @click="toggle"
                    tooltip="Toggle">
                <FontAwesomeIcon :icon="['far', 'arrow-alt-from-right']" :rotation="iconRotation"/>
            </IconButton>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import EventBus from "@/bus";
import { MUTATION_SET_SIDEBAR_HIDDEN } from "@/store";

export default Vue.extend({
  name: "sidebar",
  props: {
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true
    }
  },
  computed: {
    iconRotation() {
      if((this as any).right) {
        return (this as any).visible ? 180 : 0;
      } else {
        return (this as any).visible ? 0 : 180;
      }
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
      this.$store.commit(MUTATION_SET_SIDEBAR_HIDDEN, {
        right: (this as any).right,
        hidden: !this.visible
      });
      setTimeout(() => {
        EventBus.$emit("resize");
      }, 50);
    }
  }
});
</script>

<style lang="scss">
@import "../../variables";

.sidebar {
  width: $sidebar-width;
  background-color: #222222;
  position: relative;

  @include scrollbar();

  &.hidden {
    width: 0;

    > div:first-child {
      overflow-x: hidden;
      display: none;
    }
  }

  .hide-button {
    position: absolute;
    bottom: 5px;
    z-index: 1000;
  }

  &:not(.right) {
    .hide-button {
      right: -35px;
    }
  }

  &.right {
    .hide-button {
      left: -30px;
    }
  }
}
</style>
