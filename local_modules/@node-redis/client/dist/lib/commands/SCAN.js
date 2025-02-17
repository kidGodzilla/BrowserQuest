"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
const generic_transformers_1 = require("./generic-transformers");
exports.IS_READ_ONLY = true;
function transformArguments(cursor, options) {
    const args = (0, generic_transformers_1.pushScanArguments)(['SCAN'], cursor, options);
    if (options === null || options === void 0 ? void 0 : options.TYPE) {
        args.push('TYPE', options.TYPE);
    }
    return args;
}
exports.transformArguments = transformArguments;
function transformReply([cursor, keys]) {
    return {
        cursor: Number(cursor),
        keys
    };
}
exports.transformReply = transformReply;
