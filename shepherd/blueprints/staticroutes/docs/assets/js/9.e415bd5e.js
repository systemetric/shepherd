(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"gpio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpio","aria-hidden":"true"}},[t._v("#")]),t._v(" GPIO")]),t._v(" "),s("p",[t._v("GPIO "),s("em",[t._v("(General Purpose Input Output)")]),t._v(" allows you to turn on LEDs, react to button presses, or do just about anything.")]),t._v(" "),s("p",[t._v("Our BrainBox has 4 GPIO pins that you can control. Before you do anything with a pin, you must first set it's mode.")]),t._v(" "),s("p",[t._v("There are 4 modes:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Mode")]),t._v(" "),s("th",[t._v("Python")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Digital Output")]),t._v(" "),s("td",[s("code",[t._v("robot.OUTPUT")])]),t._v(" "),s("td",[t._v("Allows you to write a high or low signal")])]),t._v(" "),s("tr",[s("td",[t._v("Digital Input")]),t._v(" "),s("td",[s("code",[t._v("robot.INPUT")])]),t._v(" "),s("td",[t._v("Allows you to read a high or low signal")])]),t._v(" "),s("tr",[s("td",[t._v("Analog Input")]),t._v(" "),s("td",[s("code",[t._v("robot.INPUT_ANALOG")])]),t._v(" "),s("td",[t._v("Allows you to read a voltage, like a voltmeter")])]),t._v(" "),s("tr",[s("td",[t._v("Pullup Input")]),t._v(" "),s("td",[s("code",[t._v("robot.INPUT_PULLUP")])]),t._v(" "),s("td",[t._v("Like analog, but uses a virtual pullup resistor")])])])]),t._v(" "),s("h2",{attrs:{id:"python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),s("p",[t._v("To write a digital signal on pin 1:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OUTPUT\nR"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("digital "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),s("p",[t._v("To read a digital signal on pin 2:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INPUT\n"),s("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("digital\n")])])]),s("p",[t._v("To read an analog signal on pin 3:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INPUT_ANALOG\n"),s("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("analog\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("All modes can be used on all pins")])]),t._v(" "),s("p",[t._v("Here's a more complete example:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" robot\n\nR "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Robot"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# read digital value from GPIO 1")]),t._v("\nR"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INPUT\n"),s("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("digital\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# read analog value from GPIO 2")]),t._v("\nR"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INPUT_ANALOG\n"),s("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("analog\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# write digital value to GPIO 3")]),t._v("\nR"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OUTPUT\nR"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpio"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("digital "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# all modes can be used on all GPIOs")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# theres also robot.INPUT_PULLUP")]),t._v("\n")])])]),s("h2",{attrs:{id:"blockly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockly","aria-hidden":"true"}},[t._v("#")]),t._v(" Blockly")]),t._v(" "),s("p",[t._v("GPIO blocks can be found in the "),s("strong",[t._v("GPIO")]),t._v(" section.")])])}],!1,null,null,null);o.options.__file="gpio.md";a.default=o.exports}}]);