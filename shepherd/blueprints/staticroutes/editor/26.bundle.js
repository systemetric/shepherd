(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js ***!
  \**************************************************************************************/
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
        blockComment: ['/*', '*/'],
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
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.objective-c',
    keywords: [
        '#import',
        '#include',
        '#define',
        '#else',
        '#endif',
        '#if',
        '#ifdef',
        '#ifndef',
        '#ident',
        '#undef',
        '@class',
        '@defs',
        '@dynamic',
        '@encode',
        '@end',
        '@implementation',
        '@interface',
        '@package',
        '@private',
        '@protected',
        '@property',
        '@protocol',
        '@public',
        '@selector',
        '@synthesize',
        '__declspec',
        'assign',
        'auto',
        'BOOL',
        'break',
        'bycopy',
        'byref',
        'case',
        'char',
        'Class',
        'const',
        'copy',
        'continue',
        'default',
        'do',
        'double',
        'else',
        'enum',
        'extern',
        'FALSE',
        'false',
        'float',
        'for',
        'goto',
        'if',
        'in',
        'int',
        'id',
        'inout',
        'IMP',
        'long',
        'nil',
        'nonatomic',
        'NULL',
        'oneway',
        'out',
        'private',
        'public',
        'protected',
        'readwrite',
        'readonly',
        'register',
        'return',
        'SEL',
        'self',
        'short',
        'signed',
        'sizeof',
        'static',
        'struct',
        'super',
        'switch',
        'typedef',
        'TRUE',
        'true',
        'union',
        'unsigned',
        'volatile',
        'void',
        'while',
    ],
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    tokenizer: {
        root: [
            { include: '@comments' },
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()<>]/, '@brackets'],
            [/[a-zA-Z@#]\w*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }],
            [/[<>=\\+\\-\\*\\/\\^\\|\\~,]|and\\b|or\\b|not\\b]/, 'operator'],
        ],
        whitespace: [
            [/\s+/, 'white'],
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment'],
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment',],
        ],
        numbers: [
            [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, 'number.hex'],
            [/@decimal((\.@decpart)?([eE][\-+]?@decpart)?)[fF]*/, {
                    cases: {
                        '(\\d)*': 'number',
                        '$0': 'number.float'
                    }
                }]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL29iamVjdGl2ZS1jL29iamVjdGl2ZS1jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcub2JqZWN0aXZlLWMnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICcjaW1wb3J0JyxcbiAgICAgICAgJyNpbmNsdWRlJyxcbiAgICAgICAgJyNkZWZpbmUnLFxuICAgICAgICAnI2Vsc2UnLFxuICAgICAgICAnI2VuZGlmJyxcbiAgICAgICAgJyNpZicsXG4gICAgICAgICcjaWZkZWYnLFxuICAgICAgICAnI2lmbmRlZicsXG4gICAgICAgICcjaWRlbnQnLFxuICAgICAgICAnI3VuZGVmJyxcbiAgICAgICAgJ0BjbGFzcycsXG4gICAgICAgICdAZGVmcycsXG4gICAgICAgICdAZHluYW1pYycsXG4gICAgICAgICdAZW5jb2RlJyxcbiAgICAgICAgJ0BlbmQnLFxuICAgICAgICAnQGltcGxlbWVudGF0aW9uJyxcbiAgICAgICAgJ0BpbnRlcmZhY2UnLFxuICAgICAgICAnQHBhY2thZ2UnLFxuICAgICAgICAnQHByaXZhdGUnLFxuICAgICAgICAnQHByb3RlY3RlZCcsXG4gICAgICAgICdAcHJvcGVydHknLFxuICAgICAgICAnQHByb3RvY29sJyxcbiAgICAgICAgJ0BwdWJsaWMnLFxuICAgICAgICAnQHNlbGVjdG9yJyxcbiAgICAgICAgJ0BzeW50aGVzaXplJyxcbiAgICAgICAgJ19fZGVjbHNwZWMnLFxuICAgICAgICAnYXNzaWduJyxcbiAgICAgICAgJ2F1dG8nLFxuICAgICAgICAnQk9PTCcsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdieWNvcHknLFxuICAgICAgICAnYnlyZWYnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjaGFyJyxcbiAgICAgICAgJ0NsYXNzJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NvcHknLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdkbycsXG4gICAgICAgICdkb3VibGUnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2V4dGVybicsXG4gICAgICAgICdGQUxTRScsXG4gICAgICAgICdmYWxzZScsXG4gICAgICAgICdmbG9hdCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZ290bycsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpbnQnLFxuICAgICAgICAnaWQnLFxuICAgICAgICAnaW5vdXQnLFxuICAgICAgICAnSU1QJyxcbiAgICAgICAgJ2xvbmcnLFxuICAgICAgICAnbmlsJyxcbiAgICAgICAgJ25vbmF0b21pYycsXG4gICAgICAgICdOVUxMJyxcbiAgICAgICAgJ29uZXdheScsXG4gICAgICAgICdvdXQnLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdwdWJsaWMnLFxuICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgJ3JlYWR3cml0ZScsXG4gICAgICAgICdyZWFkb25seScsXG4gICAgICAgICdyZWdpc3RlcicsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnU0VMJyxcbiAgICAgICAgJ3NlbGYnLFxuICAgICAgICAnc2hvcnQnLFxuICAgICAgICAnc2lnbmVkJyxcbiAgICAgICAgJ3NpemVvZicsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAnc3RydWN0JyxcbiAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICd0eXBlZGVmJyxcbiAgICAgICAgJ1RSVUUnLFxuICAgICAgICAndHJ1ZScsXG4gICAgICAgICd1bmlvbicsXG4gICAgICAgICd1bnNpZ25lZCcsXG4gICAgICAgICd2b2xhdGlsZScsXG4gICAgICAgICd2b2lkJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICBdLFxuICAgIGRlY3BhcnQ6IC9cXGQoXz9cXGQpKi8sXG4gICAgZGVjaW1hbDogLzB8QGRlY3BhcnQvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbL1ssOjtdLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9be31cXFtcXF0oKTw+XS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvW2EtekEtWkAjXVxcdyovLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvWzw+PVxcXFwrXFxcXC1cXFxcKlxcXFwvXFxcXF5cXFxcfFxcXFx+LF18YW5kXFxcXGJ8b3JcXFxcYnxub3RcXFxcYl0vLCAnb3BlcmF0b3InXSxcbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9cXHMrLywgJ3doaXRlJ10sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRzOiBbXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXConLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWydcXFxcL1xcXFwvKy4qJywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWydcXFxcKlxcXFwvJywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWycuJywgJ2NvbW1lbnQnLF0sXG4gICAgICAgIF0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSooXz9bMC05YS1mQS1GXSkqLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvQGRlY2ltYWwoKFxcLkBkZWNwYXJ0KT8oW2VFXVtcXC0rXT9AZGVjcGFydCk/KVtmRl0qLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyhcXFxcZCkqJzogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnJDAnOiAnbnVtYmVyLmZsb2F0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gUmVjb2duaXplIHN0cmluZ3MsIGluY2x1ZGluZyB0aG9zZSBicm9rZW4gYWNyb3NzIGxpbmVzIHdpdGggXFwgKGJ1dCBub3Qgd2l0aG91dClcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWy8nJC8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuZXNjYXBlJywgJ0BzdHJpbmdCb2R5J10sXG4gICAgICAgICAgICBbL1wiJC8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLmVzY2FwZScsICdAZGJsU3RyaW5nQm9keSddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ0JvZHk6IFtcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbLy4oPz0uKicpLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8uKlxcXFwkLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8uKiQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXVxuICAgICAgICBdLFxuICAgICAgICBkYmxTdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvLig/PS4qXCIpLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8uKlxcXFwkLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8uKiQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=