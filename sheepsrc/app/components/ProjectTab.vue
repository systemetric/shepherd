<template>
    <div :class="classes" @click="open">
        <i v-if="!header" :class="{[filename]: true}"></i>
        <span>{{name}}</span>
        <a v-if="!header && tab" class="close" :class="{unsaved}" @click.stop="close" title="Close"></a>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { ACTION_CLOSE_PROJECT, ACTION_OPEN_PROJECT, Project } from "../store";

export default Vue.extend({
  name: "project-tab",
  props: {
    tab: {
      type: Boolean,
      default: false
    },
    header: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    unsaved: {
      type: Boolean,
      default: false
    },
    filename: {
      type: String
    }
  },
  computed: {
    ...mapState(["currentProject"]),
    classes(): any {
      const currentProject: Project | undefined = (this as any).currentProject;
      const active = currentProject
        ? currentProject.filename === this.filename
        : false;

      return {
        header: this.header,
        file: !this.header,
        tab: this.tab,
        active: active
      };
    }
  },
  methods: {
    open() {
      if (!this.header)
        return this.$store.dispatch(ACTION_OPEN_PROJECT, this.filename);
    },
    close() {
      return this.$store.dispatch(ACTION_CLOSE_PROJECT, this.filename);
    }
  }
});
</script>

<style lang="scss">
@import "../variables";

.file,
.header {
  height: 35px;
  padding: 0 0 0 10px;
  font-size: 13px;

  display: flex;
  align-items: center;

  user-select: none;

  span {
    flex-grow: 1;
    padding-right: 10px;
  }
}

.file {
  cursor: pointer;

  .icon-button {
    opacity: 0;
  }

  i {
    width: 16px;
    height: 16px;
    margin-right: 10px;

    background-size: contain;
    background-repeat: no-repeat;

    &[class$=".py"] {
      background-image: url("../assets/python.svg");
    }

    &[class$=".xml"] {
      background-image: url("../assets/blocks.svg");
    }

    &[class$=".json"] {
      background-image: url("../assets/block_definitions.svg");
    }
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-lines: 1;
  }

  &:hover {
    color: #bbbbbb;

    .icon-button {
      opacity: 1;
    }
  }

  &.tab {
    width: 120px;
    min-width: fit-content;

    .close {
      opacity: 0;

      &.unsaved {
        opacity: 1;
        background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22isolation%3Aisolate%22%20width%3D%2216%22%20height%3D%2216%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20d%3D%22M0%200h16v16H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg%20clip-path%3D%22url%28%23a%29%22%20transform%3D%22matrix%28.7695%200%200%20.78305%201.844%201.736%29%22%3E%3Ccircle%20r%3D%221%22%20transform%3D%22matrix%285%200%200%205%208%208%29%22%20vector-effect%3D%22non-scaling-stroke%22%20fill%3D%22%23ebebeb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      }
    }

    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: #777777;

      .close {
        background-image: url($close);
      }
    }

    &.active {
      color: #dddddd;
      border-bottom-color: #dddddd;
    }

    &:hover,
    &.active {
      .close {
        opacity: 1;
      }
    }
  }

  &:not(.tab):hover {
    background-color: #333333;
  }
}
</style>
