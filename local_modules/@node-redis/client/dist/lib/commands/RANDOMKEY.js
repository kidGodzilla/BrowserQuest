"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
exports.IS_READ_ONLY = true;
function transformArguments() {
    return ['RANDOMKEY'];
}
exports.transformArguments = transformArguments;
function transformReply(reply) {
    return reply;
}
exports.transformReply = transformReply;
