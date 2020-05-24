(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js ***!
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
    brackets: [],
    autoClosingPairs: [],
    surroundingPairs: []
};
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
    keywords: [],
    typeKeywords: [],
    tokenPostfix: '.csp',
    operators: [],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            [/child-src/, 'string.quote'],
            [/connect-src/, 'string.quote'],
            [/default-src/, 'string.quote'],
            [/font-src/, 'string.quote'],
            [/frame-src/, 'string.quote'],
            [/img-src/, 'string.quote'],
            [/manifest-src/, 'string.quote'],
            [/media-src/, 'string.quote'],
            [/object-src/, 'string.quote'],
            [/script-src/, 'string.quote'],
            [/style-src/, 'string.quote'],
            [/worker-src/, 'string.quote'],
            [/base-uri/, 'string.quote'],
            [/plugin-types/, 'string.quote'],
            [/sandbox/, 'string.quote'],
            [/disown-opener/, 'string.quote'],
            [/form-action/, 'string.quote'],
            [/frame-ancestors/, 'string.quote'],
            [/report-uri/, 'string.quote'],
            [/report-to/, 'string.quote'],
            [/upgrade-insecure-requests/, 'string.quote'],
            [/block-all-mixed-content/, 'string.quote'],
            [/require-sri-for/, 'string.quote'],
            [/reflected-xss/, 'string.quote'],
            [/referrer/, 'string.quote'],
            [/policy-uri/, 'string.quote'],
            [/'self'/, 'string.quote'],
            [/'unsafe-inline'/, 'string.quote'],
            [/'unsafe-eval'/, 'string.quote'],
            [/'strict-dynamic'/, 'string.quote'],
            [/'unsafe-hashed-attributes'/, 'string.quote']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NzcC9jc3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjEyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGJyYWNrZXRzOiBbXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgLy8gU2V0IGRlZmF1bHRUb2tlbiB0byBpbnZhbGlkIHRvIHNlZSB3aGF0IHlvdSBkbyBub3QgdG9rZW5pemUgeWV0XG4gICAgLy8gZGVmYXVsdFRva2VuOiAnaW52YWxpZCcsXG4gICAga2V5d29yZHM6IFtdLFxuICAgIHR5cGVLZXl3b3JkczogW10sXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNzcCcsXG4gICAgb3BlcmF0b3JzOiBbXSxcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbL2NoaWxkLXNyYy8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvY29ubmVjdC1zcmMvLCAnc3RyaW5nLnF1b3RlJ10sXG4gICAgICAgICAgICBbL2RlZmF1bHQtc3JjLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9mb250LXNyYy8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvZnJhbWUtc3JjLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9pbWctc3JjLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9tYW5pZmVzdC1zcmMvLCAnc3RyaW5nLnF1b3RlJ10sXG4gICAgICAgICAgICBbL21lZGlhLXNyYy8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvb2JqZWN0LXNyYy8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvc2NyaXB0LXNyYy8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvc3R5bGUtc3JjLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy93b3JrZXItc3JjLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9iYXNlLXVyaS8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvcGx1Z2luLXR5cGVzLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9zYW5kYm94LywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9kaXNvd24tb3BlbmVyLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9mb3JtLWFjdGlvbi8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvZnJhbWUtYW5jZXN0b3JzLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9yZXBvcnQtdXJpLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9yZXBvcnQtdG8vLCAnc3RyaW5nLnF1b3RlJ10sXG4gICAgICAgICAgICBbL3VwZ3JhZGUtaW5zZWN1cmUtcmVxdWVzdHMvLCAnc3RyaW5nLnF1b3RlJ10sXG4gICAgICAgICAgICBbL2Jsb2NrLWFsbC1taXhlZC1jb250ZW50LywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9yZXF1aXJlLXNyaS1mb3IvLCAnc3RyaW5nLnF1b3RlJ10sXG4gICAgICAgICAgICBbL3JlZmxlY3RlZC14c3MvLCAnc3RyaW5nLnF1b3RlJ10sXG4gICAgICAgICAgICBbL3JlZmVycmVyLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy9wb2xpY3ktdXJpLywgJ3N0cmluZy5xdW90ZSddLFxuICAgICAgICAgICAgWy8nc2VsZicvLCAnc3RyaW5nLnF1b3RlJ10sXG4gICAgICAgICAgICBbLyd1bnNhZmUtaW5saW5lJy8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvJ3Vuc2FmZS1ldmFsJy8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvJ3N0cmljdC1keW5hbWljJy8sICdzdHJpbmcucXVvdGUnXSxcbiAgICAgICAgICAgIFsvJ3Vuc2FmZS1oYXNoZWQtYXR0cmlidXRlcycvLCAnc3RyaW5nLnF1b3RlJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9