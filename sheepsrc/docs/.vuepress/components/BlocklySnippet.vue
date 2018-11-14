<template>
  <div class="blockly-snippet">
    <div :style="{backgroundImage: `url(/images/${img})`, width: width + 'px', height: height + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: "blockly-snippet",
  props: {
    img: {
      type: String,
      required: true
    },
    width: {
      required: true
    },
    height: {
      required: true
    }
  }
};
</script>

<style lang="sass">
.blockly-snippet
  background-color: #1e1e1e
  border-radius: 6px
  overflow-x: scroll
  div
    padding: 1.5rem
    background-position: center
    background-repeat: no-repeat
</style>