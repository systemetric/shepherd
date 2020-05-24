(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js ***!
  \****************************************************************************/
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

// Allow for running under nodejs/requirejs in tests
var _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);
var conf = {
    comments: {
        lineComment: '#',
        blockComment: ['\'\'\'', '\'\'\''],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$"),
            action: { indentAction: _monaco.languages.IndentAction.Indent }
        }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp("^\\s*#region\\b"),
            end: new RegExp("^\\s*#endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.python',
    keywords: [
        'and',
        'as',
        'assert',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'exec',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'None',
        'not',
        'or',
        'pass',
        'print',
        'raise',
        'return',
        'self',
        'try',
        'while',
        'with',
        'yield',
        'int',
        'float',
        'long',
        'complex',
        'hex',
        'abs',
        'all',
        'any',
        'apply',
        'basestring',
        'bin',
        'bool',
        'buffer',
        'bytearray',
        'callable',
        'chr',
        'classmethod',
        'cmp',
        'coerce',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'execfile',
        'file',
        'filter',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'id',
        'input',
        'intern',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'locals',
        'list',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'print',
        'property',
        'reversed',
        'range',
        'raw_input',
        'reduce',
        'reload',
        'repr',
        'reversed',
        'round',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'unichr',
        'unicode',
        'vars',
        'xrange',
        'zip',
        'True',
        'False',
        '__dict__',
        '__methods__',
        '__members__',
        '__class__',
        '__bases__',
        '__name__',
        '__mro__',
        '__subclasses__',
        '__init__',
        '__import__'
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z]\w*/, 'tag'],
            [/[a-zA-Z]\w*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^#.*$)/, 'comment'],
            [/('''.*''')|(""".*""")/, 'string'],
            [/'''.*$/, 'string', '@endDocString'],
            [/""".*$/, 'string', '@endDblDocString']
        ],
        endDocString: [
            [/\\'/, 'string'],
            [/.*'''/, 'string', '@popall'],
            [/.*$/, 'string']
        ],
        endDblDocString: [
            [/\\"/, 'string'],
            [/.*"""/, 'string', '@popall'],
            [/.*$/, 'string']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/.(?=.*')/, 'string'],
            [/.*\\$/, 'string'],
            [/.*$/, 'string', '@popall']
        ],
        dblStringBody: [
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/.(?=.*")/, 'string'],
            [/.*\\$/, 'string'],
            [/.*$/, 'string', '@popall']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3B5dGhvbi9weXRob24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMkNBQTJDO0FBQ3BELFNBQVMsd0RBQXdEO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsb0RBQW9EO0FBQzdELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjM0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuLy8gQWxsb3cgZm9yIHJ1bm5pbmcgdW5kZXIgbm9kZWpzL3JlcXVpcmVqcyBpbiB0ZXN0c1xudmFyIF9tb25hY28gPSAodHlwZW9mIG1vbmFjbyA9PT0gJ3VuZGVmaW5lZCcgPyBzZWxmLm1vbmFjbyA6IG1vbmFjbyk7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJ1xcJ1xcJ1xcJycsICdcXCdcXCdcXCcnXSxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJ10gfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXSxcbiAgICBvbkVudGVyUnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYmVmb3JlVGV4dDogbmV3IFJlZ0V4cChcIl5cXFxccyooPzpkZWZ8Y2xhc3N8Zm9yfGlmfGVsaWZ8ZWxzZXx3aGlsZXx0cnl8d2l0aHxmaW5hbGx5fGV4Y2VwdHxhc3luYykuKj86XFxcXHMqJFwiKSxcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IF9tb25hY28ubGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5JbmRlbnQgfVxuICAgICAgICB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG9mZlNpZGU6IHRydWUsXG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNyZWdpb25cXFxcYlwiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojZW5kcmVnaW9uXFxcXGJcIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnB5dGhvbicsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdhcycsXG4gICAgICAgICdhc3NlcnQnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnZGVmJyxcbiAgICAgICAgJ2RlbCcsXG4gICAgICAgICdlbGlmJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZXhjZXB0JyxcbiAgICAgICAgJ2V4ZWMnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdnbG9iYWwnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2lzJyxcbiAgICAgICAgJ2xhbWJkYScsXG4gICAgICAgICdOb25lJyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdvcicsXG4gICAgICAgICdwYXNzJyxcbiAgICAgICAgJ3ByaW50JyxcbiAgICAgICAgJ3JhaXNlJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdzZWxmJyxcbiAgICAgICAgJ3RyeScsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgJ2ludCcsXG4gICAgICAgICdmbG9hdCcsXG4gICAgICAgICdsb25nJyxcbiAgICAgICAgJ2NvbXBsZXgnLFxuICAgICAgICAnaGV4JyxcbiAgICAgICAgJ2FicycsXG4gICAgICAgICdhbGwnLFxuICAgICAgICAnYW55JyxcbiAgICAgICAgJ2FwcGx5JyxcbiAgICAgICAgJ2Jhc2VzdHJpbmcnLFxuICAgICAgICAnYmluJyxcbiAgICAgICAgJ2Jvb2wnLFxuICAgICAgICAnYnVmZmVyJyxcbiAgICAgICAgJ2J5dGVhcnJheScsXG4gICAgICAgICdjYWxsYWJsZScsXG4gICAgICAgICdjaHInLFxuICAgICAgICAnY2xhc3NtZXRob2QnLFxuICAgICAgICAnY21wJyxcbiAgICAgICAgJ2NvZXJjZScsXG4gICAgICAgICdjb21waWxlJyxcbiAgICAgICAgJ2NvbXBsZXgnLFxuICAgICAgICAnZGVsYXR0cicsXG4gICAgICAgICdkaWN0JyxcbiAgICAgICAgJ2RpcicsXG4gICAgICAgICdkaXZtb2QnLFxuICAgICAgICAnZW51bWVyYXRlJyxcbiAgICAgICAgJ2V2YWwnLFxuICAgICAgICAnZXhlY2ZpbGUnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdmaWx0ZXInLFxuICAgICAgICAnZm9ybWF0JyxcbiAgICAgICAgJ2Zyb3plbnNldCcsXG4gICAgICAgICdnZXRhdHRyJyxcbiAgICAgICAgJ2dsb2JhbHMnLFxuICAgICAgICAnaGFzYXR0cicsXG4gICAgICAgICdoYXNoJyxcbiAgICAgICAgJ2hlbHAnLFxuICAgICAgICAnaWQnLFxuICAgICAgICAnaW5wdXQnLFxuICAgICAgICAnaW50ZXJuJyxcbiAgICAgICAgJ2lzaW5zdGFuY2UnLFxuICAgICAgICAnaXNzdWJjbGFzcycsXG4gICAgICAgICdpdGVyJyxcbiAgICAgICAgJ2xlbicsXG4gICAgICAgICdsb2NhbHMnLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICdtYXAnLFxuICAgICAgICAnbWF4JyxcbiAgICAgICAgJ21lbW9yeXZpZXcnLFxuICAgICAgICAnbWluJyxcbiAgICAgICAgJ25leHQnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ29jdCcsXG4gICAgICAgICdvcGVuJyxcbiAgICAgICAgJ29yZCcsXG4gICAgICAgICdwb3cnLFxuICAgICAgICAncHJpbnQnLFxuICAgICAgICAncHJvcGVydHknLFxuICAgICAgICAncmV2ZXJzZWQnLFxuICAgICAgICAncmFuZ2UnLFxuICAgICAgICAncmF3X2lucHV0JyxcbiAgICAgICAgJ3JlZHVjZScsXG4gICAgICAgICdyZWxvYWQnLFxuICAgICAgICAncmVwcicsXG4gICAgICAgICdyZXZlcnNlZCcsXG4gICAgICAgICdyb3VuZCcsXG4gICAgICAgICdzZXQnLFxuICAgICAgICAnc2V0YXR0cicsXG4gICAgICAgICdzbGljZScsXG4gICAgICAgICdzb3J0ZWQnLFxuICAgICAgICAnc3RhdGljbWV0aG9kJyxcbiAgICAgICAgJ3N0cicsXG4gICAgICAgICdzdW0nLFxuICAgICAgICAnc3VwZXInLFxuICAgICAgICAndHVwbGUnLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd1bmljaHInLFxuICAgICAgICAndW5pY29kZScsXG4gICAgICAgICd2YXJzJyxcbiAgICAgICAgJ3hyYW5nZScsXG4gICAgICAgICd6aXAnLFxuICAgICAgICAnVHJ1ZScsXG4gICAgICAgICdGYWxzZScsXG4gICAgICAgICdfX2RpY3RfXycsXG4gICAgICAgICdfX21ldGhvZHNfXycsXG4gICAgICAgICdfX21lbWJlcnNfXycsXG4gICAgICAgICdfX2NsYXNzX18nLFxuICAgICAgICAnX19iYXNlc19fJyxcbiAgICAgICAgJ19fbmFtZV9fJyxcbiAgICAgICAgJ19fbXJvX18nLFxuICAgICAgICAnX19zdWJjbGFzc2VzX18nLFxuICAgICAgICAnX19pbml0X18nLFxuICAgICAgICAnX19pbXBvcnRfXydcbiAgICBdLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfVxuICAgIF0sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIFsvWyw6O10vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1t7fVxcW1xcXSgpXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQFthLXpBLVpdXFx3Ki8sICd0YWcnXSxcbiAgICAgICAgICAgIFsvW2EtekEtWl1cXHcqLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gRGVhbCB3aXRoIHdoaXRlIHNwYWNlLCBpbmNsdWRpbmcgc2luZ2xlIGFuZCBtdWx0aS1saW5lIGNvbW1lbnRzXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXFxzKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy8oXiMuKiQpLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvKCcnJy4qJycnKXwoXCJcIlwiLipcIlwiXCIpLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8nJycuKiQvLCAnc3RyaW5nJywgJ0BlbmREb2NTdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCJcIlwiLiokLywgJ3N0cmluZycsICdAZW5kRGJsRG9jU3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgZW5kRG9jU3RyaW5nOiBbXG4gICAgICAgICAgICBbL1xcXFwnLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8uKicnJy8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8uKiQvLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgZW5kRGJsRG9jU3RyaW5nOiBbXG4gICAgICAgICAgICBbL1xcXFxcIi8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvLipcIlwiXCIvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvLiokLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFJlY29nbml6ZSBoZXgsIG5lZ2F0aXZlcywgZGVjaW1hbHMsIGltYWdpbmFyaWVzLCBsb25ncywgYW5kIHNjaWVudGlmaWMgbm90YXRpb25cbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWy8tPzB4KFthYmNkZWZdfFtBQkNERUZdfFxcZCkrW2xMXT8vLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8tPyhcXGQqXFwuKT9cXGQrKFtlRV1bK1xcLV0/XFxkKyk/W2pKXT9bbExdPy8sICdudW1iZXInXVxuICAgICAgICBdLFxuICAgICAgICAvLyBSZWNvZ25pemUgc3RyaW5ncywgaW5jbHVkaW5nIHRob3NlIGJyb2tlbiBhY3Jvc3MgbGluZXMgd2l0aCBcXCAoYnV0IG5vdCB3aXRob3V0KVxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbLyckLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5lc2NhcGUnLCAnQHN0cmluZ0JvZHknXSxcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0BkYmxTdHJpbmdCb2R5J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nQm9keTogW1xuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvLig/PS4qJykvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLy4qXFxcXCQvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLy4qJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddXG4gICAgICAgIF0sXG4gICAgICAgIGRibFN0cmluZ0JvZHk6IFtcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8uKD89LipcIikvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLy4qXFxcXCQvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLy4qJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==