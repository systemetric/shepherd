(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js ***!
  \***********************************************************************************/
/*! exports provided: Adapter, DiagnostcsAdapter, SuggestAdapter, SignatureHelpAdapter, QuickInfoAdapter, OccurrencesAdapter, DefinitionAdapter, ReferenceAdapter, OutlineAdapter, Kind, FormatHelper, FormatAdapter, FormatOnTypeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnostcsAdapter", function() { return DiagnostcsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestAdapter", function() { return SuggestAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpAdapter", function() { return SignatureHelpAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickInfoAdapter", function() { return QuickInfoAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrencesAdapter", function() { return OccurrencesAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionAdapter", function() { return DefinitionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceAdapter", function() { return ReferenceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineAdapter", function() { return OutlineAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatHelper", function() { return FormatHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAdapter", function() { return FormatAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatOnTypeAdapter", function() { return FormatOnTypeAdapter; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Uri = monaco.Uri;
var Promise = monaco.Promise;
//#region utils copied from typescript to prevent loading the entire typescriptServices ---
var IndentStyle;
(function (IndentStyle) {
    IndentStyle[IndentStyle["None"] = 0] = "None";
    IndentStyle[IndentStyle["Block"] = 1] = "Block";
    IndentStyle[IndentStyle["Smart"] = 2] = "Smart";
})(IndentStyle || (IndentStyle = {}));
function flattenDiagnosticMessageText(messageText, newLine) {
    if (typeof messageText === "string") {
        return messageText;
    }
    else {
        var diagnosticChain = messageText;
        var result = "";
        var indent = 0;
        while (diagnosticChain) {
            if (indent) {
                result += newLine;
                for (var i = 0; i < indent; i++) {
                    result += "  ";
                }
            }
            result += diagnosticChain.messageText;
            indent++;
            diagnosticChain = diagnosticChain.next;
        }
        return result;
    }
}
function displayPartsToString(displayParts) {
    if (displayParts) {
        return displayParts.map(function (displayPart) { return displayPart.text; }).join("");
    }
    return "";
}
//#endregion
var Adapter = /** @class */ (function () {
    function Adapter(_worker) {
        this._worker = _worker;
    }
    Adapter.prototype._positionToOffset = function (uri, position) {
        var model = monaco.editor.getModel(uri);
        return model.getOffsetAt(position);
    };
    Adapter.prototype._offsetToPosition = function (uri, offset) {
        var model = monaco.editor.getModel(uri);
        return model.getPositionAt(offset);
    };
    Adapter.prototype._textSpanToRange = function (uri, span) {
        var p1 = this._offsetToPosition(uri, span.start);
        var p2 = this._offsetToPosition(uri, span.start + span.length);
        var startLineNumber = p1.lineNumber, startColumn = p1.column;
        var endLineNumber = p2.lineNumber, endColumn = p2.column;
        return { startLineNumber: startLineNumber, startColumn: startColumn, endLineNumber: endLineNumber, endColumn: endColumn };
    };
    return Adapter;
}());

// --- diagnostics --- ---
var DiagnostcsAdapter = /** @class */ (function (_super) {
    __extends(DiagnostcsAdapter, _super);
    function DiagnostcsAdapter(_defaults, _selector, worker) {
        var _this = _super.call(this, worker) || this;
        _this._defaults = _defaults;
        _this._selector = _selector;
        _this._disposables = [];
        _this._listener = Object.create(null);
        var onModelAdd = function (model) {
            if (model.getModeId() !== _selector) {
                return;
            }
            var handle;
            var changeSubscription = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model.uri); }, 500);
            });
            _this._listener[model.uri.toString()] = {
                dispose: function () {
                    changeSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            _this._doValidate(model.uri);
        };
        var onModelRemoved = function (model) {
            monaco.editor.setModelMarkers(model, _this._selector, []);
            var key = model.uri.toString();
            if (_this._listener[key]) {
                _this._listener[key].dispose();
                delete _this._listener[key];
            }
        };
        _this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
        _this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
        _this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        _this._disposables.push({
            dispose: function () {
                for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
                    var model = _a[_i];
                    onModelRemoved(model);
                }
            }
        });
        _this._disposables.push(_this._defaults.onDidChange(function () {
            // redo diagnostics when options change
            for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
                var model = _a[_i];
                onModelRemoved(model);
                onModelAdd(model);
            }
        }));
        monaco.editor.getModels().forEach(onModelAdd);
        return _this;
    }
    DiagnostcsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnostcsAdapter.prototype._doValidate = function (resource) {
        var _this = this;
        this._worker(resource).then(function (worker) {
            if (!monaco.editor.getModel(resource)) {
                // model was disposed in the meantime
                return null;
            }
            var promises = [];
            var _a = _this._defaults.getDiagnosticsOptions(), noSyntaxValidation = _a.noSyntaxValidation, noSemanticValidation = _a.noSemanticValidation;
            if (!noSyntaxValidation) {
                promises.push(worker.getSyntacticDiagnostics(resource.toString()));
            }
            if (!noSemanticValidation) {
                promises.push(worker.getSemanticDiagnostics(resource.toString()));
            }
            return Promise.join(promises);
        }).then(function (diagnostics) {
            if (!diagnostics || !monaco.editor.getModel(resource)) {
                // model was disposed in the meantime
                return null;
            }
            var markers = diagnostics
                .reduce(function (p, c) { return c.concat(p); }, [])
                .map(function (d) { return _this._convertDiagnostics(resource, d); });
            monaco.editor.setModelMarkers(monaco.editor.getModel(resource), _this._selector, markers);
        }).done(undefined, function (err) {
            console.error(err);
        });
    };
    DiagnostcsAdapter.prototype._convertDiagnostics = function (resource, diag) {
        var _a = this._offsetToPosition(resource, diag.start), startLineNumber = _a.lineNumber, startColumn = _a.column;
        var _b = this._offsetToPosition(resource, diag.start + diag.length), endLineNumber = _b.lineNumber, endColumn = _b.column;
        return {
            severity: monaco.MarkerSeverity.Error,
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn,
            message: flattenDiagnosticMessageText(diag.messageText, '\n')
        };
    };
    return DiagnostcsAdapter;
}(Adapter));

var SuggestAdapter = /** @class */ (function (_super) {
    __extends(SuggestAdapter, _super);
    function SuggestAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuggestAdapter.prototype, "triggerCharacters", {
        get: function () {
            return ['.'];
        },
        enumerable: true,
        configurable: true
    });
    SuggestAdapter.prototype.provideCompletionItems = function (model, position, token) {
        var wordInfo = model.getWordUntilPosition(position);
        var resource = model.uri;
        var offset = this._positionToOffset(resource, position);
        return wireCancellationToken(token, this._worker(resource).then(function (worker) {
            return worker.getCompletionsAtPosition(resource.toString(), offset);
        }).then(function (info) {
            if (!info) {
                return;
            }
            var suggestions = info.entries.map(function (entry) {
                return {
                    uri: resource,
                    position: position,
                    label: entry.name,
                    sortText: entry.sortText,
                    kind: SuggestAdapter.convertKind(entry.kind)
                };
            });
            return suggestions;
        }));
    };
    SuggestAdapter.prototype.resolveCompletionItem = function (item, token) {
        var _this = this;
        var myItem = item;
        var resource = myItem.uri;
        var position = myItem.position;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) {
            return worker.getCompletionEntryDetails(resource.toString(), _this._positionToOffset(resource, position), myItem.label);
        }).then(function (details) {
            if (!details) {
                return myItem;
            }
            return {
                uri: resource,
                position: position,
                label: details.name,
                kind: SuggestAdapter.convertKind(details.kind),
                detail: displayPartsToString(details.displayParts),
                documentation: displayPartsToString(details.documentation)
            };
        }));
    };
    SuggestAdapter.convertKind = function (kind) {
        switch (kind) {
            case Kind.primitiveType:
            case Kind.keyword:
                return monaco.languages.CompletionItemKind.Keyword;
            case Kind.variable:
            case Kind.localVariable:
                return monaco.languages.CompletionItemKind.Variable;
            case Kind.memberVariable:
            case Kind.memberGetAccessor:
            case Kind.memberSetAccessor:
                return monaco.languages.CompletionItemKind.Field;
            case Kind.function:
            case Kind.memberFunction:
            case Kind.constructSignature:
            case Kind.callSignature:
            case Kind.indexSignature:
                return monaco.languages.CompletionItemKind.Function;
            case Kind.enum:
                return monaco.languages.CompletionItemKind.Enum;
            case Kind.module:
                return monaco.languages.CompletionItemKind.Module;
            case Kind.class:
                return monaco.languages.CompletionItemKind.Class;
            case Kind.interface:
                return monaco.languages.CompletionItemKind.Interface;
            case Kind.warning:
                return monaco.languages.CompletionItemKind.File;
        }
        return monaco.languages.CompletionItemKind.Property;
    };
    return SuggestAdapter;
}(Adapter));

var SignatureHelpAdapter = /** @class */ (function (_super) {
    __extends(SignatureHelpAdapter, _super);
    function SignatureHelpAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signatureHelpTriggerCharacters = ['(', ','];
        return _this;
    }
    SignatureHelpAdapter.prototype.provideSignatureHelp = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) { return worker.getSignatureHelpItems(resource.toString(), _this._positionToOffset(resource, position)); }).then(function (info) {
            if (!info) {
                return;
            }
            var ret = {
                activeSignature: info.selectedItemIndex,
                activeParameter: info.argumentIndex,
                signatures: []
            };
            info.items.forEach(function (item) {
                var signature = {
                    label: '',
                    documentation: null,
                    parameters: []
                };
                signature.label += displayPartsToString(item.prefixDisplayParts);
                item.parameters.forEach(function (p, i, a) {
                    var label = displayPartsToString(p.displayParts);
                    var parameter = {
                        label: label,
                        documentation: displayPartsToString(p.documentation)
                    };
                    signature.label += label;
                    signature.parameters.push(parameter);
                    if (i < a.length - 1) {
                        signature.label += displayPartsToString(item.separatorDisplayParts);
                    }
                });
                signature.label += displayPartsToString(item.suffixDisplayParts);
                ret.signatures.push(signature);
            });
            return ret;
        }));
    };
    return SignatureHelpAdapter;
}(Adapter));

// --- hover ------
var QuickInfoAdapter = /** @class */ (function (_super) {
    __extends(QuickInfoAdapter, _super);
    function QuickInfoAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickInfoAdapter.prototype.provideHover = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) {
            return worker.getQuickInfoAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            var documentation = displayPartsToString(info.documentation);
            var tags = info.tags ? info.tags.map(function (tag) {
                var label = "*@" + tag.name + "*";
                if (!tag.text) {
                    return label;
                }
                return label + (tag.text.match(/\r\n|\n/g) ? ' \n' + tag.text : " - " + tag.text);
            })
                .join('  \n\n') : '';
            var contents = displayPartsToString(info.displayParts);
            return {
                range: _this._textSpanToRange(resource, info.textSpan),
                contents: [{
                        value: '```js\n' + contents + '\n```\n'
                    }, {
                        value: documentation + (tags ? '\n\n' + tags : '')
                    }]
            };
        }));
    };
    return QuickInfoAdapter;
}(Adapter));

// --- occurrences ------
var OccurrencesAdapter = /** @class */ (function (_super) {
    __extends(OccurrencesAdapter, _super);
    function OccurrencesAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OccurrencesAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) {
            return worker.getOccurrencesAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            return entries.map(function (entry) {
                return {
                    range: _this._textSpanToRange(resource, entry.textSpan),
                    kind: entry.isWriteAccess ? monaco.languages.DocumentHighlightKind.Write : monaco.languages.DocumentHighlightKind.Text
                };
            });
        }));
    };
    return OccurrencesAdapter;
}(Adapter));

// --- definition ------
var DefinitionAdapter = /** @class */ (function (_super) {
    __extends(DefinitionAdapter, _super);
    function DefinitionAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
        var _this = this;
        var resource = model.uri;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) {
            return worker.getDefinitionAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            var result = [];
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                var uri = Uri.parse(entry.fileName);
                if (monaco.editor.getModel(uri)) {
                    result.push({
                        uri: uri,
                        range: _this._textSpanToRange(uri, entry.textSpan)
                    });
                }
            }
            return result;
        }));
    };
    return DefinitionAdapter;
}(Adapter));

// --- references ------
var ReferenceAdapter = /** @class */ (function (_super) {
    __extends(ReferenceAdapter, _super);
    function ReferenceAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
        var _this = this;
        var resource = model.uri;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) {
            return worker.getReferencesAtPosition(resource.toString(), _this._positionToOffset(resource, position));
        }).then(function (entries) {
            if (!entries) {
                return;
            }
            var result = [];
            for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
                var entry = entries_2[_i];
                var uri = Uri.parse(entry.fileName);
                if (monaco.editor.getModel(uri)) {
                    result.push({
                        uri: uri,
                        range: _this._textSpanToRange(uri, entry.textSpan)
                    });
                }
            }
            return result;
        }));
    };
    return ReferenceAdapter;
}(Adapter));

// --- outline ------
var OutlineAdapter = /** @class */ (function (_super) {
    __extends(OutlineAdapter, _super);
    function OutlineAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlineAdapter.prototype.provideDocumentSymbols = function (model, token) {
        var _this = this;
        var resource = model.uri;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) { return worker.getNavigationBarItems(resource.toString()); }).then(function (items) {
            if (!items) {
                return;
            }
            var convert = function (bucket, item, containerLabel) {
                var result = {
                    name: item.text,
                    detail: '',
                    kind: (outlineTypeTable[item.kind] || monaco.languages.SymbolKind.Variable),
                    range: _this._textSpanToRange(resource, item.spans[0]),
                    selectionRange: _this._textSpanToRange(resource, item.spans[0]),
                    containerName: containerLabel
                };
                if (item.childItems && item.childItems.length > 0) {
                    for (var _i = 0, _a = item.childItems; _i < _a.length; _i++) {
                        var child = _a[_i];
                        convert(bucket, child, result.name);
                    }
                }
                bucket.push(result);
            };
            var result = [];
            items.forEach(function (item) { return convert(result, item); });
            return result;
        }));
    };
    return OutlineAdapter;
}(Adapter));

var Kind = /** @class */ (function () {
    function Kind() {
    }
    Kind.unknown = '';
    Kind.keyword = 'keyword';
    Kind.script = 'script';
    Kind.module = 'module';
    Kind.class = 'class';
    Kind.interface = 'interface';
    Kind.type = 'type';
    Kind.enum = 'enum';
    Kind.variable = 'var';
    Kind.localVariable = 'local var';
    Kind.function = 'function';
    Kind.localFunction = 'local function';
    Kind.memberFunction = 'method';
    Kind.memberGetAccessor = 'getter';
    Kind.memberSetAccessor = 'setter';
    Kind.memberVariable = 'property';
    Kind.constructorImplementation = 'constructor';
    Kind.callSignature = 'call';
    Kind.indexSignature = 'index';
    Kind.constructSignature = 'construct';
    Kind.parameter = 'parameter';
    Kind.typeParameter = 'type parameter';
    Kind.primitiveType = 'primitive type';
    Kind.label = 'label';
    Kind.alias = 'alias';
    Kind.const = 'const';
    Kind.let = 'let';
    Kind.warning = 'warning';
    return Kind;
}());

var outlineTypeTable = Object.create(null);
outlineTypeTable[Kind.module] = monaco.languages.SymbolKind.Module;
outlineTypeTable[Kind.class] = monaco.languages.SymbolKind.Class;
outlineTypeTable[Kind.enum] = monaco.languages.SymbolKind.Enum;
outlineTypeTable[Kind.interface] = monaco.languages.SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = monaco.languages.SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.const] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.function] = monaco.languages.SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = monaco.languages.SymbolKind.Function;
// --- formatting ----
var FormatHelper = /** @class */ (function (_super) {
    __extends(FormatHelper, _super);
    function FormatHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatHelper._convertOptions = function (options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: IndentStyle.Smart,
            NewLineCharacter: '\n',
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    };
    FormatHelper.prototype._convertTextChanges = function (uri, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(uri, change.span)
        };
    };
    return FormatHelper;
}(Adapter));

var FormatAdapter = /** @class */ (function (_super) {
    __extends(FormatAdapter, _super);
    function FormatAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatAdapter.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        var _this = this;
        var resource = model.uri;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) {
            return worker.getFormattingEditsForRange(resource.toString(), _this._positionToOffset(resource, { lineNumber: range.startLineNumber, column: range.startColumn }), _this._positionToOffset(resource, { lineNumber: range.endLineNumber, column: range.endColumn }), FormatHelper._convertOptions(options));
        }).then(function (edits) {
            if (edits) {
                return edits.map(function (edit) { return _this._convertTextChanges(resource, edit); });
            }
        }));
    };
    return FormatAdapter;
}(FormatHelper));

var FormatOnTypeAdapter = /** @class */ (function (_super) {
    __extends(FormatOnTypeAdapter, _super);
    function FormatOnTypeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormatOnTypeAdapter.prototype, "autoFormatTriggerCharacters", {
        get: function () {
            return [';', '}', '\n'];
        },
        enumerable: true,
        configurable: true
    });
    FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits = function (model, position, ch, options, token) {
        var _this = this;
        var resource = model.uri;
        return wireCancellationToken(token, this._worker(resource).then(function (worker) {
            return worker.getFormattingEditsAfterKeystroke(resource.toString(), _this._positionToOffset(resource, position), ch, FormatHelper._convertOptions(options));
        }).then(function (edits) {
            if (edits) {
                return edits.map(function (edit) { return _this._convertTextChanges(resource, edit); });
            }
        }));
    };
    return FormatOnTypeAdapter;
}(FormatHelper));

/**
 * Hook a cancellation token to a WinJS Promise
 */
function wireCancellationToken(token, promise) {
    token.onCancellationRequested(function () { return promise.cancel(); });
    return promise;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":
/*!*************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js ***!
  \*************************************************************************/
/*! exports provided: setupTypeScript, setupJavaScript, getJavaScriptWorker, getTypeScriptWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTypeScript", function() { return setupTypeScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupJavaScript", function() { return setupJavaScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJavaScriptWorker", function() { return getJavaScriptWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeScriptWorker", function() { return getTypeScriptWorker; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var javaScriptWorker;
var typeScriptWorker;
function setupTypeScript(defaults) {
    typeScriptWorker = setupMode(defaults, 'typescript');
}
function setupJavaScript(defaults) {
    javaScriptWorker = setupMode(defaults, 'javascript');
}
function getJavaScriptWorker() {
    return new monaco.Promise(function (resolve, reject) {
        if (!javaScriptWorker) {
            return reject("JavaScript not registered!");
        }
        resolve(javaScriptWorker);
    });
}
function getTypeScriptWorker() {
    return new monaco.Promise(function (resolve, reject) {
        if (!typeScriptWorker) {
            return reject("TypeScript not registered!");
        }
        resolve(typeScriptWorker);
    });
}
function setupMode(defaults, modeId) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](modeId, defaults);
    var worker = function (first) {
        var more = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            more[_i - 1] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, [first].concat(more));
    };
    monaco.languages.registerCompletionItemProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SuggestAdapter"](worker));
    monaco.languages.registerSignatureHelpProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SignatureHelpAdapter"](worker));
    monaco.languages.registerHoverProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["QuickInfoAdapter"](worker));
    monaco.languages.registerDocumentHighlightProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OccurrencesAdapter"](worker));
    monaco.languages.registerDefinitionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DefinitionAdapter"](worker));
    monaco.languages.registerReferenceProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["ReferenceAdapter"](worker));
    monaco.languages.registerDocumentSymbolProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OutlineAdapter"](worker));
    monaco.languages.registerDocumentRangeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatAdapter"](worker));
    monaco.languages.registerOnTypeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatOnTypeAdapter"](worker));
    new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnostcsAdapter"](defaults, modeId, worker);
    return worker;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js ***!
  \********************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var Promise = monaco.Promise;
var WorkerManager = /** @class */ (function () {
    function WorkerManager(modeId, defaults) {
        var _this = this;
        this._modeId = modeId;
        this._defaults = defaults;
        this._worker = null;
        this._idleCheckInterval = setInterval(function () { return _this._checkIfIdle(); }, 30 * 1000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
    }
    WorkerManager.prototype._stopWorker = function () {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    };
    WorkerManager.prototype.dispose = function () {
        clearInterval(this._idleCheckInterval);
        this._configChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._checkIfIdle = function () {
        if (!this._worker) {
            return;
        }
        var maxIdleTime = this._defaults.getWorkerMaxIdleTime();
        var timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (maxIdleTime > 0 && timePassedSinceLastUsed > maxIdleTime) {
            this._stopWorker();
        }
    };
    WorkerManager.prototype._getClient = function () {
        var _this = this;
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = monaco.editor.createWebWorker({
                // module that exports the create() method and returns a `TypeScriptWorker` instance
                moduleId: 'vs/language/typescript/tsWorker',
                label: this._modeId,
                // passed in to the create() method
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs()
                }
            });
            var p = this._worker.getProxy();
            if (this._defaults.getEagerModelSync()) {
                p = p.then(function (worker) {
                    return _this._worker.withSyncedResources(monaco.editor.getModels()
                        .filter(function (model) { return model.getModeId() === _this._modeId; })
                        .map(function (model) { return model.uri; }));
                });
            }
            this._client = p;
        }
        return this._client;
    };
    WorkerManager.prototype.getLanguageServiceWorker = function () {
        var _this = this;
        var resources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            resources[_i] = arguments[_i];
        }
        var _client;
        return toShallowCancelPromise(this._getClient().then(function (client) {
            _client = client;
        }).then(function (_) {
            return _this._worker.withSyncedResources(resources);
        }).then(function (_) { return _client; }));
    };
    return WorkerManager;
}());

function toShallowCancelPromise(p) {
    var completeCallback;
    var errorCallback;
    var r = new Promise(function (c, e) {
        completeCallback = c;
        errorCallback = e;
    }, function () { });
    p.then(completeCallback, errorCallback);
    return r;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC9sYW5ndWFnZUZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS90eXBlc2NyaXB0L3RzTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC93b3JrZXJNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QseUJBQXlCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hC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Iiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIFVyaSA9IG1vbmFjby5Vcmk7XG52YXIgUHJvbWlzZSA9IG1vbmFjby5Qcm9taXNlO1xuLy8jcmVnaW9uIHV0aWxzIGNvcGllZCBmcm9tIHR5cGVzY3JpcHQgdG8gcHJldmVudCBsb2FkaW5nIHRoZSBlbnRpcmUgdHlwZXNjcmlwdFNlcnZpY2VzIC0tLVxudmFyIEluZGVudFN0eWxlO1xuKGZ1bmN0aW9uIChJbmRlbnRTdHlsZSkge1xuICAgIEluZGVudFN0eWxlW0luZGVudFN0eWxlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgSW5kZW50U3R5bGVbSW5kZW50U3R5bGVbXCJCbG9ja1wiXSA9IDFdID0gXCJCbG9ja1wiO1xuICAgIEluZGVudFN0eWxlW0luZGVudFN0eWxlW1wiU21hcnRcIl0gPSAyXSA9IFwiU21hcnRcIjtcbn0pKEluZGVudFN0eWxlIHx8IChJbmRlbnRTdHlsZSA9IHt9KSk7XG5mdW5jdGlvbiBmbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KG1lc3NhZ2VUZXh0LCBuZXdMaW5lKSB7XG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlVGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gbWVzc2FnZVRleHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZGlhZ25vc3RpY0NoYWluID0gbWVzc2FnZVRleHQ7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgaW5kZW50ID0gMDtcbiAgICAgICAgd2hpbGUgKGRpYWdub3N0aWNDaGFpbikge1xuICAgICAgICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBuZXdMaW5lO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiICBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gZGlhZ25vc3RpY0NoYWluLm1lc3NhZ2VUZXh0O1xuICAgICAgICAgICAgaW5kZW50Kys7XG4gICAgICAgICAgICBkaWFnbm9zdGljQ2hhaW4gPSBkaWFnbm9zdGljQ2hhaW4ubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGRpc3BsYXlQYXJ0cykge1xuICAgIGlmIChkaXNwbGF5UGFydHMpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlQYXJ0cy5tYXAoZnVuY3Rpb24gKGRpc3BsYXlQYXJ0KSB7IHJldHVybiBkaXNwbGF5UGFydC50ZXh0OyB9KS5qb2luKFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cbi8vI2VuZHJlZ2lvblxudmFyIEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIEFkYXB0ZXIucHJvdG90eXBlLl9wb3NpdGlvblRvT2Zmc2V0ID0gZnVuY3Rpb24gKHVyaSwgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIG1vZGVsID0gbW9uYWNvLmVkaXRvci5nZXRNb2RlbCh1cmkpO1xuICAgICAgICByZXR1cm4gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xuICAgIH07XG4gICAgQWRhcHRlci5wcm90b3R5cGUuX29mZnNldFRvUG9zaXRpb24gPSBmdW5jdGlvbiAodXJpLCBvZmZzZXQpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gbW9uYWNvLmVkaXRvci5nZXRNb2RlbCh1cmkpO1xuICAgICAgICByZXR1cm4gbW9kZWwuZ2V0UG9zaXRpb25BdChvZmZzZXQpO1xuICAgIH07XG4gICAgQWRhcHRlci5wcm90b3R5cGUuX3RleHRTcGFuVG9SYW5nZSA9IGZ1bmN0aW9uICh1cmksIHNwYW4pIHtcbiAgICAgICAgdmFyIHAxID0gdGhpcy5fb2Zmc2V0VG9Qb3NpdGlvbih1cmksIHNwYW4uc3RhcnQpO1xuICAgICAgICB2YXIgcDIgPSB0aGlzLl9vZmZzZXRUb1Bvc2l0aW9uKHVyaSwgc3Bhbi5zdGFydCArIHNwYW4ubGVuZ3RoKTtcbiAgICAgICAgdmFyIHN0YXJ0TGluZU51bWJlciA9IHAxLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uID0gcDEuY29sdW1uO1xuICAgICAgICB2YXIgZW5kTGluZU51bWJlciA9IHAyLmxpbmVOdW1iZXIsIGVuZENvbHVtbiA9IHAyLmNvbHVtbjtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRMaW5lTnVtYmVyOiBzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uOiBzdGFydENvbHVtbiwgZW5kTGluZU51bWJlcjogZW5kTGluZU51bWJlciwgZW5kQ29sdW1uOiBlbmRDb2x1bW4gfTtcbiAgICB9O1xuICAgIHJldHVybiBBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IEFkYXB0ZXIgfTtcbi8vIC0tLSBkaWFnbm9zdGljcyAtLS0gLS0tXG52YXIgRGlhZ25vc3Rjc0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpYWdub3N0Y3NBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERpYWdub3N0Y3NBZGFwdGVyKF9kZWZhdWx0cywgX3NlbGVjdG9yLCB3b3JrZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgd29ya2VyKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fZGVmYXVsdHMgPSBfZGVmYXVsdHM7XG4gICAgICAgIF90aGlzLl9zZWxlY3RvciA9IF9zZWxlY3RvcjtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzID0gW107XG4gICAgICAgIF90aGlzLl9saXN0ZW5lciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBvbk1vZGVsQWRkID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICBpZiAobW9kZWwuZ2V0TW9kZUlkKCkgIT09IF9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICB2YXIgY2hhbmdlU3Vic2NyaXB0aW9uID0gbW9kZWwub25EaWRDaGFuZ2VDb250ZW50KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9kb1ZhbGlkYXRlKG1vZGVsLnVyaSk7IH0sIDUwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lclttb2RlbC51cmkudG9TdHJpbmcoKV0gPSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuX2RvVmFsaWRhdGUobW9kZWwudXJpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uTW9kZWxSZW1vdmVkID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICBtb25hY28uZWRpdG9yLnNldE1vZGVsTWFya2Vycyhtb2RlbCwgX3RoaXMuX3NlbGVjdG9yLCBbXSk7XG4gICAgICAgICAgICB2YXIga2V5ID0gbW9kZWwudXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX2xpc3RlbmVyW2tleV0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJba2V5XS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLl9saXN0ZW5lcltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uRGlkQ3JlYXRlTW9kZWwob25Nb2RlbEFkZCkpO1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uV2lsbERpc3Bvc2VNb2RlbChvbk1vZGVsUmVtb3ZlZCkpO1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxMYW5ndWFnZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKGV2ZW50Lm1vZGVsKTtcbiAgICAgICAgICAgIG9uTW9kZWxBZGQoZXZlbnQubW9kZWwpO1xuICAgICAgICB9KSk7XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gbW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGVsID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICBvbk1vZGVsUmVtb3ZlZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goX3RoaXMuX2RlZmF1bHRzLm9uRGlkQ2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHJlZG8gZGlhZ25vc3RpY3Mgd2hlbiBvcHRpb25zIGNoYW5nZVxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWxzKCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBvbk1vZGVsQWRkKG1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBtb25hY28uZWRpdG9yLmdldE1vZGVscygpLmZvckVhY2gob25Nb2RlbEFkZCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGlhZ25vc3Rjc0FkYXB0ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgJiYgZC5kaXNwb3NlKCk7IH0pO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcyA9IFtdO1xuICAgIH07XG4gICAgRGlhZ25vc3Rjc0FkYXB0ZXIucHJvdG90eXBlLl9kb1ZhbGlkYXRlID0gZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICBpZiAoIW1vbmFjby5lZGl0b3IuZ2V0TW9kZWwocmVzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgLy8gbW9kZWwgd2FzIGRpc3Bvc2VkIGluIHRoZSBtZWFudGltZVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5fZGVmYXVsdHMuZ2V0RGlhZ25vc3RpY3NPcHRpb25zKCksIG5vU3ludGF4VmFsaWRhdGlvbiA9IF9hLm5vU3ludGF4VmFsaWRhdGlvbiwgbm9TZW1hbnRpY1ZhbGlkYXRpb24gPSBfYS5ub1NlbWFudGljVmFsaWRhdGlvbjtcbiAgICAgICAgICAgIGlmICghbm9TeW50YXhWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3b3JrZXIuZ2V0U3ludGFjdGljRGlhZ25vc3RpY3MocmVzb3VyY2UudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFub1NlbWFudGljVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god29ya2VyLmdldFNlbWFudGljRGlhZ25vc3RpY3MocmVzb3VyY2UudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2Uuam9pbihwcm9taXNlcyk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRpYWdub3N0aWNzKSB7XG4gICAgICAgICAgICBpZiAoIWRpYWdub3N0aWNzIHx8ICFtb25hY28uZWRpdG9yLmdldE1vZGVsKHJlc291cmNlKSkge1xuICAgICAgICAgICAgICAgIC8vIG1vZGVsIHdhcyBkaXNwb3NlZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXJrZXJzID0gZGlhZ25vc3RpY3NcbiAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7IHJldHVybiBjLmNvbmNhdChwKTsgfSwgW10pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gX3RoaXMuX2NvbnZlcnREaWFnbm9zdGljcyhyZXNvdXJjZSwgZCk7IH0pO1xuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9uYWNvLmVkaXRvci5nZXRNb2RlbChyZXNvdXJjZSksIF90aGlzLl9zZWxlY3RvciwgbWFya2Vycyk7XG4gICAgICAgIH0pLmRvbmUodW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGlhZ25vc3Rjc0FkYXB0ZXIucHJvdG90eXBlLl9jb252ZXJ0RGlhZ25vc3RpY3MgPSBmdW5jdGlvbiAocmVzb3VyY2UsIGRpYWcpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fb2Zmc2V0VG9Qb3NpdGlvbihyZXNvdXJjZSwgZGlhZy5zdGFydCksIHN0YXJ0TGluZU51bWJlciA9IF9hLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uID0gX2EuY29sdW1uO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLl9vZmZzZXRUb1Bvc2l0aW9uKHJlc291cmNlLCBkaWFnLnN0YXJ0ICsgZGlhZy5sZW5ndGgpLCBlbmRMaW5lTnVtYmVyID0gX2IubGluZU51bWJlciwgZW5kQ29sdW1uID0gX2IuY29sdW1uO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V2ZXJpdHk6IG1vbmFjby5NYXJrZXJTZXZlcml0eS5FcnJvcixcbiAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogc3RhcnRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgc3RhcnRDb2x1bW46IHN0YXJ0Q29sdW1uLFxuICAgICAgICAgICAgZW5kTGluZU51bWJlcjogZW5kTGluZU51bWJlcixcbiAgICAgICAgICAgIGVuZENvbHVtbjogZW5kQ29sdW1uLFxuICAgICAgICAgICAgbWVzc2FnZTogZmxhdHRlbkRpYWdub3N0aWNNZXNzYWdlVGV4dChkaWFnLm1lc3NhZ2VUZXh0LCAnXFxuJylcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBEaWFnbm9zdGNzQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgRGlhZ25vc3Rjc0FkYXB0ZXIgfTtcbnZhciBTdWdnZXN0QWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3VnZ2VzdEFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3VnZ2VzdEFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN1Z2dlc3RBZGFwdGVyLnByb3RvdHlwZSwgXCJ0cmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnLiddO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdWdnZXN0QWRhcHRlci5wcm90b3R5cGUucHJvdmlkZUNvbXBsZXRpb25JdGVtcyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHZhciB3b3JkSW5mbyA9IG1vZGVsLmdldFdvcmRVbnRpbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fcG9zaXRpb25Ub09mZnNldChyZXNvdXJjZSwgcG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gd2lyZUNhbmNlbGxhdGlvblRva2VuKHRva2VuLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5nZXRDb21wbGV0aW9uc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgb2Zmc2V0KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN1Z2dlc3Rpb25zID0gaW5mby5lbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB1cmk6IHJlc291cmNlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzb3J0VGV4dDogZW50cnkuc29ydFRleHQsXG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IFN1Z2dlc3RBZGFwdGVyLmNvbnZlcnRLaW5kKGVudHJ5LmtpbmQpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBTdWdnZXN0QWRhcHRlci5wcm90b3R5cGUucmVzb2x2ZUNvbXBsZXRpb25JdGVtID0gZnVuY3Rpb24gKGl0ZW0sIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBteUl0ZW0gPSBpdGVtO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBteUl0ZW0udXJpO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBteUl0ZW0ucG9zaXRpb247XG4gICAgICAgIHJldHVybiB3aXJlQ2FuY2VsbGF0aW9uVG9rZW4odG9rZW4sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldENvbXBsZXRpb25FbnRyeURldGFpbHMocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSwgbXlJdGVtLmxhYmVsKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGV0YWlscykge1xuICAgICAgICAgICAgaWYgKCFkZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG15SXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJpOiByZXNvdXJjZSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRldGFpbHMubmFtZSxcbiAgICAgICAgICAgICAgICBraW5kOiBTdWdnZXN0QWRhcHRlci5jb252ZXJ0S2luZChkZXRhaWxzLmtpbmQpLFxuICAgICAgICAgICAgICAgIGRldGFpbDogZGlzcGxheVBhcnRzVG9TdHJpbmcoZGV0YWlscy5kaXNwbGF5UGFydHMpLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50YXRpb246IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGRldGFpbHMuZG9jdW1lbnRhdGlvbilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIFN1Z2dlc3RBZGFwdGVyLmNvbnZlcnRLaW5kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlIEtpbmQucHJpbWl0aXZlVHlwZTpcbiAgICAgICAgICAgIGNhc2UgS2luZC5rZXl3b3JkOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5LZXl3b3JkO1xuICAgICAgICAgICAgY2FzZSBLaW5kLnZhcmlhYmxlOlxuICAgICAgICAgICAgY2FzZSBLaW5kLmxvY2FsVmFyaWFibGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlZhcmlhYmxlO1xuICAgICAgICAgICAgY2FzZSBLaW5kLm1lbWJlclZhcmlhYmxlOlxuICAgICAgICAgICAgY2FzZSBLaW5kLm1lbWJlckdldEFjY2Vzc29yOlxuICAgICAgICAgICAgY2FzZSBLaW5kLm1lbWJlclNldEFjY2Vzc29yOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5GaWVsZDtcbiAgICAgICAgICAgIGNhc2UgS2luZC5mdW5jdGlvbjpcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJGdW5jdGlvbjpcbiAgICAgICAgICAgIGNhc2UgS2luZC5jb25zdHJ1Y3RTaWduYXR1cmU6XG4gICAgICAgICAgICBjYXNlIEtpbmQuY2FsbFNpZ25hdHVyZTpcbiAgICAgICAgICAgIGNhc2UgS2luZC5pbmRleFNpZ25hdHVyZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRnVuY3Rpb247XG4gICAgICAgICAgICBjYXNlIEtpbmQuZW51bTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRW51bTtcbiAgICAgICAgICAgIGNhc2UgS2luZC5tb2R1bGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLk1vZHVsZTtcbiAgICAgICAgICAgIGNhc2UgS2luZC5jbGFzczpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuQ2xhc3M7XG4gICAgICAgICAgICBjYXNlIEtpbmQuaW50ZXJmYWNlOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5JbnRlcmZhY2U7XG4gICAgICAgICAgICBjYXNlIEtpbmQud2FybmluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRmlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuUHJvcGVydHk7XG4gICAgfTtcbiAgICByZXR1cm4gU3VnZ2VzdEFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IFN1Z2dlc3RBZGFwdGVyIH07XG52YXIgU2lnbmF0dXJlSGVscEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNpZ25hdHVyZUhlbHBBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNpZ25hdHVyZUhlbHBBZGFwdGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2lnbmF0dXJlSGVscFRyaWdnZXJDaGFyYWN0ZXJzID0gWycoJywgJywnXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTaWduYXR1cmVIZWxwQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZVNpZ25hdHVyZUhlbHAgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB3aXJlQ2FuY2VsbGF0aW9uVG9rZW4odG9rZW4sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7IHJldHVybiB3b3JrZXIuZ2V0U2lnbmF0dXJlSGVscEl0ZW1zKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbikpOyB9KS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNpZ25hdHVyZTogaW5mby5zZWxlY3RlZEl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICBhY3RpdmVQYXJhbWV0ZXI6IGluZm8uYXJndW1lbnRJbmRleCxcbiAgICAgICAgICAgICAgICBzaWduYXR1cmVzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGluZm8uaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBzaWduYXR1cmUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyczogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnByZWZpeERpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24gKHAsIGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZGlzcGxheVBhcnRzVG9TdHJpbmcocC5kaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjogZGlzcGxheVBhcnRzVG9TdHJpbmcocC5kb2N1bWVudGF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUubGFiZWwgKz0gbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnNlcGFyYXRvckRpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzaWduYXR1cmUubGFiZWwgKz0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaXRlbS5zdWZmaXhEaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgICAgIHJldC5zaWduYXR1cmVzLnB1c2goc2lnbmF0dXJlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFNpZ25hdHVyZUhlbHBBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBTaWduYXR1cmVIZWxwQWRhcHRlciB9O1xuLy8gLS0tIGhvdmVyIC0tLS0tLVxudmFyIFF1aWNrSW5mb0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFF1aWNrSW5mb0FkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUXVpY2tJbmZvQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRdWlja0luZm9BZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlSG92ZXIgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB3aXJlQ2FuY2VsbGF0aW9uVG9rZW4odG9rZW4sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldFF1aWNrSW5mb0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkb2N1bWVudGF0aW9uID0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaW5mby5kb2N1bWVudGF0aW9uKTtcbiAgICAgICAgICAgIHZhciB0YWdzID0gaW5mby50YWdzID8gaW5mby50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gXCIqQFwiICsgdGFnLm5hbWUgKyBcIipcIjtcbiAgICAgICAgICAgICAgICBpZiAoIXRhZy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsICsgKHRhZy50ZXh0Lm1hdGNoKC9cXHJcXG58XFxuL2cpID8gJyBcXG4nICsgdGFnLnRleHQgOiBcIiAtIFwiICsgdGFnLnRleHQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuam9pbignICBcXG5cXG4nKSA6ICcnO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaW5mby5kaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShyZXNvdXJjZSwgaW5mby50ZXh0U3BhbiksXG4gICAgICAgICAgICAgICAgY29udGVudHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2BgYGpzXFxuJyArIGNvbnRlbnRzICsgJ1xcbmBgYFxcbidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRvY3VtZW50YXRpb24gKyAodGFncyA/ICdcXG5cXG4nICsgdGFncyA6ICcnKVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFF1aWNrSW5mb0FkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IFF1aWNrSW5mb0FkYXB0ZXIgfTtcbi8vIC0tLSBvY2N1cnJlbmNlcyAtLS0tLS1cbnZhciBPY2N1cnJlbmNlc0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9jY3VycmVuY2VzQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPY2N1cnJlbmNlc0FkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2NjdXJyZW5jZXNBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRIaWdobGlnaHRzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gd2lyZUNhbmNlbGxhdGlvblRva2VuKHRva2VuLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5nZXRPY2N1cnJlbmNlc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShyZXNvdXJjZSwgZW50cnkudGV4dFNwYW4pLFxuICAgICAgICAgICAgICAgICAgICBraW5kOiBlbnRyeS5pc1dyaXRlQWNjZXNzID8gbW9uYWNvLmxhbmd1YWdlcy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuV3JpdGUgOiBtb25hY28ubGFuZ3VhZ2VzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5UZXh0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2NjdXJyZW5jZXNBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBPY2N1cnJlbmNlc0FkYXB0ZXIgfTtcbi8vIC0tLSBkZWZpbml0aW9uIC0tLS0tLVxudmFyIERlZmluaXRpb25BZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWZpbml0aW9uQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZWZpbml0aW9uQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEZWZpbml0aW9uQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURlZmluaXRpb24gPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB3aXJlQ2FuY2VsbGF0aW9uVG9rZW4odG9rZW4sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldERlZmluaXRpb25BdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbikpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAoIWVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGVudHJpZXNfMSA9IGVudHJpZXM7IF9pIDwgZW50cmllc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IGVudHJpZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIHVyaSA9IFVyaS5wYXJzZShlbnRyeS5maWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodXJpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IHVyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBfdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHVyaSwgZW50cnkudGV4dFNwYW4pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWZpbml0aW9uQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgRGVmaW5pdGlvbkFkYXB0ZXIgfTtcbi8vIC0tLSByZWZlcmVuY2VzIC0tLS0tLVxudmFyIFJlZmVyZW5jZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlZmVyZW5jZUFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVmZXJlbmNlQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBSZWZlcmVuY2VBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlUmVmZXJlbmNlcyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIGNvbnRleHQsIHRva2VuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHdpcmVDYW5jZWxsYXRpb25Ub2tlbih0b2tlbiwgdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXIuZ2V0UmVmZXJlbmNlc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHBvc2l0aW9uKSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZW50cmllc18yID0gZW50cmllczsgX2kgPCBlbnRyaWVzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gZW50cmllc18yW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgdXJpID0gVXJpLnBhcnNlKGVudHJ5LmZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobW9uYWNvLmVkaXRvci5nZXRNb2RlbCh1cmkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogdXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UodXJpLCBlbnRyeS50ZXh0U3BhbilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlZmVyZW5jZUFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IFJlZmVyZW5jZUFkYXB0ZXIgfTtcbi8vIC0tLSBvdXRsaW5lIC0tLS0tLVxudmFyIE91dGxpbmVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPdXRsaW5lQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPdXRsaW5lQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPdXRsaW5lQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50U3ltYm9scyA9IGZ1bmN0aW9uIChtb2RlbCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gd2lyZUNhbmNlbGxhdGlvblRva2VuKHRva2VuLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLmdldE5hdmlnYXRpb25CYXJJdGVtcyhyZXNvdXJjZS50b1N0cmluZygpKTsgfSkudGhlbihmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29udmVydCA9IGZ1bmN0aW9uIChidWNrZXQsIGl0ZW0sIGNvbnRhaW5lckxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBraW5kOiAob3V0bGluZVR5cGVUYWJsZVtpdGVtLmtpbmRdIHx8IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBfdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHJlc291cmNlLCBpdGVtLnNwYW5zWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uUmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UocmVzb3VyY2UsIGl0ZW0uc3BhbnNbMF0pLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOYW1lOiBjb250YWluZXJMYWJlbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRJdGVtcyAmJiBpdGVtLmNoaWxkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gaXRlbS5jaGlsZEl0ZW1zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydChidWNrZXQsIGNoaWxkLCByZXN1bHQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnVja2V0LnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBjb252ZXJ0KHJlc3VsdCwgaXRlbSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIE91dGxpbmVBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBPdXRsaW5lQWRhcHRlciB9O1xudmFyIEtpbmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2luZCgpIHtcbiAgICB9XG4gICAgS2luZC51bmtub3duID0gJyc7XG4gICAgS2luZC5rZXl3b3JkID0gJ2tleXdvcmQnO1xuICAgIEtpbmQuc2NyaXB0ID0gJ3NjcmlwdCc7XG4gICAgS2luZC5tb2R1bGUgPSAnbW9kdWxlJztcbiAgICBLaW5kLmNsYXNzID0gJ2NsYXNzJztcbiAgICBLaW5kLmludGVyZmFjZSA9ICdpbnRlcmZhY2UnO1xuICAgIEtpbmQudHlwZSA9ICd0eXBlJztcbiAgICBLaW5kLmVudW0gPSAnZW51bSc7XG4gICAgS2luZC52YXJpYWJsZSA9ICd2YXInO1xuICAgIEtpbmQubG9jYWxWYXJpYWJsZSA9ICdsb2NhbCB2YXInO1xuICAgIEtpbmQuZnVuY3Rpb24gPSAnZnVuY3Rpb24nO1xuICAgIEtpbmQubG9jYWxGdW5jdGlvbiA9ICdsb2NhbCBmdW5jdGlvbic7XG4gICAgS2luZC5tZW1iZXJGdW5jdGlvbiA9ICdtZXRob2QnO1xuICAgIEtpbmQubWVtYmVyR2V0QWNjZXNzb3IgPSAnZ2V0dGVyJztcbiAgICBLaW5kLm1lbWJlclNldEFjY2Vzc29yID0gJ3NldHRlcic7XG4gICAgS2luZC5tZW1iZXJWYXJpYWJsZSA9ICdwcm9wZXJ0eSc7XG4gICAgS2luZC5jb25zdHJ1Y3RvckltcGxlbWVudGF0aW9uID0gJ2NvbnN0cnVjdG9yJztcbiAgICBLaW5kLmNhbGxTaWduYXR1cmUgPSAnY2FsbCc7XG4gICAgS2luZC5pbmRleFNpZ25hdHVyZSA9ICdpbmRleCc7XG4gICAgS2luZC5jb25zdHJ1Y3RTaWduYXR1cmUgPSAnY29uc3RydWN0JztcbiAgICBLaW5kLnBhcmFtZXRlciA9ICdwYXJhbWV0ZXInO1xuICAgIEtpbmQudHlwZVBhcmFtZXRlciA9ICd0eXBlIHBhcmFtZXRlcic7XG4gICAgS2luZC5wcmltaXRpdmVUeXBlID0gJ3ByaW1pdGl2ZSB0eXBlJztcbiAgICBLaW5kLmxhYmVsID0gJ2xhYmVsJztcbiAgICBLaW5kLmFsaWFzID0gJ2FsaWFzJztcbiAgICBLaW5kLmNvbnN0ID0gJ2NvbnN0JztcbiAgICBLaW5kLmxldCA9ICdsZXQnO1xuICAgIEtpbmQud2FybmluZyA9ICd3YXJuaW5nJztcbiAgICByZXR1cm4gS2luZDtcbn0oKSk7XG5leHBvcnQgeyBLaW5kIH07XG52YXIgb3V0bGluZVR5cGVUYWJsZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubW9kdWxlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5Nb2R1bGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQuY2xhc3NdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLkNsYXNzO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmVudW1dID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLkVudW07XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQuaW50ZXJmYWNlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5JbnRlcmZhY2U7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubWVtYmVyRnVuY3Rpb25dID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLk1ldGhvZDtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJWYXJpYWJsZV0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuUHJvcGVydHk7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubWVtYmVyR2V0QWNjZXNzb3JdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLlByb3BlcnR5O1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1lbWJlclNldEFjY2Vzc29yXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5Qcm9wZXJ0eTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC52YXJpYWJsZV0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQuY29uc3RdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmxvY2FsVmFyaWFibGVdID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLnZhcmlhYmxlXSA9IG1vbmFjby5sYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5mdW5jdGlvbl0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuRnVuY3Rpb247XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubG9jYWxGdW5jdGlvbl0gPSBtb25hY28ubGFuZ3VhZ2VzLlN5bWJvbEtpbmQuRnVuY3Rpb247XG4vLyAtLS0gZm9ybWF0dGluZyAtLS0tXG52YXIgRm9ybWF0SGVscGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtYXRIZWxwZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybWF0SGVscGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgQ29udmVydFRhYnNUb1NwYWNlczogb3B0aW9ucy5pbnNlcnRTcGFjZXMsXG4gICAgICAgICAgICBUYWJTaXplOiBvcHRpb25zLnRhYlNpemUsXG4gICAgICAgICAgICBJbmRlbnRTaXplOiBvcHRpb25zLnRhYlNpemUsXG4gICAgICAgICAgICBJbmRlbnRTdHlsZTogSW5kZW50U3R5bGUuU21hcnQsXG4gICAgICAgICAgICBOZXdMaW5lQ2hhcmFjdGVyOiAnXFxuJyxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJDb21tYURlbGltaXRlcjogdHJ1ZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJTZW1pY29sb25JbkZvclN0YXRlbWVudHM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUJlZm9yZUFuZEFmdGVyQmluYXJ5T3BlcmF0b3JzOiB0cnVlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlcktleXdvcmRzSW5Db250cm9sRmxvd1N0YXRlbWVudHM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyRnVuY3Rpb25LZXl3b3JkRm9yQW5vbnltb3VzRnVuY3Rpb25zOiB0cnVlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlck9wZW5pbmdBbmRCZWZvcmVDbG9zaW5nTm9uZW1wdHlQYXJlbnRoZXNpczogZmFsc2UsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyT3BlbmluZ0FuZEJlZm9yZUNsb3NpbmdOb25lbXB0eUJyYWNrZXRzOiBmYWxzZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJPcGVuaW5nQW5kQmVmb3JlQ2xvc2luZ1RlbXBsYXRlU3RyaW5nQnJhY2VzOiBmYWxzZSxcbiAgICAgICAgICAgIFBsYWNlT3BlbkJyYWNlT25OZXdMaW5lRm9yQ29udHJvbEJsb2NrczogZmFsc2UsXG4gICAgICAgICAgICBQbGFjZU9wZW5CcmFjZU9uTmV3TGluZUZvckZ1bmN0aW9uczogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEZvcm1hdEhlbHBlci5wcm90b3R5cGUuX2NvbnZlcnRUZXh0Q2hhbmdlcyA9IGZ1bmN0aW9uICh1cmksIGNoYW5nZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogY2hhbmdlLm5ld1RleHQsXG4gICAgICAgICAgICByYW5nZTogdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHVyaSwgY2hhbmdlLnNwYW4pXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybWF0SGVscGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBGb3JtYXRIZWxwZXIgfTtcbnZhciBGb3JtYXRBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtYXRBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcm1hdEFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRm9ybWF0QWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdHMgPSBmdW5jdGlvbiAobW9kZWwsIHJhbmdlLCBvcHRpb25zLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB3aXJlQ2FuY2VsbGF0aW9uVG9rZW4odG9rZW4sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldEZvcm1hdHRpbmdFZGl0c0ZvclJhbmdlKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCB7IGxpbmVOdW1iZXI6IHJhbmdlLnN0YXJ0TGluZU51bWJlciwgY29sdW1uOiByYW5nZS5zdGFydENvbHVtbiB9KSwgX3RoaXMuX3Bvc2l0aW9uVG9PZmZzZXQocmVzb3VyY2UsIHsgbGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlciwgY29sdW1uOiByYW5nZS5lbmRDb2x1bW4gfSksIEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMob3B0aW9ucykpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChlZGl0cykge1xuICAgICAgICAgICAgaWYgKGVkaXRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRzLm1hcChmdW5jdGlvbiAoZWRpdCkgeyByZXR1cm4gX3RoaXMuX2NvbnZlcnRUZXh0Q2hhbmdlcyhyZXNvdXJjZSwgZWRpdCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybWF0QWRhcHRlcjtcbn0oRm9ybWF0SGVscGVyKSk7XG5leHBvcnQgeyBGb3JtYXRBZGFwdGVyIH07XG52YXIgRm9ybWF0T25UeXBlQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRm9ybWF0T25UeXBlQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtYXRPblR5cGVBZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtYXRPblR5cGVBZGFwdGVyLnByb3RvdHlwZSwgXCJhdXRvRm9ybWF0VHJpZ2dlckNoYXJhY3RlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbJzsnLCAnfScsICdcXG4nXTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRm9ybWF0T25UeXBlQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZU9uVHlwZUZvcm1hdHRpbmdFZGl0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIGNoLCBvcHRpb25zLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB3aXJlQ2FuY2VsbGF0aW9uVG9rZW4odG9rZW4sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmdldEZvcm1hdHRpbmdFZGl0c0FmdGVyS2V5c3Ryb2tlKHJlc291cmNlLnRvU3RyaW5nKCksIF90aGlzLl9wb3NpdGlvblRvT2Zmc2V0KHJlc291cmNlLCBwb3NpdGlvbiksIGNoLCBGb3JtYXRIZWxwZXIuX2NvbnZlcnRPcHRpb25zKG9wdGlvbnMpKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZWRpdHMpIHtcbiAgICAgICAgICAgIGlmIChlZGl0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0cy5tYXAoZnVuY3Rpb24gKGVkaXQpIHsgcmV0dXJuIF90aGlzLl9jb252ZXJ0VGV4dENoYW5nZXMocmVzb3VyY2UsIGVkaXQpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvcm1hdE9uVHlwZUFkYXB0ZXI7XG59KEZvcm1hdEhlbHBlcikpO1xuZXhwb3J0IHsgRm9ybWF0T25UeXBlQWRhcHRlciB9O1xuLyoqXG4gKiBIb29rIGEgY2FuY2VsbGF0aW9uIHRva2VuIHRvIGEgV2luSlMgUHJvbWlzZVxuICovXG5mdW5jdGlvbiB3aXJlQ2FuY2VsbGF0aW9uVG9rZW4odG9rZW4sIHByb21pc2UpIHtcbiAgICB0b2tlbi5vbkNhbmNlbGxhdGlvblJlcXVlc3RlZChmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9taXNlLmNhbmNlbCgpOyB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgV29ya2VyTWFuYWdlciB9IGZyb20gJy4vd29ya2VyTWFuYWdlci5qcyc7XG5pbXBvcnQgKiBhcyBsYW5ndWFnZUZlYXR1cmVzIGZyb20gJy4vbGFuZ3VhZ2VGZWF0dXJlcy5qcyc7XG52YXIgamF2YVNjcmlwdFdvcmtlcjtcbnZhciB0eXBlU2NyaXB0V29ya2VyO1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwVHlwZVNjcmlwdChkZWZhdWx0cykge1xuICAgIHR5cGVTY3JpcHRXb3JrZXIgPSBzZXR1cE1vZGUoZGVmYXVsdHMsICd0eXBlc2NyaXB0Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBKYXZhU2NyaXB0KGRlZmF1bHRzKSB7XG4gICAgamF2YVNjcmlwdFdvcmtlciA9IHNldHVwTW9kZShkZWZhdWx0cywgJ2phdmFzY3JpcHQnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRKYXZhU2NyaXB0V29ya2VyKCkge1xuICAgIHJldHVybiBuZXcgbW9uYWNvLlByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIWphdmFTY3JpcHRXb3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXCJKYXZhU2NyaXB0IG5vdCByZWdpc3RlcmVkIVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGphdmFTY3JpcHRXb3JrZXIpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVTY3JpcHRXb3JrZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBtb25hY28uUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICghdHlwZVNjcmlwdFdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcIlR5cGVTY3JpcHQgbm90IHJlZ2lzdGVyZWQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUodHlwZVNjcmlwdFdvcmtlcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXR1cE1vZGUoZGVmYXVsdHMsIG1vZGVJZCkge1xuICAgIHZhciBjbGllbnQgPSBuZXcgV29ya2VyTWFuYWdlcihtb2RlSWQsIGRlZmF1bHRzKTtcbiAgICB2YXIgd29ya2VyID0gZnVuY3Rpb24gKGZpcnN0KSB7XG4gICAgICAgIHZhciBtb3JlID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBtb3JlW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0TGFuZ3VhZ2VTZXJ2aWNlV29ya2VyLmFwcGx5KGNsaWVudCwgW2ZpcnN0XS5jb25jYXQobW9yZSkpO1xuICAgIH07XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5TdWdnZXN0QWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyU2lnbmF0dXJlSGVscFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuU2lnbmF0dXJlSGVscEFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckhvdmVyUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5RdWlja0luZm9BZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudEhpZ2hsaWdodFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuT2NjdXJyZW5jZXNBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEZWZpbml0aW9uUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5EZWZpbml0aW9uQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyUmVmZXJlbmNlUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5SZWZlcmVuY2VBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudFN5bWJvbFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuT3V0bGluZUFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckRvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRm9ybWF0QWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyT25UeXBlRm9ybWF0dGluZ0VkaXRQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkZvcm1hdE9uVHlwZUFkYXB0ZXIod29ya2VyKSk7XG4gICAgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRGlhZ25vc3Rjc0FkYXB0ZXIoZGVmYXVsdHMsIG1vZGVJZCwgd29ya2VyKTtcbiAgICByZXR1cm4gd29ya2VyO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgUHJvbWlzZSA9IG1vbmFjby5Qcm9taXNlO1xudmFyIFdvcmtlck1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29ya2VyTWFuYWdlcihtb2RlSWQsIGRlZmF1bHRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX21vZGVJZCA9IG1vZGVJZDtcbiAgICAgICAgdGhpcy5fZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICAgICAgdGhpcy5fd29ya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5faWRsZUNoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY2hlY2tJZklkbGUoKTsgfSwgMzAgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5fbGFzdFVzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIgPSB0aGlzLl9kZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fc3RvcFdvcmtlcigpOyB9KTtcbiAgICB9XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX3N0b3BXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2lkbGVDaGVja0ludGVydmFsKTtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5fY2hlY2tJZklkbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heElkbGVUaW1lID0gdGhpcy5fZGVmYXVsdHMuZ2V0V29ya2VyTWF4SWRsZVRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWVQYXNzZWRTaW5jZUxhc3RVc2VkID0gRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RVc2VkVGltZTtcbiAgICAgICAgaWYgKG1heElkbGVUaW1lID4gMCAmJiB0aW1lUGFzc2VkU2luY2VMYXN0VXNlZCA+IG1heElkbGVUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wV29ya2VyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9nZXRDbGllbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2xhc3RVc2VkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghdGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBtb25hY28uZWRpdG9yLmNyZWF0ZVdlYldvcmtlcih7XG4gICAgICAgICAgICAgICAgLy8gbW9kdWxlIHRoYXQgZXhwb3J0cyB0aGUgY3JlYXRlKCkgbWV0aG9kIGFuZCByZXR1cm5zIGEgYFR5cGVTY3JpcHRXb3JrZXJgIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6ICd2cy9sYW5ndWFnZS90eXBlc2NyaXB0L3RzV29ya2VyJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5fbW9kZUlkLFxuICAgICAgICAgICAgICAgIC8vIHBhc3NlZCBpbiB0byB0aGUgY3JlYXRlKCkgbWV0aG9kXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHRoaXMuX2RlZmF1bHRzLmdldENvbXBpbGVyT3B0aW9ucygpLFxuICAgICAgICAgICAgICAgICAgICBleHRyYUxpYnM6IHRoaXMuX2RlZmF1bHRzLmdldEV4dHJhTGlicygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuX3dvcmtlci5nZXRQcm94eSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRzLmdldEVhZ2VyTW9kZWxTeW5jKCkpIHtcbiAgICAgICAgICAgICAgICBwID0gcC50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl93b3JrZXIud2l0aFN5bmNlZFJlc291cmNlcyhtb25hY28uZWRpdG9yLmdldE1vZGVscygpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtb2RlbCkgeyByZXR1cm4gbW9kZWwuZ2V0TW9kZUlkKCkgPT09IF90aGlzLl9tb2RlSWQ7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtb2RlbCkgeyByZXR1cm4gbW9kZWwudXJpOyB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSBwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYW5ndWFnZVNlcnZpY2VXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHJlc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfY2xpZW50O1xuICAgICAgICByZXR1cm4gdG9TaGFsbG93Q2FuY2VsUHJvbWlzZSh0aGlzLl9nZXRDbGllbnQoKS50aGVuKGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgIF9jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fd29ya2VyLndpdGhTeW5jZWRSZXNvdXJjZXMocmVzb3VyY2VzKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoXykgeyByZXR1cm4gX2NsaWVudDsgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFdvcmtlck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgV29ya2VyTWFuYWdlciB9O1xuZnVuY3Rpb24gdG9TaGFsbG93Q2FuY2VsUHJvbWlzZShwKSB7XG4gICAgdmFyIGNvbXBsZXRlQ2FsbGJhY2s7XG4gICAgdmFyIGVycm9yQ2FsbGJhY2s7XG4gICAgdmFyIHIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYywgZSkge1xuICAgICAgICBjb21wbGV0ZUNhbGxiYWNrID0gYztcbiAgICAgICAgZXJyb3JDYWxsYmFjayA9IGU7XG4gICAgfSwgZnVuY3Rpb24gKCkgeyB9KTtcbiAgICBwLnRoZW4oY29tcGxldGVDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgcmV0dXJuIHI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9