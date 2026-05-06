<template>
    <div class="picture-dialog">
        <div class="dialog">
            <img :src="imageSrc" />
            <div class="actions">
                <button @click="$emit('close')">Close</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "picture-dialog",
  computed: {
    ...mapState(["imageSrc"]),
  }
});
</script>

<style lang="scss">
.picture-dialog {
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  .dialog {
    background-color: #1e1e1e;
    padding: 16px;

    max-width: 100vw;
    max-height: 100vh;

    display: flex;
    flex-direction: column;
    overflow: auto;

    img {
      max-width: 80vw;
      max-height: 80vh;
      width: auto;
      height: auto;
      display: block;
    }

    .actions {
        text-align: right;
        margin-top: 0.5em;
    }
  }
}
</style>
