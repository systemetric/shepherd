<template>
    <div id="monaco" ref="monaco" v-show="visible"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import * as monaco from "monaco-editor";

import registerPythonLanguage from "./python/language";
import "./json/language";
import {
  ACTION_SAVE_PROJECT,
  MUTATION_UPDATE_PROJECT,
  Project
} from "../../../store";

function init(
  monacoContainer: any,
  initialValue: string,
  mainPath: string
): monaco.editor.IStandaloneCodeEditor {
  const monacoEditor = monaco.editor.create(monacoContainer, {
    model: monaco.editor.createModel(
      initialValue,
      "python",
      monaco.Uri.parse(mainPath)
    ),
    language: "javascript",
    theme: "vs-dark"
  });

  window.addEventListener("resize", function() {
    monacoEditor.layout();
  });

  registerPythonLanguage(monacoEditor);

  return monacoEditor;
}

interface Data {
  editor?: monaco.editor.IStandaloneCodeEditor;
  saveTimeout?: number;
}

export default Vue.extend({
  name: "monaco",
  data(): Data {
    return {
      editor: undefined,
      saveTimeout: undefined
    };
  },
  computed: {
    ...mapState(["currentProject"]),
    visible(): boolean {
      const currentProject = (this as any).currentProject as
        | Project
        | undefined;
      return (
        (currentProject &&
          (currentProject.filename.endsWith(".py") ||
            currentProject.filename.endsWith(".json"))) ||
        !this.editor
      );
    }
  },
  mounted() {
    this.editor = init(this.$refs.monaco, "", this.$store.state.main);
    this.editor.onDidChangeModelContent(() => {
      if (this.saveTimeout) clearTimeout(this.saveTimeout);
      if (this.editor) {
        this.$store.commit(MUTATION_UPDATE_PROJECT, {
          content: this.editor.getModel().getValue()
        });
      }
      this.saveTimeout = setTimeout(() => {
        this.saveTimeout = undefined;
        return this.$store.dispatch(ACTION_SAVE_PROJECT);
      }, 3000);
    });
  },
  watch: {
    ["$store.state.currentProject"](newValue?: Project) {
      if (newValue) {
        const extension = newValue.filename.substring(
          newValue.filename.lastIndexOf(".")
        );

        if ((extension === ".py" || extension === ".json") && this.editor) {
          this.editor.getModel().setValue(newValue.content);
          const language = extension == ".py" ? "python" : "json";
          monaco.editor.setModelLanguage(this.editor.getModel(), language);
        }
      }
    },
    visible(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.editor && this.editor.layout();
        }, 25);
      }
    }
  }
});
</script>

<style>
</style>
