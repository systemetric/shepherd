/*
This program:
-Set hues of different block types
-Defines a function for movement blocks
-Defines a function for GPIO blocks
-Defines a function for Vision blocks
  (and marker team because there isn't a better location),
  but excluding marker blocks (see next function)
-Defines a function for marker blocks;
  you will almost definetly have to change them for next year
-Defines a exported function called load blocks.
  This will call the first 4 functions, then add the block wait
  (this is added to logic in toolbox.xml)

(This is from my understanding I will get some names wrong)
To add each block, two things are required - 
The first is a method which defines what the block looks like and what parameter (if any) it take
It uses the constant colour hues definied at the beginning
The second is a function which decides how it is converted into python and returns
a string which is concatenated with others in the finished programm in Blockly.vue
(see Blockly.vue line 80 ish)

If you want to specifically want to change a marker specifically,
it looks like this (in the marker blocks function):

Blockly.Blocks["vision_marker_type_arena"] = {      <-What the marker is called internally
  init: function() {
    this.appendDummyInput().appendField("Arena");   <-The name on the block
    this.setOutput(true, "MarkerType");             <-The output given - with how it is currently set up, should be "MarkerType" or "MarkerTeam"
    this.setColour(markerTypeHue);                  <-Sets the hue of the block to the constant defined at the start
    this.setTooltip("");                            <-Sets the text displayd when hovered over (if you want to)
    this.setHelpUrl("");
  }
};

Blockly.Python["vision_marker_type_arena"] = function() {   <-Make sure the name is the same internally
  const code = "robot.MARKER_TYPE.ARENA";                   <-Set the constant that is the code that is returned
  return [code, Blockly.Python.ORDER_NONE];                 <-Returns said constant
};

Finally:
REMEMBER TO CHANGE TOOLBOX.XML WHENEVER YOU CHANGE NAMES OR ADD OR REMOVE BLOCKS
*/

// Block colours use HSL. setColor takes the hue value (0 to 255). 
const movementHue = 0;
const gpioHue = 210;
const visionHue = 90;
const markerTypeHue = 70;
const markerTeamHue = 60;

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
      this.appendDummyInput().appendField("Own Team");
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
    const first_sign = dropdown_motors_direction === "CLOCKWISE" ? "" : "-";
    const second_sign = dropdown_motors_direction === "CLOCKWISE" ? "-" : "";
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
        .appendField(new Blockly.FieldNumber(1, 0, 4, 1), "GPIO_INDEX")
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
        .appendField(new Blockly.FieldNumber(1, 0, 4, 1), "GPIO_INDEX");
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
        .appendField(new Blockly.FieldNumber(1, 0, 4, 1), "GPIO_INDEX");
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

function loadVisionBlocks(Blockly) {
  /* Loads blocks for vision code that are not dependent on the current year's game.
   * Marker blocks (year depentent) are loaded in loadMarkerBlocks. */

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

  Blockly.Blocks["vision_marker_team"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Marker")
        .appendField("Marker team of");
      this.setInputsInline(false);
      this.setOutput(true, "MarkerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["vision_marker_target_type"] = {
    init: function() {
      this.appendValueInput("MARKER")
        .setCheck("Marker")
        .appendField("Marker target type of");
      this.setInputsInline(false);
      this.setOutput(true, "MarkerTargetType");
      this.setColour(markerTeamHue);
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

  Blockly.Python["vision_marker_team"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.info.owning_team`;
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python["vision_marker_target_type"] = function(block) {
    const value_marker = Blockly.Python.valueToCode(
      block,
      "MARKER",
      Blockly.Python.ORDER_ATOMIC
    );
    const code = `${value_marker}.info.target_type`;
    return [code, Blockly.Python.ORDER_NONE];
  };
}

function loadMarkerBlocks(Blockly) {
  /* Year dependent marker blocks (2024) */

  Blockly.Blocks["vision_marker_type_arena"] = {
    init: function() {
      this.appendDummyInput().appendField("Arena");
      this.setOutput(true, "MarkerType");
      this.setColour(markerTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["vision_marker_type_target"] = {
    init: function() {
      this.appendDummyInput().appendField("Target");
      this.setOutput(true, "MarkerType");
      this.setColour(markerTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["vision_marker_type_tree"] = {
    init: function() {
      this.appendDummyInput().appendField("Tree");
      this.setOutput(true, "MarkerType");
      this.setColour(markerTypeHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  

  Blockly.Blocks["vision_marker_team_red"] = {
    init: function() {
      this.appendDummyInput().appendField("Red");
      this.setOutput(true, "MarkerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["vision_marker_team_green"] = {
    init: function() {
      this.appendDummyInput().appendField("Green");
      this.setOutput(true, "MarkerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["vision_marker_team_yellow"] = {
    init: function() {
      this.appendDummyInput().appendField("Yellow");
      this.setOutput(true, "MarkerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["vision_marker_team_blue"] = {
    init: function() {
      this.appendDummyInput().appendField("Blue");
      this.setOutput(true, "MarkerTeam");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  
  Blockly.Blocks["vision_marker_target_type_supply_crate"] = {
    init: function() {
      this.appendDummyInput().appendField("Supply Crate");
      this.setOutput(true, "MarkerTargetType");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["vision_marker_target_type_supply_drop"] = {
    init: function() {
      this.appendDummyInput().appendField("Supply Drop");
      this.setOutput(true, "MarkerTargetType");
      this.setColour(markerTeamHue);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };



  Blockly.Python["vision_marker_type_arena"] = function() {
    const code = "MARKER_TYPE.ARENA";
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python["vision_marker_type_target"] = function() {
    const code = "MARKER_TYPE.TARGET";
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python["vision_marker_type_tree"] = function() {
    const code = "MARKER_TYPE.TREE";
    return [code, Blockly.Python.ORDER_NONE];
  };



  Blockly.Python["vision_marker_team_red"] = function() {
    const code = "SECTOR.RED";
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python["vision_marker_team_green"] = function() {
    const code = "SECTOR.GREEN";
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python["vision_marker_team_yellow"] = function() {
    const code = "SECTOR.YELLOW";
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python["vision_marker_team_blue"] = function() {
    const code = "SECTOR.BLUE";
    return [code, Blockly.Python.ORDER_NONE];
  };


  
  Blockly.Python["vision_marker_target_type_supply_crate"] = function() {
    const code = "TARGET_TYPE.SUPPLY_CRATE";
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python["vision_marker_target_type_supply_drop"] = function() {
    const code = "TARGET_TYPE.SUPPLY_DROP";
    return [code, Blockly.Python.ORDER_NONE];
  };
}

export default function loadBlocks(Blockly) {
  loadMovementBlocks(Blockly);
  loadGPIOBlocks(Blockly);
  loadVisionBlocks(Blockly);

  // Marker blocks are specific to the competition - you probably want to change them
  loadMarkerBlocks(Blockly);
  

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
