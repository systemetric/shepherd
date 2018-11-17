function loadMovementBlocks(Blockly) {
  Blockly.Blocks["motors_set_power"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Set motor")
        .appendField(new Blockly.FieldNumber(1, 1, 2, 1), "MOTOR_INDEX");
      this.appendValueInput("MOTOR_PERCENT")
        .setCheck("Number")
        .appendField("to");
      this.appendDummyInput().appendField("% power");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["motors_move_for_time"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Move ")
        .appendField(
          new Blockly.FieldDropdown([
            ["forwards", "FORWARDS"],
            ["backwards", "BACKWARDS"]
          ]),
          "MOTORS_DIRECTION"
        );
      this.appendValueInput("MOTORS_TIME")
        .setCheck("Number")
        .appendField("for");
      this.appendValueInput("MOTORS_POWER_PERCENT")
        .setCheck("Number")
        .appendField("second(s) at");
      this.appendDummyInput().appendField("% power");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["motors_turn_for_time"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Turn")
        .appendField(
          new Blockly.FieldDropdown([
            ["clockwise", "CLOCKWISE"],
            ["anticlockwise", "ANTICLOCKWISE"]
          ]),
          "MOTORS_DIRECTION"
        );
      this.appendValueInput("MOTORS_TIME")
        .setCheck("Number")
        .appendField("for");
      this.appendValueInput("MOTORS_POWER")
        .setCheck("Number")
        .appendField("second(s) at");
      this.appendDummyInput().appendField("% power");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["motors_reset"] = {
    init: function() {
      this.appendDummyInput().appendField("Stop both motors");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["motors_safety_override"] = {
    init: function() {
      this.appendDummyInput().appendField("Enable motor safety override");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["servo_set_position"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Set servo")
        .appendField(new Blockly.FieldNumber(1, 1, 4, 1), "SERVO_INDEX");
      this.appendValueInput("SERVO_POSITION")
        .setCheck("Number")
        .appendField("to the");
      this.appendDummyInput().appendField("% position");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Python["motors_set_power"] = function(block) {
    const number_motor_index = block.getFieldValue("MOTOR_INDEX");
    const value_motor_percent = Blockly.Python.valueToCode(
      block,
      "MOTOR_PERCENT",
      Blockly.Python.ORDER_ATOMIC
    );
    return `R.motors[${number_motor_index}] = ${value_motor_percent}\n`;
  };

  Blockly.Python["motors_move_for_time"] = function(block) {
    const dropdown_motors_direction = block.getFieldValue("MOTORS_DIRECTION");
    const value_motors_time = Blockly.Python.valueToCode(
      block,
      "MOTORS_TIME",
      Blockly.Python.ORDER_ATOMIC
    );
    const value_motors_power_percent = Blockly.Python.valueToCode(
      block,
      "MOTORS_POWER_PERCENT",
      Blockly.Python.ORDER_ATOMIC
    );
    const sign = dropdown_motors_direction === "FORWARDS" ? "" : "-";
    return [
      `R.motors[1] = ${sign}${value_motors_power_percent}`,
      `R.motors[2] = ${sign}${value_motors_power_percent}`,
      `time.sleep(${value_motors_time})`,
      `R.motors[1] = 0`,
      `R.motors[2] = 0`,
      ""
    ].join("\n");
  };

  Blockly.Python["motors_turn_for_time"] = function(block) {
    const dropdown_motors_direction = block.getFieldValue("MOTORS_DIRECTION");
    const value_motors_time = Blockly.Python.valueToCode(
      block,
      "MOTORS_TIME",
      Blockly.Python.ORDER_ATOMIC
    );
    const value_motors_power = Blockly.Python.valueToCode(
      block,
      "MOTORS_POWER",
      Blockly.Python.ORDER_ATOMIC
    );
    const first_sign = dropdown_motors_direction === "clockwise" ? "" : "-";
    const second_sign = dropdown_motors_direction === "clockwise" ? "-" : "";
    return [
      `R.motors[1] = ${first_sign}${value_motors_power}`,
      `R.motors[2] = ${second_sign}${value_motors_power}`,
      `time.sleep(${value_motors_time})`,
      `R.motors[1] = 0`,
      `R.motors[2] = 0`,
      ""
    ].join("\n");
  };

  Blockly.Python["motors_reset"] = function() {
    return "R.motors[1] = 0\nR.motors[2] = 0\n";
  };

  Blockly.Python["motors_safety_override"] = function() {
    return "R.motors.safety_override = True\n";
  };

  Blockly.Python["servo_set_position"] = function(block) {
    const number_servo_index = block.getFieldValue("SERVO_INDEX");
    const value_servo_position = Blockly.Python.valueToCode(
      block,
      "SERVO_POSITION",
      Blockly.Python.ORDER_ATOMIC
    );
    return `R.servos[${number_servo_index}] = ${value_servo_position}\n`;
  };
}

function loadGPIOBlocks(Blockly) {
  Blockly.Blocks["gpio_set_mode"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Set the mode of GPIO")
        .appendField(new Blockly.FieldNumber(1, 1, 4, 1), "GPIO_INDEX")
        .appendField("to")
        .appendField(
          new Blockly.FieldDropdown([
            ["Output", "OUTPUT"],
            ["Digital Input", "INPUT"],
            ["Analog Input", "INPUT_ANALOG"],
            ["Input Pullup", "INPUT_PULLUP"]
          ]),
          "GPIO_MODE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["gpio_write_digital"] = {
    init: function() {
      this.appendValueInput("GPIO_STATE")
        .setCheck("Boolean")
        .appendField("Set GPIO")
        .appendField(new Blockly.FieldNumber(1, 1, 4, 1), "GPIO_INDEX")
        .appendField("to");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["gpio_read_digital"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Digital value of GPIO")
        .appendField(new Blockly.FieldNumber(1, 1, 4, 1), "GPIO_INDEX");
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["gpio_read_analog"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Analog value of GPIO")
        .appendField(new Blockly.FieldNumber(1, 1, 4, 1), "GPIO_INDEX");
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Python["gpio_set_mode"] = function(block) {
    const number_gpio_index = block.getFieldValue("GPIO_INDEX");
    const dropdown_gpio_mode = block.getFieldValue("GPIO_MODE");
    return `R.gpio[${number_gpio_index}].mode = ${dropdown_gpio_mode}\n`;
  };

  Blockly.Python["gpio_write_digital"] = function(block) {
    const number_gpio_index = block.getFieldValue("GPIO_INDEX");
    const value_gpio_state = Blockly.Python.valueToCode(
      block,
      "GPIO_STATE",
      Blockly.Python.ORDER_ATOMIC
    );
    return `R.gpio[${number_gpio_index}].digital = ${value_gpio_state}\n`;
  };

  Blockly.Python["gpio_read_digital"] = function(block) {
    const number_gpio_index = block.getFieldValue("GPIO_INDEX");
    const code = `R.gpio[${number_gpio_index}].digital`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["gpio_read_analog"] = function(block) {
    const number_gpio_index = block.getFieldValue("GPIO_INDEX");
    const code = `R.gpio[${number_gpio_index}].analog`;
    return [code, Blockly.Python.ORDER_NONE];
  };
}

function loadVisionBlocks(Blockly) {
  Blockly.Blocks["vision_see"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Visible markers at")
        .appendField(
          new Blockly.FieldDropdown([
            ["640x480", "(640, 480)"],
            ["1296x736", "(1296, 736)"],
            ["1296x976", "(1296, 976)"],
            ["1920x1088", "(1920, 1088)"],
            ["1920x1440", "(1920, 1440)"]
          ]),
          "VISION_RESOLUTION"
        )
        .appendField("px");
      this.setOutput(true, "Array");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_distance_to"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Marker")
        .appendField("Distance to");
      this.setInputsInline(false);
      this.setOutput(true, "Number");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_angle_to"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Marker")
        .appendField("Angle to");
      this.setInputsInline(false);
      this.setOutput(true, "Number");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_marker_type"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Marker")
        .appendField("Marker type of");
      this.setInputsInline(false);
      this.setOutput(true, "MarkerType");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_token_type"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Token")
        .appendField("Token type of");
      this.setInputsInline(false);
      this.setOutput(true, "TokenType");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_marker_type_arena"] = {
    init: function() {
      this.appendDummyInput().appendField("Arena");
      this.setOutput(true, "MarkerType");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_marker_type_token"] = {
    init: function() {
      this.appendDummyInput().appendField("Token");
      this.setOutput(true, "MarkerType");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_token_type_ore"] = {
    init: function() {
      this.appendDummyInput().appendField("Ore");
      this.setOutput(true, "TokenType");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_token_type_gold"] = {
    init: function() {
      this.appendDummyInput().appendField("Gold");
      this.setOutput(true, "TokenType");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_token_type_fools_gold"] = {
    init: function() {
      this.appendDummyInput().appendField("Fools Gold");
      this.setOutput(true, "TokenType");
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Python["vision_see"] = function(block) {
    const dropdown_vision_resolution = block.getFieldValue("VISION_RESOLUTION");
    const code = `R.see(res=${dropdown_vision_resolution})`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_distance_to"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.dist`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_angle_to"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.rot_y`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_marker_type"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.info.marker_type`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_token_type"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.info.token_type`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_marker_type_arena"] = function() {
    const code = "MARKER_ARENA";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_marker_type_token"] = function() {
    const code = "MARKER_TOKEN";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_token_type_ore"] = function() {
    const code = "TOKEN_ORE";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_token_type_gold"] = function() {
    const code = "TOKEN_GOLD";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_token_type_fools_gold"] = function() {
    const code = "TOKEN_FOOLS_GOLD";
    return [code, Blockly.Python.ORDER_NONE];
  };
}

export default function loadBlocks(Blockly) {
  loadMovementBlocks(Blockly);
  loadGPIOBlocks(Blockly);
  loadVisionBlocks(Blockly);

  Blockly.Blocks["wait"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Wait")
        .appendField(new Blockly.FieldNumber(1, 0, Infinity, 0.1), "TIME")
        .appendField("second(s)");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Python["wait"] = function(block) {
    const number_time = block.getFieldValue("TIME");
    return `time.sleep(${number_time})\n`;
  };
}
