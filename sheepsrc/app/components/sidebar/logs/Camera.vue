<template>
  <div class="camera">
    <img id="photo" :src="url"/>
  </div>
</template>


<script lang="js">
// TODO socketio and typescript don't seem to like each other
// so this is in plain old `js`
import Vue from "vue";
import { makeFullUrl } from "../../../store";
import VueSocketIO from 'vue-socket.io'

export default Vue.extend({

  name: 'camera',
  data () {
      return {
        url: makeFullUrl("/static/image.jpg")
    }
  },

  sockets: {
    connect: function () {
        console.log("`socket.io` connected to host");
    },
    camera_frame: function (data) {
        if (data.image == true) {
          // let arrayBufferView = new Uint8Array(data.buffer);
          // let blob = new Blob([arrayBufferView], {type: "image/jpeg"});
          // let reader = new FileReader();
          // reader.onload = function () {
          //   this.url = reader.result;
          // }.bind(this);
          // reader.readAsDataURL(blob);

          let arrayBuffer = new Uint8Array(data.buffer)
          var str = String.fromCharCode.apply(null, arrayBuffer);
          this.url = 'data:image/jpg;base64,' + btoa(str);    
      }
    }
  }
});

</script>

<style lang="scss">
@import "../../../variables";

//noinspection CssOptimizeSimilarProperties
#camera {
  width: 100%;
  height: $sidebar-width * 0.5625;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
