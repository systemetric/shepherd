(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js ***!
  \********************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Artyom Shalkhakov. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *
 *  Based on the ATS/Postiats lexer by Hongwei Xi.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['(*', '*)'],
    },
    brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
    ]
};
var language = {
    tokenPostfix: '.pats',
    // TODO: staload and dynload are followed by a special kind of string literals
    // with {$IDENTIFER} variables, and it also may make sense to highlight
    // the punctuation (. and / and \) differently.
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    // keyword reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing_token.dats
    keywords: [
        //
        "abstype",
        "abst0ype",
        "absprop",
        "absview",
        "absvtype",
        "absviewtype",
        "absvt0ype",
        "absviewt0ype",
        //
        "as",
        //
        "and",
        //
        "assume",
        //
        "begin",
        //
        /*
                "case", // CASE
        */
        //
        "classdec",
        //
        "datasort",
        //
        "datatype",
        "dataprop",
        "dataview",
        "datavtype",
        "dataviewtype",
        //
        "do",
        //
        "end",
        //
        "extern",
        "extype",
        "extvar",
        //
        "exception",
        //
        "fn",
        "fnx",
        "fun",
        //
        "prfn",
        "prfun",
        //
        "praxi",
        "castfn",
        //
        "if",
        "then",
        "else",
        //
        "ifcase",
        //
        "in",
        //
        "infix",
        "infixl",
        "infixr",
        "prefix",
        "postfix",
        //
        "implmnt",
        "implement",
        //
        "primplmnt",
        "primplement",
        //
        "import",
        //
        /*
                "lam", // LAM
                "llam", // LLAM
                "fix", // FIX
        */
        //
        "let",
        //
        "local",
        //
        "macdef",
        "macrodef",
        //
        "nonfix",
        //
        "symelim",
        "symintr",
        "overload",
        //
        "of",
        "op",
        //
        "rec",
        //
        "sif",
        "scase",
        //
        "sortdef",
        /*
        // HX: [sta] is now deprecated
        */
        "sta",
        "stacst",
        "stadef",
        "static",
        /*
                "stavar", // T_STAVAR
        */
        //
        "staload",
        "dynload",
        //
        "try",
        //
        "tkindef",
        //
        /*
                "type", // TYPE
        */
        "typedef",
        "propdef",
        "viewdef",
        "vtypedef",
        "viewtypedef",
        //
        /*
                "val", // VAL
        */
        "prval",
        //
        "var",
        "prvar",
        //
        "when",
        "where",
        //
        /*
                "for", // T_FOR
                "while", // T_WHILE
        */
        //
        "with",
        //
        "withtype",
        "withprop",
        "withview",
        "withvtype",
        "withviewtype",
    ],
    keywords_dlr: [
        "$delay",
        "$ldelay",
        //
        "$arrpsz",
        "$arrptrsize",
        //
        "$d2ctype",
        //
        "$effmask",
        "$effmask_ntm",
        "$effmask_exn",
        "$effmask_ref",
        "$effmask_wrt",
        "$effmask_all",
        //
        "$extern",
        "$extkind",
        "$extype",
        "$extype_struct",
        //
        "$extval",
        "$extfcall",
        "$extmcall",
        //
        "$literal",
        //
        "$myfilename",
        "$mylocation",
        "$myfunction",
        //
        "$lst",
        "$lst_t",
        "$lst_vt",
        "$list",
        "$list_t",
        "$list_vt",
        //
        "$rec",
        "$rec_t",
        "$rec_vt",
        "$record",
        "$record_t",
        "$record_vt",
        //
        "$tup",
        "$tup_t",
        "$tup_vt",
        "$tuple",
        "$tuple_t",
        "$tuple_vt",
        //
        "$break",
        "$continue",
        //
        "$raise",
        //
        "$showtype",
        //
        "$vcopyenv_v",
        "$vcopyenv_vt",
        //
        "$tempenver",
        //
        "$solver_assert",
        "$solver_verify",
    ],
    keywords_srp: [
        //
        "#if",
        "#ifdef",
        "#ifndef",
        //
        "#then",
        //
        "#elif",
        "#elifdef",
        "#elifndef",
        //
        "#else",
        "#endif",
        //
        "#error",
        //
        "#prerr",
        "#print",
        //
        "#assert",
        //
        "#undef",
        "#define",
        //
        "#include",
        "#require",
        //
        "#pragma",
        "#codegen2",
        "#codegen3",
    ],
    irregular_keyword_list: [
        "val+",
        "val-",
        "val",
        "case+",
        "case-",
        "case",
        "addr@",
        "addr",
        "fold@",
        "free@",
        "fix@",
        "fix",
        "lam@",
        "lam",
        "llam@",
        "llam",
        "viewt@ype+",
        "viewt@ype-",
        "viewt@ype",
        "viewtype+",
        "viewtype-",
        "viewtype",
        "view+",
        "view-",
        "view@",
        "view",
        "type+",
        "type-",
        "type",
        "vtype+",
        "vtype-",
        "vtype",
        "vt@ype+",
        "vt@ype-",
        "vt@ype",
        "viewt@ype+",
        "viewt@ype-",
        "viewt@ype",
        "viewtype+",
        "viewtype-",
        "viewtype",
        "prop+",
        "prop-",
        "prop",
        "type+",
        "type-",
        "type",
        "t@ype",
        "t@ype+",
        "t@ype-",
        "abst@ype",
        "abstype",
        "absviewt@ype",
        "absvt@ype",
        "for*",
        "for",
        "while*",
        "while"
    ],
    keywords_types: [
        'bool',
        'double',
        'byte',
        'int',
        'short',
        'char',
        'void',
        'unit',
        'long',
        'float',
        'string',
        'strptr'
    ],
    // TODO: reference for this?
    keywords_effects: [
        "0",
        "fun",
        "clo",
        "prf",
        "funclo",
        "cloptr",
        "cloref",
        "ref",
        "ntm",
        "1" // all effects
    ],
    operators: [
        "@",
        "!",
        "|",
        "`",
        ":",
        "$",
        ".",
        "=",
        "#",
        "~",
        //
        "..",
        "...",
        //
        "=>",
        // "=<", // T_EQLT
        "=<>",
        "=/=>",
        "=>>",
        "=/=>>",
        //
        "<",
        ">",
        //
        "><",
        //
        ".<",
        ">.",
        //
        ".<>.",
        //
        "->",
        //"-<", // T_MINUSLT
        "-<>",
    ],
    brackets: [
        { open: ',(', close: ')', token: 'delimiter.parenthesis' },
        { open: '`(', close: ')', token: 'delimiter.parenthesis' },
        { open: '%(', close: ')', token: 'delimiter.parenthesis' },
        { open: '\'(', close: ')', token: 'delimiter.parenthesis' },
        { open: '\'{', close: '}', token: 'delimiter.parenthesis' },
        { open: '@(', close: ')', token: 'delimiter.parenthesis' },
        { open: '@{', close: '}', token: 'delimiter.brace' },
        { open: '@[', close: ']', token: 'delimiter.square' },
        { open: '#[', close: ']', token: 'delimiter.square' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    IDENTFST: /[a-zA-Z_]/,
    IDENTRST: /[a-zA-Z0-9_'$]/,
    symbolic: /[%&+-./:=@~`^|*!$#?<>]/,
    digit: /[0-9]/,
    digitseq0: /@digit*/,
    xdigit: /[0-9A-Za-z]/,
    xdigitseq0: /@xdigit*/,
    INTSP: /[lLuU]/,
    FLOATSP: /[fFlL]/,
    fexponent: /[eE][+-]?[0-9]+/,
    fexponent_bin: /[pP][+-]?[0-9]+/,
    deciexp: /\.[0-9]*@fexponent?/,
    hexiexp: /\.[0-9a-zA-Z]*@fexponent_bin?/,
    irregular_keywords: /val[+-]?|case[+-]?|addr\@?|fold\@|free\@|fix\@?|lam\@?|llam\@?|prop[+-]?|type[+-]?|view[+-@]?|viewt@?ype[+-]?|t@?ype[+-]?|v(iew)?t@?ype[+-]?|abst@?ype|absv(iew)?t@?ype|for\*?|while\*?/,
    ESCHAR: /[ntvbrfa\\\?'"\(\[\{]/,
    start: 'root',
    // The main tokenizer for ATS/Postiats
    // reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing.dats
    tokenizer: {
        root: [
            // lexing_blankseq0
            { regex: /[ \t\r\n]+/, action: { token: '' } },
            // NOTE: (*) is an invalid ML-like comment!
            { regex: /\(\*\)/, action: { token: 'invalid' } },
            { regex: /\(\*/, action: { token: 'comment', next: 'lexing_COMMENT_block_ml' } },
            { regex: /\(/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },
            { regex: /\)/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },
            { regex: /\[/, action: '@brackets' /*{ token: 'delimiter.bracket' }*/ },
            { regex: /\]/, action: '@brackets' /*{ token: 'delimiter.bracket' }*/ },
            { regex: /\{/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },
            { regex: /\}/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },
            // lexing_COMMA
            { regex: /,\(/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },
            { regex: /,/, action: { token: 'delimiter.comma' } },
            { regex: /;/, action: { token: 'delimiter.semicolon' } },
            // lexing_AT
            { regex: /@\(/, action: '@brackets' /* { token: 'delimiter.parenthesis' }*/ },
            { regex: /@\[/, action: '@brackets' /* { token: 'delimiter.bracket' }*/ },
            { regex: /@\{/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },
            // lexing_COLON
            { regex: /:</, action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' } },
            /*
            lexing_DOT:

            . // SYMBOLIC => lexing_IDENT_sym
            . FLOATDOT => lexing_FLOAT_deciexp
            . DIGIT => T_DOTINT
            */
            { regex: /\.@symbolic+/, action: { token: 'identifier.sym' } },
            // FLOATDOT case
            { regex: /\.@digit*@fexponent@FLOATSP*/, action: { token: 'number.float' } },
            { regex: /\.@digit+/, action: { token: 'number.float' } },
            // lexing_DOLLAR:
            // '$' IDENTFST IDENTRST* => lexing_IDENT_dlr, _ => lexing_IDENT_sym
            {
                regex: /\$@IDENTFST@IDENTRST*/,
                action: {
                    cases: {
                        '@keywords_dlr': { token: 'keyword.dlr' },
                        '@default': { token: 'namespace' },
                    }
                }
            },
            // lexing_SHARP:
            // '#' IDENTFST IDENTRST* => lexing_ident_srp, _ => lexing_IDENT_sym
            {
                regex: /\#@IDENTFST@IDENTRST*/,
                action: {
                    cases: {
                        '@keywords_srp': { token: 'keyword.srp' },
                        '@default': { token: 'identifier' },
                    }
                }
            },
            // lexing_PERCENT:
            { regex: /%\(/, action: { token: 'delimiter.parenthesis' } },
            { regex: /^%{(#|\^|\$)?/, action: { token: 'keyword', next: '@lexing_EXTCODE', nextEmbedded: 'text/javascript' } },
            { regex: /^%}/, action: { token: 'keyword' } },
            // lexing_QUOTE
            { regex: /'\(/, action: { token: 'delimiter.parenthesis' } },
            { regex: /'\[/, action: { token: 'delimiter.bracket' } },
            { regex: /'\{/, action: { token: 'delimiter.brace' } },
            [/(')(\\@ESCHAR|\\[xX]@xdigit+|\\@digit+)(')/, ['string', 'string.escape', 'string']],
            [/'[^\\']'/, 'string'],
            // lexing_DQUOTE
            [/"/, 'string.quote', '@lexing_DQUOTE'],
            // lexing_BQUOTE
            { regex: /`\(/, action: '@brackets' /* { token: 'delimiter.parenthesis' }*/ },
            // TODO: otherwise, try lexing_IDENT_sym
            { regex: /\\/, action: { token: 'punctuation' } },
            // lexing_IDENT_alp:
            // NOTE: (?!regex) is syntax for "not-followed-by" regex
            // to resolve ambiguity such as foreach$fwork being incorrectly lexed as [for] [each$fwork]!
            { regex: /@irregular_keywords(?!@IDENTRST)/, action: { token: 'keyword' } },
            {
                regex: /@IDENTFST@IDENTRST*[<!\[]?/,
                action: {
                    cases: {
                        // TODO: dynload and staload should be specially parsed
                        // dynload whitespace+ "special_string"
                        // this special string is really:
                        //  '/' '\\' '.' => punctuation
                        // ({\$)([a-zA-Z_][a-zA-Z_0-9]*)(}) => punctuation,keyword,punctuation
                        // [^"] => identifier/literal
                        '@keywords': { token: 'keyword' },
                        '@keywords_types': { token: 'type' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            // lexing_IDENT_sym:
            { regex: /\/\/\/\//, action: { token: 'comment', next: '@lexing_COMMENT_rest' } },
            { regex: /\/\/.*$/, action: { token: 'comment' } },
            { regex: /\/\*/, action: { token: 'comment', next: '@lexing_COMMENT_block_c' } },
            // AS-20160627: specifically for effect annotations
            { regex: /-<|=</, action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' } },
            {
                regex: /@symbolic+/,
                action: {
                    cases: {
                        '@operators': 'keyword',
                        '@default': 'operator'
                    }
                }
            },
            // lexing_ZERO:
            // FIXME: this one is quite messy/unfinished yet
            // TODO: lexing_INT_hex
            // - testing_hexiexp => lexing_FLOAT_hexiexp
            // - testing_fexponent_bin => lexing_FLOAT_hexiexp
            // - testing_intspseq0 => T_INT_hex
            // lexing_INT_hex:
            { regex: /0[xX]@xdigit+(@hexiexp|@fexponent_bin)@FLOATSP*/, action: { token: 'number.float' } },
            { regex: /0[xX]@xdigit+@INTSP*/, action: { token: 'number.hex' } },
            { regex: /0[0-7]+(?![0-9])@INTSP*/, action: { token: 'number.octal' } },
            //{regex: /0/, action: { token: 'number' } }, // INTZERO
            // lexing_INT_dec:
            // - testing_deciexp => lexing_FLOAT_deciexp
            // - testing_fexponent => lexing_FLOAT_deciexp
            // - otherwise => intspseq0 ([0-9]*[lLuU]?)
            { regex: /@digit+(@fexponent|@deciexp)@FLOATSP*/, action: { token: 'number.float' } },
            { regex: /@digit@digitseq0@INTSP*/, action: { token: 'number.decimal' } },
            // DIGIT, if followed by digitseq0, is lexing_INT_dec
            { regex: /@digit+@INTSP*/, action: { token: 'number' } },
        ],
        lexing_COMMENT_block_ml: [
            [/[^\(\*]+/, 'comment'],
            [/\(\*/, 'comment', '@push'],
            [/\(\*/, 'comment.invalid'],
            [/\*\)/, 'comment', '@pop'],
            [/\*/, 'comment']
        ],
        lexing_COMMENT_block_c: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/, 'comment', '@push' ],    // nested C-style block comments not allowed
            // [/\/\*/,    'comment.invalid' ],	// NOTE: this breaks block comments in the shape of /* //*/
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        lexing_COMMENT_rest: [
            [/$/, 'comment', '@pop'],
            [/.*/, 'comment']
        ],
        // NOTE: added by AS, specifically for highlighting
        lexing_EFFECT_commaseq0: [
            {
                regex: /@IDENTFST@IDENTRST+|@digit+/,
                action: {
                    cases: {
                        '@keywords_effects': { token: 'type.effect' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            { regex: /,/, action: { token: 'punctuation' } },
            { regex: />/, action: { token: '@rematch', next: '@pop' } },
        ],
        lexing_EXTCODE: [
            { regex: /^%}/, action: { token: '@rematch', next: '@pop', nextEmbedded: '@pop' } },
            { regex: /[^%]+/, action: '' },
        ],
        lexing_DQUOTE: [
            { regex: /"/, action: { token: 'string.quote', next: '@pop' } },
            // AS-20160628: additional hi-lighting for variables in staload/dynload strings
            { regex: /(\{\$)(@IDENTFST@IDENTRST*)(\})/, action: [{ token: 'string.escape' }, { token: 'identifier' }, { token: 'string.escape' }] },
            { regex: /\\$/, action: { token: 'string.escape' } },
            { regex: /\\(@ESCHAR|[xX]@xdigit+|@digit+)/, action: { token: 'string.escape' } },
            { regex: /[^\\"]+/, action: { token: 'string' } }
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Bvc3RpYXRzL3Bvc3RpYXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9EO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWEsc0JBQXNCLHVCQUF1QixFQUFFO0FBQzVELGFBQWEsc0JBQXNCLGtDQUFrQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQSxhQUFhLFlBQVksWUFBWSx3REFBd0QsRUFBRTtBQUMvRixhQUFhLDZCQUE2QjtBQUMxQztBQUNBO0FBQ0EsYUFBYSxzQkFBc0Isc0NBQXNDLEVBQUU7QUFDM0U7QUFDQSxhQUFhLFlBQVksMkJBQTJCLGNBQWMseUJBQXlCLEdBQUcsc0JBQXNCLEdBQUcseUJBQXlCLEdBQUc7QUFDbkosYUFBYSx3QkFBd0IseUJBQXlCLEVBQUU7QUFDaEUsYUFBYSxxREFBcUQseUJBQXlCLEVBQUU7QUFDN0YsYUFBYSw0QkFBNEIsa0JBQWtCO0FBQzNEO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6IjMwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBBcnR5b20gU2hhbGtoYWtvdi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICpcbiAqICBCYXNlZCBvbiB0aGUgQVRTL1Bvc3RpYXRzIGxleGVyIGJ5IEhvbmd3ZWkgWGkuXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJygqJywgJyopJ10sXG4gICAgfSxcbiAgICBicmFja2V0czogW1sneycsICd9J10sIFsnWycsICddJ10sIFsnKCcsICcpJ10sIFsnPCcsICc+J11dLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIHRva2VuUG9zdGZpeDogJy5wYXRzJyxcbiAgICAvLyBUT0RPOiBzdGFsb2FkIGFuZCBkeW5sb2FkIGFyZSBmb2xsb3dlZCBieSBhIHNwZWNpYWwga2luZCBvZiBzdHJpbmcgbGl0ZXJhbHNcbiAgICAvLyB3aXRoIHskSURFTlRJRkVSfSB2YXJpYWJsZXMsIGFuZCBpdCBhbHNvIG1heSBtYWtlIHNlbnNlIHRvIGhpZ2hsaWdodFxuICAgIC8vIHRoZSBwdW5jdHVhdGlvbiAoLiBhbmQgLyBhbmQgXFwpIGRpZmZlcmVudGx5LlxuICAgIC8vIFNldCBkZWZhdWx0VG9rZW4gdG8gaW52YWxpZCB0byBzZWUgd2hhdCB5b3UgZG8gbm90IHRva2VuaXplIHlldFxuICAgIGRlZmF1bHRUb2tlbjogJ2ludmFsaWQnLFxuICAgIC8vIGtleXdvcmQgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHd4aS9BVFMtUG9zdGlhdHMvYmxvYi9tYXN0ZXIvc3JjL3BhdHNfbGV4aW5nX3Rva2VuLmRhdHNcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAvL1xuICAgICAgICBcImFic3R5cGVcIixcbiAgICAgICAgXCJhYnN0MHlwZVwiLFxuICAgICAgICBcImFic3Byb3BcIixcbiAgICAgICAgXCJhYnN2aWV3XCIsXG4gICAgICAgIFwiYWJzdnR5cGVcIixcbiAgICAgICAgXCJhYnN2aWV3dHlwZVwiLFxuICAgICAgICBcImFic3Z0MHlwZVwiLFxuICAgICAgICBcImFic3ZpZXd0MHlwZVwiLFxuICAgICAgICAvL1xuICAgICAgICBcImFzXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiYW5kXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiYXNzdW1lXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiYmVnaW5cIixcbiAgICAgICAgLy9cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcImNhc2VcIiwgLy8gQ0FTRVxuICAgICAgICAqL1xuICAgICAgICAvL1xuICAgICAgICBcImNsYXNzZGVjXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiZGF0YXNvcnRcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJkYXRhdHlwZVwiLFxuICAgICAgICBcImRhdGFwcm9wXCIsXG4gICAgICAgIFwiZGF0YXZpZXdcIixcbiAgICAgICAgXCJkYXRhdnR5cGVcIixcbiAgICAgICAgXCJkYXRhdmlld3R5cGVcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJkb1wiLFxuICAgICAgICAvL1xuICAgICAgICBcImVuZFwiLFxuICAgICAgICAvL1xuICAgICAgICBcImV4dGVyblwiLFxuICAgICAgICBcImV4dHlwZVwiLFxuICAgICAgICBcImV4dHZhclwiLFxuICAgICAgICAvL1xuICAgICAgICBcImV4Y2VwdGlvblwiLFxuICAgICAgICAvL1xuICAgICAgICBcImZuXCIsXG4gICAgICAgIFwiZm54XCIsXG4gICAgICAgIFwiZnVuXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwicHJmblwiLFxuICAgICAgICBcInByZnVuXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwicHJheGlcIixcbiAgICAgICAgXCJjYXN0Zm5cIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJpZlwiLFxuICAgICAgICBcInRoZW5cIixcbiAgICAgICAgXCJlbHNlXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiaWZjYXNlXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiaW5cIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJpbmZpeFwiLFxuICAgICAgICBcImluZml4bFwiLFxuICAgICAgICBcImluZml4clwiLFxuICAgICAgICBcInByZWZpeFwiLFxuICAgICAgICBcInBvc3RmaXhcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJpbXBsbW50XCIsXG4gICAgICAgIFwiaW1wbGVtZW50XCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwicHJpbXBsbW50XCIsXG4gICAgICAgIFwicHJpbXBsZW1lbnRcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJpbXBvcnRcIixcbiAgICAgICAgLy9cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcImxhbVwiLCAvLyBMQU1cbiAgICAgICAgICAgICAgICBcImxsYW1cIiwgLy8gTExBTVxuICAgICAgICAgICAgICAgIFwiZml4XCIsIC8vIEZJWFxuICAgICAgICAqL1xuICAgICAgICAvL1xuICAgICAgICBcImxldFwiLFxuICAgICAgICAvL1xuICAgICAgICBcImxvY2FsXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwibWFjZGVmXCIsXG4gICAgICAgIFwibWFjcm9kZWZcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJub25maXhcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJzeW1lbGltXCIsXG4gICAgICAgIFwic3ltaW50clwiLFxuICAgICAgICBcIm92ZXJsb2FkXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwib2ZcIixcbiAgICAgICAgXCJvcFwiLFxuICAgICAgICAvL1xuICAgICAgICBcInJlY1wiLFxuICAgICAgICAvL1xuICAgICAgICBcInNpZlwiLFxuICAgICAgICBcInNjYXNlXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwic29ydGRlZlwiLFxuICAgICAgICAvKlxuICAgICAgICAvLyBIWDogW3N0YV0gaXMgbm93IGRlcHJlY2F0ZWRcbiAgICAgICAgKi9cbiAgICAgICAgXCJzdGFcIixcbiAgICAgICAgXCJzdGFjc3RcIixcbiAgICAgICAgXCJzdGFkZWZcIixcbiAgICAgICAgXCJzdGF0aWNcIixcbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcInN0YXZhclwiLCAvLyBUX1NUQVZBUlxuICAgICAgICAqL1xuICAgICAgICAvL1xuICAgICAgICBcInN0YWxvYWRcIixcbiAgICAgICAgXCJkeW5sb2FkXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwidHJ5XCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwidGtpbmRlZlwiLFxuICAgICAgICAvL1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIFwidHlwZVwiLCAvLyBUWVBFXG4gICAgICAgICovXG4gICAgICAgIFwidHlwZWRlZlwiLFxuICAgICAgICBcInByb3BkZWZcIixcbiAgICAgICAgXCJ2aWV3ZGVmXCIsXG4gICAgICAgIFwidnR5cGVkZWZcIixcbiAgICAgICAgXCJ2aWV3dHlwZWRlZlwiLFxuICAgICAgICAvL1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIFwidmFsXCIsIC8vIFZBTFxuICAgICAgICAqL1xuICAgICAgICBcInBydmFsXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwidmFyXCIsXG4gICAgICAgIFwicHJ2YXJcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJ3aGVuXCIsXG4gICAgICAgIFwid2hlcmVcIixcbiAgICAgICAgLy9cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcImZvclwiLCAvLyBUX0ZPUlxuICAgICAgICAgICAgICAgIFwid2hpbGVcIiwgLy8gVF9XSElMRVxuICAgICAgICAqL1xuICAgICAgICAvL1xuICAgICAgICBcIndpdGhcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCJ3aXRodHlwZVwiLFxuICAgICAgICBcIndpdGhwcm9wXCIsXG4gICAgICAgIFwid2l0aHZpZXdcIixcbiAgICAgICAgXCJ3aXRodnR5cGVcIixcbiAgICAgICAgXCJ3aXRodmlld3R5cGVcIixcbiAgICBdLFxuICAgIGtleXdvcmRzX2RscjogW1xuICAgICAgICBcIiRkZWxheVwiLFxuICAgICAgICBcIiRsZGVsYXlcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCIkYXJycHN6XCIsXG4gICAgICAgIFwiJGFycnB0cnNpemVcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCIkZDJjdHlwZVwiLFxuICAgICAgICAvL1xuICAgICAgICBcIiRlZmZtYXNrXCIsXG4gICAgICAgIFwiJGVmZm1hc2tfbnRtXCIsXG4gICAgICAgIFwiJGVmZm1hc2tfZXhuXCIsXG4gICAgICAgIFwiJGVmZm1hc2tfcmVmXCIsXG4gICAgICAgIFwiJGVmZm1hc2tfd3J0XCIsXG4gICAgICAgIFwiJGVmZm1hc2tfYWxsXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJGV4dGVyblwiLFxuICAgICAgICBcIiRleHRraW5kXCIsXG4gICAgICAgIFwiJGV4dHlwZVwiLFxuICAgICAgICBcIiRleHR5cGVfc3RydWN0XCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJGV4dHZhbFwiLFxuICAgICAgICBcIiRleHRmY2FsbFwiLFxuICAgICAgICBcIiRleHRtY2FsbFwiLFxuICAgICAgICAvL1xuICAgICAgICBcIiRsaXRlcmFsXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJG15ZmlsZW5hbWVcIixcbiAgICAgICAgXCIkbXlsb2NhdGlvblwiLFxuICAgICAgICBcIiRteWZ1bmN0aW9uXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJGxzdFwiLFxuICAgICAgICBcIiRsc3RfdFwiLFxuICAgICAgICBcIiRsc3RfdnRcIixcbiAgICAgICAgXCIkbGlzdFwiLFxuICAgICAgICBcIiRsaXN0X3RcIixcbiAgICAgICAgXCIkbGlzdF92dFwiLFxuICAgICAgICAvL1xuICAgICAgICBcIiRyZWNcIixcbiAgICAgICAgXCIkcmVjX3RcIixcbiAgICAgICAgXCIkcmVjX3Z0XCIsXG4gICAgICAgIFwiJHJlY29yZFwiLFxuICAgICAgICBcIiRyZWNvcmRfdFwiLFxuICAgICAgICBcIiRyZWNvcmRfdnRcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCIkdHVwXCIsXG4gICAgICAgIFwiJHR1cF90XCIsXG4gICAgICAgIFwiJHR1cF92dFwiLFxuICAgICAgICBcIiR0dXBsZVwiLFxuICAgICAgICBcIiR0dXBsZV90XCIsXG4gICAgICAgIFwiJHR1cGxlX3Z0XCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJGJyZWFrXCIsXG4gICAgICAgIFwiJGNvbnRpbnVlXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJHJhaXNlXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJHNob3d0eXBlXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJHZjb3B5ZW52X3ZcIixcbiAgICAgICAgXCIkdmNvcHllbnZfdnRcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCIkdGVtcGVudmVyXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiJHNvbHZlcl9hc3NlcnRcIixcbiAgICAgICAgXCIkc29sdmVyX3ZlcmlmeVwiLFxuICAgIF0sXG4gICAga2V5d29yZHNfc3JwOiBbXG4gICAgICAgIC8vXG4gICAgICAgIFwiI2lmXCIsXG4gICAgICAgIFwiI2lmZGVmXCIsXG4gICAgICAgIFwiI2lmbmRlZlwiLFxuICAgICAgICAvL1xuICAgICAgICBcIiN0aGVuXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiI2VsaWZcIixcbiAgICAgICAgXCIjZWxpZmRlZlwiLFxuICAgICAgICBcIiNlbGlmbmRlZlwiLFxuICAgICAgICAvL1xuICAgICAgICBcIiNlbHNlXCIsXG4gICAgICAgIFwiI2VuZGlmXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiI2Vycm9yXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiI3ByZXJyXCIsXG4gICAgICAgIFwiI3ByaW50XCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiI2Fzc2VydFwiLFxuICAgICAgICAvL1xuICAgICAgICBcIiN1bmRlZlwiLFxuICAgICAgICBcIiNkZWZpbmVcIixcbiAgICAgICAgLy9cbiAgICAgICAgXCIjaW5jbHVkZVwiLFxuICAgICAgICBcIiNyZXF1aXJlXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiI3ByYWdtYVwiLFxuICAgICAgICBcIiNjb2RlZ2VuMlwiLFxuICAgICAgICBcIiNjb2RlZ2VuM1wiLFxuICAgIF0sXG4gICAgaXJyZWd1bGFyX2tleXdvcmRfbGlzdDogW1xuICAgICAgICBcInZhbCtcIixcbiAgICAgICAgXCJ2YWwtXCIsXG4gICAgICAgIFwidmFsXCIsXG4gICAgICAgIFwiY2FzZStcIixcbiAgICAgICAgXCJjYXNlLVwiLFxuICAgICAgICBcImNhc2VcIixcbiAgICAgICAgXCJhZGRyQFwiLFxuICAgICAgICBcImFkZHJcIixcbiAgICAgICAgXCJmb2xkQFwiLFxuICAgICAgICBcImZyZWVAXCIsXG4gICAgICAgIFwiZml4QFwiLFxuICAgICAgICBcImZpeFwiLFxuICAgICAgICBcImxhbUBcIixcbiAgICAgICAgXCJsYW1cIixcbiAgICAgICAgXCJsbGFtQFwiLFxuICAgICAgICBcImxsYW1cIixcbiAgICAgICAgXCJ2aWV3dEB5cGUrXCIsXG4gICAgICAgIFwidmlld3RAeXBlLVwiLFxuICAgICAgICBcInZpZXd0QHlwZVwiLFxuICAgICAgICBcInZpZXd0eXBlK1wiLFxuICAgICAgICBcInZpZXd0eXBlLVwiLFxuICAgICAgICBcInZpZXd0eXBlXCIsXG4gICAgICAgIFwidmlldytcIixcbiAgICAgICAgXCJ2aWV3LVwiLFxuICAgICAgICBcInZpZXdAXCIsXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICBcInR5cGUrXCIsXG4gICAgICAgIFwidHlwZS1cIixcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwidnR5cGUrXCIsXG4gICAgICAgIFwidnR5cGUtXCIsXG4gICAgICAgIFwidnR5cGVcIixcbiAgICAgICAgXCJ2dEB5cGUrXCIsXG4gICAgICAgIFwidnRAeXBlLVwiLFxuICAgICAgICBcInZ0QHlwZVwiLFxuICAgICAgICBcInZpZXd0QHlwZStcIixcbiAgICAgICAgXCJ2aWV3dEB5cGUtXCIsXG4gICAgICAgIFwidmlld3RAeXBlXCIsXG4gICAgICAgIFwidmlld3R5cGUrXCIsXG4gICAgICAgIFwidmlld3R5cGUtXCIsXG4gICAgICAgIFwidmlld3R5cGVcIixcbiAgICAgICAgXCJwcm9wK1wiLFxuICAgICAgICBcInByb3AtXCIsXG4gICAgICAgIFwicHJvcFwiLFxuICAgICAgICBcInR5cGUrXCIsXG4gICAgICAgIFwidHlwZS1cIixcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwidEB5cGVcIixcbiAgICAgICAgXCJ0QHlwZStcIixcbiAgICAgICAgXCJ0QHlwZS1cIixcbiAgICAgICAgXCJhYnN0QHlwZVwiLFxuICAgICAgICBcImFic3R5cGVcIixcbiAgICAgICAgXCJhYnN2aWV3dEB5cGVcIixcbiAgICAgICAgXCJhYnN2dEB5cGVcIixcbiAgICAgICAgXCJmb3IqXCIsXG4gICAgICAgIFwiZm9yXCIsXG4gICAgICAgIFwid2hpbGUqXCIsXG4gICAgICAgIFwid2hpbGVcIlxuICAgIF0sXG4gICAga2V5d29yZHNfdHlwZXM6IFtcbiAgICAgICAgJ2Jvb2wnLFxuICAgICAgICAnZG91YmxlJyxcbiAgICAgICAgJ2J5dGUnLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ3Nob3J0JyxcbiAgICAgICAgJ2NoYXInLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICd1bml0JyxcbiAgICAgICAgJ2xvbmcnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgJ3N0cnB0cidcbiAgICBdLFxuICAgIC8vIFRPRE86IHJlZmVyZW5jZSBmb3IgdGhpcz9cbiAgICBrZXl3b3Jkc19lZmZlY3RzOiBbXG4gICAgICAgIFwiMFwiLFxuICAgICAgICBcImZ1blwiLFxuICAgICAgICBcImNsb1wiLFxuICAgICAgICBcInByZlwiLFxuICAgICAgICBcImZ1bmNsb1wiLFxuICAgICAgICBcImNsb3B0clwiLFxuICAgICAgICBcImNsb3JlZlwiLFxuICAgICAgICBcInJlZlwiLFxuICAgICAgICBcIm50bVwiLFxuICAgICAgICBcIjFcIiAvLyBhbGwgZWZmZWN0c1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgIFwiQFwiLFxuICAgICAgICBcIiFcIixcbiAgICAgICAgXCJ8XCIsXG4gICAgICAgIFwiYFwiLFxuICAgICAgICBcIjpcIixcbiAgICAgICAgXCIkXCIsXG4gICAgICAgIFwiLlwiLFxuICAgICAgICBcIj1cIixcbiAgICAgICAgXCIjXCIsXG4gICAgICAgIFwiflwiLFxuICAgICAgICAvL1xuICAgICAgICBcIi4uXCIsXG4gICAgICAgIFwiLi4uXCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiPT5cIixcbiAgICAgICAgLy8gXCI9PFwiLCAvLyBUX0VRTFRcbiAgICAgICAgXCI9PD5cIixcbiAgICAgICAgXCI9Lz0+XCIsXG4gICAgICAgIFwiPT4+XCIsXG4gICAgICAgIFwiPS89Pj5cIixcbiAgICAgICAgLy9cbiAgICAgICAgXCI8XCIsXG4gICAgICAgIFwiPlwiLFxuICAgICAgICAvL1xuICAgICAgICBcIj48XCIsXG4gICAgICAgIC8vXG4gICAgICAgIFwiLjxcIixcbiAgICAgICAgXCI+LlwiLFxuICAgICAgICAvL1xuICAgICAgICBcIi48Pi5cIixcbiAgICAgICAgLy9cbiAgICAgICAgXCItPlwiLFxuICAgICAgICAvL1wiLTxcIiwgLy8gVF9NSU5VU0xUXG4gICAgICAgIFwiLTw+XCIsXG4gICAgXSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICcsKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICdgKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICclKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnQCgnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnQHsnLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5icmFjZScgfSxcbiAgICAgICAgeyBvcGVuOiAnQFsnLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXG4gICAgICAgIHsgb3BlbjogJyNbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgSURFTlRGU1Q6IC9bYS16QS1aX10vLFxuICAgIElERU5UUlNUOiAvW2EtekEtWjAtOV8nJF0vLFxuICAgIHN5bWJvbGljOiAvWyUmKy0uLzo9QH5gXnwqISQjPzw+XS8sXG4gICAgZGlnaXQ6IC9bMC05XS8sXG4gICAgZGlnaXRzZXEwOiAvQGRpZ2l0Ki8sXG4gICAgeGRpZ2l0OiAvWzAtOUEtWmEtel0vLFxuICAgIHhkaWdpdHNlcTA6IC9AeGRpZ2l0Ki8sXG4gICAgSU5UU1A6IC9bbEx1VV0vLFxuICAgIEZMT0FUU1A6IC9bZkZsTF0vLFxuICAgIGZleHBvbmVudDogL1tlRV1bKy1dP1swLTldKy8sXG4gICAgZmV4cG9uZW50X2JpbjogL1twUF1bKy1dP1swLTldKy8sXG4gICAgZGVjaWV4cDogL1xcLlswLTldKkBmZXhwb25lbnQ/LyxcbiAgICBoZXhpZXhwOiAvXFwuWzAtOWEtekEtWl0qQGZleHBvbmVudF9iaW4/LyxcbiAgICBpcnJlZ3VsYXJfa2V5d29yZHM6IC92YWxbKy1dP3xjYXNlWystXT98YWRkclxcQD98Zm9sZFxcQHxmcmVlXFxAfGZpeFxcQD98bGFtXFxAP3xsbGFtXFxAP3xwcm9wWystXT98dHlwZVsrLV0/fHZpZXdbKy1AXT98dmlld3RAP3lwZVsrLV0/fHRAP3lwZVsrLV0/fHYoaWV3KT90QD95cGVbKy1dP3xhYnN0QD95cGV8YWJzdihpZXcpP3RAP3lwZXxmb3JcXCo/fHdoaWxlXFwqPy8sXG4gICAgRVNDSEFSOiAvW250dmJyZmFcXFxcXFw/J1wiXFwoXFxbXFx7XS8sXG4gICAgc3RhcnQ6ICdyb290JyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIEFUUy9Qb3N0aWF0c1xuICAgIC8vIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL2dpdGh3eGkvQVRTLVBvc3RpYXRzL2Jsb2IvbWFzdGVyL3NyYy9wYXRzX2xleGluZy5kYXRzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGxleGluZ19ibGFua3NlcTBcbiAgICAgICAgICAgIHsgcmVnZXg6IC9bIFxcdFxcclxcbl0rLywgYWN0aW9uOiB7IHRva2VuOiAnJyB9IH0sXG4gICAgICAgICAgICAvLyBOT1RFOiAoKikgaXMgYW4gaW52YWxpZCBNTC1saWtlIGNvbW1lbnQhXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwoXFwqXFwpLywgYWN0aW9uOiB7IHRva2VuOiAnaW52YWxpZCcgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcKFxcKi8sIGFjdGlvbjogeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnbGV4aW5nX0NPTU1FTlRfYmxvY2tfbWwnIH0gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXCgvLCBhY3Rpb246ICdAYnJhY2tldHMnIC8qeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSovIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwpLywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qLyB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcWy8sIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0qLyB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcXS8sIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0qLyB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcey8sIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNlJyB9Ki8gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXH0vLCBhY3Rpb246ICdAYnJhY2tldHMnIC8qeyB0b2tlbjogJ2RlbGltaXRlci5icmFjZScgfSovIH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfQ09NTUFcbiAgICAgICAgICAgIHsgcmVnZXg6IC8sXFwoLywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qLyB9LFxuICAgICAgICAgICAgeyByZWdleDogLywvLCBhY3Rpb246IHsgdG9rZW46ICdkZWxpbWl0ZXIuY29tbWEnIH0gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC87LywgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLnNlbWljb2xvbicgfSB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX0FUXG4gICAgICAgICAgICB7IHJlZ2V4OiAvQFxcKC8sIGFjdGlvbjogJ0BicmFja2V0cycgLyogeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSovIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvQFxcWy8sIGFjdGlvbjogJ0BicmFja2V0cycgLyogeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9Ki8gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9AXFx7LywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2UnIH0qLyB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX0NPTE9OXG4gICAgICAgICAgICB7IHJlZ2V4OiAvOjwvLCBhY3Rpb246IHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BsZXhpbmdfRUZGRUNUX2NvbW1hc2VxMCcgfSB9LFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGxleGluZ19ET1Q6XG5cbiAgICAgICAgICAgIC4gLy8gU1lNQk9MSUMgPT4gbGV4aW5nX0lERU5UX3N5bVxuICAgICAgICAgICAgLiBGTE9BVERPVCA9PiBsZXhpbmdfRkxPQVRfZGVjaWV4cFxuICAgICAgICAgICAgLiBESUdJVCA9PiBUX0RPVElOVFxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXC5Ac3ltYm9saWMrLywgYWN0aW9uOiB7IHRva2VuOiAnaWRlbnRpZmllci5zeW0nIH0gfSxcbiAgICAgICAgICAgIC8vIEZMT0FURE9UIGNhc2VcbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXC5AZGlnaXQqQGZleHBvbmVudEBGTE9BVFNQKi8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5mbG9hdCcgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcLkBkaWdpdCsvLCBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuZmxvYXQnIH0gfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19ET0xMQVI6XG4gICAgICAgICAgICAvLyAnJCcgSURFTlRGU1QgSURFTlRSU1QqID0+IGxleGluZ19JREVOVF9kbHIsIF8gPT4gbGV4aW5nX0lERU5UX3N5bVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFwkQElERU5URlNUQElERU5UUlNUKi8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzX2Rscic6IHsgdG9rZW46ICdrZXl3b3JkLmRscicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICduYW1lc3BhY2UnIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX1NIQVJQOlxuICAgICAgICAgICAgLy8gJyMnIElERU5URlNUIElERU5UUlNUKiA9PiBsZXhpbmdfaWRlbnRfc3JwLCBfID0+IGxleGluZ19JREVOVF9zeW1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcI0BJREVOVEZTVEBJREVOVFJTVCovLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkc19zcnAnOiB7IHRva2VuOiAna2V5d29yZC5zcnAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnaWRlbnRpZmllcicgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfUEVSQ0VOVDpcbiAgICAgICAgICAgIHsgcmVnZXg6IC8lXFwoLywgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXiV7KCN8XFxefFxcJCk/LywgYWN0aW9uOiB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAbGV4aW5nX0VYVENPREUnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH0gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9eJX0vLCBhY3Rpb246IHsgdG9rZW46ICdrZXl3b3JkJyB9IH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfUVVPVEVcbiAgICAgICAgICAgIHsgcmVnZXg6IC8nXFwoLywgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvJ1xcWy8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvJ1xcey8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5icmFjZScgfSB9LFxuICAgICAgICAgICAgWy8oJykoXFxcXEBFU0NIQVJ8XFxcXFt4WF1AeGRpZ2l0K3xcXFxcQGRpZ2l0KykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIC8vIGxleGluZ19EUVVPVEVcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLnF1b3RlJywgJ0BsZXhpbmdfRFFVT1RFJ10sXG4gICAgICAgICAgICAvLyBsZXhpbmdfQlFVT1RFXG4gICAgICAgICAgICB7IHJlZ2V4OiAvYFxcKC8sIGFjdGlvbjogJ0BicmFja2V0cycgLyogeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSovIH0sXG4gICAgICAgICAgICAvLyBUT0RPOiBvdGhlcndpc2UsIHRyeSBsZXhpbmdfSURFTlRfc3ltXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFxcXC8sIGFjdGlvbjogeyB0b2tlbjogJ3B1bmN0dWF0aW9uJyB9IH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfSURFTlRfYWxwOlxuICAgICAgICAgICAgLy8gTk9URTogKD8hcmVnZXgpIGlzIHN5bnRheCBmb3IgXCJub3QtZm9sbG93ZWQtYnlcIiByZWdleFxuICAgICAgICAgICAgLy8gdG8gcmVzb2x2ZSBhbWJpZ3VpdHkgc3VjaCBhcyBmb3JlYWNoJGZ3b3JrIGJlaW5nIGluY29ycmVjdGx5IGxleGVkIGFzIFtmb3JdIFtlYWNoJGZ3b3JrXSFcbiAgICAgICAgICAgIHsgcmVnZXg6IC9AaXJyZWd1bGFyX2tleXdvcmRzKD8hQElERU5UUlNUKS8sIGFjdGlvbjogeyB0b2tlbjogJ2tleXdvcmQnIH0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BJREVOVEZTVEBJREVOVFJTVCpbPCFcXFtdPy8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBkeW5sb2FkIGFuZCBzdGFsb2FkIHNob3VsZCBiZSBzcGVjaWFsbHkgcGFyc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkeW5sb2FkIHdoaXRlc3BhY2UrIFwic3BlY2lhbF9zdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBzcGVjaWFsIHN0cmluZyBpcyByZWFsbHk6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgJy8nICdcXFxcJyAnLicgPT4gcHVuY3R1YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICh7XFwkKShbYS16QS1aX11bYS16QS1aXzAtOV0qKSh9KSA9PiBwdW5jdHVhdGlvbixrZXl3b3JkLHB1bmN0dWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBbXlwiXSA9PiBpZGVudGlmaWVyL2xpdGVyYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHNfdHlwZXMnOiB7IHRva2VuOiAndHlwZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdpZGVudGlmaWVyJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX0lERU5UX3N5bTpcbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXC9cXC9cXC9cXC8vLCBhY3Rpb246IHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0BsZXhpbmdfQ09NTUVOVF9yZXN0JyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwvXFwvLiokLywgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcL1xcKi8sIGFjdGlvbjogeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGxleGluZ19DT01NRU5UX2Jsb2NrX2MnIH0gfSxcbiAgICAgICAgICAgIC8vIEFTLTIwMTYwNjI3OiBzcGVjaWZpY2FsbHkgZm9yIGVmZmVjdCBhbm5vdGF0aW9uc1xuICAgICAgICAgICAgeyByZWdleDogLy08fD08LywgYWN0aW9uOiB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAbGV4aW5nX0VGRkVDVF9jb21tYXNlcTAnIH0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BzeW1ib2xpYysvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnb3BlcmF0b3InXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX1pFUk86XG4gICAgICAgICAgICAvLyBGSVhNRTogdGhpcyBvbmUgaXMgcXVpdGUgbWVzc3kvdW5maW5pc2hlZCB5ZXRcbiAgICAgICAgICAgIC8vIFRPRE86IGxleGluZ19JTlRfaGV4XG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfaGV4aWV4cCA9PiBsZXhpbmdfRkxPQVRfaGV4aWV4cFxuICAgICAgICAgICAgLy8gLSB0ZXN0aW5nX2ZleHBvbmVudF9iaW4gPT4gbGV4aW5nX0ZMT0FUX2hleGlleHBcbiAgICAgICAgICAgIC8vIC0gdGVzdGluZ19pbnRzcHNlcTAgPT4gVF9JTlRfaGV4XG4gICAgICAgICAgICAvLyBsZXhpbmdfSU5UX2hleDpcbiAgICAgICAgICAgIHsgcmVnZXg6IC8wW3hYXUB4ZGlnaXQrKEBoZXhpZXhwfEBmZXhwb25lbnRfYmluKUBGTE9BVFNQKi8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5mbG9hdCcgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogLzBbeFhdQHhkaWdpdCtASU5UU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLmhleCcgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogLzBbMC03XSsoPyFbMC05XSlASU5UU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLm9jdGFsJyB9IH0sXG4gICAgICAgICAgICAvL3tyZWdleDogLzAvLCBhY3Rpb246IHsgdG9rZW46ICdudW1iZXInIH0gfSwgLy8gSU5UWkVST1xuICAgICAgICAgICAgLy8gbGV4aW5nX0lOVF9kZWM6XG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfZGVjaWV4cCA9PiBsZXhpbmdfRkxPQVRfZGVjaWV4cFxuICAgICAgICAgICAgLy8gLSB0ZXN0aW5nX2ZleHBvbmVudCA9PiBsZXhpbmdfRkxPQVRfZGVjaWV4cFxuICAgICAgICAgICAgLy8gLSBvdGhlcndpc2UgPT4gaW50c3BzZXEwIChbMC05XSpbbEx1VV0/KVxuICAgICAgICAgICAgeyByZWdleDogL0BkaWdpdCsoQGZleHBvbmVudHxAZGVjaWV4cClARkxPQVRTUCovLCBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuZmxvYXQnIH0gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9AZGlnaXRAZGlnaXRzZXEwQElOVFNQKi8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5kZWNpbWFsJyB9IH0sXG4gICAgICAgICAgICAvLyBESUdJVCwgaWYgZm9sbG93ZWQgYnkgZGlnaXRzZXEwLCBpcyBsZXhpbmdfSU5UX2RlY1xuICAgICAgICAgICAgeyByZWdleDogL0BkaWdpdCtASU5UU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIF0sXG4gICAgICAgIGxleGluZ19DT01NRU5UX2Jsb2NrX21sOiBbXG4gICAgICAgICAgICBbL1teXFwoXFwqXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXChcXCovLCAnY29tbWVudCcsICdAcHVzaCddLFxuICAgICAgICAgICAgWy9cXChcXCovLCAnY29tbWVudC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1xcKlxcKS8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvXFwqLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBsZXhpbmdfQ09NTUVOVF9ibG9ja19jOiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQHB1c2gnIF0sICAgIC8vIG5lc3RlZCBDLXN0eWxlIGJsb2NrIGNvbW1lbnRzIG5vdCBhbGxvd2VkXG4gICAgICAgICAgICAvLyBbL1xcL1xcKi8sICAgICdjb21tZW50LmludmFsaWQnIF0sXHQvLyBOT1RFOiB0aGlzIGJyZWFrcyBibG9jayBjb21tZW50cyBpbiB0aGUgc2hhcGUgb2YgLyogLy8qL1xuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgbGV4aW5nX0NPTU1FTlRfcmVzdDogW1xuICAgICAgICAgICAgWy8kLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy8uKi8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gTk9URTogYWRkZWQgYnkgQVMsIHNwZWNpZmljYWxseSBmb3IgaGlnaGxpZ2h0aW5nXG4gICAgICAgIGxleGluZ19FRkZFQ1RfY29tbWFzZXEwOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9ASURFTlRGU1RASURFTlRSU1QrfEBkaWdpdCsvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkc19lZmZlY3RzJzogeyB0b2tlbjogJ3R5cGUuZWZmZWN0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2lkZW50aWZpZXInIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvLC8sIGFjdGlvbjogeyB0b2tlbjogJ3B1bmN0dWF0aW9uJyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvPi8sIGFjdGlvbjogeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH0gfSxcbiAgICAgICAgXSxcbiAgICAgICAgbGV4aW5nX0VYVENPREU6IFtcbiAgICAgICAgICAgIHsgcmVnZXg6IC9eJX0vLCBhY3Rpb246IHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogL1teJV0rLywgYWN0aW9uOiAnJyB9LFxuICAgICAgICBdLFxuICAgICAgICBsZXhpbmdfRFFVT1RFOiBbXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXCIvLCBhY3Rpb246IHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfSB9LFxuICAgICAgICAgICAgLy8gQVMtMjAxNjA2Mjg6IGFkZGl0aW9uYWwgaGktbGlnaHRpbmcgZm9yIHZhcmlhYmxlcyBpbiBzdGFsb2FkL2R5bmxvYWQgc3RyaW5nc1xuICAgICAgICAgICAgeyByZWdleDogLyhcXHtcXCQpKEBJREVOVEZTVEBJREVOVFJTVCopKFxcfSkvLCBhY3Rpb246IFt7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScgfSwgeyB0b2tlbjogJ2lkZW50aWZpZXInIH0sIHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlJyB9XSB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcXFwkLywgYWN0aW9uOiB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcXFwoQEVTQ0hBUnxbeFhdQHhkaWdpdCt8QGRpZ2l0KykvLCBhY3Rpb246IHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlJyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvW15cXFxcXCJdKy8sIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZycgfSB9XG4gICAgICAgIF0sXG4gICAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9