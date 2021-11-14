import * as monaco from "monaco-editor";
// @ts-ignore
import schema from "./schema.json";

monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
  validate: true,
  allowComments: false,
  schemas: [
    {
      uri: "http://robot.go/blocks-schema.json",
      fileMatch: ["*.py"],
      schema: schema
    }
  ]
});
