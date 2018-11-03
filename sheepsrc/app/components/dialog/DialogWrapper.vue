<template>
    <div class="dialog-container">
         <div class="dialog">
             <h1 class="title"><slot name="title"></slot></h1>
             <div class="content"><slot></slot></div>
             <div class="actions"><slot name="actions"></slot></div>
         </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "dialog-wrapper"
});
</script>

<style lang="scss">
.dialog-container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  .dialog {
    width: 300px;
    background-color: #1e1e1e;
    padding: 16px;

    .title {
      font-size: 16px;
      font-weight: bold;
    }

    .content {
      padding: 16px 0;

      input[type="text"] {
        width: 100%;
        color: #aaaaaa;
        outline: 0;
        border: none;
        background-color: #2b2b2b;
        border-radius: 2px;
        padding: 4px;
      }

      h2 {
        font-size: 15px;
      }

      p {
        font-size: 13px;
        color: #777777;
      }
    }

    .actions {
      text-align: right;

      button {
        background-color: transparent;
        outline: 0;
        border: none;
        color: #aaaaaa;
        padding: 4px;
        border-radius: 2px;
        transition: 0.1s ease-in-out all;
        user-select: none;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        &:active {
          background-color: rgba(255, 255, 255, 0.2);
        }

        &:disabled {
          pointer-events: none;
          cursor: not-allowed;
          background-color: transparent;
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
