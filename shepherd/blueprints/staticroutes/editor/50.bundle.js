(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js ***!
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
        lineComment: '\'',
        blockComment: ['/*', '*/'],
    },
    brackets: [
        ['{', '}'], ['[', ']'], ['(', ')'], ['<', '>'],
        ['addhandler', 'end addhandler'],
        ['class', 'end class'],
        ['enum', 'end enum'],
        ['event', 'end event'],
        ['function', 'end function'],
        ['get', 'end get'],
        ['if', 'end if'],
        ['interface', 'end interface'],
        ['module', 'end module'],
        ['namespace', 'end namespace'],
        ['operator', 'end operator'],
        ['property', 'end property'],
        ['raiseevent', 'end raiseevent'],
        ['removehandler', 'end removehandler'],
        ['select', 'end select'],
        ['set', 'end set'],
        ['structure', 'end structure'],
        ['sub', 'end sub'],
        ['synclock', 'end synclock'],
        ['try', 'end try'],
        ['while', 'end while'],
        ['with', 'end with'],
        ['using', 'end using'],
        ['do', 'loop'],
        ['for', 'next']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '<', close: '>', notIn: ['string', 'comment'] },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*#Region\\b"),
            end: new RegExp("^\\s*#End Region\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.vb',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.array', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.angle', open: '<', close: '>' },
        // Special bracket statement pairs
        // according to https://msdn.microsoft.com/en-us/library/tsw2a11z.aspx
        { token: 'keyword.tag-addhandler', open: 'addhandler', close: 'end addhandler' },
        { token: 'keyword.tag-class', open: 'class', close: 'end class' },
        { token: 'keyword.tag-enum', open: 'enum', close: 'end enum' },
        { token: 'keyword.tag-event', open: 'event', close: 'end event' },
        { token: 'keyword.tag-function', open: 'function', close: 'end function' },
        { token: 'keyword.tag-get', open: 'get', close: 'end get' },
        { token: 'keyword.tag-if', open: 'if', close: 'end if' },
        { token: 'keyword.tag-interface', open: 'interface', close: 'end interface' },
        { token: 'keyword.tag-module', open: 'module', close: 'end module' },
        { token: 'keyword.tag-namespace', open: 'namespace', close: 'end namespace' },
        { token: 'keyword.tag-operator', open: 'operator', close: 'end operator' },
        { token: 'keyword.tag-property', open: 'property', close: 'end property' },
        { token: 'keyword.tag-raiseevent', open: 'raiseevent', close: 'end raiseevent' },
        { token: 'keyword.tag-removehandler', open: 'removehandler', close: 'end removehandler' },
        { token: 'keyword.tag-select', open: 'select', close: 'end select' },
        { token: 'keyword.tag-set', open: 'set', close: 'end set' },
        { token: 'keyword.tag-structure', open: 'structure', close: 'end structure' },
        { token: 'keyword.tag-sub', open: 'sub', close: 'end sub' },
        { token: 'keyword.tag-synclock', open: 'synclock', close: 'end synclock' },
        { token: 'keyword.tag-try', open: 'try', close: 'end try' },
        { token: 'keyword.tag-while', open: 'while', close: 'end while' },
        { token: 'keyword.tag-with', open: 'with', close: 'end with' },
        // Other pairs
        { token: 'keyword.tag-using', open: 'using', close: 'end using' },
        { token: 'keyword.tag-do', open: 'do', close: 'loop' },
        { token: 'keyword.tag-for', open: 'for', close: 'next' }
    ],
    keywords: [
        'AddHandler', 'AddressOf', 'Alias', 'And', 'AndAlso', 'As', 'Async', 'Boolean', 'ByRef', 'Byte', 'ByVal', 'Call',
        'Case', 'Catch', 'CBool', 'CByte', 'CChar', 'CDate', 'CDbl', 'CDec', 'Char', 'CInt', 'Class', 'CLng',
        'CObj', 'Const', 'Continue', 'CSByte', 'CShort', 'CSng', 'CStr', 'CType', 'CUInt', 'CULng', 'CUShort',
        'Date', 'Decimal', 'Declare', 'Default', 'Delegate', 'Dim', 'DirectCast', 'Do', 'Double', 'Each', 'Else',
        'ElseIf', 'End', 'EndIf', 'Enum', 'Erase', 'Error', 'Event', 'Exit', 'False', 'Finally', 'For', 'Friend',
        'Function', 'Get', 'GetType', 'GetXMLNamespace', 'Global', 'GoSub', 'GoTo', 'Handles', 'If', 'Implements',
        'Imports', 'In', 'Inherits', 'Integer', 'Interface', 'Is', 'IsNot', 'Let', 'Lib', 'Like', 'Long', 'Loop',
        'Me', 'Mod', 'Module', 'MustInherit', 'MustOverride', 'MyBase', 'MyClass', 'NameOf', 'Namespace', 'Narrowing', 'New',
        'Next', 'Not', 'Nothing', 'NotInheritable', 'NotOverridable', 'Object', 'Of', 'On', 'Operator', 'Option',
        'Optional', 'Or', 'OrElse', 'Out', 'Overloads', 'Overridable', 'Overrides', 'ParamArray', 'Partial',
        'Private', 'Property', 'Protected', 'Public', 'RaiseEvent', 'ReadOnly', 'ReDim', 'RemoveHandler', 'Resume',
        'Return', 'SByte', 'Select', 'Set', 'Shadows', 'Shared', 'Short', 'Single', 'Static', 'Step', 'Stop',
        'String', 'Structure', 'Sub', 'SyncLock', 'Then', 'Throw', 'To', 'True', 'Try', 'TryCast', 'TypeOf',
        'UInteger', 'ULong', 'UShort', 'Using', 'Variant', 'Wend', 'When', 'While', 'Widening', 'With', 'WithEvents',
        'WriteOnly', 'Xor'
    ],
    tagwords: [
        'If', 'Sub', 'Select', 'Try', 'Class', 'Enum',
        'Function', 'Get', 'Interface', 'Module', 'Namespace', 'Operator', 'Set', 'Structure', 'Using', 'While', 'With',
        'Do', 'Loop', 'For', 'Next', 'Property', 'Continue', 'AddHandler', 'RemoveHandler', 'Event', 'RaiseEvent', 'SyncLock'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /U?[DI%L&S@]?/,
    floatsuffix: /[R#F!]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },
            // special ending tag-words
            [/next(?!\w)/, { token: 'keyword.tag-for' }],
            [/loop(?!\w)/, { token: 'keyword.tag-do' }],
            // usual ending tags
            [/end\s+(?!for|do)([a-zA-Z_]\w*)/, { token: 'keyword.tag-$1' }],
            // identifiers, tagwords, and keywords
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@tagwords': { token: 'keyword.tag-$0' },
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }],
            // Preprocessor directive
            [/^\s*#\w+/, 'keyword'],
            // numbers
            [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
            [/&0[0-7]+(@integersuffix)/, 'number.octal'],
            [/\d+(@integersuffix)/, 'number'],
            // date literal
            [/#.*#/, 'number'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/(\'|REM(?!\w)).*$/, 'comment'],
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"C?/, 'string', '@pop']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3ZiL3ZiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQ0FBcUMsWUFBWSxHQUFHO0FBQzdELFNBQVMsa0RBQWtEO0FBQzNELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0E7QUFDQSxTQUFTLCtFQUErRTtBQUN4RixTQUFTLGdFQUFnRTtBQUN6RSxTQUFTLDZEQUE2RDtBQUN0RSxTQUFTLGdFQUFnRTtBQUN6RSxTQUFTLHlFQUF5RTtBQUNsRixTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLHVEQUF1RDtBQUNoRSxTQUFTLDRFQUE0RTtBQUNyRixTQUFTLG1FQUFtRTtBQUM1RSxTQUFTLDRFQUE0RTtBQUNyRixTQUFTLHlFQUF5RTtBQUNsRixTQUFTLHlFQUF5RTtBQUNsRixTQUFTLCtFQUErRTtBQUN4RixTQUFTLHdGQUF3RjtBQUNqRyxTQUFTLG1FQUFtRTtBQUM1RSxTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLDRFQUE0RTtBQUNyRixTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLHlFQUF5RTtBQUNsRixTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLGdFQUFnRTtBQUN6RSxTQUFTLDZEQUE2RDtBQUN0RTtBQUNBLFNBQVMsZ0VBQWdFO0FBQ3pFLFNBQVMscURBQXFEO0FBQzlELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBLGdEQUFnRCwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiNTAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICdcXCcnLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sIFsnWycsICddJ10sIFsnKCcsICcpJ10sIFsnPCcsICc+J10sXG4gICAgICAgIFsnYWRkaGFuZGxlcicsICdlbmQgYWRkaGFuZGxlciddLFxuICAgICAgICBbJ2NsYXNzJywgJ2VuZCBjbGFzcyddLFxuICAgICAgICBbJ2VudW0nLCAnZW5kIGVudW0nXSxcbiAgICAgICAgWydldmVudCcsICdlbmQgZXZlbnQnXSxcbiAgICAgICAgWydmdW5jdGlvbicsICdlbmQgZnVuY3Rpb24nXSxcbiAgICAgICAgWydnZXQnLCAnZW5kIGdldCddLFxuICAgICAgICBbJ2lmJywgJ2VuZCBpZiddLFxuICAgICAgICBbJ2ludGVyZmFjZScsICdlbmQgaW50ZXJmYWNlJ10sXG4gICAgICAgIFsnbW9kdWxlJywgJ2VuZCBtb2R1bGUnXSxcbiAgICAgICAgWyduYW1lc3BhY2UnLCAnZW5kIG5hbWVzcGFjZSddLFxuICAgICAgICBbJ29wZXJhdG9yJywgJ2VuZCBvcGVyYXRvciddLFxuICAgICAgICBbJ3Byb3BlcnR5JywgJ2VuZCBwcm9wZXJ0eSddLFxuICAgICAgICBbJ3JhaXNlZXZlbnQnLCAnZW5kIHJhaXNlZXZlbnQnXSxcbiAgICAgICAgWydyZW1vdmVoYW5kbGVyJywgJ2VuZCByZW1vdmVoYW5kbGVyJ10sXG4gICAgICAgIFsnc2VsZWN0JywgJ2VuZCBzZWxlY3QnXSxcbiAgICAgICAgWydzZXQnLCAnZW5kIHNldCddLFxuICAgICAgICBbJ3N0cnVjdHVyZScsICdlbmQgc3RydWN0dXJlJ10sXG4gICAgICAgIFsnc3ViJywgJ2VuZCBzdWInXSxcbiAgICAgICAgWydzeW5jbG9jaycsICdlbmQgc3luY2xvY2snXSxcbiAgICAgICAgWyd0cnknLCAnZW5kIHRyeSddLFxuICAgICAgICBbJ3doaWxlJywgJ2VuZCB3aGlsZSddLFxuICAgICAgICBbJ3dpdGgnLCAnZW5kIHdpdGgnXSxcbiAgICAgICAgWyd1c2luZycsICdlbmQgdXNpbmcnXSxcbiAgICAgICAgWydkbycsICdsb29wJ10sXG4gICAgICAgIFsnZm9yJywgJ25leHQnXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNSZWdpb25cXFxcYlwiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojRW5kIFJlZ2lvblxcXFxiXCIpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy52YicsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hcnJheScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnLCBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgLy8gU3BlY2lhbCBicmFja2V0IHN0YXRlbWVudCBwYWlyc1xuICAgICAgICAvLyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS90c3cyYTExei5hc3B4XG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1hZGRoYW5kbGVyJywgb3BlbjogJ2FkZGhhbmRsZXInLCBjbG9zZTogJ2VuZCBhZGRoYW5kbGVyJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctY2xhc3MnLCBvcGVuOiAnY2xhc3MnLCBjbG9zZTogJ2VuZCBjbGFzcycgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWVudW0nLCBvcGVuOiAnZW51bScsIGNsb3NlOiAnZW5kIGVudW0nIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1ldmVudCcsIG9wZW46ICdldmVudCcsIGNsb3NlOiAnZW5kIGV2ZW50JyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZnVuY3Rpb24nLCBvcGVuOiAnZnVuY3Rpb24nLCBjbG9zZTogJ2VuZCBmdW5jdGlvbicgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWdldCcsIG9wZW46ICdnZXQnLCBjbG9zZTogJ2VuZCBnZXQnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1pZicsIG9wZW46ICdpZicsIGNsb3NlOiAnZW5kIGlmJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctaW50ZXJmYWNlJywgb3BlbjogJ2ludGVyZmFjZScsIGNsb3NlOiAnZW5kIGludGVyZmFjZScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLW1vZHVsZScsIG9wZW46ICdtb2R1bGUnLCBjbG9zZTogJ2VuZCBtb2R1bGUnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1uYW1lc3BhY2UnLCBvcGVuOiAnbmFtZXNwYWNlJywgY2xvc2U6ICdlbmQgbmFtZXNwYWNlJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctb3BlcmF0b3InLCBvcGVuOiAnb3BlcmF0b3InLCBjbG9zZTogJ2VuZCBvcGVyYXRvcicgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXByb3BlcnR5Jywgb3BlbjogJ3Byb3BlcnR5JywgY2xvc2U6ICdlbmQgcHJvcGVydHknIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1yYWlzZWV2ZW50Jywgb3BlbjogJ3JhaXNlZXZlbnQnLCBjbG9zZTogJ2VuZCByYWlzZWV2ZW50JyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctcmVtb3ZlaGFuZGxlcicsIG9wZW46ICdyZW1vdmVoYW5kbGVyJywgY2xvc2U6ICdlbmQgcmVtb3ZlaGFuZGxlcicgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXNlbGVjdCcsIG9wZW46ICdzZWxlY3QnLCBjbG9zZTogJ2VuZCBzZWxlY3QnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1zZXQnLCBvcGVuOiAnc2V0JywgY2xvc2U6ICdlbmQgc2V0JyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc3RydWN0dXJlJywgb3BlbjogJ3N0cnVjdHVyZScsIGNsb3NlOiAnZW5kIHN0cnVjdHVyZScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXN1YicsIG9wZW46ICdzdWInLCBjbG9zZTogJ2VuZCBzdWInIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1zeW5jbG9jaycsIG9wZW46ICdzeW5jbG9jaycsIGNsb3NlOiAnZW5kIHN5bmNsb2NrJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctdHJ5Jywgb3BlbjogJ3RyeScsIGNsb3NlOiAnZW5kIHRyeScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXdoaWxlJywgb3BlbjogJ3doaWxlJywgY2xvc2U6ICdlbmQgd2hpbGUnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy13aXRoJywgb3BlbjogJ3dpdGgnLCBjbG9zZTogJ2VuZCB3aXRoJyB9LFxuICAgICAgICAvLyBPdGhlciBwYWlyc1xuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctdXNpbmcnLCBvcGVuOiAndXNpbmcnLCBjbG9zZTogJ2VuZCB1c2luZycgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWRvJywgb3BlbjogJ2RvJywgY2xvc2U6ICdsb29wJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZm9yJywgb3BlbjogJ2ZvcicsIGNsb3NlOiAnbmV4dCcgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ0FkZEhhbmRsZXInLCAnQWRkcmVzc09mJywgJ0FsaWFzJywgJ0FuZCcsICdBbmRBbHNvJywgJ0FzJywgJ0FzeW5jJywgJ0Jvb2xlYW4nLCAnQnlSZWYnLCAnQnl0ZScsICdCeVZhbCcsICdDYWxsJyxcbiAgICAgICAgJ0Nhc2UnLCAnQ2F0Y2gnLCAnQ0Jvb2wnLCAnQ0J5dGUnLCAnQ0NoYXInLCAnQ0RhdGUnLCAnQ0RibCcsICdDRGVjJywgJ0NoYXInLCAnQ0ludCcsICdDbGFzcycsICdDTG5nJyxcbiAgICAgICAgJ0NPYmonLCAnQ29uc3QnLCAnQ29udGludWUnLCAnQ1NCeXRlJywgJ0NTaG9ydCcsICdDU25nJywgJ0NTdHInLCAnQ1R5cGUnLCAnQ1VJbnQnLCAnQ1VMbmcnLCAnQ1VTaG9ydCcsXG4gICAgICAgICdEYXRlJywgJ0RlY2ltYWwnLCAnRGVjbGFyZScsICdEZWZhdWx0JywgJ0RlbGVnYXRlJywgJ0RpbScsICdEaXJlY3RDYXN0JywgJ0RvJywgJ0RvdWJsZScsICdFYWNoJywgJ0Vsc2UnLFxuICAgICAgICAnRWxzZUlmJywgJ0VuZCcsICdFbmRJZicsICdFbnVtJywgJ0VyYXNlJywgJ0Vycm9yJywgJ0V2ZW50JywgJ0V4aXQnLCAnRmFsc2UnLCAnRmluYWxseScsICdGb3InLCAnRnJpZW5kJyxcbiAgICAgICAgJ0Z1bmN0aW9uJywgJ0dldCcsICdHZXRUeXBlJywgJ0dldFhNTE5hbWVzcGFjZScsICdHbG9iYWwnLCAnR29TdWInLCAnR29UbycsICdIYW5kbGVzJywgJ0lmJywgJ0ltcGxlbWVudHMnLFxuICAgICAgICAnSW1wb3J0cycsICdJbicsICdJbmhlcml0cycsICdJbnRlZ2VyJywgJ0ludGVyZmFjZScsICdJcycsICdJc05vdCcsICdMZXQnLCAnTGliJywgJ0xpa2UnLCAnTG9uZycsICdMb29wJyxcbiAgICAgICAgJ01lJywgJ01vZCcsICdNb2R1bGUnLCAnTXVzdEluaGVyaXQnLCAnTXVzdE92ZXJyaWRlJywgJ015QmFzZScsICdNeUNsYXNzJywgJ05hbWVPZicsICdOYW1lc3BhY2UnLCAnTmFycm93aW5nJywgJ05ldycsXG4gICAgICAgICdOZXh0JywgJ05vdCcsICdOb3RoaW5nJywgJ05vdEluaGVyaXRhYmxlJywgJ05vdE92ZXJyaWRhYmxlJywgJ09iamVjdCcsICdPZicsICdPbicsICdPcGVyYXRvcicsICdPcHRpb24nLFxuICAgICAgICAnT3B0aW9uYWwnLCAnT3InLCAnT3JFbHNlJywgJ091dCcsICdPdmVybG9hZHMnLCAnT3ZlcnJpZGFibGUnLCAnT3ZlcnJpZGVzJywgJ1BhcmFtQXJyYXknLCAnUGFydGlhbCcsXG4gICAgICAgICdQcml2YXRlJywgJ1Byb3BlcnR5JywgJ1Byb3RlY3RlZCcsICdQdWJsaWMnLCAnUmFpc2VFdmVudCcsICdSZWFkT25seScsICdSZURpbScsICdSZW1vdmVIYW5kbGVyJywgJ1Jlc3VtZScsXG4gICAgICAgICdSZXR1cm4nLCAnU0J5dGUnLCAnU2VsZWN0JywgJ1NldCcsICdTaGFkb3dzJywgJ1NoYXJlZCcsICdTaG9ydCcsICdTaW5nbGUnLCAnU3RhdGljJywgJ1N0ZXAnLCAnU3RvcCcsXG4gICAgICAgICdTdHJpbmcnLCAnU3RydWN0dXJlJywgJ1N1YicsICdTeW5jTG9jaycsICdUaGVuJywgJ1Rocm93JywgJ1RvJywgJ1RydWUnLCAnVHJ5JywgJ1RyeUNhc3QnLCAnVHlwZU9mJyxcbiAgICAgICAgJ1VJbnRlZ2VyJywgJ1VMb25nJywgJ1VTaG9ydCcsICdVc2luZycsICdWYXJpYW50JywgJ1dlbmQnLCAnV2hlbicsICdXaGlsZScsICdXaWRlbmluZycsICdXaXRoJywgJ1dpdGhFdmVudHMnLFxuICAgICAgICAnV3JpdGVPbmx5JywgJ1hvcidcbiAgICBdLFxuICAgIHRhZ3dvcmRzOiBbXG4gICAgICAgICdJZicsICdTdWInLCAnU2VsZWN0JywgJ1RyeScsICdDbGFzcycsICdFbnVtJyxcbiAgICAgICAgJ0Z1bmN0aW9uJywgJ0dldCcsICdJbnRlcmZhY2UnLCAnTW9kdWxlJywgJ05hbWVzcGFjZScsICdPcGVyYXRvcicsICdTZXQnLCAnU3RydWN0dXJlJywgJ1VzaW5nJywgJ1doaWxlJywgJ1dpdGgnLFxuICAgICAgICAnRG8nLCAnTG9vcCcsICdGb3InLCAnTmV4dCcsICdQcm9wZXJ0eScsICdDb250aW51ZScsICdBZGRIYW5kbGVyJywgJ1JlbW92ZUhhbmRsZXInLCAnRXZlbnQnLCAnUmFpc2VFdmVudCcsICdTeW5jTG9jaydcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PztcXC4sOiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgaW50ZWdlcnN1ZmZpeDogL1U/W0RJJUwmU0BdPy8sXG4gICAgZmxvYXRzdWZmaXg6IC9bUiNGIV0/LyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGVuZGluZyB0YWctd29yZHNcbiAgICAgICAgICAgIFsvbmV4dCg/IVxcdykvLCB7IHRva2VuOiAna2V5d29yZC50YWctZm9yJyB9XSxcbiAgICAgICAgICAgIFsvbG9vcCg/IVxcdykvLCB7IHRva2VuOiAna2V5d29yZC50YWctZG8nIH1dLFxuICAgICAgICAgICAgLy8gdXN1YWwgZW5kaW5nIHRhZ3NcbiAgICAgICAgICAgIFsvZW5kXFxzKyg/IWZvcnxkbykoW2EtekEtWl9dXFx3KikvLCB7IHRva2VuOiAna2V5d29yZC50YWctJDEnIH1dLFxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMsIHRhZ3dvcmRzLCBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFsvW2EtekEtWl9dXFx3Ki8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAdGFnd29yZHMnOiB7IHRva2VuOiAna2V5d29yZC50YWctJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gUHJlcHJvY2Vzc29yIGRpcmVjdGl2ZVxuICAgICAgICAgICAgWy9eXFxzKiNcXHcrLywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcZCtlKFtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoZVtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvJkhbMC05YS1mXSsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvJjBbMC03XSsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5vY3RhbCddLFxuICAgICAgICAgICAgWy9cXGQrKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRhdGUgbGl0ZXJhbFxuICAgICAgICAgICAgWy8jLiojLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddLFxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbLyhcXCd8UkVNKD8hXFx3KSkuKiQvLCAnY29tbWVudCddLFxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCJDPy8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9