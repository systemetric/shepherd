<template>
    <div class="messages">
        <transition-group name="message">
            <div class="message" v-for="message in messages" :key="message.id">
                <FontAwesomeIcon :icon="['fas', message.icon]" fixed-width></FontAwesomeIcon>
                <p>{{message.message}}</p>
                <a title="Dismiss" class="close" @click="dismiss(message.id)"></a>
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { MUTATION_DISMISS_MESSAGE } from "../store";

export default Vue.extend({
  name: "messages",
  computed: mapState(["messages"]),
  methods: {
    dismiss(id: string | number) {
      this.$store.commit(MUTATION_DISMISS_MESSAGE, id);
    }
  }
});
</script>

<style lang="scss">
.messages {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 350px;
  z-index: 2500;
}

.message {
  padding: 10px;
  &:not(:first-child) {
    margin-top: 10px;
  }

  background-color: #2f2f2f;

  display: flex;
  flex-direction: row;

  a,
  svg {
    margin-top: 3px;
  }

  p {
    width: 350px - 20px - 16px - 20px;
    padding: 0 10px;
  }
}

.message-enter-active,
.message-leave-active {
  transition: all 0.5s;
}
.message-enter,
.message-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
