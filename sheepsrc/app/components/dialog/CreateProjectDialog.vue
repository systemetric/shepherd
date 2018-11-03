<template>
    <DialogWrapper>
        <template slot="title">Create Project</template>
        <div class="create-dialog">
            <div class="row">
                <input type="text" v-model="name" placeholder="Name">
            </div>
            <div class="row">
                <!--suppress HtmlFormInputWithoutLabel -->
                <input type="radio" v-model="type" id="python" value="python" checked>
                <i class="python" @click="type = 'python'"></i>
                <div class="info" @click="type = 'python'">
                    <h2>Python</h2>
                    <p>Create a new Python project allowing you to implement complex behaviour.</p>
                </div>
            </div>
            <div class="row">
                <!--suppress HtmlFormInputWithoutLabel -->
                <input type="radio" v-model="type" value="blockly">
                <i class="blockly" @click="type = 'blockly'"></i>
                <div class="info" @click="type = 'blockly'">
                    <h2>Blockly</h2>
                    <p>Create a new Blockly project allowing you to use a simple drag and drop interface.</p>
                </div>
            </div>
        </div>
        <template slot="actions">
            <button @click="$emit('close')">Cancel</button>
            <button @click="create" :disabled="name === ''">Create</button>
        </template>
    </DialogWrapper>
</template>

<script lang="ts">
import Vue from "vue";

interface Data {
  name: string;
  type: string;
}

export default Vue.extend({
  name: "create-project-dialog",
  data(): Data {
    return {
      name: "",
      type: "python"
    };
  },
  methods: {
    create() {
      alert(`Creating ${this.type} project ${this.name}`);
      this.$emit("close");
    }
  }
});
</script>

<style lang="scss">
.create-dialog {
  .row {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    i {
      margin: 0 12px;
      padding: 8px;
      width: 16px;
      height: 16px;

      background-size: contain;
      background-repeat: no-repeat;

      &.python {
        background-image: url("../../assets/python.svg");
      }

      &.blockly {
        background-image: url("../../assets/blocks.svg");
      }
    }

    .info {
      flex-grow: 1;
    }
  }
}
</style>
