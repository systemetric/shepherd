(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*!---------------------------------------------------------------------------------------------
 *  Copyright (C) David Owens II, owensd.io. All rights reserved.
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
        { open: '`', close: '`' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: '`', close: '`' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.swift',
    // TODO(owensd): Support the full range of unicode valid identifiers.
    identifier: /[a-zA-Z_][\w$]*/,
    // TODO(owensd): Support the @availability macro properly.
    attributes: [
        '@autoclosure', '@noescape', '@noreturn', '@NSApplicationMain', '@NSCopying', '@NSManaged',
        '@objc', '@UIApplicationMain', '@noreturn', '@availability', '@IBAction', '@IBDesignable', '@IBInspectable', '@IBOutlet'
    ],
    accessmodifiers: ['public', 'private', 'internal'],
    keywords: [
        '__COLUMN__', '__FILE__', '__FUNCTION__', '__LINE__', 'as', 'as!', 'as?', 'associativity', 'break', 'case', 'catch',
        'class', 'continue', 'convenience', 'default', 'deinit', 'didSet', 'do', 'dynamic', 'dynamicType',
        'else', 'enum', 'extension', 'fallthrough', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'in', 'infix',
        'init', 'inout', 'internal', 'is', 'lazy', 'left', 'let', 'mutating', 'nil', 'none', 'nonmutating', 'operator',
        'optional', 'override', 'postfix', 'precedence', 'prefix', 'private', 'protocol', 'Protocol', 'public',
        'repeat', 'required', 'return', 'right', 'self', 'Self', 'set', 'static', 'struct', 'subscript', 'super', 'switch',
        'throw', 'throws', 'try', 'try!', 'Type', 'typealias', 'unowned', 'var', 'weak', 'where', 'while', 'willSet', 'FALSE', 'TRUE'
    ],
    symbols: /[=(){}\[\].,:;@#\_&\-<>`?!+*\\\/]/,
    // Moved . to operatorstart so it can be a delimiter
    operatorstart: /[\/=\-+!*%<>&|^~?\u00A1-\u00A7\u00A9\u00AB\u00AC\u00AE\u00B0-\u00B1\u00B6\u00BB\u00BF\u00D7\u00F7\u2016-\u2017\u2020-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u23FF\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3030]/,
    operatorend: /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE00-\uFE0F\uFE20-\uFE2F\uE0100-\uE01EF]/,
    operators: /(@operatorstart)((@operatorstart)|(@operatorend))*/,
    // TODO(owensd): These are borrowed from C#; need to validate correctness for Swift.
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            { include: '@comment' },
            { include: '@attribute' },
            { include: '@literal' },
            { include: '@keyword' },
            { include: '@invokedmethod' },
            { include: '@symbol' },
        ],
        symbol: [
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/[.]/, 'delimiter'],
            [/@operators/, 'operator'],
            [/@symbols/, 'operator']
        ],
        comment: [
            [/\/\/\/.*$/, 'comment.doc'],
            [/\/\*\*/, 'comment.doc', '@commentdocbody'],
            [/\/\/.*$/, 'comment'],
            [/\/\*/, 'comment', '@commentbody']
        ],
        commentdocbody: [
            [/\/\*/, 'comment', '@commentbody'],
            [/\*\//, 'comment.doc', '@pop'],
            [/\:[a-zA-Z]+\:/, 'comment.doc.param'],
            [/./, 'comment.doc']
        ],
        commentbody: [
            [/\/\*/, 'comment', '@commentbody'],
            [/\*\//, 'comment', '@pop'],
            [/./, 'comment']
        ],
        attribute: [
            [/\@@identifier/, {
                    cases: {
                        '@attributes': 'keyword.control',
                        '@default': ''
                    }
                }]
        ],
        literal: [
            [/"/, { token: 'string.quote', next: '@stringlit' }],
            [/0[b]([01]_?)+/, 'number.binary'],
            [/0[o]([0-7]_?)+/, 'number.octal'],
            [/0[x]([0-9a-fA-F]_?)+([pP][\-+](\d_?)+)?/, 'number.hex'],
            [/(\d_?)*\.(\d_?)+([eE][\-+]?(\d_?)+)?/, 'number.float'],
            [/(\d_?)+/, 'number']
        ],
        stringlit: [
            [/\\\(/, { token: 'operator', next: '@interpolatedexpression' }],
            [/@escapes/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', next: '@pop' }],
            [/./, 'string']
        ],
        interpolatedexpression: [
            [/\(/, { token: 'operator', next: '@interpolatedexpression' }],
            [/\)/, { token: 'operator', next: '@pop' }],
            { include: '@literal' },
            { include: '@keyword' },
            { include: '@symbol' }
        ],
        keyword: [
            [/`/, { token: 'operator', next: '@escapedkeyword' }],
            [/@identifier/, {
                    cases: {
                        '@keywords': 'keyword', '[A-Z][\a-zA-Z0-9$]*': 'type.identifier',
                        '@default': 'identifier'
                    }
                }]
        ],
        escapedkeyword: [
            [/`/, { token: 'operator', next: '@pop' }],
            [/./, 'identifier']
        ],
        //		symbol: [
        //			[ /@symbols/, 'operator' ],
        //			[ /@operators/, 'operator' ]
        //		],
        invokedmethod: [
            [/([.])(@identifier)/, {
                    cases: {
                        '$2': ['delimeter', 'type.identifier'],
                        '@default': ''
                    }
                }],
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3N3aWZ0L3N3aWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsNEJBQTRCO0FBQ3pDLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBNEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQXFEO0FBQzNFO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBcUQ7QUFDekUsb0JBQW9CLGtDQUFrQztBQUN0RCxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBNkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsbUJBQW1CLGtDQUFrQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBIiwiZmlsZSI6IjQ4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoQykgRGF2aWQgT3dlbnMgSUksIG93ZW5zZC5pby4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfSxcbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfSxcbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5zd2lmdCcsXG4gICAgLy8gVE9ETyhvd2Vuc2QpOiBTdXBwb3J0IHRoZSBmdWxsIHJhbmdlIG9mIHVuaWNvZGUgdmFsaWQgaWRlbnRpZmllcnMuXG4gICAgaWRlbnRpZmllcjogL1thLXpBLVpfXVtcXHckXSovLFxuICAgIC8vIFRPRE8ob3dlbnNkKTogU3VwcG9ydCB0aGUgQGF2YWlsYWJpbGl0eSBtYWNybyBwcm9wZXJseS5cbiAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICdAYXV0b2Nsb3N1cmUnLCAnQG5vZXNjYXBlJywgJ0Bub3JldHVybicsICdATlNBcHBsaWNhdGlvbk1haW4nLCAnQE5TQ29weWluZycsICdATlNNYW5hZ2VkJyxcbiAgICAgICAgJ0BvYmpjJywgJ0BVSUFwcGxpY2F0aW9uTWFpbicsICdAbm9yZXR1cm4nLCAnQGF2YWlsYWJpbGl0eScsICdASUJBY3Rpb24nLCAnQElCRGVzaWduYWJsZScsICdASUJJbnNwZWN0YWJsZScsICdASUJPdXRsZXQnXG4gICAgXSxcbiAgICBhY2Nlc3Ntb2RpZmllcnM6IFsncHVibGljJywgJ3ByaXZhdGUnLCAnaW50ZXJuYWwnXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnX19DT0xVTU5fXycsICdfX0ZJTEVfXycsICdfX0ZVTkNUSU9OX18nLCAnX19MSU5FX18nLCAnYXMnLCAnYXMhJywgJ2FzPycsICdhc3NvY2lhdGl2aXR5JywgJ2JyZWFrJywgJ2Nhc2UnLCAnY2F0Y2gnLFxuICAgICAgICAnY2xhc3MnLCAnY29udGludWUnLCAnY29udmVuaWVuY2UnLCAnZGVmYXVsdCcsICdkZWluaXQnLCAnZGlkU2V0JywgJ2RvJywgJ2R5bmFtaWMnLCAnZHluYW1pY1R5cGUnLFxuICAgICAgICAnZWxzZScsICdlbnVtJywgJ2V4dGVuc2lvbicsICdmYWxsdGhyb3VnaCcsICdmaW5hbCcsICdmb3InLCAnZnVuYycsICdnZXQnLCAnZ3VhcmQnLCAnaWYnLCAnaW1wb3J0JywgJ2luJywgJ2luZml4JyxcbiAgICAgICAgJ2luaXQnLCAnaW5vdXQnLCAnaW50ZXJuYWwnLCAnaXMnLCAnbGF6eScsICdsZWZ0JywgJ2xldCcsICdtdXRhdGluZycsICduaWwnLCAnbm9uZScsICdub25tdXRhdGluZycsICdvcGVyYXRvcicsXG4gICAgICAgICdvcHRpb25hbCcsICdvdmVycmlkZScsICdwb3N0Zml4JywgJ3ByZWNlZGVuY2UnLCAncHJlZml4JywgJ3ByaXZhdGUnLCAncHJvdG9jb2wnLCAnUHJvdG9jb2wnLCAncHVibGljJyxcbiAgICAgICAgJ3JlcGVhdCcsICdyZXF1aXJlZCcsICdyZXR1cm4nLCAncmlnaHQnLCAnc2VsZicsICdTZWxmJywgJ3NldCcsICdzdGF0aWMnLCAnc3RydWN0JywgJ3N1YnNjcmlwdCcsICdzdXBlcicsICdzd2l0Y2gnLFxuICAgICAgICAndGhyb3cnLCAndGhyb3dzJywgJ3RyeScsICd0cnkhJywgJ1R5cGUnLCAndHlwZWFsaWFzJywgJ3Vub3duZWQnLCAndmFyJywgJ3dlYWsnLCAnd2hlcmUnLCAnd2hpbGUnLCAnd2lsbFNldCcsICdGQUxTRScsICdUUlVFJ1xuICAgIF0sXG4gICAgc3ltYm9sczogL1s9KCl7fVxcW1xcXS4sOjtAI1xcXyZcXC08PmA/ISsqXFxcXFxcL10vLFxuICAgIC8vIE1vdmVkIC4gdG8gb3BlcmF0b3JzdGFydCBzbyBpdCBjYW4gYmUgYSBkZWxpbWl0ZXJcbiAgICBvcGVyYXRvcnN0YXJ0OiAvW1xcLz1cXC0rISolPD4mfF5+P1xcdTAwQTEtXFx1MDBBN1xcdTAwQTlcXHUwMEFCXFx1MDBBQ1xcdTAwQUVcXHUwMEIwLVxcdTAwQjFcXHUwMEI2XFx1MDBCQlxcdTAwQkZcXHUwMEQ3XFx1MDBGN1xcdTIwMTYtXFx1MjAxN1xcdTIwMjAtXFx1MjAyN1xcdTIwMzAtXFx1MjAzRVxcdTIwNDEtXFx1MjA1M1xcdTIwNTUtXFx1MjA1RVxcdTIxOTAtXFx1MjNGRlxcdTI1MDAtXFx1Mjc3NVxcdTI3OTQtXFx1MkJGRlxcdTJFMDAtXFx1MkU3RlxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAzMF0vLFxuICAgIG9wZXJhdG9yZW5kOiAvW1xcdTAzMDAtXFx1MDM2RlxcdTFEQzAtXFx1MURGRlxcdTIwRDAtXFx1MjBGRlxcdUZFMDAtXFx1RkUwRlxcdUZFMjAtXFx1RkUyRlxcdUUwMTAwLVxcdUUwMUVGXS8sXG4gICAgb3BlcmF0b3JzOiAvKEBvcGVyYXRvcnN0YXJ0KSgoQG9wZXJhdG9yc3RhcnQpfChAb3BlcmF0b3JlbmQpKSovLFxuICAgIC8vIFRPRE8ob3dlbnNkKTogVGhlc2UgYXJlIGJvcnJvd2VkIGZyb20gQyM7IG5lZWQgdG8gdmFsaWRhdGUgY29ycmVjdG5lc3MgZm9yIFN3aWZ0LlxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50JyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGF0dHJpYnV0ZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BsaXRlcmFsJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGtleXdvcmQnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaW52b2tlZG1ldGhvZCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzeW1ib2wnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN5bWJvbDogW1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1suXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvQG9wZXJhdG9ycy8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdvcGVyYXRvciddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvXFwvXFwvXFwvLiokLywgJ2NvbW1lbnQuZG9jJ10sXG4gICAgICAgICAgICBbL1xcL1xcKlxcKi8sICdjb21tZW50LmRvYycsICdAY29tbWVudGRvY2JvZHknXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudGRvY2JvZHk6IFtcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50LmRvYycsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1xcOlthLXpBLVpdK1xcOi8sICdjb21tZW50LmRvYy5wYXJhbSddLFxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudGJvZHk6IFtcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnRib2R5J10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cmlidXRlOiBbXG4gICAgICAgICAgICBbL1xcQEBpZGVudGlmaWVyLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BhdHRyaWJ1dGVzJzogJ2tleXdvcmQuY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgXSxcbiAgICAgICAgbGl0ZXJhbDogW1xuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHN0cmluZ2xpdCcgfV0sXG4gICAgICAgICAgICBbLzBbYl0oWzAxXV8/KSsvLCAnbnVtYmVyLmJpbmFyeSddLFxuICAgICAgICAgICAgWy8wW29dKFswLTddXz8pKy8sICdudW1iZXIub2N0YWwnXSxcbiAgICAgICAgICAgIFsvMFt4XShbMC05YS1mQS1GXV8/KSsoW3BQXVtcXC0rXShcXGRfPykrKT8vLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8oXFxkXz8pKlxcLihcXGRfPykrKFtlRV1bXFwtK10/KFxcZF8/KSspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvKFxcZF8/KSsvLCAnbnVtYmVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nbGl0OiBbXG4gICAgICAgICAgICBbL1xcXFxcXCgvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQGludGVycG9sYXRlZGV4cHJlc3Npb24nIH1dLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBpbnRlcnBvbGF0ZWRleHByZXNzaW9uOiBbXG4gICAgICAgICAgICBbL1xcKC8sIHsgdG9rZW46ICdvcGVyYXRvcicsIG5leHQ6ICdAaW50ZXJwb2xhdGVkZXhwcmVzc2lvbicgfV0sXG4gICAgICAgICAgICBbL1xcKS8sIHsgdG9rZW46ICdvcGVyYXRvcicsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BsaXRlcmFsJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGtleXdvcmQnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3ltYm9sJyB9XG4gICAgICAgIF0sXG4gICAgICAgIGtleXdvcmQ6IFtcbiAgICAgICAgICAgIFsvYC8sIHsgdG9rZW46ICdvcGVyYXRvcicsIG5leHQ6ICdAZXNjYXBlZGtleXdvcmQnIH1dLFxuICAgICAgICAgICAgWy9AaWRlbnRpZmllci8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsICdbQS1aXVtcXGEtekEtWjAtOSRdKic6ICd0eXBlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICBdLFxuICAgICAgICBlc2NhcGVka2V5d29yZDogW1xuICAgICAgICAgICAgWy9gLywgeyB0b2tlbjogJ29wZXJhdG9yJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8uLywgJ2lkZW50aWZpZXInXVxuICAgICAgICBdLFxuICAgICAgICAvL1x0XHRzeW1ib2w6IFtcbiAgICAgICAgLy9cdFx0XHRbIC9Ac3ltYm9scy8sICdvcGVyYXRvcicgXSxcbiAgICAgICAgLy9cdFx0XHRbIC9Ab3BlcmF0b3JzLywgJ29wZXJhdG9yJyBdXG4gICAgICAgIC8vXHRcdF0sXG4gICAgICAgIGludm9rZWRtZXRob2Q6IFtcbiAgICAgICAgICAgIFsvKFsuXSkoQGlkZW50aWZpZXIpLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQyJzogWydkZWxpbWV0ZXInLCAndHlwZS5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==