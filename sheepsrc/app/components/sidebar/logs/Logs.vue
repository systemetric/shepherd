<template>
    <div id="logs">
        <ProjectTab name="Logs" :header="true"/>
        <Camera/>
        <div id="logs-wrapper">
            <LogText/>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../../variables";

#logs {
  height: 100%;

  #logs-wrapper {
    height: calc(100vh - #{($sidebar-width * 0.5625) + 35px});
    overflow-y: scroll;

    @include scrollbar();
  }
}
</style>
