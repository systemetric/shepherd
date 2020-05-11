(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.js ***!
  \******************************************************************************/
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
        lineComment: ';;',
    },
    brackets: [['(', ')'], ['{', '}'], ['[', ']']],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.clj',
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
    ],
    keywords: [
        'ns',
        'ns-unmap',
        'create-ns',
        'in-ns',
        'fn',
        'def',
        'defn',
        'defmacro',
        'defmulti',
        'defonce',
        'require',
        'import',
        'new',
        'refer',
        'pos',
        'pos?',
        'filter',
        'map',
        'reduce',
        'repeat',
        'key',
        'rest',
        'concat',
        'into',
        'reverse',
        'iterate',
        'range',
        'drop',
        'drop-while',
        'take',
        'take-while',
        'neg',
        'neg?',
        'bound-fn',
        'if',
        'if-not',
        'if-let',
        'case,',
        'contains',
        'conj',
        'disj',
        'sort',
        'get',
        'assoc',
        'merge',
        'keys',
        'vals',
        'nth',
        'first',
        'last',
        'count',
        'contains?',
        'cond',
        'condp',
        'cond->',
        'cond->>',
        'when',
        'while',
        'when-not',
        'when-let',
        'when-first',
        'do',
        'future',
        'comment',
        'doto',
        'locking',
        'proxy',
        'println',
        'type',
        'meta',
        'var',
        'as->',
        'reify',
        'deftype',
        'defrecord',
        'defprotocol',
        'extend',
        'extend-protocol',
        'extend-type',
        'specify',
        'specify!',
        'try',
        'catch',
        'finally',
        'let',
        'letfn',
        'binding',
        'loop',
        'for',
        'seq',
        'doseq',
        'dotimes',
        'when-let',
        'if-let',
        'when-some',
        'if-some',
        'this-as',
        'defmethod',
        'testing',
        'deftest',
        'are',
        'use-fixtures',
        'use',
        'remove',
        'run',
        'run*',
        'fresh',
        'alt!',
        'alt!!',
        'go',
        'go-loop',
        'thread',
        'boolean',
        'str',
    ],
    constants: ['true', 'false', 'nil'],
    operators: [
        '=',
        'not=',
        '<',
        '<=',
        '>',
        '>=',
        'and',
        'or',
        'not',
        'inc',
        'dec',
        'max',
        'min',
        'rem',
        'bit-and',
        'bit-or',
        'bit-xor',
        'bit-not',
    ],
    tokenizer: {
        root: [
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/, 'number.float'],
            [
                /(?:\b(?:(ns|def|defn|defn-|defmacro|defmulti|defonce|ns|ns-unmap|fn))(?![\w-]))(\s+)((?:\w|\-|\!|\?)*)/,
                ['keyword', 'white', 'variable'],
            ],
            [
                /[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@constants': 'constant',
                        '@operators': 'operators',
                        '@default': 'identifier',
                    },
                },
            ],
            [/\/#"(?:\.|(?:\")|[^""\n])*"\/g/, 'regexp'],
            { include: '@whitespace' },
            { include: '@strings' },
        ],
        whitespace: [[/[ \t\r\n]+/, 'white'], [/;;.*$/, 'comment']],
        strings: [
            [/"$/, 'string', '@popall'],
            [/"(?=.)/, 'string', '@multiLineString'],
        ],
        multiLineString: [
            [/\\./, 'string.escape'],
            [/"/, 'string', '@popall'],
            [/.(?=.*")/, 'string'],
            [/.*\\$/, 'string'],
            [/.*$/, 'string', '@popall'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2Nsb2p1cmUvY2xvanVyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQSx3QkFBd0I7QUFDeEIsS0FBSztBQUNMLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVMsU0FBUyxZQUFZLDZCQUE2QjtBQUMzRCxTQUFTLG1EQUFtRDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJzs7JyxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbWycoJywgJyknXSwgWyd7JywgJ30nXSwgWydbJywgJ10nXV0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICBdLFxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIHRva2VuUG9zdGZpeDogJy5jbGonLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ25zJyxcbiAgICAgICAgJ25zLXVubWFwJyxcbiAgICAgICAgJ2NyZWF0ZS1ucycsXG4gICAgICAgICdpbi1ucycsXG4gICAgICAgICdmbicsXG4gICAgICAgICdkZWYnLFxuICAgICAgICAnZGVmbicsXG4gICAgICAgICdkZWZtYWNybycsXG4gICAgICAgICdkZWZtdWx0aScsXG4gICAgICAgICdkZWZvbmNlJyxcbiAgICAgICAgJ3JlcXVpcmUnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdyZWZlcicsXG4gICAgICAgICdwb3MnLFxuICAgICAgICAncG9zPycsXG4gICAgICAgICdmaWx0ZXInLFxuICAgICAgICAnbWFwJyxcbiAgICAgICAgJ3JlZHVjZScsXG4gICAgICAgICdyZXBlYXQnLFxuICAgICAgICAna2V5JyxcbiAgICAgICAgJ3Jlc3QnLFxuICAgICAgICAnY29uY2F0JyxcbiAgICAgICAgJ2ludG8nLFxuICAgICAgICAncmV2ZXJzZScsXG4gICAgICAgICdpdGVyYXRlJyxcbiAgICAgICAgJ3JhbmdlJyxcbiAgICAgICAgJ2Ryb3AnLFxuICAgICAgICAnZHJvcC13aGlsZScsXG4gICAgICAgICd0YWtlJyxcbiAgICAgICAgJ3Rha2Utd2hpbGUnLFxuICAgICAgICAnbmVnJyxcbiAgICAgICAgJ25lZz8nLFxuICAgICAgICAnYm91bmQtZm4nLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaWYtbm90JyxcbiAgICAgICAgJ2lmLWxldCcsXG4gICAgICAgICdjYXNlLCcsXG4gICAgICAgICdjb250YWlucycsXG4gICAgICAgICdjb25qJyxcbiAgICAgICAgJ2Rpc2onLFxuICAgICAgICAnc29ydCcsXG4gICAgICAgICdnZXQnLFxuICAgICAgICAnYXNzb2MnLFxuICAgICAgICAnbWVyZ2UnLFxuICAgICAgICAna2V5cycsXG4gICAgICAgICd2YWxzJyxcbiAgICAgICAgJ250aCcsXG4gICAgICAgICdmaXJzdCcsXG4gICAgICAgICdsYXN0JyxcbiAgICAgICAgJ2NvdW50JyxcbiAgICAgICAgJ2NvbnRhaW5zPycsXG4gICAgICAgICdjb25kJyxcbiAgICAgICAgJ2NvbmRwJyxcbiAgICAgICAgJ2NvbmQtPicsXG4gICAgICAgICdjb25kLT4+JyxcbiAgICAgICAgJ3doZW4nLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnd2hlbi1ub3QnLFxuICAgICAgICAnd2hlbi1sZXQnLFxuICAgICAgICAnd2hlbi1maXJzdCcsXG4gICAgICAgICdkbycsXG4gICAgICAgICdmdXR1cmUnLFxuICAgICAgICAnY29tbWVudCcsXG4gICAgICAgICdkb3RvJyxcbiAgICAgICAgJ2xvY2tpbmcnLFxuICAgICAgICAncHJveHknLFxuICAgICAgICAncHJpbnRsbicsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ21ldGEnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ2FzLT4nLFxuICAgICAgICAncmVpZnknLFxuICAgICAgICAnZGVmdHlwZScsXG4gICAgICAgICdkZWZyZWNvcmQnLFxuICAgICAgICAnZGVmcHJvdG9jb2wnLFxuICAgICAgICAnZXh0ZW5kJyxcbiAgICAgICAgJ2V4dGVuZC1wcm90b2NvbCcsXG4gICAgICAgICdleHRlbmQtdHlwZScsXG4gICAgICAgICdzcGVjaWZ5JyxcbiAgICAgICAgJ3NwZWNpZnkhJyxcbiAgICAgICAgJ3RyeScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ2xldCcsXG4gICAgICAgICdsZXRmbicsXG4gICAgICAgICdiaW5kaW5nJyxcbiAgICAgICAgJ2xvb3AnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ3NlcScsXG4gICAgICAgICdkb3NlcScsXG4gICAgICAgICdkb3RpbWVzJyxcbiAgICAgICAgJ3doZW4tbGV0JyxcbiAgICAgICAgJ2lmLWxldCcsXG4gICAgICAgICd3aGVuLXNvbWUnLFxuICAgICAgICAnaWYtc29tZScsXG4gICAgICAgICd0aGlzLWFzJyxcbiAgICAgICAgJ2RlZm1ldGhvZCcsXG4gICAgICAgICd0ZXN0aW5nJyxcbiAgICAgICAgJ2RlZnRlc3QnLFxuICAgICAgICAnYXJlJyxcbiAgICAgICAgJ3VzZS1maXh0dXJlcycsXG4gICAgICAgICd1c2UnLFxuICAgICAgICAncmVtb3ZlJyxcbiAgICAgICAgJ3J1bicsXG4gICAgICAgICdydW4qJyxcbiAgICAgICAgJ2ZyZXNoJyxcbiAgICAgICAgJ2FsdCEnLFxuICAgICAgICAnYWx0ISEnLFxuICAgICAgICAnZ28nLFxuICAgICAgICAnZ28tbG9vcCcsXG4gICAgICAgICd0aHJlYWQnLFxuICAgICAgICAnYm9vbGVhbicsXG4gICAgICAgICdzdHInLFxuICAgIF0sXG4gICAgY29uc3RhbnRzOiBbJ3RydWUnLCAnZmFsc2UnLCAnbmlsJ10sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICc9JyxcbiAgICAgICAgJ25vdD0nLFxuICAgICAgICAnPCcsXG4gICAgICAgICc8PScsXG4gICAgICAgICc+JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdvcicsXG4gICAgICAgICdub3QnLFxuICAgICAgICAnaW5jJyxcbiAgICAgICAgJ2RlYycsXG4gICAgICAgICdtYXgnLFxuICAgICAgICAnbWluJyxcbiAgICAgICAgJ3JlbScsXG4gICAgICAgICdiaXQtYW5kJyxcbiAgICAgICAgJ2JpdC1vcicsXG4gICAgICAgICdiaXQteG9yJyxcbiAgICAgICAgJ2JpdC1ub3QnLFxuICAgIF0sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9bKy1dP1xcZCsoPzooPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKD86XFxiKD86KG5zfGRlZnxkZWZufGRlZm4tfGRlZm1hY3JvfGRlZm11bHRpfGRlZm9uY2V8bnN8bnMtdW5tYXB8Zm4pKSg/IVtcXHctXSkpKFxccyspKCg/Olxcd3xcXC18XFwhfFxcPykqKS8sXG4gICAgICAgICAgICAgICAgWydrZXl3b3JkJywgJ3doaXRlJywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aXyNdW2EtekEtWjAtOV9cXC1cXD9cXCFcXCpdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAY29uc3RhbnRzJzogJ2NvbnN0YW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9ycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1xcLyNcIig/OlxcLnwoPzpcXFwiKXxbXlwiXCJcXG5dKSpcIlxcL2cvLCAncmVnZXhwJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sIFsvOzsuKiQvLCAnY29tbWVudCddXSxcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWy9cIiQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXCIoPz0uKS8sICdzdHJpbmcnLCAnQG11bHRpTGluZVN0cmluZyddLFxuICAgICAgICBdLFxuICAgICAgICBtdWx0aUxpbmVTdHJpbmc6IFtcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8uKD89LipcIikvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLy4qXFxcXCQvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLy4qJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==