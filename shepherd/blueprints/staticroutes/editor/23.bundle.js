(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js ***!
  \********************************************************************************/
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

var TOKEN_HEADER_LEAD = 'keyword';
var TOKEN_HEADER = 'keyword';
var TOKEN_EXT_HEADER = 'keyword';
var TOKEN_SEPARATOR = 'meta.separator';
var TOKEN_QUOTE = 'comment';
var TOKEN_LIST = 'keyword';
var TOKEN_BLOCK = 'string';
var TOKEN_BLOCK_CODE = 'variable.source';
var DELIM_ASSIGN = 'delimiter.html';
var ATTRIB_NAME = 'attribute.name.html';
var ATTRIB_VALUE = 'string.html';
function getTag(name) {
    return 'tag';
}
var conf = {
    comments: {
        blockComment: ['<!--', '-->',]
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
        { open: '<', close: '>', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: '[', close: ']' },
        { open: '`', close: '`' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#?region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#?endregion\\b.*-->")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.md',
    // escape codes
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
    // escape codes for javascript/CSS strings
    jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    // non matched elements
    empty: [
        'area', 'base', 'basefont', 'br', 'col', 'frame',
        'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param'
    ],
    tokenizer: {
        root: [
            // headers (with #)
            [/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/, ['white', TOKEN_HEADER_LEAD, TOKEN_HEADER, TOKEN_HEADER]],
            // headers (with =)
            [/^\s*(=+|\-+)\s*$/, TOKEN_EXT_HEADER],
            // headers (with ***)
            [/^\s*((\*[ ]?)+)\s*$/, TOKEN_SEPARATOR],
            // quote
            [/^\s*>+/, TOKEN_QUOTE],
            // list (starting with * or number)
            [/^\s*([\*\-+:]|\d+\.)\s/, TOKEN_LIST],
            // code block (4 spaces indent)
            [/^(\t|[ ]{4})[^ ].*$/, TOKEN_BLOCK],
            // code block (3 tilde)
            [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: TOKEN_BLOCK, next: '@codeblock' }],
            // github style code blocks (with backticks and language)
            [/^\s*```\s*((?:\w|[\/\-#])+)\s*$/, { token: TOKEN_BLOCK, next: '@codeblockgh', nextEmbedded: '$1' }],
            // github style code blocks (with backticks but no language)
            [/^\s*```\s*$/, { token: TOKEN_BLOCK, next: '@codeblock' }],
            // markup within lines
            { include: '@linecontent' },
        ],
        codeblock: [
            [/^\s*~~~\s*$/, { token: TOKEN_BLOCK, next: '@pop' }],
            [/^\s*```\s*$/, { token: TOKEN_BLOCK, next: '@pop' }],
            [/.*$/, TOKEN_BLOCK_CODE],
        ],
        // github style code blocks
        codeblockgh: [
            [/```\s*$/, { token: TOKEN_BLOCK_CODE, next: '@pop', nextEmbedded: '@pop' }],
            [/[^`]+/, TOKEN_BLOCK_CODE],
        ],
        linecontent: [
            // escapes
            [/&\w+;/, 'string.escape'],
            [/@escapes/, 'escape'],
            // various markup
            [/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'],
            [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'],
            [/\b_[^_]+_\b/, 'emphasis'],
            [/\*([^\\*]|@escapes)+\*/, 'emphasis'],
            [/`([^\\`]|@escapes)+`/, 'variable'],
            // links
            [/\{[^}]+\}/, 'string.target'],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ['string.link', '', 'string.link']],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, 'string.link'],
            // or html
            { include: 'html' },
        ],
        // Note: it is tempting to rather switch to the real HTML mode instead of building our own here
        // but currently there is a limitation in Monarch that prevents us from doing it: The opening
        // '<' would start the HTML mode, however there is no way to jump 1 character back to let the
        // HTML mode also tokenize the opening angle bracket. Thus, even though we could jump to HTML,
        // we cannot correctly tokenize it in that mode yet.
        html: [
            // html tags
            [/<(\w+)\/>/, getTag('$1')],
            [/<(\w+)/, {
                    cases: {
                        '@empty': { token: getTag('$1'), next: '@tag.$1' },
                        '@default': { token: getTag('$1'), next: '@tag.$1' }
                    }
                }],
            [/<\/(\w+)\s*>/, { token: getTag('$1') }],
            [/<!--/, 'comment', '@comment']
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, 'comment', '@pop'],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        // Almost full HTML tag matching, complete with embedded scripts & styles
        tag: [
            [/[ \t\r\n]+/, 'white'],
            [/(type)(\s*=\s*)(")([^"]+)(")/, [ATTRIB_NAME, DELIM_ASSIGN, ATTRIB_VALUE,
                    { token: ATTRIB_VALUE, switchTo: '@tag.$S2.$4' },
                    ATTRIB_VALUE]],
            [/(type)(\s*=\s*)(')([^']+)(')/, [ATTRIB_NAME, DELIM_ASSIGN, ATTRIB_VALUE,
                    { token: ATTRIB_VALUE, switchTo: '@tag.$S2.$4' },
                    ATTRIB_VALUE]],
            [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, [ATTRIB_NAME, DELIM_ASSIGN, ATTRIB_VALUE]],
            [/\w+/, ATTRIB_NAME],
            [/\/>/, getTag('$S2'), '@pop'],
            [/>/, {
                    cases: {
                        '$S2==style': { token: getTag('$S2'), switchTo: 'embeddedStyle', nextEmbedded: 'text/css' },
                        '$S2==script': {
                            cases: {
                                '$S3': { token: getTag('$S2'), switchTo: 'embeddedScript', nextEmbedded: '$S3' },
                                '@default': { token: getTag('$S2'), switchTo: 'embeddedScript', nextEmbedded: 'text/javascript' }
                            }
                        },
                        '@default': { token: getTag('$S2'), next: '@pop' }
                    }
                }],
        ],
        embeddedStyle: [
            [/[^<]+/, ''],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
        embeddedScript: [
            [/[^<]+/, ''],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21hcmtkb3duL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQSxrREFBa0QseUNBQXlDO0FBQzNGO0FBQ0EsaURBQWlELCtEQUErRDtBQUNoSDtBQUNBLDZCQUE2Qix5Q0FBeUM7QUFDdEU7QUFDQSxhQUFhLDBCQUEwQjtBQUN2QztBQUNBO0FBQ0EsNkJBQTZCLG1DQUFtQztBQUNoRSw2QkFBNkIsbUNBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUE4RDtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEdBQUcsSUFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVDQUF1QztBQUMxRSxxQ0FBcUM7QUFDckM7QUFDQSxpQkFBaUI7QUFDakIsOEJBQThCLHNCQUFzQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQStDO0FBQ3BFO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQStDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw0RUFBNEU7QUFDbkg7QUFDQTtBQUNBLHdDQUF3Qyx3RUFBd0U7QUFDaEgsNkNBQTZDO0FBQzdDO0FBQ0EseUJBQXlCO0FBQ3pCLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQXdEO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUF3RDtBQUN2RjtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBUT0tFTl9IRUFERVJfTEVBRCA9ICdrZXl3b3JkJztcbnZhciBUT0tFTl9IRUFERVIgPSAna2V5d29yZCc7XG52YXIgVE9LRU5fRVhUX0hFQURFUiA9ICdrZXl3b3JkJztcbnZhciBUT0tFTl9TRVBBUkFUT1IgPSAnbWV0YS5zZXBhcmF0b3InO1xudmFyIFRPS0VOX1FVT1RFID0gJ2NvbW1lbnQnO1xudmFyIFRPS0VOX0xJU1QgPSAna2V5d29yZCc7XG52YXIgVE9LRU5fQkxPQ0sgPSAnc3RyaW5nJztcbnZhciBUT0tFTl9CTE9DS19DT0RFID0gJ3ZhcmlhYmxlLnNvdXJjZSc7XG52YXIgREVMSU1fQVNTSUdOID0gJ2RlbGltaXRlci5odG1sJztcbnZhciBBVFRSSUJfTkFNRSA9ICdhdHRyaWJ1dGUubmFtZS5odG1sJztcbnZhciBBVFRSSUJfVkFMVUUgPSAnc3RyaW5nLmh0bWwnO1xuZnVuY3Rpb24gZ2V0VGFnKG5hbWUpIHtcbiAgICByZXR1cm4gJ3RhZyc7XG59XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwhLS0nLCAnLS0+JyxdXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCBub3RJbjogWydzdHJpbmcnXSB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH0sXG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKjwhLS1cXFxccyojP3JlZ2lvblxcXFxiLiotLT5cIiksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqPCEtLVxcXFxzKiM/ZW5kcmVnaW9uXFxcXGIuKi0tPlwiKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcubWQnLFxuICAgIC8vIGVzY2FwZSBjb2Rlc1xuICAgIGNvbnRyb2w6IC9bXFxcXGAqX1xcW1xcXXt9KCkjK1xcLVxcLiFdLyxcbiAgICBub25jb250cm9sOiAvW15cXFxcYCpfXFxbXFxde30oKSMrXFwtXFwuIV0vLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86QGNvbnRyb2wpLyxcbiAgICAvLyBlc2NhcGUgY29kZXMgZm9yIGphdmFzY3JpcHQvQ1NTIHN0cmluZ3NcbiAgICBqc2VzY2FwZXM6IC9cXFxcKD86W2J0bmZyXFxcXFwiJ118WzAtN11bMC03XT98WzAtM11bMC03XXsyfSkvLFxuICAgIC8vIG5vbiBtYXRjaGVkIGVsZW1lbnRzXG4gICAgZW1wdHk6IFtcbiAgICAgICAgJ2FyZWEnLCAnYmFzZScsICdiYXNlZm9udCcsICdicicsICdjb2wnLCAnZnJhbWUnLFxuICAgICAgICAnaHInLCAnaW1nJywgJ2lucHV0JywgJ2lzaW5kZXgnLCAnbGluaycsICdtZXRhJywgJ3BhcmFtJ1xuICAgIF0sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGhlYWRlcnMgKHdpdGggIylcbiAgICAgICAgICAgIFsvXihcXHN7MCwzfSkoIyspKCg/OlteXFxcXCNdfEBlc2NhcGVzKSspKCg/OiMrKT8pLywgWyd3aGl0ZScsIFRPS0VOX0hFQURFUl9MRUFELCBUT0tFTl9IRUFERVIsIFRPS0VOX0hFQURFUl1dLFxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCA9KVxuICAgICAgICAgICAgWy9eXFxzKig9K3xcXC0rKVxccyokLywgVE9LRU5fRVhUX0hFQURFUl0sXG4gICAgICAgICAgICAvLyBoZWFkZXJzICh3aXRoICoqKilcbiAgICAgICAgICAgIFsvXlxccyooKFxcKlsgXT8pKylcXHMqJC8sIFRPS0VOX1NFUEFSQVRPUl0sXG4gICAgICAgICAgICAvLyBxdW90ZVxuICAgICAgICAgICAgWy9eXFxzKj4rLywgVE9LRU5fUVVPVEVdLFxuICAgICAgICAgICAgLy8gbGlzdCAoc3RhcnRpbmcgd2l0aCAqIG9yIG51bWJlcilcbiAgICAgICAgICAgIFsvXlxccyooW1xcKlxcLSs6XXxcXGQrXFwuKVxccy8sIFRPS0VOX0xJU1RdLFxuICAgICAgICAgICAgLy8gY29kZSBibG9jayAoNCBzcGFjZXMgaW5kZW50KVxuICAgICAgICAgICAgWy9eKFxcdHxbIF17NH0pW14gXS4qJC8sIFRPS0VOX0JMT0NLXSxcbiAgICAgICAgICAgIC8vIGNvZGUgYmxvY2sgKDMgdGlsZGUpXG4gICAgICAgICAgICBbL15cXHMqfn5+XFxzKigoPzpcXHd8W1xcL1xcLSNdKSspP1xccyokLywgeyB0b2tlbjogVE9LRU5fQkxPQ0ssIG5leHQ6ICdAY29kZWJsb2NrJyB9XSxcbiAgICAgICAgICAgIC8vIGdpdGh1YiBzdHlsZSBjb2RlIGJsb2NrcyAod2l0aCBiYWNrdGlja3MgYW5kIGxhbmd1YWdlKVxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyooKD86XFx3fFtcXC9cXC0jXSkrKVxccyokLywgeyB0b2tlbjogVE9LRU5fQkxPQ0ssIG5leHQ6ICdAY29kZWJsb2NrZ2gnLCBuZXh0RW1iZWRkZWQ6ICckMScgfV0sXG4gICAgICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3MgKHdpdGggYmFja3RpY2tzIGJ1dCBubyBsYW5ndWFnZSlcbiAgICAgICAgICAgIFsvXlxccypgYGBcXHMqJC8sIHsgdG9rZW46IFRPS0VOX0JMT0NLLCBuZXh0OiAnQGNvZGVibG9jaycgfV0sXG4gICAgICAgICAgICAvLyBtYXJrdXAgd2l0aGluIGxpbmVzXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGluZWNvbnRlbnQnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNvZGVibG9jazogW1xuICAgICAgICAgICAgWy9eXFxzKn5+flxccyokLywgeyB0b2tlbjogVE9LRU5fQkxPQ0ssIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvXlxccypgYGBcXHMqJC8sIHsgdG9rZW46IFRPS0VOX0JMT0NLLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4qJC8sIFRPS0VOX0JMT0NLX0NPREVdLFxuICAgICAgICBdLFxuICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3NcbiAgICAgICAgY29kZWJsb2NrZ2g6IFtcbiAgICAgICAgICAgIFsvYGBgXFxzKiQvLCB7IHRva2VuOiBUT0tFTl9CTE9DS19DT0RFLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy9bXmBdKy8sIFRPS0VOX0JMT0NLX0NPREVdLFxuICAgICAgICBdLFxuICAgICAgICBsaW5lY29udGVudDogW1xuICAgICAgICAgICAgLy8gZXNjYXBlc1xuICAgICAgICAgICAgWy8mXFx3KzsvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdlc2NhcGUnXSxcbiAgICAgICAgICAgIC8vIHZhcmlvdXMgbWFya3VwXG4gICAgICAgICAgICBbL1xcYl9fKFteXFxcXF9dfEBlc2NhcGVzfF8oPyFfKSkrX19cXGIvLCAnc3Ryb25nJ10sXG4gICAgICAgICAgICBbL1xcKlxcKihbXlxcXFwqXXxAZXNjYXBlc3xcXCooPyFcXCopKStcXCpcXCovLCAnc3Ryb25nJ10sXG4gICAgICAgICAgICBbL1xcYl9bXl9dK19cXGIvLCAnZW1waGFzaXMnXSxcbiAgICAgICAgICAgIFsvXFwqKFteXFxcXCpdfEBlc2NhcGVzKStcXCovLCAnZW1waGFzaXMnXSxcbiAgICAgICAgICAgIFsvYChbXlxcXFxgXXxAZXNjYXBlcykrYC8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgLy8gbGlua3NcbiAgICAgICAgICAgIFsvXFx7W159XStcXH0vLCAnc3RyaW5nLnRhcmdldCddLFxuICAgICAgICAgICAgWy8oIT9cXFspKCg/OlteXFxdXFxcXF18QGVzY2FwZXMpKikoXFxdXFwoW15cXCldK1xcKSkvLCBbJ3N0cmluZy5saW5rJywgJycsICdzdHJpbmcubGluayddXSxcbiAgICAgICAgICAgIFsvKCE/XFxbKSgoPzpbXlxcXVxcXFxdfEBlc2NhcGVzKSopKFxcXSkvLCAnc3RyaW5nLmxpbmsnXSxcbiAgICAgICAgICAgIC8vIG9yIGh0bWxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ2h0bWwnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIC8vIE5vdGU6IGl0IGlzIHRlbXB0aW5nIHRvIHJhdGhlciBzd2l0Y2ggdG8gdGhlIHJlYWwgSFRNTCBtb2RlIGluc3RlYWQgb2YgYnVpbGRpbmcgb3VyIG93biBoZXJlXG4gICAgICAgIC8vIGJ1dCBjdXJyZW50bHkgdGhlcmUgaXMgYSBsaW1pdGF0aW9uIGluIE1vbmFyY2ggdGhhdCBwcmV2ZW50cyB1cyBmcm9tIGRvaW5nIGl0OiBUaGUgb3BlbmluZ1xuICAgICAgICAvLyAnPCcgd291bGQgc3RhcnQgdGhlIEhUTUwgbW9kZSwgaG93ZXZlciB0aGVyZSBpcyBubyB3YXkgdG8ganVtcCAxIGNoYXJhY3RlciBiYWNrIHRvIGxldCB0aGVcbiAgICAgICAgLy8gSFRNTCBtb2RlIGFsc28gdG9rZW5pemUgdGhlIG9wZW5pbmcgYW5nbGUgYnJhY2tldC4gVGh1cywgZXZlbiB0aG91Z2ggd2UgY291bGQganVtcCB0byBIVE1MLFxuICAgICAgICAvLyB3ZSBjYW5ub3QgY29ycmVjdGx5IHRva2VuaXplIGl0IGluIHRoYXQgbW9kZSB5ZXQuXG4gICAgICAgIGh0bWw6IFtcbiAgICAgICAgICAgIC8vIGh0bWwgdGFnc1xuICAgICAgICAgICAgWy88KFxcdyspXFwvPi8sIGdldFRhZygnJDEnKV0sXG4gICAgICAgICAgICBbLzwoXFx3KykvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVtcHR5JzogeyB0b2tlbjogZ2V0VGFnKCckMScpLCBuZXh0OiAnQHRhZy4kMScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46IGdldFRhZygnJDEnKSwgbmV4dDogJ0B0YWcuJDEnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy88XFwvKFxcdyspXFxzKj4vLCB7IHRva2VuOiBnZXRUYWcoJyQxJykgfV0sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudCcsICdAY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW148XFwtXSsvLCAnY29tbWVudC5jb250ZW50J10sXG4gICAgICAgICAgICBbLy0tPi8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50LmNvbnRlbnQuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9bPFxcLV0vLCAnY29tbWVudC5jb250ZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWxtb3N0IGZ1bGwgSFRNTCB0YWcgbWF0Y2hpbmcsIGNvbXBsZXRlIHdpdGggZW1iZWRkZWQgc2NyaXB0cyAmIHN0eWxlc1xuICAgICAgICB0YWc6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy8odHlwZSkoXFxzKj1cXHMqKShcIikoW15cIl0rKShcIikvLCBbQVRUUklCX05BTUUsIERFTElNX0FTU0lHTiwgQVRUUklCX1ZBTFVFLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiBBVFRSSUJfVkFMVUUsIHN3aXRjaFRvOiAnQHRhZy4kUzIuJDQnIH0sXG4gICAgICAgICAgICAgICAgICAgIEFUVFJJQl9WQUxVRV1dLFxuICAgICAgICAgICAgWy8odHlwZSkoXFxzKj1cXHMqKSgnKShbXiddKykoJykvLCBbQVRUUklCX05BTUUsIERFTElNX0FTU0lHTiwgQVRUUklCX1ZBTFVFLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiBBVFRSSUJfVkFMVUUsIHN3aXRjaFRvOiAnQHRhZy4kUzIuJDQnIH0sXG4gICAgICAgICAgICAgICAgICAgIEFUVFJJQl9WQUxVRV1dLFxuICAgICAgICAgICAgWy8oXFx3KykoXFxzKj1cXHMqKShcIlteXCJdKlwifCdbXiddKicpLywgW0FUVFJJQl9OQU1FLCBERUxJTV9BU1NJR04sIEFUVFJJQl9WQUxVRV1dLFxuICAgICAgICAgICAgWy9cXHcrLywgQVRUUklCX05BTUVdLFxuICAgICAgICAgICAgWy9cXC8+LywgZ2V0VGFnKCckUzInKSwgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvPi8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PXN0eWxlJzogeyB0b2tlbjogZ2V0VGFnKCckUzInKSwgc3dpdGNoVG86ICdlbWJlZGRlZFN0eWxlJywgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1zY3JpcHQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyRTMyc6IHsgdG9rZW46IGdldFRhZygnJFMyJyksIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICckUzMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46IGdldFRhZygnJFMyJyksIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogZ2V0VGFnKCckUzInKSwgbmV4dDogJ0Bwb3AnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICBdLFxuICAgICAgICBlbWJlZGRlZFN0eWxlOiBbXG4gICAgICAgICAgICBbL1tePF0rLywgJyddLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLzwvLCAnJ11cbiAgICAgICAgXSxcbiAgICAgICAgZW1iZWRkZWRTY3JpcHQ6IFtcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLzwvLCAnJ11cbiAgICAgICAgXSxcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==