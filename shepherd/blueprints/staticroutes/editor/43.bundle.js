(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js ***!
  \************************************************************************/
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
    wordPattern: /(#?-?\d*\.\d\w*%?)|([@$#!.:]?[\w-?]+%?)|[@#!.]/g,
    comments: {
        blockComment: ['/*', '*/'],
        lineComment: '//'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
            end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.scss',
    ws: '[ \t\n\r\f]*',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [
            { include: '@selector' },
        ],
        selector: [
            { include: '@comments' },
            { include: '@import' },
            { include: '@variabledeclaration' },
            { include: '@warndebug' },
            ['[@](include)', { token: 'keyword', next: '@includedeclaration' }],
            ['[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)', { token: 'keyword', next: '@keyframedeclaration' }],
            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],
            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],
            ['[@](function)', { token: 'keyword', next: '@functiondeclaration' }],
            ['[@](mixin)', { token: 'keyword', next: '@mixindeclaration' }],
            ['url(\\-prefix)?\\(', { token: 'meta', next: '@urldeclaration' }],
            { include: '@controlstatement' },
            { include: '@selectorname' },
            ['[&\\*]', 'tag'],
            ['[>\\+,]', 'delimiter'],
            ['\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],
            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],
        ],
        selectorbody: [
            ['[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],
            { include: '@selector' },
            ['[@](extend)', { token: 'keyword', next: '@extendbody' }],
            ['[@](return)', { token: 'keyword', next: '@declarationbody' }],
            ['}', { token: 'delimiter.curly', next: '@pop' }],
        ],
        selectorname: [
            ['#{', { token: 'meta', next: '@variableinterpolation' }],
            ['(\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'],
        ],
        selectorattribute: [
            { include: '@term' },
            [']', { token: 'delimiter.bracket', next: '@pop' }],
        ],
        term: [
            { include: '@comments' },
            ['url(\\-prefix)?\\(', { token: 'meta', next: '@urldeclaration' }],
            { include: '@functioninvocation' },
            { include: '@numbers' },
            { include: '@strings' },
            { include: '@variablereference' },
            ['(and\\b|or\\b|not\\b)', 'operator'],
            { include: '@name' },
            ['([<>=\\+\\-\\*\\/\\^\\|\\~,])', 'operator'],
            [',', 'delimiter'],
            ['!default', 'literal'],
            ['\\(', { token: 'delimiter.parenthesis', next: '@parenthizedterm' }],
        ],
        rulevalue: [
            { include: '@term' },
            ['!important', 'literal'],
            [';', 'delimiter', '@pop'],
            ['{', { token: 'delimiter.curly', switchTo: '@nestedproperty' }],
            ['(?=})', { token: '', next: '@pop' }],
        ],
        nestedproperty: [
            ['[*_]?@identifier@ws:', 'attribute.name', '@rulevalue'],
            { include: '@comments' },
            ['}', { token: 'delimiter.curly', next: '@pop' }],
        ],
        warndebug: [
            ['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }],
        ],
        import: [
            ['[@](import)', { token: 'keyword', next: '@declarationbody' }],
        ],
        variabledeclaration: [
            ['\\$@identifier@ws:', 'variable.decl', '@declarationbody'],
        ],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'meta', next: '@pop' }],
        ],
        parenthizedterm: [
            { include: '@term' },
            ['\\)', { token: 'delimiter.parenthesis', next: '@pop' }],
        ],
        declarationbody: [
            { include: '@term' },
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }],
        ],
        extendbody: [
            { include: '@selectorname' },
            ['!optional', 'literal'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }],
        ],
        variablereference: [
            ['\\$@identifier', 'variable.ref'],
            ['\\.\\.\\.', 'operator'],
            ['#{', { token: 'meta', next: '@variableinterpolation' }],
        ],
        variableinterpolation: [
            { include: '@variablereference' },
            ['}', { token: 'meta', next: '@pop' }],
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment'],
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment'],
        ],
        name: [
            ['@identifier', 'attribute.value'],
        ],
        numbers: [
            ['(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?', { token: 'number', next: '@units' }],
            ['#[0-9a-fA-F_]+(?!\\w)', 'number.hex'],
        ],
        units: [
            ['(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?', 'number', '@pop']
        ],
        functiondeclaration: [
            ['@identifier@ws\\(', { token: 'meta', next: '@parameterdeclaration' }],
            ['{', { token: 'delimiter.curly', switchTo: '@functionbody' }],
        ],
        mixindeclaration: [
            // mixin with parameters
            ['@identifier@ws\\(', { token: 'meta', next: '@parameterdeclaration' }],
            // mixin without parameters
            ['@identifier', 'meta'],
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],
        ],
        parameterdeclaration: [
            ['\\$@identifier@ws:', 'variable.decl'],
            ['\\.\\.\\.', 'operator'],
            [',', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'meta', next: '@pop' }],
        ],
        includedeclaration: [
            { include: '@functioninvocation' },
            ['@identifier', 'meta'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }],
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],
        ],
        keyframedeclaration: [
            ['@identifier', 'meta'],
            ['{', { token: 'delimiter.curly', switchTo: '@keyframebody' }],
        ],
        keyframebody: [
            { include: '@term' },
            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],
            ['}', { token: 'delimiter.curly', next: '@pop' }],
        ],
        controlstatement: [
            ['[@](if|else|for|while|each|media)', { token: 'keyword.flow', next: '@controlstatementdeclaration' }],
        ],
        controlstatementdeclaration: [
            ['(in|from|through|if|to)\\b', { token: 'keyword.flow' }],
            { include: '@term' },
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],
        ],
        functionbody: [
            ['[@](return)', { token: 'keyword' }],
            { include: '@variabledeclaration' },
            { include: '@term' },
            { include: '@controlstatement' },
            [';', 'delimiter'],
            ['}', { token: 'delimiter.curly', next: '@pop' }],
        ],
        functioninvocation: [
            ['@identifier\\(', { token: 'meta', next: '@functionarguments' }],
        ],
        functionarguments: [
            ['\\$@identifier@ws:', 'attribute.name'],
            ['[,]', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'meta', next: '@pop' }],
        ],
        strings: [
            ['~?"', { token: 'string.delimiter', next: '@stringenddoublequote' }],
            ['~?\'', { token: 'string.delimiter', next: '@stringendquote' }]
        ],
        stringenddoublequote: [
            ['\\\\.', 'string'],
            ['"', { token: 'string.delimiter', next: '@pop' }],
            ['.', 'string']
        ],
        stringendquote: [
            ['\\\\.', 'string'],
            ['\'', { token: 'string.delimiter', next: '@pop' }],
            ['.', 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Njc3Mvc2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxpQ0FBaUM7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyx3REFBd0Q7QUFDakU7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUksbURBQW1ELElBQUk7QUFDN0c7QUFDQSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUyxvREFBb0Q7QUFDN0QsU0FBUyx3REFBd0Q7QUFDakUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLGtDQUFrQztBQUMvQyxhQUFhLHdCQUF3QjtBQUNyQyw4QkFBOEIsZ0RBQWdEO0FBQzlFLDhFQUE4RSxpREFBaUQ7QUFDL0gsMkRBQTJELG1CQUFtQjtBQUM5RSx3Q0FBd0MsNkNBQTZDO0FBQ3JGLCtCQUErQixpREFBaUQ7QUFDaEYsNEJBQTRCLDhDQUE4QztBQUMxRSxvQ0FBb0MseUNBQXlDO0FBQzdFLGFBQWEsK0JBQStC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OEI7QUFDbkQ7QUFDQTtBQUNBLHFCQUFxQiwyREFBMkQ7QUFDaEYsc0JBQXNCLHFEQUFxRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQTBDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI0My5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICB3b3JkUGF0dGVybjogLygjPy0/XFxkKlxcLlxcZFxcdyolPyl8KFtAJCMhLjpdP1tcXHctP10rJT8pfFtAIyEuXS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJ1xuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccypcXFxcL1xcXFwqXFxcXHMqI3JlZ2lvblxcXFxiXFxcXHMqKC4qPylcXFxccypcXFxcKlxcXFwvXCIpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXGIuKlxcXFwqXFxcXC9cIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNjc3MnLFxuICAgIHdzOiAnWyBcXHRcXG5cXHJcXGZdKicsXG4gICAgaWRlbnRpZmllcjogJy0/LT8oW2EtekEtWl18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKFtcXFxcd1xcXFwtXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkqJyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxuICAgIF0sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3RvcicgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0b3I6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BpbXBvcnQnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVkZWNsYXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3YXJuZGVidWcnIH0sXG4gICAgICAgICAgICBbJ1tAXShpbmNsdWRlKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BpbmNsdWRlZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWydbQF0oa2V5ZnJhbWVzfC13ZWJraXQta2V5ZnJhbWVzfC1tb3ota2V5ZnJhbWVzfC1vLWtleWZyYW1lcyknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAa2V5ZnJhbWVkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICBbJ1tAXShwYWdlfGNvbnRlbnR8Zm9udC1mYWNlfC1tb3otZG9jdW1lbnQpJywgeyB0b2tlbjogJ2tleXdvcmQnIH1dLFxuICAgICAgICAgICAgWydbQF0oY2hhcnNldHxuYW1lc3BhY2UpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXG4gICAgICAgICAgICBbJ1tAXShmdW5jdGlvbiknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZnVuY3Rpb25kZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICBbJ1tAXShtaXhpbiknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAbWl4aW5kZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICBbJ3VybChcXFxcLXByZWZpeCk/XFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbnRyb2xzdGF0ZW1lbnQnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3JuYW1lJyB9LFxuICAgICAgICAgICAgWydbJlxcXFwqXScsICd0YWcnXSxcbiAgICAgICAgICAgIFsnWz5cXFxcKyxdJywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWydcXFxcWycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAc2VsZWN0b3JhdHRyaWJ1dGUnIH1dLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAc2VsZWN0b3Jib2R5JyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0b3Jib2R5OiBbXG4gICAgICAgICAgICBbJ1sqX10/QGlkZW50aWZpZXJAd3M6KD89KFxcXFxzfFxcXFxkfFteezt9XSpbO31dKSknLCAnYXR0cmlidXRlLm5hbWUnLCAnQHJ1bGV2YWx1ZSddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9LFxuICAgICAgICAgICAgWydbQF0oZXh0ZW5kKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BleHRlbmRib2R5JyB9XSxcbiAgICAgICAgICAgIFsnW0BdKHJldHVybiknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9ybmFtZTogW1xuICAgICAgICAgICAgWycjeycsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B2YXJpYWJsZWludGVycG9sYXRpb24nIH1dLFxuICAgICAgICAgICAgWycoXFxcXC58Iyg/PVtee10pfCV8KEBpZGVudGlmaWVyKXw6KSsnLCAndGFnJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9yYXR0cmlidXRlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgdGVybTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgWyd1cmwoXFxcXC1wcmVmaXgpP1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmdW5jdGlvbmludm9jYXRpb24nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlcmVmZXJlbmNlJyB9LFxuICAgICAgICAgICAgWycoYW5kXFxcXGJ8b3JcXFxcYnxub3RcXFxcYiknLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BuYW1lJyB9LFxuICAgICAgICAgICAgWycoWzw+PVxcXFwrXFxcXC1cXFxcKlxcXFwvXFxcXF5cXFxcfFxcXFx+LF0pJywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbJywnLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJyFkZWZhdWx0JywgJ2xpdGVyYWwnXSxcbiAgICAgICAgICAgIFsnXFxcXCgnLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0BwYXJlbnRoaXplZHRlcm0nIH1dLFxuICAgICAgICBdLFxuICAgICAgICBydWxldmFsdWU6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWychaW1wb3J0YW50JywgJ2xpdGVyYWwnXSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQG5lc3RlZHByb3BlcnR5JyB9XSxcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBuZXN0ZWRwcm9wZXJ0eTogW1xuICAgICAgICAgICAgWydbKl9dP0BpZGVudGlmaWVyQHdzOicsICdhdHRyaWJ1dGUubmFtZScsICdAcnVsZXZhbHVlJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICB3YXJuZGVidWc6IFtcbiAgICAgICAgICAgIFsnW0BdKHdhcm58ZGVidWcpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGltcG9ydDogW1xuICAgICAgICAgICAgWydbQF0oaW1wb3J0KScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxuICAgICAgICBdLFxuICAgICAgICB2YXJpYWJsZWRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ3ZhcmlhYmxlLmRlY2wnLCAnQGRlY2xhcmF0aW9uYm9keSddLFxuICAgICAgICBdLFxuICAgICAgICB1cmxkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbJ1teKVxcclxcbl0rJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBwYXJlbnRoaXplZHRlcm06IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGRlY2xhcmF0aW9uYm9keTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBleHRlbmRib2R5OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3JuYW1lJyB9LFxuICAgICAgICAgICAgWychb3B0aW9uYWwnLCAnbGl0ZXJhbCddLFxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgdmFyaWFibGVyZWZlcmVuY2U6IFtcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllcicsICd2YXJpYWJsZS5yZWYnXSxcbiAgICAgICAgICAgIFsnXFxcXC5cXFxcLlxcXFwuJywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbJyN7JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHZhcmlhYmxlaW50ZXJwb2xhdGlvbicgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHZhcmlhYmxlaW50ZXJwb2xhdGlvbjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlcmVmZXJlbmNlJyB9LFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRzOiBbXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXConLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWydcXFxcL1xcXFwvKy4qJywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWydcXFxcKlxcXFwvJywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWycuJywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogW1xuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWycoXFxcXGQqXFxcXC4pP1xcXFxkKyhbZUVdW1xcXFwtK10/XFxcXGQrKT8nLCB7IHRva2VuOiAnbnVtYmVyJywgbmV4dDogJ0B1bml0cycgfV0sXG4gICAgICAgICAgICBbJyNbMC05YS1mQS1GX10rKD8hXFxcXHcpJywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgXSxcbiAgICAgICAgdW5pdHM6IFtcbiAgICAgICAgICAgIFsnKGVtfGV4fGNofHJlbXx2bWlufHZtYXh8dnd8dmh8dm18Y218bW18aW58cHh8cHR8cGN8ZGVnfGdyYWR8cmFkfHR1cm58c3xtc3xIenxrSHp8JSk/JywgJ251bWJlcicsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgZnVuY3Rpb25kZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWydAaWRlbnRpZmllckB3c1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBhcmFtZXRlcmRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BmdW5jdGlvbmJvZHknIH1dLFxuICAgICAgICBdLFxuICAgICAgICBtaXhpbmRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICAvLyBtaXhpbiB3aXRoIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXJAd3NcXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0BwYXJhbWV0ZXJkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICAvLyBtaXhpbiB3aXRob3V0IHBhcmFtZXRlcnNcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnbWV0YSddLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQHNlbGVjdG9yYm9keScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlcmRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ3ZhcmlhYmxlLmRlY2wnXSxcbiAgICAgICAgICAgIFsnXFxcXC5cXFxcLlxcXFwuJywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbJywnLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgaW5jbHVkZWRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZnVuY3Rpb25pbnZvY2F0aW9uJyB9LFxuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdtZXRhJ10sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQHNlbGVjdG9yYm9keScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGtleWZyYW1lZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnbWV0YSddLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQGtleWZyYW1lYm9keScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGtleWZyYW1lYm9keTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0BzZWxlY3RvcmJvZHknIH1dLFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgY29udHJvbHN0YXRlbWVudDogW1xuICAgICAgICAgICAgWydbQF0oaWZ8ZWxzZXxmb3J8d2hpbGV8ZWFjaHxtZWRpYSknLCB7IHRva2VuOiAna2V5d29yZC5mbG93JywgbmV4dDogJ0Bjb250cm9sc3RhdGVtZW50ZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICBdLFxuICAgICAgICBjb250cm9sc3RhdGVtZW50ZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIFsnKGlufGZyb218dGhyb3VnaHxpZnx0bylcXFxcYicsIHsgdG9rZW46ICdrZXl3b3JkLmZsb3cnIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgZnVuY3Rpb25ib2R5OiBbXG4gICAgICAgICAgICBbJ1tAXShyZXR1cm4pJywgeyB0b2tlbjogJ2tleXdvcmQnIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlZGVjbGFyYXRpb24nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb250cm9sc3RhdGVtZW50JyB9LFxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgZnVuY3Rpb25pbnZvY2F0aW9uOiBbXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAZnVuY3Rpb25hcmd1bWVudHMnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBmdW5jdGlvbmFyZ3VtZW50czogW1xuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWydbLF0nLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWyd+P1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ2VuZGRvdWJsZXF1b3RlJyB9XSxcbiAgICAgICAgICAgIFsnfj9cXCcnLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAc3RyaW5nZW5kcXVvdGUnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ2VuZGRvdWJsZXF1b3RlOiBbXG4gICAgICAgICAgICBbJ1xcXFxcXFxcLicsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnXCInLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdlbmRxdW90ZTogW1xuICAgICAgICAgICAgWydcXFxcXFxcXC4nLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbJ1xcJycsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWycuJywgJ3N0cmluZyddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==