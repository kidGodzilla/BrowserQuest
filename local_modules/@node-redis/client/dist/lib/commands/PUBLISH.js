"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = void 0;
function transformArguments(channel, message) {
    return ['PUBLISH', channel, message];
}
exports.transformArguments = transformArguments;
