(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js ***!
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
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] },
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
            start: new RegExp("^\\s*#pragma\\s+region\\b"),
            end: new RegExp("^\\s*#pragma\\s+endregion\\b")
        }
    }
};
var language = {
    tokenPostfix: '.rust',
    defaultToken: 'invalid',
    keywords: [
        'as', 'box', 'break', 'const', 'continue', 'crate', 'else', 'enum',
        'extern', 'false', 'fn', 'for', 'if', 'impl', 'in', 'let', 'loop',
        'match', 'mod', 'move', 'mut', 'pub', 'ref', 'return', 'self',
        'static', 'struct', 'super', 'trait', 'true', 'type', 'unsafe', 'use',
        'where', 'while', 'catch', 'default', 'union', 'static', 'abstract',
        'alignof', 'become', 'do', 'final', 'macro', 'offsetof', 'override',
        'priv', 'proc', 'pure', 'sizeof', 'typeof', 'unsized', 'virtual',
        'yield',
    ],
    typeKeywords: [
        'Self', 'm32', 'm64', 'm128', 'f80', 'f16', 'f128', 'int', 'uint',
        'float', 'char', 'bool', 'u8', 'u16', 'u32', 'u64', 'f32', 'f64', 'i8',
        'i16', 'i32', 'i64', 'str', 'Option', 'Either', 'c_float', 'c_double',
        'c_void', 'FILE', 'fpos_t', 'DIR', 'dirent', 'c_char', 'c_schar',
        'c_uchar', 'c_short', 'c_ushort', 'c_int', 'c_uint', 'c_long',
        'c_ulong', 'size_t', 'ptrdiff_t', 'clock_t', 'time_t', 'c_longlong',
        'c_ulonglong', 'intptr_t', 'uintptr_t', 'off_t', 'dev_t', 'ino_t',
        'pid_t', 'mode_t', 'ssize_t',
    ],
    constants: [
        'true', 'false', 'Some', 'None', 'Left', 'Right', 'Ok', 'Err',
    ],
    supportConstants: [
        'EXIT_FAILURE', 'EXIT_SUCCESS', 'RAND_MAX', 'EOF', 'SEEK_SET',
        'SEEK_CUR', 'SEEK_END', '_IOFBF', '_IONBF', '_IOLBF', 'BUFSIZ',
        'FOPEN_MAX', 'FILENAME_MAX', 'L_tmpnam', 'TMP_MAX', 'O_RDONLY',
        'O_WRONLY', 'O_RDWR', 'O_APPEND', 'O_CREAT', 'O_EXCL', 'O_TRUNC',
        'S_IFIFO', 'S_IFCHR', 'S_IFBLK', 'S_IFDIR', 'S_IFREG', 'S_IFMT',
        'S_IEXEC', 'S_IWRITE', 'S_IREAD', 'S_IRWXU', 'S_IXUSR', 'S_IWUSR',
        'S_IRUSR', 'F_OK', 'R_OK', 'W_OK', 'X_OK', 'STDIN_FILENO',
        'STDOUT_FILENO', 'STDERR_FILENO',
    ],
    supportMacros: [
        'format!', 'print!', 'println!', 'panic!', 'format_args!', 'unreachable!',
        'write!', 'writeln!'
    ],
    operators: [
        '!', '!=', '%', '%=', '&', '&=', '&&', '*', '*=', '+', '+=', '-', '-=',
        '->', '.', '..', '...', '/', '/=', ':', ';', '<<', '<<=', '<', '<=', '=',
        '==', '=>', '>', '>=', '>>', '>>=', '@', '^', '^=', '|', '|=', '||', '_',
        '?', '#'
    ],
    escapes: /\\([nrt0\"''\\]|x\h{2}|u\{\h{1,6}\})/,
    delimiters: /[,]/,
    symbols: /[\#\!\%\&\*\+\-\.\/\:\;\<\=\>\@\^\|_\?]+/,
    intSuffixes: /[iu](8|16|32|64|128|size)/,
    floatSuffixes: /f(32|64)/,
    tokenizer: {
        root: [
            [/[a-zA-Z][a-zA-Z0-9_]*!?|_[a-zA-Z0-9_]+/,
                {
                    cases: {
                        '@typeKeywords': 'keyword.type',
                        '@keywords': 'keyword',
                        '@supportConstants': 'keyword',
                        '@supportMacros': 'keyword',
                        '@constants': 'keyword',
                        '@default': 'identifier',
                    }
                }
            ],
            // Designator
            [/\$/, 'identifier'],
            // Lifetime annotations
            [/'[a-zA-Z_][a-zA-Z0-9_]*(?=[^\'])/, 'identifier'],
            // Byte literal
            [/'\S'/, 'string.byteliteral'],
            // Strings
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
            { include: '@numbers' },
            // Whitespace + comments
            { include: '@whitespace' },
            [/@delimiters/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'delimiter'
                    }
                }],
            [/[{}()\[\]<>]/, '@brackets'],
            [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\/\*/, 'comment', '@push'],
            ["\\*/", 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        numbers: [
            //Octal
            [/(0o[0-7_]+)(@intSuffixes)?/, { token: 'number' }],
            //Binary
            [/(0b[0-1_]+)(@intSuffixes)?/, { token: 'number' }],
            //Exponent
            [/[\d][\d_]*(\.[\d][\d_]*)?[eE][+-][\d_]+(@floatSuffixes)?/, { token: 'number' }],
            //Float
            [/\b(\d\.?[\d_]*)(@floatSuffixes)?\b/, { token: 'number' }],
            //Hexadecimal
            [/(0x[\da-fA-F]+)_?(@intSuffixes)?/, { token: 'number' }],
            //Integer
            [/[\d][\d_]*(@intSuffixes?)?/, { token: 'number' }],
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3J1c3QvcnVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLDJDQUEyQztBQUNwRDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7QUFDakQ7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBMkQ7QUFDOUUsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQiwwQkFBMEIsU0FBUywyQ0FBMkMsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGtCQUFrQjtBQUM5RDtBQUNBLDRDQUE0QyxrQkFBa0I7QUFDOUQ7QUFDQSwwRUFBMEUsa0JBQWtCO0FBQzVGO0FBQ0Esb0RBQW9ELGtCQUFrQjtBQUN0RTtBQUNBLGtEQUFrRCxrQkFBa0I7QUFDcEU7QUFDQSw0Q0FBNEMsa0JBQWtCO0FBQzlEO0FBQ0E7QUFDQSIsImZpbGUiOiI0MC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnXSB9LFxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccyojcHJhZ21hXFxcXHMrcmVnaW9uXFxcXGJcIiksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqI3ByYWdtYVxcXFxzK2VuZHJlZ2lvblxcXFxiXCIpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICB0b2tlblBvc3RmaXg6ICcucnVzdCcsXG4gICAgZGVmYXVsdFRva2VuOiAnaW52YWxpZCcsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2FzJywgJ2JveCcsICdicmVhaycsICdjb25zdCcsICdjb250aW51ZScsICdjcmF0ZScsICdlbHNlJywgJ2VudW0nLFxuICAgICAgICAnZXh0ZXJuJywgJ2ZhbHNlJywgJ2ZuJywgJ2ZvcicsICdpZicsICdpbXBsJywgJ2luJywgJ2xldCcsICdsb29wJyxcbiAgICAgICAgJ21hdGNoJywgJ21vZCcsICdtb3ZlJywgJ211dCcsICdwdWInLCAncmVmJywgJ3JldHVybicsICdzZWxmJyxcbiAgICAgICAgJ3N0YXRpYycsICdzdHJ1Y3QnLCAnc3VwZXInLCAndHJhaXQnLCAndHJ1ZScsICd0eXBlJywgJ3Vuc2FmZScsICd1c2UnLFxuICAgICAgICAnd2hlcmUnLCAnd2hpbGUnLCAnY2F0Y2gnLCAnZGVmYXVsdCcsICd1bmlvbicsICdzdGF0aWMnLCAnYWJzdHJhY3QnLFxuICAgICAgICAnYWxpZ25vZicsICdiZWNvbWUnLCAnZG8nLCAnZmluYWwnLCAnbWFjcm8nLCAnb2Zmc2V0b2YnLCAnb3ZlcnJpZGUnLFxuICAgICAgICAncHJpdicsICdwcm9jJywgJ3B1cmUnLCAnc2l6ZW9mJywgJ3R5cGVvZicsICd1bnNpemVkJywgJ3ZpcnR1YWwnLFxuICAgICAgICAneWllbGQnLFxuICAgIF0sXG4gICAgdHlwZUtleXdvcmRzOiBbXG4gICAgICAgICdTZWxmJywgJ20zMicsICdtNjQnLCAnbTEyOCcsICdmODAnLCAnZjE2JywgJ2YxMjgnLCAnaW50JywgJ3VpbnQnLFxuICAgICAgICAnZmxvYXQnLCAnY2hhcicsICdib29sJywgJ3U4JywgJ3UxNicsICd1MzInLCAndTY0JywgJ2YzMicsICdmNjQnLCAnaTgnLFxuICAgICAgICAnaTE2JywgJ2kzMicsICdpNjQnLCAnc3RyJywgJ09wdGlvbicsICdFaXRoZXInLCAnY19mbG9hdCcsICdjX2RvdWJsZScsXG4gICAgICAgICdjX3ZvaWQnLCAnRklMRScsICdmcG9zX3QnLCAnRElSJywgJ2RpcmVudCcsICdjX2NoYXInLCAnY19zY2hhcicsXG4gICAgICAgICdjX3VjaGFyJywgJ2Nfc2hvcnQnLCAnY191c2hvcnQnLCAnY19pbnQnLCAnY191aW50JywgJ2NfbG9uZycsXG4gICAgICAgICdjX3Vsb25nJywgJ3NpemVfdCcsICdwdHJkaWZmX3QnLCAnY2xvY2tfdCcsICd0aW1lX3QnLCAnY19sb25nbG9uZycsXG4gICAgICAgICdjX3Vsb25nbG9uZycsICdpbnRwdHJfdCcsICd1aW50cHRyX3QnLCAnb2ZmX3QnLCAnZGV2X3QnLCAnaW5vX3QnLFxuICAgICAgICAncGlkX3QnLCAnbW9kZV90JywgJ3NzaXplX3QnLFxuICAgIF0sXG4gICAgY29uc3RhbnRzOiBbXG4gICAgICAgICd0cnVlJywgJ2ZhbHNlJywgJ1NvbWUnLCAnTm9uZScsICdMZWZ0JywgJ1JpZ2h0JywgJ09rJywgJ0VycicsXG4gICAgXSxcbiAgICBzdXBwb3J0Q29uc3RhbnRzOiBbXG4gICAgICAgICdFWElUX0ZBSUxVUkUnLCAnRVhJVF9TVUNDRVNTJywgJ1JBTkRfTUFYJywgJ0VPRicsICdTRUVLX1NFVCcsXG4gICAgICAgICdTRUVLX0NVUicsICdTRUVLX0VORCcsICdfSU9GQkYnLCAnX0lPTkJGJywgJ19JT0xCRicsICdCVUZTSVonLFxuICAgICAgICAnRk9QRU5fTUFYJywgJ0ZJTEVOQU1FX01BWCcsICdMX3RtcG5hbScsICdUTVBfTUFYJywgJ09fUkRPTkxZJyxcbiAgICAgICAgJ09fV1JPTkxZJywgJ09fUkRXUicsICdPX0FQUEVORCcsICdPX0NSRUFUJywgJ09fRVhDTCcsICdPX1RSVU5DJyxcbiAgICAgICAgJ1NfSUZJRk8nLCAnU19JRkNIUicsICdTX0lGQkxLJywgJ1NfSUZESVInLCAnU19JRlJFRycsICdTX0lGTVQnLFxuICAgICAgICAnU19JRVhFQycsICdTX0lXUklURScsICdTX0lSRUFEJywgJ1NfSVJXWFUnLCAnU19JWFVTUicsICdTX0lXVVNSJyxcbiAgICAgICAgJ1NfSVJVU1InLCAnRl9PSycsICdSX09LJywgJ1dfT0snLCAnWF9PSycsICdTVERJTl9GSUxFTk8nLFxuICAgICAgICAnU1RET1VUX0ZJTEVOTycsICdTVERFUlJfRklMRU5PJyxcbiAgICBdLFxuICAgIHN1cHBvcnRNYWNyb3M6IFtcbiAgICAgICAgJ2Zvcm1hdCEnLCAncHJpbnQhJywgJ3ByaW50bG4hJywgJ3BhbmljIScsICdmb3JtYXRfYXJncyEnLCAndW5yZWFjaGFibGUhJyxcbiAgICAgICAgJ3dyaXRlIScsICd3cml0ZWxuISdcbiAgICBdLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnIScsICchPScsICclJywgJyU9JywgJyYnLCAnJj0nLCAnJiYnLCAnKicsICcqPScsICcrJywgJys9JywgJy0nLCAnLT0nLFxuICAgICAgICAnLT4nLCAnLicsICcuLicsICcuLi4nLCAnLycsICcvPScsICc6JywgJzsnLCAnPDwnLCAnPDw9JywgJzwnLCAnPD0nLCAnPScsXG4gICAgICAgICc9PScsICc9PicsICc+JywgJz49JywgJz4+JywgJz4+PScsICdAJywgJ14nLCAnXj0nLCAnfCcsICd8PScsICd8fCcsICdfJyxcbiAgICAgICAgJz8nLCAnIydcbiAgICBdLFxuICAgIGVzY2FwZXM6IC9cXFxcKFtucnQwXFxcIicnXFxcXF18eFxcaHsyfXx1XFx7XFxoezEsNn1cXH0pLyxcbiAgICBkZWxpbWl0ZXJzOiAvWyxdLyxcbiAgICBzeW1ib2xzOiAvW1xcI1xcIVxcJVxcJlxcKlxcK1xcLVxcLlxcL1xcOlxcO1xcPFxcPVxcPlxcQFxcXlxcfF9cXD9dKy8sXG4gICAgaW50U3VmZml4ZXM6IC9baXVdKDh8MTZ8MzJ8NjR8MTI4fHNpemUpLyxcbiAgICBmbG9hdFN1ZmZpeGVzOiAvZigzMnw2NCkvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbL1thLXpBLVpdW2EtekEtWjAtOV9dKiE/fF9bYS16QS1aMC05X10rLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQHR5cGVLZXl3b3Jkcyc6ICdrZXl3b3JkLnR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3VwcG9ydENvbnN0YW50cyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3VwcG9ydE1hY3Jvcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAY29uc3RhbnRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIERlc2lnbmF0b3JcbiAgICAgICAgICAgIFsvXFwkLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIC8vIExpZmV0aW1lIGFubm90YXRpb25zXG4gICAgICAgICAgICBbLydbYS16QS1aX11bYS16QS1aMC05X10qKD89W15cXCddKS8sICdpZGVudGlmaWVyJ10sXG4gICAgICAgICAgICAvLyBCeXRlIGxpdGVyYWxcbiAgICAgICAgICAgIFsvJ1xcUycvLCAnc3RyaW5nLmJ5dGVsaXRlcmFsJ10sXG4gICAgICAgICAgICAvLyBTdHJpbmdzXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgLy8gV2hpdGVzcGFjZSArIGNvbW1lbnRzXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIFsvQGRlbGltaXRlcnMvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2RlbGltaXRlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy9be30oKVxcW1xcXTw+XS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCB7IGNhc2VzOiB7ICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJywgJ0BkZWZhdWx0JzogJycgfSB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAcHVzaCddLFxuICAgICAgICAgICAgW1wiXFxcXCovXCIsICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBudW1iZXJzOiBbXG4gICAgICAgICAgICAvL09jdGFsXG4gICAgICAgICAgICBbLygwb1swLTdfXSspKEBpbnRTdWZmaXhlcyk/LywgeyB0b2tlbjogJ251bWJlcicgfV0sXG4gICAgICAgICAgICAvL0JpbmFyeVxuICAgICAgICAgICAgWy8oMGJbMC0xX10rKShAaW50U3VmZml4ZXMpPy8sIHsgdG9rZW46ICdudW1iZXInIH1dLFxuICAgICAgICAgICAgLy9FeHBvbmVudFxuICAgICAgICAgICAgWy9bXFxkXVtcXGRfXSooXFwuW1xcZF1bXFxkX10qKT9bZUVdWystXVtcXGRfXSsoQGZsb2F0U3VmZml4ZXMpPy8sIHsgdG9rZW46ICdudW1iZXInIH1dLFxuICAgICAgICAgICAgLy9GbG9hdFxuICAgICAgICAgICAgWy9cXGIoXFxkXFwuP1tcXGRfXSopKEBmbG9hdFN1ZmZpeGVzKT9cXGIvLCB7IHRva2VuOiAnbnVtYmVyJyB9XSxcbiAgICAgICAgICAgIC8vSGV4YWRlY2ltYWxcbiAgICAgICAgICAgIFsvKDB4W1xcZGEtZkEtRl0rKV8/KEBpbnRTdWZmaXhlcyk/LywgeyB0b2tlbjogJ251bWJlcicgfV0sXG4gICAgICAgICAgICAvL0ludGVnZXJcbiAgICAgICAgICAgIFsvW1xcZF1bXFxkX10qKEBpbnRTdWZmaXhlcz8pPy8sIHsgdG9rZW46ICdudW1iZXInIH1dLFxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=