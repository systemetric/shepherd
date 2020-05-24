(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js ***!
  \********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['(*', '*)'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['var', 'end_var'],
        ['var_input', 'end_var'],
        ['var_output', 'end_var'],
        ['var_in_out', 'end_var'],
        ['var_temp', 'end_var'],
        ['var_global', 'end_var'],
        ['var_access', 'end_var'],
        ['var_external', 'end_var'],
        ['type', 'end_type'],
        ['struct', 'end_struct'],
        ['program', 'end_program'],
        ['function', 'end_function'],
        ['function_block', 'end_function_block'],
        ['action', 'end_action'],
        ['step', 'end_step'],
        ['initial_step', 'end_step'],
        ['transaction', 'end_transaction'],
        ['configuration', 'end_configuration'],
        ['tcp', 'end_tcp'],
        ['recource', 'end_recource'],
        ['channel', 'end_channel'],
        ['library', 'end_library'],
        ['folder', 'end_folder'],
        ['binaries', 'end_binaries'],
        ['includes', 'end_includes'],
        ['sources', 'end_sources']
    ],
    autoClosingPairs: [
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: '/*', close: '*/' },
        { open: '\'', close: '\'', notIn: ['string_sq'] },
        { open: '"', close: '"', notIn: ['string_dq'] },
        { open: 'var', close: 'end_var' },
        { open: 'var_input', close: 'end_var' },
        { open: 'var_output', close: 'end_var' },
        { open: 'var_in_out', close: 'end_var' },
        { open: 'var_temp', close: 'end_var' },
        { open: 'var_global', close: 'end_var' },
        { open: 'var_access', close: 'end_var' },
        { open: 'var_external', close: 'end_var' },
        { open: 'type', close: 'end_type' },
        { open: 'struct', close: 'end_struct' },
        { open: 'program', close: 'end_program' },
        { open: 'function', close: 'end_function' },
        { open: 'function_block', close: 'end_function_block' },
        { open: 'action', close: 'end_action' },
        { open: 'step', close: 'end_step' },
        { open: 'initial_step', close: 'end_step' },
        { open: 'transaction', close: 'end_transaction' },
        { open: 'configuration', close: 'end_configuration' },
        { open: 'tcp', close: 'end_tcp' },
        { open: 'recource', close: 'end_recource' },
        { open: 'channel', close: 'end_channel' },
        { open: 'library', close: 'end_library' },
        { open: 'folder', close: 'end_folder' },
        { open: 'binaries', close: 'end_binaries' },
        { open: 'includes', close: 'end_includes' },
        { open: 'sources', close: 'end_sources' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: 'var', close: 'end_var' },
        { open: 'var_input', close: 'end_var' },
        { open: 'var_output', close: 'end_var' },
        { open: 'var_in_out', close: 'end_var' },
        { open: 'var_temp', close: 'end_var' },
        { open: 'var_global', close: 'end_var' },
        { open: 'var_access', close: 'end_var' },
        { open: 'var_external', close: 'end_var' },
        { open: 'type', close: 'end_type' },
        { open: 'struct', close: 'end_struct' },
        { open: 'program', close: 'end_program' },
        { open: 'function', close: 'end_function' },
        { open: 'function_block', close: 'end_function_block' },
        { open: 'action', close: 'end_action' },
        { open: 'step', close: 'end_step' },
        { open: 'initial_step', close: 'end_step' },
        { open: 'transaction', close: 'end_transaction' },
        { open: 'configuration', close: 'end_configuration' },
        { open: 'tcp', close: 'end_tcp' },
        { open: 'recource', close: 'end_recource' },
        { open: 'channel', close: 'end_channel' },
        { open: 'library', close: 'end_library' },
        { open: 'folder', close: 'end_folder' },
        { open: 'binaries', close: 'end_binaries' },
        { open: 'includes', close: 'end_includes' },
        { open: 'sources', close: 'end_sources' }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*#pragma\\s+region\\b"),
            end: new RegExp("^\\s*#pragma\\s+endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.st',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: ['if', 'end_if', 'elsif', 'else', 'case', 'of', 'to',
        'do', 'with', 'by', 'while', 'repeat', 'end_while', 'end_repeat', 'end_case',
        'for', 'end_for', 'task', 'retain', 'non_retain', 'constant', 'with', 'at',
        'exit', 'return', 'interval', 'priority', 'address', 'port', 'on_channel',
        'then', 'iec', 'file', 'uses', 'version', 'packagetype', 'displayname',
        'copyright', 'summary', 'vendor', 'common_source', 'from'],
    constant: ['false', 'true', 'null'],
    defineKeywords: [
        'var', 'var_input', 'var_output', 'var_in_out', 'var_temp', 'var_global',
        'var_access', 'var_external', 'end_var',
        'type', 'end_type', 'struct', 'end_struct', 'program', 'end_program',
        'function', 'end_function', 'function_block', 'end_function_block',
        'configuration', 'end_configuration', 'tcp', 'end_tcp', 'recource',
        'end_recource', 'channel', 'end_channel', 'library', 'end_library',
        'folder', 'end_folder', 'binaries', 'end_binaries', 'includes',
        'end_includes', 'sources', 'end_sources',
        'action', 'end_action', 'step', 'initial_step', 'end_step', 'transaction', 'end_transaction'
    ],
    typeKeywords: ['int', 'sint', 'dint', 'lint', 'usint', 'uint', 'udint', 'ulint',
        'real', 'lreal', 'time', 'date', 'time_of_day', 'date_and_time', 'string',
        'bool', 'byte', 'world', 'dworld', 'array', 'pointer', 'lworld'],
    operators: ['=', '>', '<', ':', ':=', '<=', '>=', '<>', '&', '+', '-', '*', '**',
        'MOD', '^', 'or', 'and', 'not', 'xor', 'abs', 'acos', 'asin', 'atan', 'cos',
        'exp', 'expt', 'ln', 'log', 'sin', 'sqrt', 'tan', 'sel', 'max', 'min', 'limit',
        'mux', 'shl', 'shr', 'rol', 'ror', 'indexof', 'sizeof', 'adr', 'adrinst',
        'bitadr', 'is_valid'],
    builtinVariables: [],
    builtinFunctions: ['sr', 'rs', 'tp', 'ton', 'tof', 'eq', 'ge', 'le', 'lt',
        'ne', 'round', 'trunc', 'ctd', 'сtu', 'ctud', 'r_trig', 'f_trig',
        'move', 'concat', 'delete', 'find', 'insert', 'left', 'len', 'replace',
        'right', 'rtc'],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/(T|DT|TOD)#[0-9:-_shmyd]*/, 'tag'],
            [/[A-Za-z]{1,6}#[0-9]*/, 'tag'],
            [/\%(I|Q|M)(X|B|W|D|L)[0-9\.]*/, 'tag'],
            [/\%(I|Q|M)[0-9\.]*/, 'tag'],
            [/(TO_|CTU_|CTD_|CTUD_|MUX_|SEL_)[A_Za-z]*/, 'predefined'],
            [/[A_Za-z]*(_TO_)[A_Za-z]*/, 'predefined'],
            // identifiers and keywords
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@operators': 'operators',
                        '@keywords': 'keyword',
                        '@typeKeywords': 'type',
                        '@defineKeywords': 'variable',
                        '@constant': 'constant',
                        '@builtinVariables': 'predefined',
                        '@builtinFunctions': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            { include: '@whitespace' },
            [/[;.]/, 'delimiter'],
            [/[{}()\[\]]/, '@brackets'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/16#[0-9a-fA-F]+/, 'number.hex'],
            [/2#[0-9_]+/, 'number.binary'],
            [/\d+/, 'number'],
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string_dq' }],
            [/'/, { token: 'string.quote', bracket: '@open', next: '@string_sq' }],
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\/\*/, 'comment', '@push'],
            ["\\*/", 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        comment2: [
            [/[^\(*]+/, 'comment'],
            [/\(\*/, 'comment', '@push'],
            ["\\*\\)", 'comment', '@pop'],
            [/[\(*]/, 'comment']
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\/.*$/, 'comment'],
            [/\/\*/, 'comment', '@comment'],
            [/\(\*/, 'comment', '@comment2'],
        ],
        string_dq: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        string_sq: [
            [/[^\\']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3N0L3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLGdEQUFnRDtBQUN6RCxTQUFTLDhDQUE4QztBQUN2RCxTQUFTLGdDQUFnQztBQUN6QyxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLHFDQUFxQztBQUM5QyxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLHlDQUF5QztBQUNsRCxTQUFTLGtDQUFrQztBQUMzQyxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLHdDQUF3QztBQUNqRCxTQUFTLDBDQUEwQztBQUNuRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLGtDQUFrQztBQUMzQyxTQUFTLDBDQUEwQztBQUNuRCxTQUFTLGdEQUFnRDtBQUN6RCxTQUFTLG9EQUFvRDtBQUM3RCxTQUFTLGdDQUFnQztBQUN6QyxTQUFTLDBDQUEwQztBQUNuRCxTQUFTLHdDQUF3QztBQUNqRCxTQUFTLHdDQUF3QztBQUNqRCxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLDBDQUEwQztBQUNuRCxTQUFTLDBDQUEwQztBQUNuRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyx1Q0FBdUM7QUFDaEQsU0FBUyx1Q0FBdUM7QUFDaEQsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyx1Q0FBdUM7QUFDaEQsU0FBUyx1Q0FBdUM7QUFDaEQsU0FBUyx5Q0FBeUM7QUFDbEQsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyx3Q0FBd0M7QUFDakQsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUyxnREFBZ0Q7QUFDekQsU0FBUyxvREFBb0Q7QUFDN0QsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUyx3Q0FBd0M7QUFDakQsU0FBUyx3Q0FBd0M7QUFDakQsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUMsWUFBWSxHQUFHO0FBQzNELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEseUJBQXlCO0FBQ3RDLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4REFBOEQ7QUFDakYsbUJBQW1CLDhEQUE4RDtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycoKicsICcqKSddLFxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXSxcbiAgICAgICAgWyd2YXInLCAnZW5kX3ZhciddLFxuICAgICAgICBbJ3Zhcl9pbnB1dCcsICdlbmRfdmFyJ10sXG4gICAgICAgIFsndmFyX291dHB1dCcsICdlbmRfdmFyJ10sXG4gICAgICAgIFsndmFyX2luX291dCcsICdlbmRfdmFyJ10sXG4gICAgICAgIFsndmFyX3RlbXAnLCAnZW5kX3ZhciddLFxuICAgICAgICBbJ3Zhcl9nbG9iYWwnLCAnZW5kX3ZhciddLFxuICAgICAgICBbJ3Zhcl9hY2Nlc3MnLCAnZW5kX3ZhciddLFxuICAgICAgICBbJ3Zhcl9leHRlcm5hbCcsICdlbmRfdmFyJ10sXG4gICAgICAgIFsndHlwZScsICdlbmRfdHlwZSddLFxuICAgICAgICBbJ3N0cnVjdCcsICdlbmRfc3RydWN0J10sXG4gICAgICAgIFsncHJvZ3JhbScsICdlbmRfcHJvZ3JhbSddLFxuICAgICAgICBbJ2Z1bmN0aW9uJywgJ2VuZF9mdW5jdGlvbiddLFxuICAgICAgICBbJ2Z1bmN0aW9uX2Jsb2NrJywgJ2VuZF9mdW5jdGlvbl9ibG9jayddLFxuICAgICAgICBbJ2FjdGlvbicsICdlbmRfYWN0aW9uJ10sXG4gICAgICAgIFsnc3RlcCcsICdlbmRfc3RlcCddLFxuICAgICAgICBbJ2luaXRpYWxfc3RlcCcsICdlbmRfc3RlcCddLFxuICAgICAgICBbJ3RyYW5zYWN0aW9uJywgJ2VuZF90cmFuc2FjdGlvbiddLFxuICAgICAgICBbJ2NvbmZpZ3VyYXRpb24nLCAnZW5kX2NvbmZpZ3VyYXRpb24nXSxcbiAgICAgICAgWyd0Y3AnLCAnZW5kX3RjcCddLFxuICAgICAgICBbJ3JlY291cmNlJywgJ2VuZF9yZWNvdXJjZSddLFxuICAgICAgICBbJ2NoYW5uZWwnLCAnZW5kX2NoYW5uZWwnXSxcbiAgICAgICAgWydsaWJyYXJ5JywgJ2VuZF9saWJyYXJ5J10sXG4gICAgICAgIFsnZm9sZGVyJywgJ2VuZF9mb2xkZXInXSxcbiAgICAgICAgWydiaW5hcmllcycsICdlbmRfYmluYXJpZXMnXSxcbiAgICAgICAgWydpbmNsdWRlcycsICdlbmRfaW5jbHVkZXMnXSxcbiAgICAgICAgWydzb3VyY2VzJywgJ2VuZF9zb3VyY2VzJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnLyonLCBjbG9zZTogJyovJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycsIG5vdEluOiBbJ3N0cmluZ19zcSddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZ19kcSddIH0sXG4gICAgICAgIHsgb3BlbjogJ3ZhcicsIGNsb3NlOiAnZW5kX3ZhcicgfSxcbiAgICAgICAgeyBvcGVuOiAndmFyX2lucHV0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxuICAgICAgICB7IG9wZW46ICd2YXJfb3V0cHV0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxuICAgICAgICB7IG9wZW46ICd2YXJfaW5fb3V0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxuICAgICAgICB7IG9wZW46ICd2YXJfdGVtcCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcbiAgICAgICAgeyBvcGVuOiAndmFyX2dsb2JhbCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcbiAgICAgICAgeyBvcGVuOiAndmFyX2FjY2VzcycsIGNsb3NlOiAnZW5kX3ZhcicgfSxcbiAgICAgICAgeyBvcGVuOiAndmFyX2V4dGVybmFsJywgY2xvc2U6ICdlbmRfdmFyJyB9LFxuICAgICAgICB7IG9wZW46ICd0eXBlJywgY2xvc2U6ICdlbmRfdHlwZScgfSxcbiAgICAgICAgeyBvcGVuOiAnc3RydWN0JywgY2xvc2U6ICdlbmRfc3RydWN0JyB9LFxuICAgICAgICB7IG9wZW46ICdwcm9ncmFtJywgY2xvc2U6ICdlbmRfcHJvZ3JhbScgfSxcbiAgICAgICAgeyBvcGVuOiAnZnVuY3Rpb24nLCBjbG9zZTogJ2VuZF9mdW5jdGlvbicgfSxcbiAgICAgICAgeyBvcGVuOiAnZnVuY3Rpb25fYmxvY2snLCBjbG9zZTogJ2VuZF9mdW5jdGlvbl9ibG9jaycgfSxcbiAgICAgICAgeyBvcGVuOiAnYWN0aW9uJywgY2xvc2U6ICdlbmRfYWN0aW9uJyB9LFxuICAgICAgICB7IG9wZW46ICdzdGVwJywgY2xvc2U6ICdlbmRfc3RlcCcgfSxcbiAgICAgICAgeyBvcGVuOiAnaW5pdGlhbF9zdGVwJywgY2xvc2U6ICdlbmRfc3RlcCcgfSxcbiAgICAgICAgeyBvcGVuOiAndHJhbnNhY3Rpb24nLCBjbG9zZTogJ2VuZF90cmFuc2FjdGlvbicgfSxcbiAgICAgICAgeyBvcGVuOiAnY29uZmlndXJhdGlvbicsIGNsb3NlOiAnZW5kX2NvbmZpZ3VyYXRpb24nIH0sXG4gICAgICAgIHsgb3BlbjogJ3RjcCcsIGNsb3NlOiAnZW5kX3RjcCcgfSxcbiAgICAgICAgeyBvcGVuOiAncmVjb3VyY2UnLCBjbG9zZTogJ2VuZF9yZWNvdXJjZScgfSxcbiAgICAgICAgeyBvcGVuOiAnY2hhbm5lbCcsIGNsb3NlOiAnZW5kX2NoYW5uZWwnIH0sXG4gICAgICAgIHsgb3BlbjogJ2xpYnJhcnknLCBjbG9zZTogJ2VuZF9saWJyYXJ5JyB9LFxuICAgICAgICB7IG9wZW46ICdmb2xkZXInLCBjbG9zZTogJ2VuZF9mb2xkZXInIH0sXG4gICAgICAgIHsgb3BlbjogJ2JpbmFyaWVzJywgY2xvc2U6ICdlbmRfYmluYXJpZXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ2luY2x1ZGVzJywgY2xvc2U6ICdlbmRfaW5jbHVkZXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ3NvdXJjZXMnLCBjbG9zZTogJ2VuZF9zb3VyY2VzJyB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgICAgIHsgb3BlbjogJ3ZhcicsIGNsb3NlOiAnZW5kX3ZhcicgfSxcbiAgICAgICAgeyBvcGVuOiAndmFyX2lucHV0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxuICAgICAgICB7IG9wZW46ICd2YXJfb3V0cHV0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxuICAgICAgICB7IG9wZW46ICd2YXJfaW5fb3V0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxuICAgICAgICB7IG9wZW46ICd2YXJfdGVtcCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcbiAgICAgICAgeyBvcGVuOiAndmFyX2dsb2JhbCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcbiAgICAgICAgeyBvcGVuOiAndmFyX2FjY2VzcycsIGNsb3NlOiAnZW5kX3ZhcicgfSxcbiAgICAgICAgeyBvcGVuOiAndmFyX2V4dGVybmFsJywgY2xvc2U6ICdlbmRfdmFyJyB9LFxuICAgICAgICB7IG9wZW46ICd0eXBlJywgY2xvc2U6ICdlbmRfdHlwZScgfSxcbiAgICAgICAgeyBvcGVuOiAnc3RydWN0JywgY2xvc2U6ICdlbmRfc3RydWN0JyB9LFxuICAgICAgICB7IG9wZW46ICdwcm9ncmFtJywgY2xvc2U6ICdlbmRfcHJvZ3JhbScgfSxcbiAgICAgICAgeyBvcGVuOiAnZnVuY3Rpb24nLCBjbG9zZTogJ2VuZF9mdW5jdGlvbicgfSxcbiAgICAgICAgeyBvcGVuOiAnZnVuY3Rpb25fYmxvY2snLCBjbG9zZTogJ2VuZF9mdW5jdGlvbl9ibG9jaycgfSxcbiAgICAgICAgeyBvcGVuOiAnYWN0aW9uJywgY2xvc2U6ICdlbmRfYWN0aW9uJyB9LFxuICAgICAgICB7IG9wZW46ICdzdGVwJywgY2xvc2U6ICdlbmRfc3RlcCcgfSxcbiAgICAgICAgeyBvcGVuOiAnaW5pdGlhbF9zdGVwJywgY2xvc2U6ICdlbmRfc3RlcCcgfSxcbiAgICAgICAgeyBvcGVuOiAndHJhbnNhY3Rpb24nLCBjbG9zZTogJ2VuZF90cmFuc2FjdGlvbicgfSxcbiAgICAgICAgeyBvcGVuOiAnY29uZmlndXJhdGlvbicsIGNsb3NlOiAnZW5kX2NvbmZpZ3VyYXRpb24nIH0sXG4gICAgICAgIHsgb3BlbjogJ3RjcCcsIGNsb3NlOiAnZW5kX3RjcCcgfSxcbiAgICAgICAgeyBvcGVuOiAncmVjb3VyY2UnLCBjbG9zZTogJ2VuZF9yZWNvdXJjZScgfSxcbiAgICAgICAgeyBvcGVuOiAnY2hhbm5lbCcsIGNsb3NlOiAnZW5kX2NoYW5uZWwnIH0sXG4gICAgICAgIHsgb3BlbjogJ2xpYnJhcnknLCBjbG9zZTogJ2VuZF9saWJyYXJ5JyB9LFxuICAgICAgICB7IG9wZW46ICdmb2xkZXInLCBjbG9zZTogJ2VuZF9mb2xkZXInIH0sXG4gICAgICAgIHsgb3BlbjogJ2JpbmFyaWVzJywgY2xvc2U6ICdlbmRfYmluYXJpZXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ2luY2x1ZGVzJywgY2xvc2U6ICdlbmRfaW5jbHVkZXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ3NvdXJjZXMnLCBjbG9zZTogJ2VuZF9zb3VyY2VzJyB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNwcmFnbWFcXFxccytyZWdpb25cXFxcYlwiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojcHJhZ21hXFxcXHMrZW5kcmVnaW9uXFxcXGJcIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnN0JyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogWydpZicsICdlbmRfaWYnLCAnZWxzaWYnLCAnZWxzZScsICdjYXNlJywgJ29mJywgJ3RvJyxcbiAgICAgICAgJ2RvJywgJ3dpdGgnLCAnYnknLCAnd2hpbGUnLCAncmVwZWF0JywgJ2VuZF93aGlsZScsICdlbmRfcmVwZWF0JywgJ2VuZF9jYXNlJyxcbiAgICAgICAgJ2ZvcicsICdlbmRfZm9yJywgJ3Rhc2snLCAncmV0YWluJywgJ25vbl9yZXRhaW4nLCAnY29uc3RhbnQnLCAnd2l0aCcsICdhdCcsXG4gICAgICAgICdleGl0JywgJ3JldHVybicsICdpbnRlcnZhbCcsICdwcmlvcml0eScsICdhZGRyZXNzJywgJ3BvcnQnLCAnb25fY2hhbm5lbCcsXG4gICAgICAgICd0aGVuJywgJ2llYycsICdmaWxlJywgJ3VzZXMnLCAndmVyc2lvbicsICdwYWNrYWdldHlwZScsICdkaXNwbGF5bmFtZScsXG4gICAgICAgICdjb3B5cmlnaHQnLCAnc3VtbWFyeScsICd2ZW5kb3InLCAnY29tbW9uX3NvdXJjZScsICdmcm9tJ10sXG4gICAgY29uc3RhbnQ6IFsnZmFsc2UnLCAndHJ1ZScsICdudWxsJ10sXG4gICAgZGVmaW5lS2V5d29yZHM6IFtcbiAgICAgICAgJ3ZhcicsICd2YXJfaW5wdXQnLCAndmFyX291dHB1dCcsICd2YXJfaW5fb3V0JywgJ3Zhcl90ZW1wJywgJ3Zhcl9nbG9iYWwnLFxuICAgICAgICAndmFyX2FjY2VzcycsICd2YXJfZXh0ZXJuYWwnLCAnZW5kX3ZhcicsXG4gICAgICAgICd0eXBlJywgJ2VuZF90eXBlJywgJ3N0cnVjdCcsICdlbmRfc3RydWN0JywgJ3Byb2dyYW0nLCAnZW5kX3Byb2dyYW0nLFxuICAgICAgICAnZnVuY3Rpb24nLCAnZW5kX2Z1bmN0aW9uJywgJ2Z1bmN0aW9uX2Jsb2NrJywgJ2VuZF9mdW5jdGlvbl9ibG9jaycsXG4gICAgICAgICdjb25maWd1cmF0aW9uJywgJ2VuZF9jb25maWd1cmF0aW9uJywgJ3RjcCcsICdlbmRfdGNwJywgJ3JlY291cmNlJyxcbiAgICAgICAgJ2VuZF9yZWNvdXJjZScsICdjaGFubmVsJywgJ2VuZF9jaGFubmVsJywgJ2xpYnJhcnknLCAnZW5kX2xpYnJhcnknLFxuICAgICAgICAnZm9sZGVyJywgJ2VuZF9mb2xkZXInLCAnYmluYXJpZXMnLCAnZW5kX2JpbmFyaWVzJywgJ2luY2x1ZGVzJyxcbiAgICAgICAgJ2VuZF9pbmNsdWRlcycsICdzb3VyY2VzJywgJ2VuZF9zb3VyY2VzJyxcbiAgICAgICAgJ2FjdGlvbicsICdlbmRfYWN0aW9uJywgJ3N0ZXAnLCAnaW5pdGlhbF9zdGVwJywgJ2VuZF9zdGVwJywgJ3RyYW5zYWN0aW9uJywgJ2VuZF90cmFuc2FjdGlvbidcbiAgICBdLFxuICAgIHR5cGVLZXl3b3JkczogWydpbnQnLCAnc2ludCcsICdkaW50JywgJ2xpbnQnLCAndXNpbnQnLCAndWludCcsICd1ZGludCcsICd1bGludCcsXG4gICAgICAgICdyZWFsJywgJ2xyZWFsJywgJ3RpbWUnLCAnZGF0ZScsICd0aW1lX29mX2RheScsICdkYXRlX2FuZF90aW1lJywgJ3N0cmluZycsXG4gICAgICAgICdib29sJywgJ2J5dGUnLCAnd29ybGQnLCAnZHdvcmxkJywgJ2FycmF5JywgJ3BvaW50ZXInLCAnbHdvcmxkJ10sXG4gICAgb3BlcmF0b3JzOiBbJz0nLCAnPicsICc8JywgJzonLCAnOj0nLCAnPD0nLCAnPj0nLCAnPD4nLCAnJicsICcrJywgJy0nLCAnKicsICcqKicsXG4gICAgICAgICdNT0QnLCAnXicsICdvcicsICdhbmQnLCAnbm90JywgJ3hvcicsICdhYnMnLCAnYWNvcycsICdhc2luJywgJ2F0YW4nLCAnY29zJyxcbiAgICAgICAgJ2V4cCcsICdleHB0JywgJ2xuJywgJ2xvZycsICdzaW4nLCAnc3FydCcsICd0YW4nLCAnc2VsJywgJ21heCcsICdtaW4nLCAnbGltaXQnLFxuICAgICAgICAnbXV4JywgJ3NobCcsICdzaHInLCAncm9sJywgJ3JvcicsICdpbmRleG9mJywgJ3NpemVvZicsICdhZHInLCAnYWRyaW5zdCcsXG4gICAgICAgICdiaXRhZHInLCAnaXNfdmFsaWQnXSxcbiAgICBidWlsdGluVmFyaWFibGVzOiBbXSxcbiAgICBidWlsdGluRnVuY3Rpb25zOiBbJ3NyJywgJ3JzJywgJ3RwJywgJ3RvbicsICd0b2YnLCAnZXEnLCAnZ2UnLCAnbGUnLCAnbHQnLFxuICAgICAgICAnbmUnLCAncm91bmQnLCAndHJ1bmMnLCAnY3RkJywgJ9GBdHUnLCAnY3R1ZCcsICdyX3RyaWcnLCAnZl90cmlnJyxcbiAgICAgICAgJ21vdmUnLCAnY29uY2F0JywgJ2RlbGV0ZScsICdmaW5kJywgJ2luc2VydCcsICdsZWZ0JywgJ2xlbicsICdyZXBsYWNlJyxcbiAgICAgICAgJ3JpZ2h0JywgJ3J0YyddLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICAvLyBDIyBzdHlsZSBzdHJpbmdzXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgWy8oVHxEVHxUT0QpI1swLTk6LV9zaG15ZF0qLywgJ3RhZyddLFxuICAgICAgICAgICAgWy9bQS1aYS16XXsxLDZ9I1swLTldKi8sICd0YWcnXSxcbiAgICAgICAgICAgIFsvXFwlKEl8UXxNKShYfEJ8V3xEfEwpWzAtOVxcLl0qLywgJ3RhZyddLFxuICAgICAgICAgICAgWy9cXCUoSXxRfE0pWzAtOVxcLl0qLywgJ3RhZyddLFxuICAgICAgICAgICAgWy8oVE9ffENUVV98Q1REX3xDVFVEX3xNVVhffFNFTF8pW0FfWmEtel0qLywgJ3ByZWRlZmluZWQnXSxcbiAgICAgICAgICAgIFsvW0FfWmEtel0qKF9UT18pW0FfWmEtel0qLywgJ3ByZWRlZmluZWQnXSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgWy9bYS16QS1aX11cXHcqLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3JzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHR5cGVLZXl3b3Jkcyc6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmaW5lS2V5d29yZHMnOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudCc6ICdjb25zdGFudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5WYXJpYWJsZXMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5GdW5jdGlvbnMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbL1s7Ll0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzE2I1swLTlhLWZBLUZdKy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzIjWzAtOV9dKy8sICdudW1iZXIuYmluYXJ5J10sXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHN0cmluZ19kcScgfV0sXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzdHJpbmdfc3EnIH1dLFxuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQHB1c2gnXSxcbiAgICAgICAgICAgIFtcIlxcXFwqL1wiLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDI6IFtcbiAgICAgICAgICAgIFsvW15cXCgqXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXChcXCovLCAnY29tbWVudCcsICdAcHVzaCddLFxuICAgICAgICAgICAgW1wiXFxcXCpcXFxcKVwiLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXCgqXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50JywgJ0Bjb21tZW50MiddLFxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdfZHE6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdfc3E6IFtcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9