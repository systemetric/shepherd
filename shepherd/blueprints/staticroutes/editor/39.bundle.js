(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js ***!
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
        lineComment: '#',
        blockComment: ['=begin', '=end'],
    },
    brackets: [
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
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
/*
 * Ruby language definition
 *
 * Quite a complex language due to elaborate escape sequences
 * and quoting of literate strings/regular expressions, and
 * an 'end' keyword that does not always apply to modifiers like until and while,
 * and a 'do' keyword that sometimes starts a block, but sometimes is part of
 * another statement (like 'while').
 *
 * (1) end blocks:
 * 'end' may end declarations like if or until, but sometimes 'if' or 'until'
 * are modifiers where there is no 'end'. Also, 'do' sometimes starts a block
 * that is ended by 'end', but sometimes it is part of a 'while', 'for', or 'until'
 * To do proper brace matching we do some elaborate state manipulation.
 * some examples:
 *
 *   until bla do
 *     work until tired
 *     list.each do
 *       something if test
 *     end
 *   end
 *
 * or
 *
 * if test
 *  something (if test then x end)
 *  bar if bla
 * end
 *
 * or, how about using class as a property..
 *
 * class Test
 *   def endpoint
 *     self.class.endpoint || routes
 *   end
 * end
 *
 * (2) quoting:
 * there are many kinds of strings and escape sequences. But also, one can
 * start many string-like things as '%qx' where q specifies the kind of string
 * (like a command, escape expanded, regular expression, symbol etc.), and x is
 * some character and only another 'x' ends the sequence. Except for brackets
 * where the closing bracket ends the sequence.. and except for a nested bracket
 * inside the string like entity. Also, such strings can contain interpolated
 * ruby expressions again (and span multiple lines). Moreover, expanded
 * regular expression can also contain comments.
 */
var language = {
    tokenPostfix: '.ruby',
    keywords: [
        '__LINE__', '__ENCODING__', '__FILE__', 'BEGIN', 'END', 'alias', 'and', 'begin',
        'break', 'case', 'class', 'def', 'defined?', 'do', 'else', 'elsif', 'end',
        'ensure', 'for', 'false', 'if', 'in', 'module', 'next', 'nil', 'not', 'or', 'redo',
        'rescue', 'retry', 'return', 'self', 'super', 'then', 'true', 'undef', 'unless',
        'until', 'when', 'while', 'yield',
    ],
    keywordops: [
        '::', '..', '...', '?', ':', '=>'
    ],
    builtins: [
        'require', 'public', 'private', 'include', 'extend', 'attr_reader',
        'protected', 'private_class_method', 'protected_class_method', 'new'
    ],
    // these are closed by 'end' (if, while and until are handled separately)
    declarations: [
        'module', 'class', 'def', 'case', 'do', 'begin', 'for', 'if', 'while', 'until', 'unless'
    ],
    linedecls: [
        'def', 'case', 'do', 'begin', 'for', 'if', 'while', 'until', 'unless'
    ],
    operators: [
        '^', '&', '|', '<=>', '==', '===', '!~', '=~', '>', '>=', '<', '<=', '<<', '>>', '+',
        '-', '*', '/', '%', '**', '~', '+@', '-@', '[]', '[]=', '`',
        '+=', '-=', '*=', '**=', '/=', '^=', '%=', '<<=', '>>=', '&=', '&&=', '||=', '|='
    ],
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%\.]+/,
    // escape sequences
    escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
    escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    delim: /[^a-zA-Z0-9\s\n\r]/,
    heredelim: /(?:\w+|'[^']*'|"[^"]*"|`[^`]*`)/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[AzZbBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})?/,
    // The main tokenizer for our languages
    tokenizer: {
        // Main entry.
        // root.<decl> where decl is the current opening declaration (like 'class')
        root: [
            // identifiers and keywords
            // most complexity here is due to matching 'end' correctly with declarations.
            // We distinguish a declaration that comes first on a line, versus declarations further on a line (which are most likey modifiers)
            [/^(\s*)([a-z_]\w*[!?=]?)/, ['white',
                    {
                        cases: {
                            'for|until|while': { token: 'keyword.$2', next: '@dodecl.$2' },
                            '@declarations': { token: 'keyword.$2', next: '@root.$2' },
                            'end': { token: 'keyword.$S2', next: '@pop' },
                            '@keywords': 'keyword',
                            '@builtins': 'predefined',
                            '@default': 'identifier'
                        }
                    }]],
            [/[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        'if|unless|while|until': { token: 'keyword.$0x', next: '@modifier.$0x' },
                        'for': { token: 'keyword.$2', next: '@dodecl.$2' },
                        '@linedecls': { token: 'keyword.$0', next: '@root.$0' },
                        'end': { token: 'keyword.$S2', next: '@pop' },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            [/[A-Z][\w]*[!?=]?/, 'constructor.identifier'],
            [/\$[\w]*/, 'global.constant'],
            [/@[\w]*/, 'namespace.instance.identifier'],
            [/@@[\w]*/, 'namespace.class.identifier'],
            // here document
            [/<<[-~](@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            [/[ \t\r\n]+<<(@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            [/^<<(@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            // whitespace
            { include: '@whitespace' },
            // strings
            [/"/, { token: 'string.d.delim', next: '@dstring.d."' }],
            [/'/, { token: 'string.sq.delim', next: '@sstring.sq' }],
            // % literals. For efficiency, rematch in the 'pstring' state
            [/%([rsqxwW]|Q?)/, { token: '@rematch', next: 'pstring' }],
            // commands and symbols
            [/`/, { token: 'string.x.delim', next: '@dstring.x.`' }],
            [/:(\w|[$@])\w*[!?=]?/, 'string.s'],
            [/:"/, { token: 'string.s.delim', next: '@dstring.s."' }],
            [/:'/, { token: 'string.s.delim', next: '@sstring.s' }],
            // regular expressions. Lookahead for a (not escaped) closing forwardslash on the same line
            [/\/(?=(\\\/|[^\/\n])+\/)/, { token: 'regexp.delim', next: '@regexp' }],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, {
                    cases: {
                        '@keywordops': 'keyword',
                        '@operators': 'operator',
                        '@default': ''
                    }
                }],
            [/[;,]/, 'delimiter'],
            // numbers
            [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, 'number.hex'],
            [/0[_oO][0-7](_?[0-7])*/, 'number.octal'],
            [/0[bB][01](_?[01])*/, 'number.binary'],
            [/0[dD]@decpart/, 'number'],
            [/@decimal((\.@decpart)?([eE][\-+]?@decpart)?)/, {
                    cases: {
                        '$1': 'number.float',
                        '@default': 'number'
                    }
                }],
        ],
        // used to not treat a 'do' as a block opener if it occurs on the same
        // line as a 'do' statement: 'while|until|for'
        // dodecl.<decl> where decl is the declarations started, like 'while'
        dodecl: [
            [/^/, { token: '', switchTo: '@root.$S2' }],
            [/[a-z_]\w*[!?=]?/, {
                    cases: {
                        'end': { token: 'keyword.$S2', next: '@pop' },
                        'do': { token: 'keyword', switchTo: '@root.$S2' },
                        '@linedecls': { token: '@rematch', switchTo: '@root.$S2' },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            { include: '@root' }
        ],
        // used to prevent potential modifiers ('if|until|while|unless') to match
        // with 'end' keywords.
        // modifier.<decl>x where decl is the declaration starter, like 'if'
        modifier: [
            [/^/, '', '@pop'],
            [/[a-z_]\w*[!?=]?/, {
                    cases: {
                        'end': { token: 'keyword.$S2', next: '@pop' },
                        'then|else|elsif|do': { token: 'keyword', switchTo: '@root.$S2' },
                        '@linedecls': { token: '@rematch', switchTo: '@root.$S2' },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            { include: '@root' }
        ],
        // single quote strings (also used for symbols)
        // sstring.<kind>  where kind is 'sq' (single quote) or 's' (symbol)
        sstring: [
            [/[^\\']+/, 'string.$S2'],
            [/\\\\|\\'|\\$/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.invalid'],
            [/'/, { token: 'string.$S2.delim', next: '@pop' }]
        ],
        // double quoted "string".
        // dstring.<kind>.<delim> where kind is 'd' (double quoted), 'x' (command), or 's' (symbol)
        // and delim is the ending delimiter (" or `)
        dstring: [
            [/[^\\`"#]+/, 'string.$S2'],
            [/#/, 'string.$S2.escape', '@interpolated'],
            [/\\$/, 'string.$S2.escape'],
            [/@escapes/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.escape.invalid'],
            [/[`"]/, {
                    cases: {
                        '$#==$S3': { token: 'string.$S2.delim', next: '@pop' },
                        '@default': 'string.$S2'
                    }
                }]
        ],
        // literal documents
        // heredoc.<close> where close is the closing delimiter
        heredoc: [
            [/^(\s*)(@heredelim)$/, {
                    cases: {
                        '$2==$S2': ['string.heredoc', { token: 'string.heredoc.delimiter', next: '@pop' }],
                        '@default': ['string.heredoc', 'string.heredoc']
                    }
                }],
            [/.*/, 'string.heredoc'],
        ],
        // interpolated sequence
        interpolated: [
            [/\$\w*/, 'global.constant', '@pop'],
            [/@\w*/, 'namespace.class.identifier', '@pop'],
            [/@@\w*/, 'namespace.instance.identifier', '@pop'],
            [/[{]/, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],
            ['', '', '@pop'],
        ],
        // any code
        interpolated_compound: [
            [/[}]/, { token: 'string.escape.curly', next: '@pop' }],
            { include: '@root' },
        ],
        // %r quoted regexp
        // pregexp.<open>.<close> where open/close are the open/close delimiter
        pregexp: [
            { include: '@whitespace' },
            // turns out that you can quote using regex control characters, aargh!
            // for example; %r|kgjgaj| is ok (even though | is used for alternation)
            // so, we need to match those first
            [/[^\(\{\[\\]/, {
                    cases: {
                        '$#==$S3': { token: 'regexp.delim', next: '@pop' },
                        '$#==$S2': { token: 'regexp.delim', next: '@push' },
                        '~[)}\\]]': '@brackets.regexp.escape.control',
                        '~@regexpctl': 'regexp.escape.control',
                        '@default': 'regexp'
                    }
                }],
            { include: '@regexcontrol' },
        ],
        // We match regular expression quite precisely
        regexp: [
            { include: '@regexcontrol' },
            [/[^\\\/]/, 'regexp'],
            ['/[ixmp]*', { token: 'regexp.delim' }, '@pop'],
        ],
        regexcontrol: [
            [/(\{)(\d+(?:,\d*)?)(\})/, ['@brackets.regexp.escape.control', 'regexp.escape.control', '@brackets.regexp.escape.control']],
            [/(\[)(\^?)/, ['@brackets.regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],
            [/(\()(\?[:=!])/, ['@brackets.regexp.escape.control', 'regexp.escape.control']],
            [/\(\?#/, { token: 'regexp.escape.control', next: '@regexpcomment' }],
            [/[()]/, '@brackets.regexp.escape.control'],
            [/@regexpctl/, 'regexp.escape.control'],
            [/\\$/, 'regexp.escape'],
            [/@regexpesc/, 'regexp.escape'],
            [/\\\./, 'regexp.invalid'],
            [/#/, 'regexp.escape', '@interpolated'],
        ],
        regexrange: [
            [/-/, 'regexp.escape.control'],
            [/\^/, 'regexp.invalid'],
            [/\\$/, 'regexp.escape'],
            [/@regexpesc/, 'regexp.escape'],
            [/[^\]]/, 'regexp'],
            [/\]/, '@brackets.regexp.escape.control', '@pop'],
        ],
        regexpcomment: [
            [/[^)]+/, 'comment'],
            [/\)/, { token: 'regexp.escape.control', next: '@pop' }]
        ],
        // % quoted strings
        // A bit repetitive since we need to often special case the kind of ending delimiter
        pstring: [
            [/%([qws])\(/, { token: 'string.$1.delim', switchTo: '@qstring.$1.(.)' }],
            [/%([qws])\[/, { token: 'string.$1.delim', switchTo: '@qstring.$1.[.]' }],
            [/%([qws])\{/, { token: 'string.$1.delim', switchTo: '@qstring.$1.{.}' }],
            [/%([qws])</, { token: 'string.$1.delim', switchTo: '@qstring.$1.<.>' }],
            [/%([qws])(@delim)/, { token: 'string.$1.delim', switchTo: '@qstring.$1.$2.$2' }],
            [/%r\(/, { token: 'regexp.delim', switchTo: '@pregexp.(.)' }],
            [/%r\[/, { token: 'regexp.delim', switchTo: '@pregexp.[.]' }],
            [/%r\{/, { token: 'regexp.delim', switchTo: '@pregexp.{.}' }],
            [/%r</, { token: 'regexp.delim', switchTo: '@pregexp.<.>' }],
            [/%r(@delim)/, { token: 'regexp.delim', switchTo: '@pregexp.$1.$1' }],
            [/%(x|W|Q?)\(/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.(.)' }],
            [/%(x|W|Q?)\[/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.[.]' }],
            [/%(x|W|Q?)\{/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.{.}' }],
            [/%(x|W|Q?)</, { token: 'string.$1.delim', switchTo: '@qqstring.$1.<.>' }],
            [/%(x|W|Q?)(@delim)/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.$2.$2' }],
            [/%([rqwsxW]|Q?)./, { token: 'invalid', next: '@pop' }],
            [/./, { token: 'invalid', next: '@pop' }],
        ],
        // non-expanded quoted string.
        // qstring.<kind>.<open>.<close>
        //  kind = q|w|s  (single quote, array, symbol)
        //  open = open delimiter
        //  close = close delimiter
        qstring: [
            [/\\$/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.escape'],
            [/./, {
                    cases: {
                        '$#==$S4': { token: 'string.$S2.delim', next: '@pop' },
                        '$#==$S3': { token: 'string.$S2.delim', next: '@push' },
                        '@default': 'string.$S2'
                    }
                }],
        ],
        // expanded quoted string.
        // qqstring.<kind>.<open>.<close>
        //  kind = Q|W|x  (double quote, array, command)
        //  open = open delimiter
        //  close = close delimiter
        qqstring: [
            [/#/, 'string.$S2.escape', '@interpolated'],
            { include: '@qstring' }
        ],
        // whitespace & comments
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/^\s*=begin\b/, 'comment', '@comment'],
            [/#.*$/, 'comment'],
        ],
        comment: [
            [/[^=]+/, 'comment'],
            [/^\s*=begin\b/, 'comment.invalid'],
            [/^\s*=end\b.*/, 'comment', '@pop'],
            [/[=]/, 'comment']
        ],
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3J1YnkvcnVieS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVMsU0FBUyxZQUFZLDZCQUE2QjtBQUMzRCxT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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBK0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQXdEO0FBQ3BGLDRCQUE0Qix3REFBd0Q7QUFDcEYsd0JBQXdCLElBQUksbURBQW1ELEVBQUUsR0FBRztBQUNwRiwyQkFBMkIsd0RBQXdEO0FBQ25GLGtDQUFrQywwREFBMEQ7QUFDNUYsc0JBQXNCLGtEQUFrRDtBQUN4RSxzQkFBc0Isa0RBQWtEO0FBQ3hFLGtCQUFrQixJQUFJLDZDQUE2QyxFQUFFLEdBQUc7QUFDeEUscUJBQXFCLGtEQUFrRDtBQUN2RSw0QkFBNEIsb0RBQW9EO0FBQ2hGLDZCQUE2Qix5REFBeUQ7QUFDdEYsNkJBQTZCLHlEQUF5RDtBQUN0Rix5QkFBeUIsSUFBSSxvREFBb0QsRUFBRSxHQUFHO0FBQ3RGLDRCQUE0Qix5REFBeUQ7QUFDckYsbUNBQW1DLDJEQUEyRDtBQUM5RixpQ0FBaUMsaUNBQWlDO0FBQ2xFLG1CQUFtQixpQ0FBaUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwQ0FBMEM7QUFDOUUsb0NBQW9DLDJDQUEyQztBQUMvRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjM5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnIycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyc9YmVnaW4nLCAnPWVuZCddLFxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWycoJywgJyknXSxcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxuICAgIF1cbn07XG4vKlxuICogUnVieSBsYW5ndWFnZSBkZWZpbml0aW9uXG4gKlxuICogUXVpdGUgYSBjb21wbGV4IGxhbmd1YWdlIGR1ZSB0byBlbGFib3JhdGUgZXNjYXBlIHNlcXVlbmNlc1xuICogYW5kIHF1b3Rpbmcgb2YgbGl0ZXJhdGUgc3RyaW5ncy9yZWd1bGFyIGV4cHJlc3Npb25zLCBhbmRcbiAqIGFuICdlbmQnIGtleXdvcmQgdGhhdCBkb2VzIG5vdCBhbHdheXMgYXBwbHkgdG8gbW9kaWZpZXJzIGxpa2UgdW50aWwgYW5kIHdoaWxlLFxuICogYW5kIGEgJ2RvJyBrZXl3b3JkIHRoYXQgc29tZXRpbWVzIHN0YXJ0cyBhIGJsb2NrLCBidXQgc29tZXRpbWVzIGlzIHBhcnQgb2ZcbiAqIGFub3RoZXIgc3RhdGVtZW50IChsaWtlICd3aGlsZScpLlxuICpcbiAqICgxKSBlbmQgYmxvY2tzOlxuICogJ2VuZCcgbWF5IGVuZCBkZWNsYXJhdGlvbnMgbGlrZSBpZiBvciB1bnRpbCwgYnV0IHNvbWV0aW1lcyAnaWYnIG9yICd1bnRpbCdcbiAqIGFyZSBtb2RpZmllcnMgd2hlcmUgdGhlcmUgaXMgbm8gJ2VuZCcuIEFsc28sICdkbycgc29tZXRpbWVzIHN0YXJ0cyBhIGJsb2NrXG4gKiB0aGF0IGlzIGVuZGVkIGJ5ICdlbmQnLCBidXQgc29tZXRpbWVzIGl0IGlzIHBhcnQgb2YgYSAnd2hpbGUnLCAnZm9yJywgb3IgJ3VudGlsJ1xuICogVG8gZG8gcHJvcGVyIGJyYWNlIG1hdGNoaW5nIHdlIGRvIHNvbWUgZWxhYm9yYXRlIHN0YXRlIG1hbmlwdWxhdGlvbi5cbiAqIHNvbWUgZXhhbXBsZXM6XG4gKlxuICogICB1bnRpbCBibGEgZG9cbiAqICAgICB3b3JrIHVudGlsIHRpcmVkXG4gKiAgICAgbGlzdC5lYWNoIGRvXG4gKiAgICAgICBzb21ldGhpbmcgaWYgdGVzdFxuICogICAgIGVuZFxuICogICBlbmRcbiAqXG4gKiBvclxuICpcbiAqIGlmIHRlc3RcbiAqICBzb21ldGhpbmcgKGlmIHRlc3QgdGhlbiB4IGVuZClcbiAqICBiYXIgaWYgYmxhXG4gKiBlbmRcbiAqXG4gKiBvciwgaG93IGFib3V0IHVzaW5nIGNsYXNzIGFzIGEgcHJvcGVydHkuLlxuICpcbiAqIGNsYXNzIFRlc3RcbiAqICAgZGVmIGVuZHBvaW50XG4gKiAgICAgc2VsZi5jbGFzcy5lbmRwb2ludCB8fCByb3V0ZXNcbiAqICAgZW5kXG4gKiBlbmRcbiAqXG4gKiAoMikgcXVvdGluZzpcbiAqIHRoZXJlIGFyZSBtYW55IGtpbmRzIG9mIHN0cmluZ3MgYW5kIGVzY2FwZSBzZXF1ZW5jZXMuIEJ1dCBhbHNvLCBvbmUgY2FuXG4gKiBzdGFydCBtYW55IHN0cmluZy1saWtlIHRoaW5ncyBhcyAnJXF4JyB3aGVyZSBxIHNwZWNpZmllcyB0aGUga2luZCBvZiBzdHJpbmdcbiAqIChsaWtlIGEgY29tbWFuZCwgZXNjYXBlIGV4cGFuZGVkLCByZWd1bGFyIGV4cHJlc3Npb24sIHN5bWJvbCBldGMuKSwgYW5kIHggaXNcbiAqIHNvbWUgY2hhcmFjdGVyIGFuZCBvbmx5IGFub3RoZXIgJ3gnIGVuZHMgdGhlIHNlcXVlbmNlLiBFeGNlcHQgZm9yIGJyYWNrZXRzXG4gKiB3aGVyZSB0aGUgY2xvc2luZyBicmFja2V0IGVuZHMgdGhlIHNlcXVlbmNlLi4gYW5kIGV4Y2VwdCBmb3IgYSBuZXN0ZWQgYnJhY2tldFxuICogaW5zaWRlIHRoZSBzdHJpbmcgbGlrZSBlbnRpdHkuIEFsc28sIHN1Y2ggc3RyaW5ncyBjYW4gY29udGFpbiBpbnRlcnBvbGF0ZWRcbiAqIHJ1YnkgZXhwcmVzc2lvbnMgYWdhaW4gKGFuZCBzcGFuIG11bHRpcGxlIGxpbmVzKS4gTW9yZW92ZXIsIGV4cGFuZGVkXG4gKiByZWd1bGFyIGV4cHJlc3Npb24gY2FuIGFsc28gY29udGFpbiBjb21tZW50cy5cbiAqL1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICB0b2tlblBvc3RmaXg6ICcucnVieScsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ19fTElORV9fJywgJ19fRU5DT0RJTkdfXycsICdfX0ZJTEVfXycsICdCRUdJTicsICdFTkQnLCAnYWxpYXMnLCAnYW5kJywgJ2JlZ2luJyxcbiAgICAgICAgJ2JyZWFrJywgJ2Nhc2UnLCAnY2xhc3MnLCAnZGVmJywgJ2RlZmluZWQ/JywgJ2RvJywgJ2Vsc2UnLCAnZWxzaWYnLCAnZW5kJyxcbiAgICAgICAgJ2Vuc3VyZScsICdmb3InLCAnZmFsc2UnLCAnaWYnLCAnaW4nLCAnbW9kdWxlJywgJ25leHQnLCAnbmlsJywgJ25vdCcsICdvcicsICdyZWRvJyxcbiAgICAgICAgJ3Jlc2N1ZScsICdyZXRyeScsICdyZXR1cm4nLCAnc2VsZicsICdzdXBlcicsICd0aGVuJywgJ3RydWUnLCAndW5kZWYnLCAndW5sZXNzJyxcbiAgICAgICAgJ3VudGlsJywgJ3doZW4nLCAnd2hpbGUnLCAneWllbGQnLFxuICAgIF0sXG4gICAga2V5d29yZG9wczogW1xuICAgICAgICAnOjonLCAnLi4nLCAnLi4uJywgJz8nLCAnOicsICc9PidcbiAgICBdLFxuICAgIGJ1aWx0aW5zOiBbXG4gICAgICAgICdyZXF1aXJlJywgJ3B1YmxpYycsICdwcml2YXRlJywgJ2luY2x1ZGUnLCAnZXh0ZW5kJywgJ2F0dHJfcmVhZGVyJyxcbiAgICAgICAgJ3Byb3RlY3RlZCcsICdwcml2YXRlX2NsYXNzX21ldGhvZCcsICdwcm90ZWN0ZWRfY2xhc3NfbWV0aG9kJywgJ25ldydcbiAgICBdLFxuICAgIC8vIHRoZXNlIGFyZSBjbG9zZWQgYnkgJ2VuZCcgKGlmLCB3aGlsZSBhbmQgdW50aWwgYXJlIGhhbmRsZWQgc2VwYXJhdGVseSlcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgJ21vZHVsZScsICdjbGFzcycsICdkZWYnLCAnY2FzZScsICdkbycsICdiZWdpbicsICdmb3InLCAnaWYnLCAnd2hpbGUnLCAndW50aWwnLCAndW5sZXNzJ1xuICAgIF0sXG4gICAgbGluZWRlY2xzOiBbXG4gICAgICAgICdkZWYnLCAnY2FzZScsICdkbycsICdiZWdpbicsICdmb3InLCAnaWYnLCAnd2hpbGUnLCAndW50aWwnLCAndW5sZXNzJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICdeJywgJyYnLCAnfCcsICc8PT4nLCAnPT0nLCAnPT09JywgJyF+JywgJz1+JywgJz4nLCAnPj0nLCAnPCcsICc8PScsICc8PCcsICc+PicsICcrJyxcbiAgICAgICAgJy0nLCAnKicsICcvJywgJyUnLCAnKionLCAnficsICcrQCcsICctQCcsICdbXScsICdbXT0nLCAnYCcsXG4gICAgICAgICcrPScsICctPScsICcqPScsICcqKj0nLCAnLz0nLCAnXj0nLCAnJT0nLCAnPDw9JywgJz4+PScsICcmPScsICcmJj0nLCAnfHw9JywgJ3w9J1xuICAgIF0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH1cbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJVxcLl0rLyxcbiAgICAvLyBlc2NhcGUgc2VxdWVuY2VzXG4gICAgZXNjYXBlOiAvKD86W2FiZWZucnN0dlxcXFxcIidcXG5cXHJdfFswLTddezEsM318eFswLTlBLUZhLWZdezEsMn18dVswLTlBLUZhLWZdezR9KS8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpDXFwtKEBlc2NhcGV8Lil8YyhAZXNjYXBlfC4pfEBlc2NhcGUpLyxcbiAgICBkZWNwYXJ0OiAvXFxkKF8/XFxkKSovLFxuICAgIGRlY2ltYWw6IC8wfEBkZWNwYXJ0LyxcbiAgICBkZWxpbTogL1teYS16QS1aMC05XFxzXFxuXFxyXS8sXG4gICAgaGVyZWRlbGltOiAvKD86XFx3K3wnW14nXSonfFwiW15cIl0qXCJ8YFteYF0qYCkvLFxuICAgIHJlZ2V4cGN0bDogL1soKXt9XFxbXFxdXFwkXFxefFxcLSorP1xcLl0vLFxuICAgIHJlZ2V4cGVzYzogL1xcXFwoPzpbQXpaYkJkRGZucnN0dndXbjBcXFxcXFwvXXxAcmVnZXhwY3RsfGNbQS1aXXx4WzAtOWEtZkEtRl17Mn18dVswLTlhLWZBLUZdezR9KT8vLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICAvLyBNYWluIGVudHJ5LlxuICAgICAgICAvLyByb290LjxkZWNsPiB3aGVyZSBkZWNsIGlzIHRoZSBjdXJyZW50IG9wZW5pbmcgZGVjbGFyYXRpb24gKGxpa2UgJ2NsYXNzJylcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICAvLyBtb3N0IGNvbXBsZXhpdHkgaGVyZSBpcyBkdWUgdG8gbWF0Y2hpbmcgJ2VuZCcgY29ycmVjdGx5IHdpdGggZGVjbGFyYXRpb25zLlxuICAgICAgICAgICAgLy8gV2UgZGlzdGluZ3Vpc2ggYSBkZWNsYXJhdGlvbiB0aGF0IGNvbWVzIGZpcnN0IG9uIGEgbGluZSwgdmVyc3VzIGRlY2xhcmF0aW9ucyBmdXJ0aGVyIG9uIGEgbGluZSAod2hpY2ggYXJlIG1vc3QgbGlrZXkgbW9kaWZpZXJzKVxuICAgICAgICAgICAgWy9eKFxccyopKFthLXpfXVxcdypbIT89XT8pLywgWyd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcnx1bnRpbHx3aGlsZSc6IHsgdG9rZW46ICdrZXl3b3JkLiQyJywgbmV4dDogJ0Bkb2RlY2wuJDInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWNsYXJhdGlvbnMnOiB7IHRva2VuOiAna2V5d29yZC4kMicsIG5leHQ6ICdAcm9vdC4kMicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW5kJzogeyB0b2tlbjogJ2tleXdvcmQuJFMyJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XV0sXG4gICAgICAgICAgICBbL1thLXpfXVxcdypbIT89XT8vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZnx1bmxlc3N8d2hpbGV8dW50aWwnOiB7IHRva2VuOiAna2V5d29yZC4kMHgnLCBuZXh0OiAnQG1vZGlmaWVyLiQweCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb3InOiB7IHRva2VuOiAna2V5d29yZC4kMicsIG5leHQ6ICdAZG9kZWNsLiQyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BsaW5lZGVjbHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcsIG5leHQ6ICdAcm9vdC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdlbmQnOiB7IHRva2VuOiAna2V5d29yZC4kUzInLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvW0EtWl1bXFx3XSpbIT89XT8vLCAnY29uc3RydWN0b3IuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9cXCRbXFx3XSovLCAnZ2xvYmFsLmNvbnN0YW50J10sXG4gICAgICAgICAgICBbL0BbXFx3XSovLCAnbmFtZXNwYWNlLmluc3RhbmNlLmlkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvQEBbXFx3XSovLCAnbmFtZXNwYWNlLmNsYXNzLmlkZW50aWZpZXInXSxcbiAgICAgICAgICAgIC8vIGhlcmUgZG9jdW1lbnRcbiAgICAgICAgICAgIFsvPDxbLX5dKEBoZXJlZGVsaW0pLiovLCB7IHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgbmV4dDogJ0BoZXJlZG9jLiQxJyB9XSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKzw8KEBoZXJlZGVsaW0pLiovLCB7IHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgbmV4dDogJ0BoZXJlZG9jLiQxJyB9XSxcbiAgICAgICAgICAgIFsvXjw8KEBoZXJlZGVsaW0pLiovLCB7IHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgbmV4dDogJ0BoZXJlZG9jLiQxJyB9XSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcuZC5kZWxpbScsIG5leHQ6ICdAZHN0cmluZy5kLlwiJyB9XSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcuc3EuZGVsaW0nLCBuZXh0OiAnQHNzdHJpbmcuc3EnIH1dLFxuICAgICAgICAgICAgLy8gJSBsaXRlcmFscy4gRm9yIGVmZmljaWVuY3ksIHJlbWF0Y2ggaW4gdGhlICdwc3RyaW5nJyBzdGF0ZVxuICAgICAgICAgICAgWy8lKFtyc3F4d1ddfFE/KS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdwc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIC8vIGNvbW1hbmRzIGFuZCBzeW1ib2xzXG4gICAgICAgICAgICBbL2AvLCB7IHRva2VuOiAnc3RyaW5nLnguZGVsaW0nLCBuZXh0OiAnQGRzdHJpbmcueC5gJyB9XSxcbiAgICAgICAgICAgIFsvOihcXHd8WyRAXSlcXHcqWyE/PV0/LywgJ3N0cmluZy5zJ10sXG4gICAgICAgICAgICBbLzpcIi8sIHsgdG9rZW46ICdzdHJpbmcucy5kZWxpbScsIG5leHQ6ICdAZHN0cmluZy5zLlwiJyB9XSxcbiAgICAgICAgICAgIFsvOicvLCB7IHRva2VuOiAnc3RyaW5nLnMuZGVsaW0nLCBuZXh0OiAnQHNzdHJpbmcucycgfV0sXG4gICAgICAgICAgICAvLyByZWd1bGFyIGV4cHJlc3Npb25zLiBMb29rYWhlYWQgZm9yIGEgKG5vdCBlc2NhcGVkKSBjbG9zaW5nIGZvcndhcmRzbGFzaCBvbiB0aGUgc2FtZSBsaW5lXG4gICAgICAgICAgICBbL1xcLyg/PShcXFxcXFwvfFteXFwvXFxuXSkrXFwvKS8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBuZXh0OiAnQHJlZ2V4cCcgfV0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZG9wcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvWzssXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXShfP1swLTlhLWZBLUZdKSovLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8wW19vT11bMC03XShfP1swLTddKSovLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLzBbYkJdWzAxXShfP1swMV0pKi8sICdudW1iZXIuYmluYXJ5J10sXG4gICAgICAgICAgICBbLzBbZERdQGRlY3BhcnQvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbL0BkZWNpbWFsKChcXC5AZGVjcGFydCk/KFtlRV1bXFwtK10/QGRlY3BhcnQpPykvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDEnOiAnbnVtYmVyLmZsb2F0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gdXNlZCB0byBub3QgdHJlYXQgYSAnZG8nIGFzIGEgYmxvY2sgb3BlbmVyIGlmIGl0IG9jY3VycyBvbiB0aGUgc2FtZVxuICAgICAgICAvLyBsaW5lIGFzIGEgJ2RvJyBzdGF0ZW1lbnQ6ICd3aGlsZXx1bnRpbHxmb3InXG4gICAgICAgIC8vIGRvZGVjbC48ZGVjbD4gd2hlcmUgZGVjbCBpcyB0aGUgZGVjbGFyYXRpb25zIHN0YXJ0ZWQsIGxpa2UgJ3doaWxlJ1xuICAgICAgICBkb2RlY2w6IFtcbiAgICAgICAgICAgIFsvXi8sIHsgdG9rZW46ICcnLCBzd2l0Y2hUbzogJ0Byb290LiRTMicgfV0sXG4gICAgICAgICAgICBbL1thLXpfXVxcdypbIT89XT8vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZW5kJzogeyB0b2tlbjogJ2tleXdvcmQuJFMyJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZG8nOiB7IHRva2VuOiAna2V5d29yZCcsIHN3aXRjaFRvOiAnQHJvb3QuJFMyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BsaW5lZGVjbHMnOiB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0Byb290LiRTMicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Byb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIHVzZWQgdG8gcHJldmVudCBwb3RlbnRpYWwgbW9kaWZpZXJzICgnaWZ8dW50aWx8d2hpbGV8dW5sZXNzJykgdG8gbWF0Y2hcbiAgICAgICAgLy8gd2l0aCAnZW5kJyBrZXl3b3Jkcy5cbiAgICAgICAgLy8gbW9kaWZpZXIuPGRlY2w+eCB3aGVyZSBkZWNsIGlzIHRoZSBkZWNsYXJhdGlvbiBzdGFydGVyLCBsaWtlICdpZidcbiAgICAgICAgbW9kaWZpZXI6IFtcbiAgICAgICAgICAgIFsvXi8sICcnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bYS16X11cXHcqWyE/PV0/Lywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2VuZCc6IHsgdG9rZW46ICdrZXl3b3JkLiRTMicsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RoZW58ZWxzZXxlbHNpZnxkbyc6IHsgdG9rZW46ICdrZXl3b3JkJywgc3dpdGNoVG86ICdAcm9vdC4kUzInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGxpbmVkZWNscyc6IHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHJvb3QuJFMyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbnMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHJvb3QnIH1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gc2luZ2xlIHF1b3RlIHN0cmluZ3MgKGFsc28gdXNlZCBmb3Igc3ltYm9scylcbiAgICAgICAgLy8gc3N0cmluZy48a2luZD4gIHdoZXJlIGtpbmQgaXMgJ3NxJyAoc2luZ2xlIHF1b3RlKSBvciAncycgKHN5bWJvbClcbiAgICAgICAgc3N0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nLiRTMiddLFxuICAgICAgICAgICAgWy9cXFxcXFxcXHxcXFxcJ3xcXFxcJC8sICdzdHJpbmcuJFMyLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuJFMyLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcuJFMyLmRlbGltJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGRvdWJsZSBxdW90ZWQgXCJzdHJpbmdcIi5cbiAgICAgICAgLy8gZHN0cmluZy48a2luZD4uPGRlbGltPiB3aGVyZSBraW5kIGlzICdkJyAoZG91YmxlIHF1b3RlZCksICd4JyAoY29tbWFuZCksIG9yICdzJyAoc3ltYm9sKVxuICAgICAgICAvLyBhbmQgZGVsaW0gaXMgdGhlIGVuZGluZyBkZWxpbWl0ZXIgKFwiIG9yIGApXG4gICAgICAgIGRzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcYFwiI10rLywgJ3N0cmluZy4kUzInXSxcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcuJFMyLmVzY2FwZScsICdAaW50ZXJwb2xhdGVkJ10sXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy4kUzIuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvW2BcIl0vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMyc6IHsgdG9rZW46ICdzdHJpbmcuJFMyLmRlbGltJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLiRTMidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGxpdGVyYWwgZG9jdW1lbnRzXG4gICAgICAgIC8vIGhlcmVkb2MuPGNsb3NlPiB3aGVyZSBjbG9zZSBpcyB0aGUgY2xvc2luZyBkZWxpbWl0ZXJcbiAgICAgICAgaGVyZWRvYzogW1xuICAgICAgICAgICAgWy9eKFxccyopKEBoZXJlZGVsaW0pJC8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckMj09JFMyJzogWydzdHJpbmcuaGVyZWRvYycsIHsgdG9rZW46ICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJ3N0cmluZy5oZXJlZG9jJywgJ3N0cmluZy5oZXJlZG9jJ11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy8uKi8sICdzdHJpbmcuaGVyZWRvYyddLFxuICAgICAgICBdLFxuICAgICAgICAvLyBpbnRlcnBvbGF0ZWQgc2VxdWVuY2VcbiAgICAgICAgaW50ZXJwb2xhdGVkOiBbXG4gICAgICAgICAgICBbL1xcJFxcdyovLCAnZ2xvYmFsLmNvbnN0YW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvQFxcdyovLCAnbmFtZXNwYWNlLmNsYXNzLmlkZW50aWZpZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9AQFxcdyovLCAnbmFtZXNwYWNlLmluc3RhbmNlLmlkZW50aWZpZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9be10vLCB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZS5jdXJseScsIHN3aXRjaFRvOiAnQGludGVycG9sYXRlZF9jb21wb3VuZCcgfV0sXG4gICAgICAgICAgICBbJycsICcnLCAnQHBvcCddLFxuICAgICAgICBdLFxuICAgICAgICAvLyBhbnkgY29kZVxuICAgICAgICBpbnRlcnBvbGF0ZWRfY29tcG91bmQ6IFtcbiAgICAgICAgICAgIFsvW31dLywgeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcm9vdCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gJXIgcXVvdGVkIHJlZ2V4cFxuICAgICAgICAvLyBwcmVnZXhwLjxvcGVuPi48Y2xvc2U+IHdoZXJlIG9wZW4vY2xvc2UgYXJlIHRoZSBvcGVuL2Nsb3NlIGRlbGltaXRlclxuICAgICAgICBwcmVnZXhwOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIHR1cm5zIG91dCB0aGF0IHlvdSBjYW4gcXVvdGUgdXNpbmcgcmVnZXggY29udHJvbCBjaGFyYWN0ZXJzLCBhYXJnaCFcbiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlOyAlcnxrZ2pnYWp8IGlzIG9rIChldmVuIHRob3VnaCB8IGlzIHVzZWQgZm9yIGFsdGVybmF0aW9uKVxuICAgICAgICAgICAgLy8gc28sIHdlIG5lZWQgdG8gbWF0Y2ggdGhvc2UgZmlyc3RcbiAgICAgICAgICAgIFsvW15cXChcXHtcXFtcXFxcXS8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMzJzogeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgbmV4dDogJ0BwdXNoJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ35bKX1cXFxcXV0nOiAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnfkByZWdleHBjdGwnOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdyZWdleHAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0ByZWdleGNvbnRyb2wnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFdlIG1hdGNoIHJlZ3VsYXIgZXhwcmVzc2lvbiBxdWl0ZSBwcmVjaXNlbHlcbiAgICAgICAgcmVnZXhwOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcmVnZXhjb250cm9sJyB9LFxuICAgICAgICAgICAgWy9bXlxcXFxcXC9dLywgJ3JlZ2V4cCddLFxuICAgICAgICAgICAgWycvW2l4bXBdKicsIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nIH0sICdAcG9wJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHJlZ2V4Y29udHJvbDogW1xuICAgICAgICAgICAgWy8oXFx7KShcXGQrKD86LFxcZCopPykoXFx9KS8sIFsnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCddXSxcbiAgICAgICAgICAgIFsvKFxcWykoXFxePykvLCBbJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnLCB7IHRva2VuOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgbmV4dDogJ0ByZWdleHJhbmdlJyB9XV0sXG4gICAgICAgICAgICBbLyhcXCgpKFxcP1s6PSFdKS8sIFsnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXV0sXG4gICAgICAgICAgICBbL1xcKFxcPyMvLCB7IHRva2VuOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgbmV4dDogJ0ByZWdleHBjb21tZW50JyB9XSxcbiAgICAgICAgICAgIFsvWygpXS8sICdAYnJhY2tldHMucmVnZXhwLmVzY2FwZS5jb250cm9sJ10sXG4gICAgICAgICAgICBbL0ByZWdleHBjdGwvLCAncmVnZXhwLmVzY2FwZS5jb250cm9sJ10sXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3JlZ2V4cC5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGVzYy8sICdyZWdleHAuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFxcXC4vLCAncmVnZXhwLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvIy8sICdyZWdleHAuZXNjYXBlJywgJ0BpbnRlcnBvbGF0ZWQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVnZXhyYW5nZTogW1xuICAgICAgICAgICAgWy8tLywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddLFxuICAgICAgICAgICAgWy9cXF4vLCAncmVnZXhwLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXFxcXCQvLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9AcmVnZXhwZXNjLywgJ3JlZ2V4cC5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvW15cXF1dLywgJ3JlZ2V4cCddLFxuICAgICAgICAgICAgWy9cXF0vLCAnQGJyYWNrZXRzLnJlZ2V4cC5lc2NhcGUuY29udHJvbCcsICdAcG9wJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHJlZ2V4cGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW14pXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXCkvLCB7IHRva2VuOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vICUgcXVvdGVkIHN0cmluZ3NcbiAgICAgICAgLy8gQSBiaXQgcmVwZXRpdGl2ZSBzaW5jZSB3ZSBuZWVkIHRvIG9mdGVuIHNwZWNpYWwgY2FzZSB0aGUga2luZCBvZiBlbmRpbmcgZGVsaW1pdGVyXG4gICAgICAgIHBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvJShbcXdzXSlcXCgvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4kMS4oLiknIH1dLFxuICAgICAgICAgICAgWy8lKFtxd3NdKVxcWy8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0Bxc3RyaW5nLiQxLlsuXScgfV0sXG4gICAgICAgICAgICBbLyUoW3F3c10pXFx7LywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDEuey59JyB9XSxcbiAgICAgICAgICAgIFsvJShbcXdzXSk8LywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDEuPC4+JyB9XSxcbiAgICAgICAgICAgIFsvJShbcXdzXSkoQGRlbGltKS8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0Bxc3RyaW5nLiQxLiQyLiQyJyB9XSxcbiAgICAgICAgICAgIFsvJXJcXCgvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcHJlZ2V4cC4oLiknIH1dLFxuICAgICAgICAgICAgWy8lclxcWy8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BwcmVnZXhwLlsuXScgfV0sXG4gICAgICAgICAgICBbLyVyXFx7LywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHByZWdleHAuey59JyB9XSxcbiAgICAgICAgICAgIFsvJXI8LywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHByZWdleHAuPC4+JyB9XSxcbiAgICAgICAgICAgIFsvJXIoQGRlbGltKS8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BwcmVnZXhwLiQxLiQxJyB9XSxcbiAgICAgICAgICAgIFsvJSh4fFd8UT8pXFwoLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQxLiguKScgfV0sXG4gICAgICAgICAgICBbLyUoeHxXfFE/KVxcWy8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMS5bLl0nIH1dLFxuICAgICAgICAgICAgWy8lKHh8V3xRPylcXHsvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXFzdHJpbmcuJDEuey59JyB9XSxcbiAgICAgICAgICAgIFsvJSh4fFd8UT8pPC8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMS48Lj4nIH1dLFxuICAgICAgICAgICAgWy8lKHh8V3xRPykoQGRlbGltKS8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMS4kMi4kMicgfV0sXG4gICAgICAgICAgICBbLyUoW3Jxd3N4V118UT8pLi8sIHsgdG9rZW46ICdpbnZhbGlkJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8uLywgeyB0b2tlbjogJ2ludmFsaWQnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIC8vIG5vbi1leHBhbmRlZCBxdW90ZWQgc3RyaW5nLlxuICAgICAgICAvLyBxc3RyaW5nLjxraW5kPi48b3Blbj4uPGNsb3NlPlxuICAgICAgICAvLyAga2luZCA9IHF8d3xzICAoc2luZ2xlIHF1b3RlLCBhcnJheSwgc3ltYm9sKVxuICAgICAgICAvLyAgb3BlbiA9IG9wZW4gZGVsaW1pdGVyXG4gICAgICAgIC8vICBjbG9zZSA9IGNsb3NlIGRlbGltaXRlclxuICAgICAgICBxc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy4kUzIuZXNjYXBlJ10sXG4gICAgICAgICAgICBbLy4vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTNCc6IHsgdG9rZW46ICdzdHJpbmcuJFMyLmRlbGltJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMyc6IHsgdG9rZW46ICdzdHJpbmcuJFMyLmRlbGltJywgbmV4dDogJ0BwdXNoJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZy4kUzInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gZXhwYW5kZWQgcXVvdGVkIHN0cmluZy5cbiAgICAgICAgLy8gcXFzdHJpbmcuPGtpbmQ+LjxvcGVuPi48Y2xvc2U+XG4gICAgICAgIC8vICBraW5kID0gUXxXfHggIChkb3VibGUgcXVvdGUsIGFycmF5LCBjb21tYW5kKVxuICAgICAgICAvLyAgb3BlbiA9IG9wZW4gZGVsaW1pdGVyXG4gICAgICAgIC8vICBjbG9zZSA9IGNsb3NlIGRlbGltaXRlclxuICAgICAgICBxcXN0cmluZzogW1xuICAgICAgICAgICAgWy8jLywgJ3N0cmluZy4kUzIuZXNjYXBlJywgJ0BpbnRlcnBvbGF0ZWQnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bxc3RyaW5nJyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIHdoaXRlc3BhY2UgJiBjb21tZW50c1xuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL15cXHMqPWJlZ2luXFxiLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J10sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW149XSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9eXFxzKj1iZWdpblxcYi8sICdjb21tZW50LmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXlxccyo9ZW5kXFxiLiovLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1s9XS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==