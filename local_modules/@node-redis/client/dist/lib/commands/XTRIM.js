"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
function transformArguments(key, strategy, threshold, options) {
    const args = ['XTRIM', key, strategy];
    if (options === null || options === void 0 ? void 0 : options.strategyModifier) {
        args.push(options.strategyModifier);
    }
    args.push(threshold.toString());
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
