"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = require("./generic-transformers");
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, min, max, options) {
    const args = [
        'ZRANGE',
        key,
        (0, generic_transformers_1.transformArgumentStringNumberInfinity)(min),
        (0, generic_transformers_1.transformArgumentStringNumberInfinity)(max)
    ];
    switch (options === null || options === void 0 ? void 0 : options.BY) {
        case 'SCORE':
            args.push('BYSCORE');
            break;
        case 'LEX':
            args.push('BYLEX');
            break;
    }
    if (options === null || options === void 0 ? void 0 : options.REV) {
        args.push('REV');
    }
    if (options === null || options === void 0 ? void 0 : options.LIMIT) {
        args.push('LIMIT', options.LIMIT.offset.toString(), options.LIMIT.count.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
