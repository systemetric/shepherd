(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js ***!
  \**********************************************************************/
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string'] },
        { open: '[', close: ']', notIn: ['string'] },
        { open: '(', close: ')', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*(#|\/\/)region\\b"),
            end: new RegExp("^\\s*(#|\/\/)endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.root' }],
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)([:\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)(\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/[^<]+/] // text
        ],
        doctype: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.comment' }],
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop'],
        ],
        comment: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.comment' }],
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.otherTag' }],
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.script' }],
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/(<\/)(script\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]
        ],
        // After <script ... type
        scriptAfterType: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.scriptAfterType' }],
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.scriptAfterTypeEquals' }],
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.scriptWithCustomType.$S2' }],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInEmbeddedState.scriptEmbedded.$S2', nextEmbedded: '@pop' }],
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.style' }],
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/(<\/)(style\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]
        ],
        // After <style ... type
        styleAfterType: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.styleAfterType' }],
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.styleAfterTypeEquals' }],
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.styleWithCustomType.$S2' }],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInEmbeddedState.styleEmbedded.$S2', nextEmbedded: '@pop' }],
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <style> tags handling
        phpInSimpleState: [
            [/<\?((php)|=)?/, 'metatag.php'],
            [/\?>/, { token: 'metatag.php', switchTo: '@$S2.$S3' }],
            { include: 'phpRoot' }
        ],
        phpInEmbeddedState: [
            [/<\?((php)|=)?/, 'metatag.php'],
            [/\?>/, { token: 'metatag.php', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }],
            { include: 'phpRoot' }
        ],
        phpRoot: [
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@phpKeywords': { token: 'keyword.php' },
                        '@phpCompileTimeConstants': { token: 'constant.php' },
                        '@default': 'identifier.php'
                    }
                }],
            [/[$a-zA-Z_]\w*/, {
                    cases: {
                        '@phpPreDefinedVariables': { token: 'variable.predefined.php' },
                        '@default': 'variable.php'
                    }
                }],
            // brackets
            [/[{}]/, 'delimiter.bracket.php'],
            [/[\[\]]/, 'delimiter.array.php'],
            [/[()]/, 'delimiter.parenthesis.php'],
            // whitespace
            [/[ \t\r\n]+/],
            // comments
            [/#/, 'comment.php', '@phpLineComment'],
            [/\/\//, 'comment.php', '@phpLineComment'],
            // block comments
            [/\/\*/, 'comment.php', '@phpComment'],
            // strings
            [/"/, 'string.php', '@phpDoubleQuoteString'],
            [/'/, 'string.php', '@phpSingleQuoteString'],
            // delimiters
            [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,\@]/, 'delimiter.php'],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float.php'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float.php'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.php'],
            [/0[0-7']*[0-7]/, 'number.octal.php'],
            [/0[bB][0-1']*[0-1]/, 'number.binary.php'],
            [/\d[\d']*/, 'number.php'],
            [/\d/, 'number.php'],
        ],
        phpComment: [
            [/\*\//, 'comment.php', '@pop'],
            [/[^*]+/, 'comment.php'],
            [/./, 'comment.php']
        ],
        phpLineComment: [
            [/\?>/, { token: '@rematch', next: '@pop' }],
            [/.$/, 'comment.php', '@pop'],
            [/[^?]+$/, 'comment.php', '@pop'],
            [/[^?]+/, 'comment.php'],
            [/./, 'comment.php']
        ],
        phpDoubleQuoteString: [
            [/[^\\"]+/, 'string.php'],
            [/@escapes/, 'string.escape.php'],
            [/\\./, 'string.escape.invalid.php'],
            [/"/, 'string.php', '@pop']
        ],
        phpSingleQuoteString: [
            [/[^\\']+/, 'string.php'],
            [/@escapes/, 'string.escape.php'],
            [/\\./, 'string.escape.invalid.php'],
            [/'/, 'string.php', '@pop']
        ],
    },
    phpKeywords: [
        'abstract', 'and', 'array', 'as', 'break',
        'callable', 'case', 'catch', 'cfunction', 'class', 'clone',
        'const', 'continue', 'declare', 'default', 'do',
        'else', 'elseif', 'enddeclare', 'endfor', 'endforeach',
        'endif', 'endswitch', 'endwhile', 'extends', 'false', 'final',
        'for', 'foreach', 'function', 'global', 'goto',
        'if', 'implements', 'interface', 'instanceof', 'insteadof',
        'namespace', 'new', 'null', 'object', 'old_function', 'or', 'private',
        'protected', 'public', 'resource', 'static', 'switch', 'throw', 'trait',
        'try', 'true', 'use', 'var', 'while', 'xor',
        'die', 'echo', 'empty', 'exit', 'eval',
        'include', 'include_once', 'isset', 'list', 'require',
        'require_once', 'return', 'print', 'unset', 'yield',
        '__construct'
    ],
    phpCompileTimeConstants: [
        '__CLASS__',
        '__DIR__',
        '__FILE__',
        '__LINE__',
        '__NAMESPACE__',
        '__METHOD__',
        '__FUNCTION__',
        '__TRAIT__'
    ],
    phpPreDefinedVariables: [
        '$GLOBALS',
        '$_SERVER',
        '$_GET',
        '$_POST',
        '$_FILES',
        '$_REQUEST',
        '$_SESSION',
        '$_ENV',
        '$_COOKIE',
        '$php_errormsg',
        '$HTTP_RAW_POST_DATA',
        '$http_response_header',
        '$argc',
        '$argv'
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3BocC9waHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQLG9FQUFvRSxJQUFJLE1BQU07QUFDOUU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksc0JBQXNCO0FBQ3BELFNBQVMsMkNBQTJDO0FBQ3BELFNBQVMsMkNBQTJDO0FBQ3BELFNBQVMsMkNBQTJDO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxxQ0FBcUM7QUFDckYsK0NBQStDLG9DQUFvQztBQUNuRixnREFBZ0QsdUNBQXVDO0FBQ3ZGLCtDQUErQyx1Q0FBdUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkRBQTJEO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJEQUEyRDtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDREQUE0RDtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwREFBMEQ7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvR0FBb0c7QUFDdkg7QUFDQSxvRUFBb0Usd0NBQXdDO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtRUFBbUU7QUFDbEc7QUFDQSxtQkFBbUIsb0dBQW9HO0FBQ3ZIO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUVBQXlFO0FBQ3hHLDJCQUEyQixpRUFBaUU7QUFDNUYsMkJBQTJCLGlFQUFpRTtBQUM1RixtQkFBbUIsb0dBQW9HO0FBQ3ZIO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNEVBQTRFO0FBQzNHLG1CQUFtQiw0RUFBNEU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBLCtCQUErQiw4RkFBOEY7QUFDN0gsMkJBQTJCLHdEQUF3RDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlEQUF5RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFGQUFxRjtBQUN4RztBQUNBLG1FQUFtRSx3Q0FBd0M7QUFDM0c7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtFQUFrRTtBQUNqRztBQUNBLG1CQUFtQixxRkFBcUY7QUFDeEc7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3RUFBd0U7QUFDdkcsMkJBQTJCLGdFQUFnRTtBQUMzRiwyQkFBMkIsZ0VBQWdFO0FBQzNGLG1CQUFtQixxRkFBcUY7QUFDeEc7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyRUFBMkU7QUFDMUcsbUJBQW1CLDJFQUEyRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0EsK0JBQStCLDZGQUE2RjtBQUM1SCwwQkFBMEIsd0RBQXdEO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUE2QztBQUNsRSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtFQUFrRTtBQUN2RixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFLHFEQUFxRCx3QkFBd0I7QUFDN0U7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esb0RBQW9ELG1DQUFtQztBQUN2RjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQ0FBa0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGIiwiZmlsZSI6IjI5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcI1xcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJ10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKigjfFxcL1xcLylyZWdpb25cXFxcYlwiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyooI3xcXC9cXC8pZW5kcmVnaW9uXFxcXGJcIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnJyxcbiAgICAvLyBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5yb290JyB9XSxcbiAgICAgICAgICAgIFsvPCFET0NUWVBFLywgJ21ldGF0YWcuaHRtbCcsICdAZG9jdHlwZSddLFxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuaHRtbCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy8oPCkoXFx3KykoXFwvPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgJ2RlbGltaXRlci5odG1sJ11dLFxuICAgICAgICAgICAgWy8oPCkoc2NyaXB0KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQHNjcmlwdCcgfV1dLFxuICAgICAgICAgICAgWy8oPCkoc3R5bGUpLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAc3R5bGUnIH1dXSxcbiAgICAgICAgICAgIFsvKDwpKFs6XFx3XSspLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcbiAgICAgICAgICAgIFsvKDxcXC8pKFxcdyspLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcbiAgICAgICAgICAgIFsvPC8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgWy9bXjxdKy9dIC8vIHRleHRcbiAgICAgICAgXSxcbiAgICAgICAgZG9jdHlwZTogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuY29tbWVudCcgfV0sXG4gICAgICAgICAgICBbL1tePl0rLywgJ21ldGF0YWcuY29udGVudC5odG1sJ10sXG4gICAgICAgICAgICBbLz4vLCAnbWV0YXRhZy5odG1sJywgJ0Bwb3AnXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuY29tbWVudCcgfV0sXG4gICAgICAgICAgICBbLy0tPi8sICdjb21tZW50Lmh0bWwnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXi1dKy8sICdjb21tZW50LmNvbnRlbnQuaHRtbCddLFxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuY29udGVudC5odG1sJ11cbiAgICAgICAgXSxcbiAgICAgICAgb3RoZXJUYWc6IFtcbiAgICAgICAgICAgIFsvPFxcPygocGhwKXw9KT8vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0BwaHBJblNpbXBsZVN0YXRlLm90aGVyVGFnJyB9XSxcbiAgICAgICAgICAgIFsvXFwvPz4vLCAnZGVsaW1pdGVyLmh0bWwnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gLS0gQkVHSU4gPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xuICAgICAgICAvLyBBZnRlciA8c2NyaXB0XG4gICAgICAgIHNjcmlwdDogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc2NyaXB0JyB9XSxcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZScsICdAc2NyaXB0QWZ0ZXJUeXBlJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQudGV4dC9qYXZhc2NyaXB0JywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy8oPFxcLykoc2NyaXB0XFxzKikoPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlXG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZTogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc2NyaXB0QWZ0ZXJUeXBlJyB9XSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInLCAnQHNjcmlwdEFmdGVyVHlwZUVxdWFscyddLFxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1dLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID1cbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5zY3JpcHRBZnRlclR5cGVFcXVhbHMnIH1dLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1dLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID0gJFMyXG4gICAgICAgIHNjcmlwdFdpdGhDdXN0b21UeXBlOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5zY3JpcHRXaXRoQ3VzdG9tVHlwZS4kUzInIH1dLFxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC4kUzInLCBuZXh0RW1iZWRkZWQ6ICckUzInIH1dLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHNjcmlwdEVtYmVkZGVkOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5FbWJlZGRlZFN0YXRlLnNjcmlwdEVtYmVkZGVkLiRTMicsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyAtLSBFTkQgPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xuICAgICAgICAvLyAtLSBCRUdJTiA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlXG4gICAgICAgIHN0eWxlOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5zdHlsZScgfV0sXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUnLCAnQHN0eWxlQWZ0ZXJUeXBlJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy8oPFxcLykoc3R5bGVcXHMqKSg+KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHBvcCcgfV1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZVxuICAgICAgICBzdHlsZUFmdGVyVHlwZTogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc3R5bGVBZnRlclR5cGUnIH1dLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlcicsICdAc3R5bGVBZnRlclR5cGVFcXVhbHMnXSxcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPVxuICAgICAgICBzdHlsZUFmdGVyVHlwZUVxdWFsczogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc3R5bGVBZnRlclR5cGVFcXVhbHMnIH1dLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBzd2l0Y2hUbzogJ0BzdHlsZVdpdGhDdXN0b21UeXBlLiQxJyB9XSxcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPSAkUzJcbiAgICAgICAgc3R5bGVXaXRoQ3VzdG9tVHlwZTogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc3R5bGVXaXRoQ3VzdG9tVHlwZS4kUzInIH1dLFxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLiRTMicsIG5leHRFbWJlZGRlZDogJyRTMicgfV0sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHlsZUVtYmVkZGVkOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5FbWJlZGRlZFN0YXRlLnN0eWxlRW1iZWRkZWQuJFMyJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gLS0gRU5EIDxzdHlsZT4gdGFncyBoYW5kbGluZ1xuICAgICAgICBwaHBJblNpbXBsZVN0YXRlOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgJ21ldGF0YWcucGhwJ10sXG4gICAgICAgICAgICBbL1xcPz4vLCB7IHRva2VuOiAnbWV0YXRhZy5waHAnLCBzd2l0Y2hUbzogJ0AkUzIuJFMzJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ3BocFJvb3QnIH1cbiAgICAgICAgXSxcbiAgICAgICAgcGhwSW5FbWJlZGRlZFN0YXRlOiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgJ21ldGF0YWcucGhwJ10sXG4gICAgICAgICAgICBbL1xcPz4vLCB7IHRva2VuOiAnbWV0YXRhZy5waHAnLCBzd2l0Y2hUbzogJ0AkUzIuJFMzJywgbmV4dEVtYmVkZGVkOiAnJFMzJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ3BocFJvb3QnIH1cbiAgICAgICAgXSxcbiAgICAgICAgcGhwUm9vdDogW1xuICAgICAgICAgICAgWy9bYS16QS1aX11cXHcqLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BwaHBLZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLnBocCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcGhwQ29tcGlsZVRpbWVDb25zdGFudHMnOiB7IHRva2VuOiAnY29uc3RhbnQucGhwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXIucGhwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbL1skYS16QS1aX11cXHcqLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BwaHBQcmVEZWZpbmVkVmFyaWFibGVzJzogeyB0b2tlbjogJ3ZhcmlhYmxlLnByZWRlZmluZWQucGhwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3ZhcmlhYmxlLnBocCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gYnJhY2tldHNcbiAgICAgICAgICAgIFsvW3t9XS8sICdkZWxpbWl0ZXIuYnJhY2tldC5waHAnXSxcbiAgICAgICAgICAgIFsvW1xcW1xcXV0vLCAnZGVsaW1pdGVyLmFycmF5LnBocCddLFxuICAgICAgICAgICAgWy9bKCldLywgJ2RlbGltaXRlci5wYXJlbnRoZXNpcy5waHAnXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgLy8gY29tbWVudHNcbiAgICAgICAgICAgIFsvIy8sICdjb21tZW50LnBocCcsICdAcGhwTGluZUNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLywgJ2NvbW1lbnQucGhwJywgJ0BwaHBMaW5lQ29tbWVudCddLFxuICAgICAgICAgICAgLy8gYmxvY2sgY29tbWVudHNcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQucGhwJywgJ0BwaHBDb21tZW50J10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5waHAnLCAnQHBocERvdWJsZVF1b3RlU3RyaW5nJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLnBocCcsICdAcGhwU2luZ2xlUXVvdGVTdHJpbmcnXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnNcbiAgICAgICAgICAgIFsvW1xcK1xcLVxcKlxcJVxcJlxcfFxcXlxcflxcIVxcPVxcPFxcPlxcL1xcP1xcO1xcOlxcLlxcLFxcQF0vLCAnZGVsaW1pdGVyLnBocCddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFxkK1tlRV0oW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQucGhwJ10sXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdC5waHAnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GJ10qWzAtOWEtZkEtRl0vLCAnbnVtYmVyLmhleC5waHAnXSxcbiAgICAgICAgICAgIFsvMFswLTcnXSpbMC03XS8sICdudW1iZXIub2N0YWwucGhwJ10sXG4gICAgICAgICAgICBbLzBbYkJdWzAtMSddKlswLTFdLywgJ251bWJlci5iaW5hcnkucGhwJ10sXG4gICAgICAgICAgICBbL1xcZFtcXGQnXSovLCAnbnVtYmVyLnBocCddLFxuICAgICAgICAgICAgWy9cXGQvLCAnbnVtYmVyLnBocCddLFxuICAgICAgICBdLFxuICAgICAgICBwaHBDb21tZW50OiBbXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50LnBocCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teKl0rLywgJ2NvbW1lbnQucGhwJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5waHAnXVxuICAgICAgICBdLFxuICAgICAgICBwaHBMaW5lQ29tbWVudDogW1xuICAgICAgICAgICAgWy9cXD8+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8uJC8sICdjb21tZW50LnBocCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teP10rJC8sICdjb21tZW50LnBocCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teP10rLywgJ2NvbW1lbnQucGhwJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5waHAnXVxuICAgICAgICBdLFxuICAgICAgICBwaHBEb3VibGVRdW90ZVN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZy5waHAnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZS5waHAnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkLnBocCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcucGhwJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBwaHBTaW5nbGVRdW90ZVN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nLnBocCddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlLnBocCddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQucGhwJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLnBocCcsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHBocEtleXdvcmRzOiBbXG4gICAgICAgICdhYnN0cmFjdCcsICdhbmQnLCAnYXJyYXknLCAnYXMnLCAnYnJlYWsnLFxuICAgICAgICAnY2FsbGFibGUnLCAnY2FzZScsICdjYXRjaCcsICdjZnVuY3Rpb24nLCAnY2xhc3MnLCAnY2xvbmUnLFxuICAgICAgICAnY29uc3QnLCAnY29udGludWUnLCAnZGVjbGFyZScsICdkZWZhdWx0JywgJ2RvJyxcbiAgICAgICAgJ2Vsc2UnLCAnZWxzZWlmJywgJ2VuZGRlY2xhcmUnLCAnZW5kZm9yJywgJ2VuZGZvcmVhY2gnLFxuICAgICAgICAnZW5kaWYnLCAnZW5kc3dpdGNoJywgJ2VuZHdoaWxlJywgJ2V4dGVuZHMnLCAnZmFsc2UnLCAnZmluYWwnLFxuICAgICAgICAnZm9yJywgJ2ZvcmVhY2gnLCAnZnVuY3Rpb24nLCAnZ2xvYmFsJywgJ2dvdG8nLFxuICAgICAgICAnaWYnLCAnaW1wbGVtZW50cycsICdpbnRlcmZhY2UnLCAnaW5zdGFuY2VvZicsICdpbnN0ZWFkb2YnLFxuICAgICAgICAnbmFtZXNwYWNlJywgJ25ldycsICdudWxsJywgJ29iamVjdCcsICdvbGRfZnVuY3Rpb24nLCAnb3InLCAncHJpdmF0ZScsXG4gICAgICAgICdwcm90ZWN0ZWQnLCAncHVibGljJywgJ3Jlc291cmNlJywgJ3N0YXRpYycsICdzd2l0Y2gnLCAndGhyb3cnLCAndHJhaXQnLFxuICAgICAgICAndHJ5JywgJ3RydWUnLCAndXNlJywgJ3ZhcicsICd3aGlsZScsICd4b3InLFxuICAgICAgICAnZGllJywgJ2VjaG8nLCAnZW1wdHknLCAnZXhpdCcsICdldmFsJyxcbiAgICAgICAgJ2luY2x1ZGUnLCAnaW5jbHVkZV9vbmNlJywgJ2lzc2V0JywgJ2xpc3QnLCAncmVxdWlyZScsXG4gICAgICAgICdyZXF1aXJlX29uY2UnLCAncmV0dXJuJywgJ3ByaW50JywgJ3Vuc2V0JywgJ3lpZWxkJyxcbiAgICAgICAgJ19fY29uc3RydWN0J1xuICAgIF0sXG4gICAgcGhwQ29tcGlsZVRpbWVDb25zdGFudHM6IFtcbiAgICAgICAgJ19fQ0xBU1NfXycsXG4gICAgICAgICdfX0RJUl9fJyxcbiAgICAgICAgJ19fRklMRV9fJyxcbiAgICAgICAgJ19fTElORV9fJyxcbiAgICAgICAgJ19fTkFNRVNQQUNFX18nLFxuICAgICAgICAnX19NRVRIT0RfXycsXG4gICAgICAgICdfX0ZVTkNUSU9OX18nLFxuICAgICAgICAnX19UUkFJVF9fJ1xuICAgIF0sXG4gICAgcGhwUHJlRGVmaW5lZFZhcmlhYmxlczogW1xuICAgICAgICAnJEdMT0JBTFMnLFxuICAgICAgICAnJF9TRVJWRVInLFxuICAgICAgICAnJF9HRVQnLFxuICAgICAgICAnJF9QT1NUJyxcbiAgICAgICAgJyRfRklMRVMnLFxuICAgICAgICAnJF9SRVFVRVNUJyxcbiAgICAgICAgJyRfU0VTU0lPTicsXG4gICAgICAgICckX0VOVicsXG4gICAgICAgICckX0NPT0tJRScsXG4gICAgICAgICckcGhwX2Vycm9ybXNnJyxcbiAgICAgICAgJyRIVFRQX1JBV19QT1NUX0RBVEEnLFxuICAgICAgICAnJGh0dHBfcmVzcG9uc2VfaGVhZGVyJyxcbiAgICAgICAgJyRhcmdjJyxcbiAgICAgICAgJyRhcmd2J1xuICAgIF0sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9