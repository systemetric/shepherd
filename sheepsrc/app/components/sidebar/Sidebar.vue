<template>
    <div class="sidebar">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import "../../variables";

.sidebar {
  width: $sidebar-width;
  background-color: #222222;

  @include scrollbar();
}
</style>
