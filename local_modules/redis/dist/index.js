"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCluster = exports.createClient = void 0;
const client_1 = require("../../@node-redis/client");
const json_1 = require("@node-redis/json");
const search_1 = require("@node-redis/search");
__exportStar(require("../../@node-redis/client"), exports);
__exportStar(require("@node-redis/json"), exports);
__exportStar(require("@node-redis/search"), exports);
const modules = {
    json: json_1.default,
    ft: search_1.default
};
function createClient(options) {
    return (0, client_1.createClient)({
        ...options,
        modules
    });
}
exports.createClient = createClient;
function createCluster(options) {
    return (0, client_1.createCluster)({
        ...options,
        modules
    });
}
exports.createCluster = createCluster;
