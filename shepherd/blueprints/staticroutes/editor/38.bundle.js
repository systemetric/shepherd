(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.js ***!
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

var conf = {
    comments: {
        lineComment: '--',
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
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.sql',
    ignoreCase: true,
    brackets: [
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    keywords: [
        "AES128", "AES256", "ALL", "ALLOWOVERWRITE", "ANALYSE", "ANALYZE", "AND", "ANY", "ARRAY", "AS", "ASC", "AUTHORIZATION",
        "BACKUP", "BETWEEN", "BINARY", "BLANKSASNULL", "BOTH", "BYTEDICT", "BZIP2", "CASE", "CAST", "CHECK", "COLLATE", "COLUMN",
        "CONSTRAINT", "CREATE", "CREDENTIALS", "CROSS", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "CURRENT_USER",
        "CURRENT_USER_ID", "DEFAULT", "DEFERRABLE", "DEFLATE", "DEFRAG", "DELTA", "DELTA32K", "DESC", "DISABLE", "DISTINCT", "DO",
        "ELSE", "EMPTYASNULL", "ENABLE", "ENCODE", "ENCRYPT", "ENCRYPTION", "END", "EXCEPT", "EXPLICIT", "FALSE", "FOR", "FOREIGN",
        "FREEZE", "FROM", "FULL", "GLOBALDICT256", "GLOBALDICT64K", "GRANT", "GROUP", "GZIP", "HAVING", "IDENTITY", "IGNORE", "ILIKE",
        "IN", "INITIALLY", "INNER", "INTERSECT", "INTO", "IS", "ISNULL", "JOIN", "LEADING", "LEFT", "LIKE", "LIMIT", "LOCALTIME",
        "LOCALTIMESTAMP", "LUN", "LUNS", "LZO", "LZOP", "MINUS", "MOSTLY13", "MOSTLY32", "MOSTLY8", "NATURAL", "NEW", "NOT", "NOTNULL",
        "NULL", "NULLS", "OFF", "OFFLINE", "OFFSET", "OID", "OLD", "ON", "ONLY", "OPEN", "OR", "ORDER", "OUTER", "OVERLAPS", "PARALLEL",
        "PARTITION", "PERCENT", "PERMISSIONS", "PLACING", "PRIMARY", "RAW", "READRATIO", "RECOVER", "REFERENCES", "RESPECT", "REJECTLOG",
        "RESORT", "RESTORE", "RIGHT", "SELECT", "SESSION_USER", "SIMILAR", "SNAPSHOT", "SOME", "SYSDATE", "SYSTEM", "TABLE", "TAG",
        "TDES", "TEXT255", "TEXT32K", "THEN", "TIMESTAMP", "TO", "TOP", "TRAILING", "TRUE", "TRUNCATECOLUMNS", "UNION", "UNIQUE", "USER",
        "USING", "VERBOSE", "WALLET", "WHEN", "WHERE", "WITH", "WITHOUT"
    ],
    operators: [
        "AND", "BETWEEN", "IN", "LIKE", "NOT", "OR", "IS", "NULL", "INTERSECT", "UNION", "INNER", "JOIN", "LEFT", "OUTER", "RIGHT"
    ],
    builtinFunctions: [
        "current_schema", "current_schemas", "has_database_privilege", "has_schema_privilege", "has_table_privilege", "age",
        "current_time", "current_timestamp", "localtime", "isfinite", "now", "ascii", "get_bit", "get_byte", "set_bit", "set_byte",
        "to_ascii", "approximate percentile_disc", "avg", "count", "listagg", "max", "median", "min", "percentile_cont", "stddev_samp",
        "stddev_pop", "sum", "var_samp", "var_pop", "bit_and", "bit_or", "bool_and", "bool_or", "cume_dist", "first_value", "lag",
        "last_value", "lead", "nth_value", "ratio_to_report", "dense_rank", "ntile", "percent_rank", "rank", "row_number", "case",
        "coalesce", "decode", "greatest", "least", "nvl", "nvl2", "nullif", "add_months", "at time zone", "convert_timezone",
        "current_date", "date_cmp", "date_cmp_timestamp", "date_cmp_timestamptz", "date_part_year", "dateadd", "datediff",
        "date_part", "date_trunc", "extract", "getdate", "interval_cmp", "last_day", "months_between", "next_day", "sysdate",
        "timeofday", "timestamp_cmp", "timestamp_cmp_date", "timestamp_cmp_timestamptz", "timestamptz_cmp", "timestamptz_cmp_date",
        "timestamptz_cmp_timestamp", "timezone", "to_timestamp", "trunc", "abs", "acos", "asin", "atan", "atan2", "cbrt", "ceil",
        "ceiling", "checksum", "cos", "cot", "degrees", "dexp", "dlog1", "dlog10", "exp", "floor", "ln", "log", "mod", "pi", "power",
        "radians", "random", "round", "sin", "sign", "sqrt", "tan", "to_hex", "bpcharcmp", "btrim", "bttext_pattern_cmp", "char_length",
        "character_length", "charindex", "chr", "concat", "crc32", "func_sha1", "initcap", "left and rights", "len", "length", "lower",
        "lpad and rpads", "ltrim", "md5", "octet_length", "position", "quote_ident", "quote_literal", "regexp_count", "regexp_instr",
        "regexp_replace", "regexp_substr", "repeat", "replace", "replicate", "reverse", "rtrim", "split_part", "strpos", "strtol",
        "substring", "textlen", "translate", "trim", "upper", "cast", "convert", "to_char", "to_date", "to_number", "json_array_length",
        "json_extract_array_element_text", "json_extract_path_text", "current_setting", "pg_cancel_backend", "pg_terminate_backend",
        "set_config", "current_database", "current_user", "current_user_id", "pg_backend_pid", "pg_last_copy_count", "pg_last_copy_id",
        "pg_last_query_id", "pg_last_unload_count", "session_user", "slice_num", "user", "version", "abbrev", "acosd", "any", "area",
        "array_agg", "array_append", "array_cat", "array_dims", "array_fill", "array_length", "array_lower", "array_ndims",
        "array_position", "array_positions", "array_prepend", "array_remove", "array_replace", "array_to_json", "array_to_string",
        "array_to_tsvector", "array_upper", "asind", "atan2d", "atand", "bit", "bit_length", "bound_box", "box",
        "brin_summarize_new_values", "broadcast", "cardinality", "center", "circle", "clock_timestamp", "col_description", "concat_ws",
        "convert_from", "convert_to", "corr", "cosd", "cotd", "covar_pop", "covar_samp", "current_catalog", "current_query",
        "current_role", "currval", "cursor_to_xml", "diameter", "div", "encode", "enum_first", "enum_last", "enum_range", "every",
        "family", "format", "format_type", "generate_series", "generate_subscripts", "get_current_ts_config", "gin_clean_pending_list",
        "grouping", "has_any_column_privilege", "has_column_privilege", "has_foreign_data_wrapper_privilege", "has_function_privilege",
        "has_language_privilege", "has_sequence_privilege", "has_server_privilege", "has_tablespace_privilege", "has_type_privilege",
        "height", "host", "hostmask", "inet_client_addr", "inet_client_port", "inet_merge", "inet_same_family", "inet_server_addr",
        "inet_server_port", "isclosed", "isempty", "isopen", "json_agg", "json_object", "json_object_agg", "json_populate_record",
        "json_populate_recordset", "json_to_record", "json_to_recordset", "jsonb_agg", "jsonb_object_agg", "justify_days", "justify_hours",
        "justify_interval", "lastval", "left", "line", "localtimestamp", "lower_inc", "lower_inf", "lpad", "lseg", "make_date",
        "make_interval", "make_time", "make_timestamp", "make_timestamptz", "masklen", "mode", "netmask", "network", "nextval", "npoints",
        "num_nonnulls", "num_nulls", "numnode", "obj_description", "overlay", "parse_ident", "path", "pclose", "percentile_disc",
        "pg_advisory_lock", "pg_advisory_lock_shared", "pg_advisory_unlock", "pg_advisory_unlock_all", "pg_advisory_unlock_shared",
        "pg_advisory_xact_lock", "pg_advisory_xact_lock_shared", "pg_backup_start_time", "pg_blocking_pids", "pg_client_encoding",
        "pg_collation_is_visible", "pg_column_size", "pg_conf_load_time", "pg_control_checkpoint", "pg_control_init", "pg_control_recovery",
        "pg_control_system", "pg_conversion_is_visible", "pg_create_logical_replication_slot", "pg_create_physical_replication_slot",
        "pg_create_restore_point", "pg_current_xlog_flush_location", "pg_current_xlog_insert_location", "pg_current_xlog_location",
        "pg_database_size", "pg_describe_object", "pg_drop_replication_slot", "pg_export_snapshot", "pg_filenode_relation",
        "pg_function_is_visible", "pg_get_constraintdef", "pg_get_expr", "pg_get_function_arguments", "pg_get_function_identity_arguments",
        "pg_get_function_result", "pg_get_functiondef", "pg_get_indexdef", "pg_get_keywords", "pg_get_object_address",
        "pg_get_owned_sequence", "pg_get_ruledef", "pg_get_serial_sequence", "pg_get_triggerdef", "pg_get_userbyid", "pg_get_viewdef",
        "pg_has_role", "pg_identify_object", "pg_identify_object_as_address", "pg_index_column_has_property", "pg_index_has_property",
        "pg_indexam_has_property", "pg_indexes_size", "pg_is_in_backup", "pg_is_in_recovery", "pg_is_other_temp_schema",
        "pg_is_xlog_replay_paused", "pg_last_committed_xact", "pg_last_xact_replay_timestamp", "pg_last_xlog_receive_location",
        "pg_last_xlog_replay_location", "pg_listening_channels", "pg_logical_emit_message", "pg_logical_slot_get_binary_changes",
        "pg_logical_slot_get_changes", "pg_logical_slot_peek_binary_changes", "pg_logical_slot_peek_changes", "pg_ls_dir",
        "pg_my_temp_schema", "pg_notification_queue_usage", "pg_opclass_is_visible", "pg_operator_is_visible", "pg_opfamily_is_visible",
        "pg_options_to_table", "pg_postmaster_start_time", "pg_read_binary_file", "pg_read_file", "pg_relation_filenode",
        "pg_relation_filepath", "pg_relation_size", "pg_reload_conf", "pg_replication_origin_create", "pg_replication_origin_drop",
        "pg_replication_origin_oid", "pg_replication_origin_progress", "pg_replication_origin_session_is_setup",
        "pg_replication_origin_session_progress", "pg_replication_origin_session_reset", "pg_replication_origin_session_setup",
        "pg_replication_origin_xact_reset", "pg_replication_origin_xact_setup", "pg_rotate_logfile", "pg_size_bytes", "pg_size_pretty",
        "pg_sleep", "pg_sleep_for", "pg_sleep_until", "pg_start_backup", "pg_stat_file", "pg_stop_backup", "pg_switch_xlog",
        "pg_table_is_visible", "pg_table_size", "pg_tablespace_databases", "pg_tablespace_location", "pg_tablespace_size",
        "pg_total_relation_size", "pg_trigger_depth", "pg_try_advisory_lock", "pg_try_advisory_lock_shared", "pg_try_advisory_xact_lock",
        "pg_try_advisory_xact_lock_shared", "pg_ts_config_is_visible", "pg_ts_dict_is_visible", "pg_ts_parser_is_visible",
        "pg_ts_template_is_visible", "pg_type_is_visible", "pg_typeof", "pg_xact_commit_timestamp", "pg_xlog_location_diff",
        "pg_xlog_replay_pause", "pg_xlog_replay_resume", "pg_xlogfile_name", "pg_xlogfile_name_offset", "phraseto_tsquery",
        "plainto_tsquery", "point", "polygon", "popen", "pqserverversion", "query_to_xml", "querytree", "quote_nullable", "radius",
        "range_merge", "regexp_matches", "regexp_split_to_array", "regexp_split_to_table", "regr_avgx", "regr_avgy", "regr_count",
        "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "right", "row_security_active", "row_to_json",
        "rpad", "scale", "set_masklen", "setseed", "setval", "setweight", "shobj_description", "sind", "sprintf", "statement_timestamp",
        "stddev", "string_agg", "string_to_array", "strip", "substr", "table_to_xml", "table_to_xml_and_xmlschema", "tand", "text",
        "to_json", "to_regclass", "to_regnamespace", "to_regoper", "to_regoperator", "to_regproc", "to_regprocedure", "to_regrole",
        "to_regtype", "to_tsquery", "to_tsvector", "transaction_timestamp", "ts_debug", "ts_delete", "ts_filter", "ts_headline",
        "ts_lexize", "ts_parse", "ts_rank", "ts_rank_cd", "ts_rewrite", "ts_stat", "ts_token_type", "tsquery_phrase", "tsvector_to_array",
        "tsvector_update_trigger", "tsvector_update_trigger_column", "txid_current", "txid_current_snapshot", "txid_snapshot_xip",
        "txid_snapshot_xmax", "txid_snapshot_xmin", "txid_visible_in_snapshot", "unnest", "upper_inc", "upper_inf", "variance", "width",
        "width_bucket", "xml_is_well_formed", "xml_is_well_formed_content", "xml_is_well_formed_document", "xmlagg", "xmlcomment",
        "xmlconcat", "xmlelement", "xmlexists", "xmlforest", "xmlparse", "xmlpi", "xmlroot", "xmlserialize", "xpath", "xpath_exists"
    ],
    builtinVariables: [
    // NOT SUPPORTED
    ],
    pseudoColumns: [
    // NOT SUPPORTED
    ],
    tokenizer: {
        root: [
            { include: '@comments' },
            { include: '@whitespace' },
            { include: '@pseudoColumns' },
            { include: '@numbers' },
            { include: '@strings' },
            { include: '@complexIdentifiers' },
            { include: '@scopes' },
            [/[;,.]/, 'delimiter'],
            [/[()]/, '@brackets'],
            [/[\w@#$]+/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@operators': 'operator',
                        '@builtinVariables': 'predefined',
                        '@builtinFunctions': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            [/[<>=!%&+\-*/|~^]/, 'operator'],
        ],
        whitespace: [
            [/\s+/, 'white']
        ],
        comments: [
            [/--+.*/, 'comment'],
            [/\/\*/, { token: 'comment.quote', next: '@comment' }]
        ],
        comment: [
            [/[^*/]+/, 'comment'],
            // Not supporting nested comments, as nested comments seem to not be standard?
            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic
            // [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
            [/\*\//, { token: 'comment.quote', next: '@pop' }],
            [/./, 'comment']
        ],
        pseudoColumns: [
            [/[$][A-Za-z_][\w@#$]*/, {
                    cases: {
                        '@pseudoColumns': 'predefined',
                        '@default': 'identifier'
                    }
                }],
        ],
        numbers: [
            [/0[xX][0-9a-fA-F]*/, 'number'],
            [/[$][+-]*\d*(\.\d*)?/, 'number'],
            [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']
        ],
        strings: [
            [/'/, { token: 'string', next: '@string' }],
        ],
        string: [
            [/[^']+/, 'string'],
            [/''/, 'string'],
            [/'/, { token: 'string', next: '@pop' }]
        ],
        complexIdentifiers: [
            [/"/, { token: 'identifier.quote', next: '@quotedIdentifier' }]
        ],
        quotedIdentifier: [
            [/[^"]+/, 'identifier'],
            [/""/, 'identifier'],
            [/"/, { token: 'identifier.quote', next: '@pop' }]
        ],
        scopes: [
        // NOT SUPPORTED
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3JlZHNoaWZ0L3JlZHNoaWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLDRCQUE0QjtBQUN6QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLGlDQUFpQztBQUM5QyxhQUFhLHFCQUFxQjtBQUNsQyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJDQUEyQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRSxzQkFBc0IsdUNBQXVDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsbUJBQW1CLHVEQUF1RDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjM4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLS0nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5zcWwnLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICBcIkFFUzEyOFwiLCBcIkFFUzI1NlwiLCBcIkFMTFwiLCBcIkFMTE9XT1ZFUldSSVRFXCIsIFwiQU5BTFlTRVwiLCBcIkFOQUxZWkVcIiwgXCJBTkRcIiwgXCJBTllcIiwgXCJBUlJBWVwiLCBcIkFTXCIsIFwiQVNDXCIsIFwiQVVUSE9SSVpBVElPTlwiLFxuICAgICAgICBcIkJBQ0tVUFwiLCBcIkJFVFdFRU5cIiwgXCJCSU5BUllcIiwgXCJCTEFOS1NBU05VTExcIiwgXCJCT1RIXCIsIFwiQllURURJQ1RcIiwgXCJCWklQMlwiLCBcIkNBU0VcIiwgXCJDQVNUXCIsIFwiQ0hFQ0tcIiwgXCJDT0xMQVRFXCIsIFwiQ09MVU1OXCIsXG4gICAgICAgIFwiQ09OU1RSQUlOVFwiLCBcIkNSRUFURVwiLCBcIkNSRURFTlRJQUxTXCIsIFwiQ1JPU1NcIiwgXCJDVVJSRU5UX0RBVEVcIiwgXCJDVVJSRU5UX1RJTUVcIiwgXCJDVVJSRU5UX1RJTUVTVEFNUFwiLCBcIkNVUlJFTlRfVVNFUlwiLFxuICAgICAgICBcIkNVUlJFTlRfVVNFUl9JRFwiLCBcIkRFRkFVTFRcIiwgXCJERUZFUlJBQkxFXCIsIFwiREVGTEFURVwiLCBcIkRFRlJBR1wiLCBcIkRFTFRBXCIsIFwiREVMVEEzMktcIiwgXCJERVNDXCIsIFwiRElTQUJMRVwiLCBcIkRJU1RJTkNUXCIsIFwiRE9cIixcbiAgICAgICAgXCJFTFNFXCIsIFwiRU1QVFlBU05VTExcIiwgXCJFTkFCTEVcIiwgXCJFTkNPREVcIiwgXCJFTkNSWVBUXCIsIFwiRU5DUllQVElPTlwiLCBcIkVORFwiLCBcIkVYQ0VQVFwiLCBcIkVYUExJQ0lUXCIsIFwiRkFMU0VcIiwgXCJGT1JcIiwgXCJGT1JFSUdOXCIsXG4gICAgICAgIFwiRlJFRVpFXCIsIFwiRlJPTVwiLCBcIkZVTExcIiwgXCJHTE9CQUxESUNUMjU2XCIsIFwiR0xPQkFMRElDVDY0S1wiLCBcIkdSQU5UXCIsIFwiR1JPVVBcIiwgXCJHWklQXCIsIFwiSEFWSU5HXCIsIFwiSURFTlRJVFlcIiwgXCJJR05PUkVcIiwgXCJJTElLRVwiLFxuICAgICAgICBcIklOXCIsIFwiSU5JVElBTExZXCIsIFwiSU5ORVJcIiwgXCJJTlRFUlNFQ1RcIiwgXCJJTlRPXCIsIFwiSVNcIiwgXCJJU05VTExcIiwgXCJKT0lOXCIsIFwiTEVBRElOR1wiLCBcIkxFRlRcIiwgXCJMSUtFXCIsIFwiTElNSVRcIiwgXCJMT0NBTFRJTUVcIixcbiAgICAgICAgXCJMT0NBTFRJTUVTVEFNUFwiLCBcIkxVTlwiLCBcIkxVTlNcIiwgXCJMWk9cIiwgXCJMWk9QXCIsIFwiTUlOVVNcIiwgXCJNT1NUTFkxM1wiLCBcIk1PU1RMWTMyXCIsIFwiTU9TVExZOFwiLCBcIk5BVFVSQUxcIiwgXCJORVdcIiwgXCJOT1RcIiwgXCJOT1ROVUxMXCIsXG4gICAgICAgIFwiTlVMTFwiLCBcIk5VTExTXCIsIFwiT0ZGXCIsIFwiT0ZGTElORVwiLCBcIk9GRlNFVFwiLCBcIk9JRFwiLCBcIk9MRFwiLCBcIk9OXCIsIFwiT05MWVwiLCBcIk9QRU5cIiwgXCJPUlwiLCBcIk9SREVSXCIsIFwiT1VURVJcIiwgXCJPVkVSTEFQU1wiLCBcIlBBUkFMTEVMXCIsXG4gICAgICAgIFwiUEFSVElUSU9OXCIsIFwiUEVSQ0VOVFwiLCBcIlBFUk1JU1NJT05TXCIsIFwiUExBQ0lOR1wiLCBcIlBSSU1BUllcIiwgXCJSQVdcIiwgXCJSRUFEUkFUSU9cIiwgXCJSRUNPVkVSXCIsIFwiUkVGRVJFTkNFU1wiLCBcIlJFU1BFQ1RcIiwgXCJSRUpFQ1RMT0dcIixcbiAgICAgICAgXCJSRVNPUlRcIiwgXCJSRVNUT1JFXCIsIFwiUklHSFRcIiwgXCJTRUxFQ1RcIiwgXCJTRVNTSU9OX1VTRVJcIiwgXCJTSU1JTEFSXCIsIFwiU05BUFNIT1RcIiwgXCJTT01FXCIsIFwiU1lTREFURVwiLCBcIlNZU1RFTVwiLCBcIlRBQkxFXCIsIFwiVEFHXCIsXG4gICAgICAgIFwiVERFU1wiLCBcIlRFWFQyNTVcIiwgXCJURVhUMzJLXCIsIFwiVEhFTlwiLCBcIlRJTUVTVEFNUFwiLCBcIlRPXCIsIFwiVE9QXCIsIFwiVFJBSUxJTkdcIiwgXCJUUlVFXCIsIFwiVFJVTkNBVEVDT0xVTU5TXCIsIFwiVU5JT05cIiwgXCJVTklRVUVcIiwgXCJVU0VSXCIsXG4gICAgICAgIFwiVVNJTkdcIiwgXCJWRVJCT1NFXCIsIFwiV0FMTEVUXCIsIFwiV0hFTlwiLCBcIldIRVJFXCIsIFwiV0lUSFwiLCBcIldJVEhPVVRcIlxuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgIFwiQU5EXCIsIFwiQkVUV0VFTlwiLCBcIklOXCIsIFwiTElLRVwiLCBcIk5PVFwiLCBcIk9SXCIsIFwiSVNcIiwgXCJOVUxMXCIsIFwiSU5URVJTRUNUXCIsIFwiVU5JT05cIiwgXCJJTk5FUlwiLCBcIkpPSU5cIiwgXCJMRUZUXCIsIFwiT1VURVJcIiwgXCJSSUdIVFwiXG4gICAgXSxcbiAgICBidWlsdGluRnVuY3Rpb25zOiBbXG4gICAgICAgIFwiY3VycmVudF9zY2hlbWFcIiwgXCJjdXJyZW50X3NjaGVtYXNcIiwgXCJoYXNfZGF0YWJhc2VfcHJpdmlsZWdlXCIsIFwiaGFzX3NjaGVtYV9wcml2aWxlZ2VcIiwgXCJoYXNfdGFibGVfcHJpdmlsZWdlXCIsIFwiYWdlXCIsXG4gICAgICAgIFwiY3VycmVudF90aW1lXCIsIFwiY3VycmVudF90aW1lc3RhbXBcIiwgXCJsb2NhbHRpbWVcIiwgXCJpc2Zpbml0ZVwiLCBcIm5vd1wiLCBcImFzY2lpXCIsIFwiZ2V0X2JpdFwiLCBcImdldF9ieXRlXCIsIFwic2V0X2JpdFwiLCBcInNldF9ieXRlXCIsXG4gICAgICAgIFwidG9fYXNjaWlcIiwgXCJhcHByb3hpbWF0ZSBwZXJjZW50aWxlX2Rpc2NcIiwgXCJhdmdcIiwgXCJjb3VudFwiLCBcImxpc3RhZ2dcIiwgXCJtYXhcIiwgXCJtZWRpYW5cIiwgXCJtaW5cIiwgXCJwZXJjZW50aWxlX2NvbnRcIiwgXCJzdGRkZXZfc2FtcFwiLFxuICAgICAgICBcInN0ZGRldl9wb3BcIiwgXCJzdW1cIiwgXCJ2YXJfc2FtcFwiLCBcInZhcl9wb3BcIiwgXCJiaXRfYW5kXCIsIFwiYml0X29yXCIsIFwiYm9vbF9hbmRcIiwgXCJib29sX29yXCIsIFwiY3VtZV9kaXN0XCIsIFwiZmlyc3RfdmFsdWVcIiwgXCJsYWdcIixcbiAgICAgICAgXCJsYXN0X3ZhbHVlXCIsIFwibGVhZFwiLCBcIm50aF92YWx1ZVwiLCBcInJhdGlvX3RvX3JlcG9ydFwiLCBcImRlbnNlX3JhbmtcIiwgXCJudGlsZVwiLCBcInBlcmNlbnRfcmFua1wiLCBcInJhbmtcIiwgXCJyb3dfbnVtYmVyXCIsIFwiY2FzZVwiLFxuICAgICAgICBcImNvYWxlc2NlXCIsIFwiZGVjb2RlXCIsIFwiZ3JlYXRlc3RcIiwgXCJsZWFzdFwiLCBcIm52bFwiLCBcIm52bDJcIiwgXCJudWxsaWZcIiwgXCJhZGRfbW9udGhzXCIsIFwiYXQgdGltZSB6b25lXCIsIFwiY29udmVydF90aW1lem9uZVwiLFxuICAgICAgICBcImN1cnJlbnRfZGF0ZVwiLCBcImRhdGVfY21wXCIsIFwiZGF0ZV9jbXBfdGltZXN0YW1wXCIsIFwiZGF0ZV9jbXBfdGltZXN0YW1wdHpcIiwgXCJkYXRlX3BhcnRfeWVhclwiLCBcImRhdGVhZGRcIiwgXCJkYXRlZGlmZlwiLFxuICAgICAgICBcImRhdGVfcGFydFwiLCBcImRhdGVfdHJ1bmNcIiwgXCJleHRyYWN0XCIsIFwiZ2V0ZGF0ZVwiLCBcImludGVydmFsX2NtcFwiLCBcImxhc3RfZGF5XCIsIFwibW9udGhzX2JldHdlZW5cIiwgXCJuZXh0X2RheVwiLCBcInN5c2RhdGVcIixcbiAgICAgICAgXCJ0aW1lb2ZkYXlcIiwgXCJ0aW1lc3RhbXBfY21wXCIsIFwidGltZXN0YW1wX2NtcF9kYXRlXCIsIFwidGltZXN0YW1wX2NtcF90aW1lc3RhbXB0elwiLCBcInRpbWVzdGFtcHR6X2NtcFwiLCBcInRpbWVzdGFtcHR6X2NtcF9kYXRlXCIsXG4gICAgICAgIFwidGltZXN0YW1wdHpfY21wX3RpbWVzdGFtcFwiLCBcInRpbWV6b25lXCIsIFwidG9fdGltZXN0YW1wXCIsIFwidHJ1bmNcIiwgXCJhYnNcIiwgXCJhY29zXCIsIFwiYXNpblwiLCBcImF0YW5cIiwgXCJhdGFuMlwiLCBcImNicnRcIiwgXCJjZWlsXCIsXG4gICAgICAgIFwiY2VpbGluZ1wiLCBcImNoZWNrc3VtXCIsIFwiY29zXCIsIFwiY290XCIsIFwiZGVncmVlc1wiLCBcImRleHBcIiwgXCJkbG9nMVwiLCBcImRsb2cxMFwiLCBcImV4cFwiLCBcImZsb29yXCIsIFwibG5cIiwgXCJsb2dcIiwgXCJtb2RcIiwgXCJwaVwiLCBcInBvd2VyXCIsXG4gICAgICAgIFwicmFkaWFuc1wiLCBcInJhbmRvbVwiLCBcInJvdW5kXCIsIFwic2luXCIsIFwic2lnblwiLCBcInNxcnRcIiwgXCJ0YW5cIiwgXCJ0b19oZXhcIiwgXCJicGNoYXJjbXBcIiwgXCJidHJpbVwiLCBcImJ0dGV4dF9wYXR0ZXJuX2NtcFwiLCBcImNoYXJfbGVuZ3RoXCIsXG4gICAgICAgIFwiY2hhcmFjdGVyX2xlbmd0aFwiLCBcImNoYXJpbmRleFwiLCBcImNoclwiLCBcImNvbmNhdFwiLCBcImNyYzMyXCIsIFwiZnVuY19zaGExXCIsIFwiaW5pdGNhcFwiLCBcImxlZnQgYW5kIHJpZ2h0c1wiLCBcImxlblwiLCBcImxlbmd0aFwiLCBcImxvd2VyXCIsXG4gICAgICAgIFwibHBhZCBhbmQgcnBhZHNcIiwgXCJsdHJpbVwiLCBcIm1kNVwiLCBcIm9jdGV0X2xlbmd0aFwiLCBcInBvc2l0aW9uXCIsIFwicXVvdGVfaWRlbnRcIiwgXCJxdW90ZV9saXRlcmFsXCIsIFwicmVnZXhwX2NvdW50XCIsIFwicmVnZXhwX2luc3RyXCIsXG4gICAgICAgIFwicmVnZXhwX3JlcGxhY2VcIiwgXCJyZWdleHBfc3Vic3RyXCIsIFwicmVwZWF0XCIsIFwicmVwbGFjZVwiLCBcInJlcGxpY2F0ZVwiLCBcInJldmVyc2VcIiwgXCJydHJpbVwiLCBcInNwbGl0X3BhcnRcIiwgXCJzdHJwb3NcIiwgXCJzdHJ0b2xcIixcbiAgICAgICAgXCJzdWJzdHJpbmdcIiwgXCJ0ZXh0bGVuXCIsIFwidHJhbnNsYXRlXCIsIFwidHJpbVwiLCBcInVwcGVyXCIsIFwiY2FzdFwiLCBcImNvbnZlcnRcIiwgXCJ0b19jaGFyXCIsIFwidG9fZGF0ZVwiLCBcInRvX251bWJlclwiLCBcImpzb25fYXJyYXlfbGVuZ3RoXCIsXG4gICAgICAgIFwianNvbl9leHRyYWN0X2FycmF5X2VsZW1lbnRfdGV4dFwiLCBcImpzb25fZXh0cmFjdF9wYXRoX3RleHRcIiwgXCJjdXJyZW50X3NldHRpbmdcIiwgXCJwZ19jYW5jZWxfYmFja2VuZFwiLCBcInBnX3Rlcm1pbmF0ZV9iYWNrZW5kXCIsXG4gICAgICAgIFwic2V0X2NvbmZpZ1wiLCBcImN1cnJlbnRfZGF0YWJhc2VcIiwgXCJjdXJyZW50X3VzZXJcIiwgXCJjdXJyZW50X3VzZXJfaWRcIiwgXCJwZ19iYWNrZW5kX3BpZFwiLCBcInBnX2xhc3RfY29weV9jb3VudFwiLCBcInBnX2xhc3RfY29weV9pZFwiLFxuICAgICAgICBcInBnX2xhc3RfcXVlcnlfaWRcIiwgXCJwZ19sYXN0X3VubG9hZF9jb3VudFwiLCBcInNlc3Npb25fdXNlclwiLCBcInNsaWNlX251bVwiLCBcInVzZXJcIiwgXCJ2ZXJzaW9uXCIsIFwiYWJicmV2XCIsIFwiYWNvc2RcIiwgXCJhbnlcIiwgXCJhcmVhXCIsXG4gICAgICAgIFwiYXJyYXlfYWdnXCIsIFwiYXJyYXlfYXBwZW5kXCIsIFwiYXJyYXlfY2F0XCIsIFwiYXJyYXlfZGltc1wiLCBcImFycmF5X2ZpbGxcIiwgXCJhcnJheV9sZW5ndGhcIiwgXCJhcnJheV9sb3dlclwiLCBcImFycmF5X25kaW1zXCIsXG4gICAgICAgIFwiYXJyYXlfcG9zaXRpb25cIiwgXCJhcnJheV9wb3NpdGlvbnNcIiwgXCJhcnJheV9wcmVwZW5kXCIsIFwiYXJyYXlfcmVtb3ZlXCIsIFwiYXJyYXlfcmVwbGFjZVwiLCBcImFycmF5X3RvX2pzb25cIiwgXCJhcnJheV90b19zdHJpbmdcIixcbiAgICAgICAgXCJhcnJheV90b190c3ZlY3RvclwiLCBcImFycmF5X3VwcGVyXCIsIFwiYXNpbmRcIiwgXCJhdGFuMmRcIiwgXCJhdGFuZFwiLCBcImJpdFwiLCBcImJpdF9sZW5ndGhcIiwgXCJib3VuZF9ib3hcIiwgXCJib3hcIixcbiAgICAgICAgXCJicmluX3N1bW1hcml6ZV9uZXdfdmFsdWVzXCIsIFwiYnJvYWRjYXN0XCIsIFwiY2FyZGluYWxpdHlcIiwgXCJjZW50ZXJcIiwgXCJjaXJjbGVcIiwgXCJjbG9ja190aW1lc3RhbXBcIiwgXCJjb2xfZGVzY3JpcHRpb25cIiwgXCJjb25jYXRfd3NcIixcbiAgICAgICAgXCJjb252ZXJ0X2Zyb21cIiwgXCJjb252ZXJ0X3RvXCIsIFwiY29yclwiLCBcImNvc2RcIiwgXCJjb3RkXCIsIFwiY292YXJfcG9wXCIsIFwiY292YXJfc2FtcFwiLCBcImN1cnJlbnRfY2F0YWxvZ1wiLCBcImN1cnJlbnRfcXVlcnlcIixcbiAgICAgICAgXCJjdXJyZW50X3JvbGVcIiwgXCJjdXJydmFsXCIsIFwiY3Vyc29yX3RvX3htbFwiLCBcImRpYW1ldGVyXCIsIFwiZGl2XCIsIFwiZW5jb2RlXCIsIFwiZW51bV9maXJzdFwiLCBcImVudW1fbGFzdFwiLCBcImVudW1fcmFuZ2VcIiwgXCJldmVyeVwiLFxuICAgICAgICBcImZhbWlseVwiLCBcImZvcm1hdFwiLCBcImZvcm1hdF90eXBlXCIsIFwiZ2VuZXJhdGVfc2VyaWVzXCIsIFwiZ2VuZXJhdGVfc3Vic2NyaXB0c1wiLCBcImdldF9jdXJyZW50X3RzX2NvbmZpZ1wiLCBcImdpbl9jbGVhbl9wZW5kaW5nX2xpc3RcIixcbiAgICAgICAgXCJncm91cGluZ1wiLCBcImhhc19hbnlfY29sdW1uX3ByaXZpbGVnZVwiLCBcImhhc19jb2x1bW5fcHJpdmlsZWdlXCIsIFwiaGFzX2ZvcmVpZ25fZGF0YV93cmFwcGVyX3ByaXZpbGVnZVwiLCBcImhhc19mdW5jdGlvbl9wcml2aWxlZ2VcIixcbiAgICAgICAgXCJoYXNfbGFuZ3VhZ2VfcHJpdmlsZWdlXCIsIFwiaGFzX3NlcXVlbmNlX3ByaXZpbGVnZVwiLCBcImhhc19zZXJ2ZXJfcHJpdmlsZWdlXCIsIFwiaGFzX3RhYmxlc3BhY2VfcHJpdmlsZWdlXCIsIFwiaGFzX3R5cGVfcHJpdmlsZWdlXCIsXG4gICAgICAgIFwiaGVpZ2h0XCIsIFwiaG9zdFwiLCBcImhvc3RtYXNrXCIsIFwiaW5ldF9jbGllbnRfYWRkclwiLCBcImluZXRfY2xpZW50X3BvcnRcIiwgXCJpbmV0X21lcmdlXCIsIFwiaW5ldF9zYW1lX2ZhbWlseVwiLCBcImluZXRfc2VydmVyX2FkZHJcIixcbiAgICAgICAgXCJpbmV0X3NlcnZlcl9wb3J0XCIsIFwiaXNjbG9zZWRcIiwgXCJpc2VtcHR5XCIsIFwiaXNvcGVuXCIsIFwianNvbl9hZ2dcIiwgXCJqc29uX29iamVjdFwiLCBcImpzb25fb2JqZWN0X2FnZ1wiLCBcImpzb25fcG9wdWxhdGVfcmVjb3JkXCIsXG4gICAgICAgIFwianNvbl9wb3B1bGF0ZV9yZWNvcmRzZXRcIiwgXCJqc29uX3RvX3JlY29yZFwiLCBcImpzb25fdG9fcmVjb3Jkc2V0XCIsIFwianNvbmJfYWdnXCIsIFwianNvbmJfb2JqZWN0X2FnZ1wiLCBcImp1c3RpZnlfZGF5c1wiLCBcImp1c3RpZnlfaG91cnNcIixcbiAgICAgICAgXCJqdXN0aWZ5X2ludGVydmFsXCIsIFwibGFzdHZhbFwiLCBcImxlZnRcIiwgXCJsaW5lXCIsIFwibG9jYWx0aW1lc3RhbXBcIiwgXCJsb3dlcl9pbmNcIiwgXCJsb3dlcl9pbmZcIiwgXCJscGFkXCIsIFwibHNlZ1wiLCBcIm1ha2VfZGF0ZVwiLFxuICAgICAgICBcIm1ha2VfaW50ZXJ2YWxcIiwgXCJtYWtlX3RpbWVcIiwgXCJtYWtlX3RpbWVzdGFtcFwiLCBcIm1ha2VfdGltZXN0YW1wdHpcIiwgXCJtYXNrbGVuXCIsIFwibW9kZVwiLCBcIm5ldG1hc2tcIiwgXCJuZXR3b3JrXCIsIFwibmV4dHZhbFwiLCBcIm5wb2ludHNcIixcbiAgICAgICAgXCJudW1fbm9ubnVsbHNcIiwgXCJudW1fbnVsbHNcIiwgXCJudW1ub2RlXCIsIFwib2JqX2Rlc2NyaXB0aW9uXCIsIFwib3ZlcmxheVwiLCBcInBhcnNlX2lkZW50XCIsIFwicGF0aFwiLCBcInBjbG9zZVwiLCBcInBlcmNlbnRpbGVfZGlzY1wiLFxuICAgICAgICBcInBnX2Fkdmlzb3J5X2xvY2tcIiwgXCJwZ19hZHZpc29yeV9sb2NrX3NoYXJlZFwiLCBcInBnX2Fkdmlzb3J5X3VubG9ja1wiLCBcInBnX2Fkdmlzb3J5X3VubG9ja19hbGxcIiwgXCJwZ19hZHZpc29yeV91bmxvY2tfc2hhcmVkXCIsXG4gICAgICAgIFwicGdfYWR2aXNvcnlfeGFjdF9sb2NrXCIsIFwicGdfYWR2aXNvcnlfeGFjdF9sb2NrX3NoYXJlZFwiLCBcInBnX2JhY2t1cF9zdGFydF90aW1lXCIsIFwicGdfYmxvY2tpbmdfcGlkc1wiLCBcInBnX2NsaWVudF9lbmNvZGluZ1wiLFxuICAgICAgICBcInBnX2NvbGxhdGlvbl9pc192aXNpYmxlXCIsIFwicGdfY29sdW1uX3NpemVcIiwgXCJwZ19jb25mX2xvYWRfdGltZVwiLCBcInBnX2NvbnRyb2xfY2hlY2twb2ludFwiLCBcInBnX2NvbnRyb2xfaW5pdFwiLCBcInBnX2NvbnRyb2xfcmVjb3ZlcnlcIixcbiAgICAgICAgXCJwZ19jb250cm9sX3N5c3RlbVwiLCBcInBnX2NvbnZlcnNpb25faXNfdmlzaWJsZVwiLCBcInBnX2NyZWF0ZV9sb2dpY2FsX3JlcGxpY2F0aW9uX3Nsb3RcIiwgXCJwZ19jcmVhdGVfcGh5c2ljYWxfcmVwbGljYXRpb25fc2xvdFwiLFxuICAgICAgICBcInBnX2NyZWF0ZV9yZXN0b3JlX3BvaW50XCIsIFwicGdfY3VycmVudF94bG9nX2ZsdXNoX2xvY2F0aW9uXCIsIFwicGdfY3VycmVudF94bG9nX2luc2VydF9sb2NhdGlvblwiLCBcInBnX2N1cnJlbnRfeGxvZ19sb2NhdGlvblwiLFxuICAgICAgICBcInBnX2RhdGFiYXNlX3NpemVcIiwgXCJwZ19kZXNjcmliZV9vYmplY3RcIiwgXCJwZ19kcm9wX3JlcGxpY2F0aW9uX3Nsb3RcIiwgXCJwZ19leHBvcnRfc25hcHNob3RcIiwgXCJwZ19maWxlbm9kZV9yZWxhdGlvblwiLFxuICAgICAgICBcInBnX2Z1bmN0aW9uX2lzX3Zpc2libGVcIiwgXCJwZ19nZXRfY29uc3RyYWludGRlZlwiLCBcInBnX2dldF9leHByXCIsIFwicGdfZ2V0X2Z1bmN0aW9uX2FyZ3VtZW50c1wiLCBcInBnX2dldF9mdW5jdGlvbl9pZGVudGl0eV9hcmd1bWVudHNcIixcbiAgICAgICAgXCJwZ19nZXRfZnVuY3Rpb25fcmVzdWx0XCIsIFwicGdfZ2V0X2Z1bmN0aW9uZGVmXCIsIFwicGdfZ2V0X2luZGV4ZGVmXCIsIFwicGdfZ2V0X2tleXdvcmRzXCIsIFwicGdfZ2V0X29iamVjdF9hZGRyZXNzXCIsXG4gICAgICAgIFwicGdfZ2V0X293bmVkX3NlcXVlbmNlXCIsIFwicGdfZ2V0X3J1bGVkZWZcIiwgXCJwZ19nZXRfc2VyaWFsX3NlcXVlbmNlXCIsIFwicGdfZ2V0X3RyaWdnZXJkZWZcIiwgXCJwZ19nZXRfdXNlcmJ5aWRcIiwgXCJwZ19nZXRfdmlld2RlZlwiLFxuICAgICAgICBcInBnX2hhc19yb2xlXCIsIFwicGdfaWRlbnRpZnlfb2JqZWN0XCIsIFwicGdfaWRlbnRpZnlfb2JqZWN0X2FzX2FkZHJlc3NcIiwgXCJwZ19pbmRleF9jb2x1bW5faGFzX3Byb3BlcnR5XCIsIFwicGdfaW5kZXhfaGFzX3Byb3BlcnR5XCIsXG4gICAgICAgIFwicGdfaW5kZXhhbV9oYXNfcHJvcGVydHlcIiwgXCJwZ19pbmRleGVzX3NpemVcIiwgXCJwZ19pc19pbl9iYWNrdXBcIiwgXCJwZ19pc19pbl9yZWNvdmVyeVwiLCBcInBnX2lzX290aGVyX3RlbXBfc2NoZW1hXCIsXG4gICAgICAgIFwicGdfaXNfeGxvZ19yZXBsYXlfcGF1c2VkXCIsIFwicGdfbGFzdF9jb21taXR0ZWRfeGFjdFwiLCBcInBnX2xhc3RfeGFjdF9yZXBsYXlfdGltZXN0YW1wXCIsIFwicGdfbGFzdF94bG9nX3JlY2VpdmVfbG9jYXRpb25cIixcbiAgICAgICAgXCJwZ19sYXN0X3hsb2dfcmVwbGF5X2xvY2F0aW9uXCIsIFwicGdfbGlzdGVuaW5nX2NoYW5uZWxzXCIsIFwicGdfbG9naWNhbF9lbWl0X21lc3NhZ2VcIiwgXCJwZ19sb2dpY2FsX3Nsb3RfZ2V0X2JpbmFyeV9jaGFuZ2VzXCIsXG4gICAgICAgIFwicGdfbG9naWNhbF9zbG90X2dldF9jaGFuZ2VzXCIsIFwicGdfbG9naWNhbF9zbG90X3BlZWtfYmluYXJ5X2NoYW5nZXNcIiwgXCJwZ19sb2dpY2FsX3Nsb3RfcGVla19jaGFuZ2VzXCIsIFwicGdfbHNfZGlyXCIsXG4gICAgICAgIFwicGdfbXlfdGVtcF9zY2hlbWFcIiwgXCJwZ19ub3RpZmljYXRpb25fcXVldWVfdXNhZ2VcIiwgXCJwZ19vcGNsYXNzX2lzX3Zpc2libGVcIiwgXCJwZ19vcGVyYXRvcl9pc192aXNpYmxlXCIsIFwicGdfb3BmYW1pbHlfaXNfdmlzaWJsZVwiLFxuICAgICAgICBcInBnX29wdGlvbnNfdG9fdGFibGVcIiwgXCJwZ19wb3N0bWFzdGVyX3N0YXJ0X3RpbWVcIiwgXCJwZ19yZWFkX2JpbmFyeV9maWxlXCIsIFwicGdfcmVhZF9maWxlXCIsIFwicGdfcmVsYXRpb25fZmlsZW5vZGVcIixcbiAgICAgICAgXCJwZ19yZWxhdGlvbl9maWxlcGF0aFwiLCBcInBnX3JlbGF0aW9uX3NpemVcIiwgXCJwZ19yZWxvYWRfY29uZlwiLCBcInBnX3JlcGxpY2F0aW9uX29yaWdpbl9jcmVhdGVcIiwgXCJwZ19yZXBsaWNhdGlvbl9vcmlnaW5fZHJvcFwiLFxuICAgICAgICBcInBnX3JlcGxpY2F0aW9uX29yaWdpbl9vaWRcIiwgXCJwZ19yZXBsaWNhdGlvbl9vcmlnaW5fcHJvZ3Jlc3NcIiwgXCJwZ19yZXBsaWNhdGlvbl9vcmlnaW5fc2Vzc2lvbl9pc19zZXR1cFwiLFxuICAgICAgICBcInBnX3JlcGxpY2F0aW9uX29yaWdpbl9zZXNzaW9uX3Byb2dyZXNzXCIsIFwicGdfcmVwbGljYXRpb25fb3JpZ2luX3Nlc3Npb25fcmVzZXRcIiwgXCJwZ19yZXBsaWNhdGlvbl9vcmlnaW5fc2Vzc2lvbl9zZXR1cFwiLFxuICAgICAgICBcInBnX3JlcGxpY2F0aW9uX29yaWdpbl94YWN0X3Jlc2V0XCIsIFwicGdfcmVwbGljYXRpb25fb3JpZ2luX3hhY3Rfc2V0dXBcIiwgXCJwZ19yb3RhdGVfbG9nZmlsZVwiLCBcInBnX3NpemVfYnl0ZXNcIiwgXCJwZ19zaXplX3ByZXR0eVwiLFxuICAgICAgICBcInBnX3NsZWVwXCIsIFwicGdfc2xlZXBfZm9yXCIsIFwicGdfc2xlZXBfdW50aWxcIiwgXCJwZ19zdGFydF9iYWNrdXBcIiwgXCJwZ19zdGF0X2ZpbGVcIiwgXCJwZ19zdG9wX2JhY2t1cFwiLCBcInBnX3N3aXRjaF94bG9nXCIsXG4gICAgICAgIFwicGdfdGFibGVfaXNfdmlzaWJsZVwiLCBcInBnX3RhYmxlX3NpemVcIiwgXCJwZ190YWJsZXNwYWNlX2RhdGFiYXNlc1wiLCBcInBnX3RhYmxlc3BhY2VfbG9jYXRpb25cIiwgXCJwZ190YWJsZXNwYWNlX3NpemVcIixcbiAgICAgICAgXCJwZ190b3RhbF9yZWxhdGlvbl9zaXplXCIsIFwicGdfdHJpZ2dlcl9kZXB0aFwiLCBcInBnX3RyeV9hZHZpc29yeV9sb2NrXCIsIFwicGdfdHJ5X2Fkdmlzb3J5X2xvY2tfc2hhcmVkXCIsIFwicGdfdHJ5X2Fkdmlzb3J5X3hhY3RfbG9ja1wiLFxuICAgICAgICBcInBnX3RyeV9hZHZpc29yeV94YWN0X2xvY2tfc2hhcmVkXCIsIFwicGdfdHNfY29uZmlnX2lzX3Zpc2libGVcIiwgXCJwZ190c19kaWN0X2lzX3Zpc2libGVcIiwgXCJwZ190c19wYXJzZXJfaXNfdmlzaWJsZVwiLFxuICAgICAgICBcInBnX3RzX3RlbXBsYXRlX2lzX3Zpc2libGVcIiwgXCJwZ190eXBlX2lzX3Zpc2libGVcIiwgXCJwZ190eXBlb2ZcIiwgXCJwZ194YWN0X2NvbW1pdF90aW1lc3RhbXBcIiwgXCJwZ194bG9nX2xvY2F0aW9uX2RpZmZcIixcbiAgICAgICAgXCJwZ194bG9nX3JlcGxheV9wYXVzZVwiLCBcInBnX3hsb2dfcmVwbGF5X3Jlc3VtZVwiLCBcInBnX3hsb2dmaWxlX25hbWVcIiwgXCJwZ194bG9nZmlsZV9uYW1lX29mZnNldFwiLCBcInBocmFzZXRvX3RzcXVlcnlcIixcbiAgICAgICAgXCJwbGFpbnRvX3RzcXVlcnlcIiwgXCJwb2ludFwiLCBcInBvbHlnb25cIiwgXCJwb3BlblwiLCBcInBxc2VydmVydmVyc2lvblwiLCBcInF1ZXJ5X3RvX3htbFwiLCBcInF1ZXJ5dHJlZVwiLCBcInF1b3RlX251bGxhYmxlXCIsIFwicmFkaXVzXCIsXG4gICAgICAgIFwicmFuZ2VfbWVyZ2VcIiwgXCJyZWdleHBfbWF0Y2hlc1wiLCBcInJlZ2V4cF9zcGxpdF90b19hcnJheVwiLCBcInJlZ2V4cF9zcGxpdF90b190YWJsZVwiLCBcInJlZ3JfYXZneFwiLCBcInJlZ3JfYXZneVwiLCBcInJlZ3JfY291bnRcIixcbiAgICAgICAgXCJyZWdyX2ludGVyY2VwdFwiLCBcInJlZ3JfcjJcIiwgXCJyZWdyX3Nsb3BlXCIsIFwicmVncl9zeHhcIiwgXCJyZWdyX3N4eVwiLCBcInJlZ3Jfc3l5XCIsIFwicmlnaHRcIiwgXCJyb3dfc2VjdXJpdHlfYWN0aXZlXCIsIFwicm93X3RvX2pzb25cIixcbiAgICAgICAgXCJycGFkXCIsIFwic2NhbGVcIiwgXCJzZXRfbWFza2xlblwiLCBcInNldHNlZWRcIiwgXCJzZXR2YWxcIiwgXCJzZXR3ZWlnaHRcIiwgXCJzaG9ial9kZXNjcmlwdGlvblwiLCBcInNpbmRcIiwgXCJzcHJpbnRmXCIsIFwic3RhdGVtZW50X3RpbWVzdGFtcFwiLFxuICAgICAgICBcInN0ZGRldlwiLCBcInN0cmluZ19hZ2dcIiwgXCJzdHJpbmdfdG9fYXJyYXlcIiwgXCJzdHJpcFwiLCBcInN1YnN0clwiLCBcInRhYmxlX3RvX3htbFwiLCBcInRhYmxlX3RvX3htbF9hbmRfeG1sc2NoZW1hXCIsIFwidGFuZFwiLCBcInRleHRcIixcbiAgICAgICAgXCJ0b19qc29uXCIsIFwidG9fcmVnY2xhc3NcIiwgXCJ0b19yZWduYW1lc3BhY2VcIiwgXCJ0b19yZWdvcGVyXCIsIFwidG9fcmVnb3BlcmF0b3JcIiwgXCJ0b19yZWdwcm9jXCIsIFwidG9fcmVncHJvY2VkdXJlXCIsIFwidG9fcmVncm9sZVwiLFxuICAgICAgICBcInRvX3JlZ3R5cGVcIiwgXCJ0b190c3F1ZXJ5XCIsIFwidG9fdHN2ZWN0b3JcIiwgXCJ0cmFuc2FjdGlvbl90aW1lc3RhbXBcIiwgXCJ0c19kZWJ1Z1wiLCBcInRzX2RlbGV0ZVwiLCBcInRzX2ZpbHRlclwiLCBcInRzX2hlYWRsaW5lXCIsXG4gICAgICAgIFwidHNfbGV4aXplXCIsIFwidHNfcGFyc2VcIiwgXCJ0c19yYW5rXCIsIFwidHNfcmFua19jZFwiLCBcInRzX3Jld3JpdGVcIiwgXCJ0c19zdGF0XCIsIFwidHNfdG9rZW5fdHlwZVwiLCBcInRzcXVlcnlfcGhyYXNlXCIsIFwidHN2ZWN0b3JfdG9fYXJyYXlcIixcbiAgICAgICAgXCJ0c3ZlY3Rvcl91cGRhdGVfdHJpZ2dlclwiLCBcInRzdmVjdG9yX3VwZGF0ZV90cmlnZ2VyX2NvbHVtblwiLCBcInR4aWRfY3VycmVudFwiLCBcInR4aWRfY3VycmVudF9zbmFwc2hvdFwiLCBcInR4aWRfc25hcHNob3RfeGlwXCIsXG4gICAgICAgIFwidHhpZF9zbmFwc2hvdF94bWF4XCIsIFwidHhpZF9zbmFwc2hvdF94bWluXCIsIFwidHhpZF92aXNpYmxlX2luX3NuYXBzaG90XCIsIFwidW5uZXN0XCIsIFwidXBwZXJfaW5jXCIsIFwidXBwZXJfaW5mXCIsIFwidmFyaWFuY2VcIiwgXCJ3aWR0aFwiLFxuICAgICAgICBcIndpZHRoX2J1Y2tldFwiLCBcInhtbF9pc193ZWxsX2Zvcm1lZFwiLCBcInhtbF9pc193ZWxsX2Zvcm1lZF9jb250ZW50XCIsIFwieG1sX2lzX3dlbGxfZm9ybWVkX2RvY3VtZW50XCIsIFwieG1sYWdnXCIsIFwieG1sY29tbWVudFwiLFxuICAgICAgICBcInhtbGNvbmNhdFwiLCBcInhtbGVsZW1lbnRcIiwgXCJ4bWxleGlzdHNcIiwgXCJ4bWxmb3Jlc3RcIiwgXCJ4bWxwYXJzZVwiLCBcInhtbHBpXCIsIFwieG1scm9vdFwiLCBcInhtbHNlcmlhbGl6ZVwiLCBcInhwYXRoXCIsIFwieHBhdGhfZXhpc3RzXCJcbiAgICBdLFxuICAgIGJ1aWx0aW5WYXJpYWJsZXM6IFtcbiAgICAvLyBOT1QgU1VQUE9SVEVEXG4gICAgXSxcbiAgICBwc2V1ZG9Db2x1bW5zOiBbXG4gICAgLy8gTk9UIFNVUFBPUlRFRFxuICAgIF0sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHBzZXVkb0NvbHVtbnMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbXBsZXhJZGVudGlmaWVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzY29wZXMnIH0sXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bKCldLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bXFx3QCMkXSsvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGluVmFyaWFibGVzJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGluRnVuY3Rpb25zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvWzw+PSElJitcXC0qL3x+Xl0vLCAnb3BlcmF0b3InXSxcbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9cXHMrLywgJ3doaXRlJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudHM6IFtcbiAgICAgICAgICAgIFsvLS0rLiovLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCB7IHRva2VuOiAnY29tbWVudC5xdW90ZScsIG5leHQ6ICdAY29tbWVudCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXiovXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gTm90IHN1cHBvcnRpbmcgbmVzdGVkIGNvbW1lbnRzLCBhcyBuZXN0ZWQgY29tbWVudHMgc2VlbSB0byBub3QgYmUgc3RhbmRhcmQ/XG4gICAgICAgICAgICAvLyBpLmUuIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzI4MTcyL2FyZS10aGVyZS1tdWx0aWxpbmUtY29tbWVudC1kZWxpbWl0ZXJzLWluLXNxbC10aGF0LWFyZS12ZW5kb3ItYWdub3N0aWNcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgeyB0b2tlbjogJ2NvbW1lbnQucXVvdGUnLCBuZXh0OiAnQHB1c2gnIH1dLCAgICAvLyBuZXN0ZWQgY29tbWVudCBub3QgYWxsb3dlZCA6LShcbiAgICAgICAgICAgIFsvXFwqXFwvLywgeyB0b2tlbjogJ2NvbW1lbnQucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHBzZXVkb0NvbHVtbnM6IFtcbiAgICAgICAgICAgIFsvWyRdW0EtWmEtel9dW1xcd0AjJF0qLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bwc2V1ZG9Db2x1bW5zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKi8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvWyRdWystXSpcXGQqKFxcLlxcZCopPy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvKChcXGQrKFxcLlxcZCopPyl8KFxcLlxcZCspKShbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXInXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmcnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW14nXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLycnLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBjb21wbGV4SWRlbnRpZmllcnM6IFtcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnaWRlbnRpZmllci5xdW90ZScsIG5leHQ6ICdAcXVvdGVkSWRlbnRpZmllcicgfV1cbiAgICAgICAgXSxcbiAgICAgICAgcXVvdGVkSWRlbnRpZmllcjogW1xuICAgICAgICAgICAgWy9bXlwiXSsvLCAnaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9cIlwiLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnaWRlbnRpZmllci5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzY29wZXM6IFtcbiAgICAgICAgLy8gTk9UIFNVUFBPUlRFRFxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=