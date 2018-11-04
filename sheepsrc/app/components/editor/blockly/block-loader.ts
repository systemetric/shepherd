const _ = {
  isArray: require("lodash/isArray"),
  isPlainObject: require("lodash/isPlainObject"),
  template: require("lodash/template")
};

interface BlockParameter {
  id: string;
  type: "number" | "boolean" | "angle" | "text";
  default: any;
}

export interface BlockDefinition {
  id: string;
  definition: ((string | BlockParameter)[]) | string;
  template: string;
}

export interface BlocksConfiguration {
  requires: string[];
  header: string;
  footer: string;
  blocks: BlockDefinition[];
}

function getField(Blockly: any, parameter: BlockParameter) {
  switch (parameter.type) {
    case "number":
      return new Blockly.FieldNumber(parameter.default);
    case "boolean":
      return new Blockly.FieldCheckbox(parameter.default);
    case "angle":
      return new Blockly.FieldAngle(parameter.default);
    case "text":
      return new Blockly.FieldTextInput(parameter.default);
    default:
      console.error(`Unknown field type: ${parameter.type}`);
      return new Blockly.FieldTextInput(parameter.default);
  }
}

export default function loadBlocks(
  Blockly: any,
  blocks: BlockDefinition[]
): string {
  let toolbox = "";

  blocks.forEach(block => {
    toolbox += `<block type="${block.id}"></block>\n`;

    Blockly.Blocks[block.id] = {
      init: function() {
        let dummy = this.appendDummyInput();

        function addText(text: string) {
          dummy.appendField(text);
        }

        if (_.isArray(block.definition)) {
          for (let part of block.definition) {
            if (_.isPlainObject(part)) {
              const parameter = part as BlockParameter;
              dummy.appendField(getField(Blockly, parameter), parameter.id);
            } else {
              addText(part as string);
            }
          }
        } else {
          addText(block.definition as string);
        }

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };

    const fields: string[] = [];
    if (_.isArray(block.definition)) {
      for (let part of block.definition) {
        if (_.isPlainObject(part)) {
          const parameter = part as BlockParameter;
          fields.push(parameter.id);
        }
      }
    }

    const compiled = _.template(block.template);

    Blockly.Python[block.id] = function(item: any) {
      const input: { [index: string]: any } = {};
      for (let field of fields) {
        input[field] = item.getFieldValue(field);
      }
      return compiled(input) + "\n";
    };
  });

  return toolbox;
}
