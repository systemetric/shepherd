
// Block colours use HSL. setColor takes the hue value (0 to 255). 
const movementHue = 0;
const gpioHue = 210;
const visionHue = 90;
const markerTypeHue = 70;
const markerOwnerHue = 60;
const markerTeamHue = 50;
const woolTypeHue = 40;

function loadMovementBlocks(Blockly) {
  Blockly.Blocks["motors_set_power"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Set motor")
        .appendField(new Blockly.FieldNumber(1, 0, 1, 1), "MOTOR_INDEX");
      this.appendValueInput("MOTOR_PERCENT")
        .setCheck("Number")
        .appendField("to");
      this.appendDummyInput().appendField("% power");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(movementHue);
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
      this.setColour(movementHue);
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
      this.setColour(movementHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["motors_reset"] = {
    init: function() {
      this.appendDummyInput().appendField("Stop both motors");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(movementHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  /*Blockly.Blocks["motors_safety_override"] = {
    init: function() {
      this.appendDummyInput().appendField("Enable motor safety override");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };*/

  Blockly.Blocks["servo_set_position"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Set servo")
        .appendField(new Blockly.FieldNumber(1, 0, 3, 1), "SERVO_INDEX");
      this.appendValueInput("SERVO_POSITION")
        .setCheck("Number")
        .appendField("to the");
      this.appendDummyInput().appendField("% position");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(movementHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["zone"] = {
    init: function() {
      this.appendDummyInput().appendField("Zone");
      this.setOutput(true, null);
      this.setColour(movementHue);
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
      `R.motors[0] = ${sign}${value_motors_power_percent}`,
      `R.motors[1] = ${sign}${value_motors_power_percent}`,
      `time.sleep(${value_motors_time})`,
      `R.motors[0] = 0`,
      `R.motors[1] = 0`,
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
      `R.motors[0] = ${first_sign}${value_motors_power}`,
      `R.motors[1] = ${second_sign}${value_motors_power}`,
      `time.sleep(${value_motors_time})`,
      `R.motors[0] = 0`,
      `R.motors[1] = 0`,
      ""
    ].join("\n");
  };

  Blockly.Python["motors_reset"] = function() {
    return "R.motors[0] = 0\nR.motors[1] = 0\n";
  };

  /*Blockly.Python["motors_safety_override"] = function() {
    return "R.motors.safety_override = True\n";
  };*/

  Blockly.Python["servo_set_position"] = function(block) {
    const number_servo_index = block.getFieldValue("SERVO_INDEX");
    const value_servo_position = Blockly.Python.valueToCode(
      block,
      "SERVO_POSITION",
      Blockly.Python.ORDER_ATOMIC
    );
    return `R.servos[${number_servo_index}] = ${value_servo_position}\n`;
  };

  Blockly.Python["zone"] = function() {
    const code = "R.zone";
    return [code, Blockly.Python.ORDER_NONE];
  };
}

function loadGPIOBlocks(Blockly) {
  Blockly.Blocks["gpio_set_mode"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Set the mode of GPIO")
        .appendField(new Blockly.FieldNumber(1, 0, 3, 1), "GPIO_INDEX")
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
      this.setColour(gpioHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["gpio_write_digital"] = {
    init: function() {
      this.appendValueInput("GPIO_STATE")
        .setCheck("Boolean")
        .appendField("Set GPIO")
        .appendField(new Blockly.FieldNumber(0, 0, 3, 1), "GPIO_INDEX")
        .appendField("to");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(gpioHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["gpio_read_digital"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Digital value of GPIO")
        .appendField(new Blockly.FieldNumber(1, 0, 3, 1), "GPIO_INDEX");
      this.setOutput(true, "Boolean");
      this.setColour(gpioHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["gpio_read_analog"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Analog value of GPIO")
        .appendField(new Blockly.FieldNumber(1, 0, 3, 1), "GPIO_INDEX");
      this.setOutput(true, "Number");
      this.setColour(gpioHue);
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

function loadMarkerTypeBlocks(Blockly) {
  /* Year marker type blocks (2023) */
  Blockly.Blocks["vision_marker_type_sheep"] = {
    init: function() {
      this.appendDummyInput().appendField("Sheep");
      this.setOutput(true, "MarkerType");
      this.setColour(markerTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_type_sheep"] = function() {
    const code = "TEAM.SHEEP";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_type_arena"] = {
    init: function() {
      this.appendDummyInput().appendField("Arena");
      this.setOutput(true, "MarkerType");
      this.setColour(markerTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_type_arena"] = function() {
    const code = "MARKER_TYPE.ARENA";
    return [code, Blockly.Python.ORDER_NONE];
  };
}

function loadMarkerOwnerBlocks(Blockly) {
  /* Year team owner blocks (2023) */
  Blockly.Blocks["vision_marker_owner_me"] = {
    init: function() {
      this.appendDummyInput().appendField("Me");
      this.setOutput(true, "markerOwner");
      this.setColour(markerOwnerHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_owner_me"] = function() {
    const code = "MARKER_OWNER.ME";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_owner_another_team"] = {
    init: function() {
      this.appendDummyInput().appendField("Zhora");
      this.setOutput(true, "markerOwner");
      this.setColour(markerOwnerHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_owner_another_team"] = function() {
    const code = "MARKER_OWNER.ANOTHER_TEAM";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_owner_arena"] = {
    init: function() {
      this.appendDummyInput().appendField("Pris");
      this.setOutput(true, "markerOwner");
      this.setColour(markerOwnerHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_owner_arena"] = function() {
    const code = "MARKER_OWNER.ARENA";
    return [code, Blockly.Python.ORDER_NONE];
  };
}

function loadMarkerTeamBlocks(Blockly) {
  /* Year team marker blocks (2023) */
  Blockly.Blocks["vision_marker_team_leon"] = {
    init: function() {
      this.appendDummyInput().appendField("Leon");
      this.setOutput(true, "markerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_team_leon"] = function() {
    const code = "TEAM.LEON";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_team_zhora"] = {
    init: function() {
      this.appendDummyInput().appendField("Zhora");
      this.setOutput(true, "markerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_team_zhora"] = function() {
    const code = "TEAM.ZHORA";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_team_pris"] = {
    init: function() {
      this.appendDummyInput().appendField("Pris");
      this.setOutput(true, "markerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_team_pris"] = function() {
    const code = "TEAM.PRIS";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_team_roy"] = {
    init: function() {
      this.appendDummyInput().appendField("Roy");
      this.setOutput(true, "markerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_team_roy"] = function() {
    const code = "TEAM.ROY";
    return [code, Blockly.Python.ORDER_NONE];
  };

}

function loadMarkerWoolBlocks(Blockly) {
  /* Year team owner blocks (2023) */
  Blockly.Blocks["vision_marker_wool_gold"] = {
    init: function() {
      this.appendDummyInput().appendField("Golden Fleece");
      this.setOutput(true, "woolType");
      this.setColour(woolTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_wool_gold"] = function() {
    const code = "WOOL_TYPE.GOLDEN_FLEECE";
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_wool_steel"] = {
    init: function() {
      this.appendDummyInput().appendField("Steel Wool");
      this.setOutput(true, "woolType");
      this.setColour(woolTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_wool_steel"] = function() {
    const code = "WOOL_TYPE.STEEL_WOOL";
    return [code, Blockly.Python.ORDER_NONE];
  };
}

function loadVisionBlocks(Blockly) {
  /* Loads blocks for vision code that are not dependent on the current year's game.
   * Marker blocks (year depentent) are loaded in loadVisionMarkerBlocks. */

  Blockly.Blocks["vision_see"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Visible markers")
      this.setOutput(true, "Array");
      this.setColour(visionHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_camera_res"] = {
    init: function() {
      this.appendDummyInput()
      .appendField("Set camera resolution to")
      .appendField(
        new Blockly.FieldDropdown([
          ["640x480", "(640, 480)"],
          ["1296x736", "(1296, 736)"],
          ["1296x976", "(1296, 976)"],
          ["1920x1088", "(1920, 1088)"],
          ["1920x1440", "(1920, 1440)"]
        ]),
        "VISION_RESOLUTION"
      );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(visionHue);
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
      this.setColour(visionHue);
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
      this.setColour(visionHue);
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
      this.setColour(markerTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Python["vision_see"] = function(block) {
    const code = `R.see()`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_camera_res"] = function(block) {
    const dropdown_vision_resolution = block.getFieldValue("VISION_RESOLUTION");
    return `R.camera.res = ${dropdown_vision_resolution}\n`;
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
    const code = `${value_marker}.bearing.y`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_marker_type"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.info.type`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_owner"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Marker")
        .appendField("Marker owner of");
      this.setInputsInline(false);
      this.setOutput(true, "markerOwner");
      this.setColour(markerOwnerHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_owner"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.info.owner`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks["vision_marker_owning_team"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Marker")
        .appendField("Marker team that owns");
      this.setInputsInline(false);
      this.setOutput(true, "markerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_owning_team"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.info.owning_team`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks["vision_marker_wool_type"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Marker")
        .appendField("Marker wool type of");
      this.setInputsInline(false);
      this.setOutput(true, "woolType");
      this.setColour(woolTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Python["vision_marker_wool_type"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.info.wool_type`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  // Load marker blocks. These may change for different competitions. 
  loadMarkerTypeBlocks(Blockly);
  loadMarkerOwnerBlocks(Blockly);
  loadMarkerTeamBlocks(Blockly);
  loadMarkerWoolBlocks(Blockly);
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
