"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = require("./generic-transformers");
exports.FIRST_KEY_INDEX = 1;
function transformArguments(destination, keys, options) {
    const args = (0, generic_transformers_1.pushVerdictArgument)(['ZINTERSTORE', destination], keys);
    if (options === null || options === void 0 ? void 0 : options.WEIGHTS) {
        args.push('WEIGHTS', ...options.WEIGHTS.map(weight => weight.toString()));
    }
    if (options === null || options === void 0 ? void 0 : options.AGGREGATE) {
        args.push('AGGREGATE', options.AGGREGATE);
    }
    return args;
}
exports.transformArguments = transformArguments;
