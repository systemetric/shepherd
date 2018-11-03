<template>
    <div :class="classes" @click="open">
        <i v-if="!header" :class="{[filename]: true}"></i>
        <span>{{name}}</span>
        <a v-if="!header && tab" class="close" @click.stop="close"></a>
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

    &[class$="py"] {
      background-image: url("../assets/python.svg");
    }

    &[class$="xml"] {
      background-image: url("../assets/blocks.svg");
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
      width: 16px;
      height: 16px;
      opacity: 0;

      background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.428 8L12 10.573 10.572 12 8 9.428 5.428 12 4 10.573 6.572 8 4 5.428 5.427 4 8 6.572 10.573 4 12 5.428 9.428 8z' fill='%23E8E8E8'/%3E%3C/svg%3E")
        50% no-repeat;
    }

    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: #777777;
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
