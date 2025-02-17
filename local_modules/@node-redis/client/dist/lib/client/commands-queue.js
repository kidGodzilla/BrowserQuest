"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RedisCommandsQueue_instances, _a, _RedisCommandsQueue_flushQueue, _RedisCommandsQueue_emitPubSubMessage, _RedisCommandsQueue_maxLength, _RedisCommandsQueue_waitingToBeSent, _RedisCommandsQueue_waitingForReply, _RedisCommandsQueue_pubSubState, _RedisCommandsQueue_PUB_SUB_MESSAGES, _RedisCommandsQueue_parser, _RedisCommandsQueue_chainInExecution, _RedisCommandsQueue_initiatePubSubState, _RedisCommandsQueue_pushPubSubCommand, _RedisCommandsQueue_shiftWaitingForReply;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSubUnsubscribeCommands = exports.PubSubSubscribeCommands = void 0;
const LinkedList = require("yallist");
const errors_1 = require("../errors");
// We need to use 'require', because it's not possible with Typescript to import
// classes that are exported as 'module.exports = class`, without esModuleInterop
// set to true.
const RedisParser = require('redis-parser');
var PubSubSubscribeCommands;
(function (PubSubSubscribeCommands) {
    PubSubSubscribeCommands["SUBSCRIBE"] = "SUBSCRIBE";
    PubSubSubscribeCommands["PSUBSCRIBE"] = "PSUBSCRIBE";
})(PubSubSubscribeCommands = exports.PubSubSubscribeCommands || (exports.PubSubSubscribeCommands = {}));
var PubSubUnsubscribeCommands;
(function (PubSubUnsubscribeCommands) {
    PubSubUnsubscribeCommands["UNSUBSCRIBE"] = "UNSUBSCRIBE";
    PubSubUnsubscribeCommands["PUNSUBSCRIBE"] = "PUNSUBSCRIBE";
})(PubSubUnsubscribeCommands = exports.PubSubUnsubscribeCommands || (exports.PubSubUnsubscribeCommands = {}));
class RedisCommandsQueue {
    constructor(maxLength) {
        _RedisCommandsQueue_instances.add(this);
        _RedisCommandsQueue_maxLength.set(this, void 0);
        _RedisCommandsQueue_waitingToBeSent.set(this, new LinkedList());
        _RedisCommandsQueue_waitingForReply.set(this, new LinkedList());
        _RedisCommandsQueue_pubSubState.set(this, void 0);
        _RedisCommandsQueue_parser.set(this, new RedisParser({
            returnReply: (reply) => {
                if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f") && Array.isArray(reply)) {
                    if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).message.equals(reply[0])) {
                        return __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_emitPubSubMessage).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.channels, reply[2], reply[1]);
                    }
                    else if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pMessage.equals(reply[0])) {
                        return __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_emitPubSubMessage).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.patterns, reply[3], reply[2], reply[1]);
                    }
                    else if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).subscribe.equals(reply[0]) ||
                        __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pSubscribe.equals(reply[0]) ||
                        __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).unsubscribe.equals(reply[0]) ||
                        __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pUnsubscribe.equals(reply[0])) {
                        if (--__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head.value.channelsCounter === 0) {
                            __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_shiftWaitingForReply).call(this).resolve();
                        }
                        return;
                    }
                }
                __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_shiftWaitingForReply).call(this).resolve(reply);
            },
            returnError: (err) => __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_shiftWaitingForReply).call(this).reject(err)
        }));
        _RedisCommandsQueue_chainInExecution.set(this, void 0);
        __classPrivateFieldSet(this, _RedisCommandsQueue_maxLength, maxLength, "f");
    }
    addCommand(args, options, bufferMode) {
        var _b;
        if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) {
            return Promise.reject(new Error('Cannot send commands in PubSub mode'));
        }
        else if (__classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f") && __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").length + __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length >= __classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f")) {
            return Promise.reject(new Error('The queue is full'));
        }
        else if ((_b = options === null || options === void 0 ? void 0 : options.signal) === null || _b === void 0 ? void 0 : _b.aborted) {
            return Promise.reject(new errors_1.AbortError());
        }
        return new Promise((resolve, reject) => {
            const node = new LinkedList.Node({
                args,
                chainId: options === null || options === void 0 ? void 0 : options.chainId,
                bufferMode,
                resolve,
                reject
            });
            if (options === null || options === void 0 ? void 0 : options.signal) {
                const listener = () => {
                    __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").removeNode(node);
                    node.value.reject(new errors_1.AbortError());
                };
                node.value.abort = {
                    signal: options.signal,
                    listener
                };
                // AbortSignal type is incorrent
                options.signal.addEventListener('abort', listener, {
                    once: true
                });
            }
            if (options === null || options === void 0 ? void 0 : options.asap) {
                __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").unshiftNode(node);
            }
            else {
                __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").pushNode(node);
            }
        });
    }
    subscribe(command, channels, listener, bufferMode) {
        const pubSubState = __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_initiatePubSubState).call(this), channelsToSubscribe = [], listenersMap = command === PubSubSubscribeCommands.SUBSCRIBE ? pubSubState.listeners.channels : pubSubState.listeners.patterns;
        for (const channel of (Array.isArray(channels) ? channels : [channels])) {
            const channelString = typeof channel === 'string' ? channel : channel.toString();
            let listeners = listenersMap.get(channelString);
            if (!listeners) {
                listeners = {
                    buffers: new Set(),
                    strings: new Set()
                };
                listenersMap.set(channelString, listeners);
                channelsToSubscribe.push(channel);
            }
            // https://github.com/microsoft/TypeScript/issues/23132
            (bufferMode ? listeners.buffers : listeners.strings).add(listener);
        }
        if (!channelsToSubscribe.length) {
            return Promise.resolve();
        }
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, channelsToSubscribe);
    }
    unsubscribe(command, channels, listener, bufferMode) {
        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) {
            return Promise.resolve();
        }
        const listeners = command === PubSubUnsubscribeCommands.UNSUBSCRIBE ?
            __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.channels :
            __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.patterns;
        if (!channels) {
            const size = listeners.size;
            listeners.clear();
            return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, size);
        }
        const channelsToUnsubscribe = [];
        for (const channel of (Array.isArray(channels) ? channels : [channels])) {
            const sets = listeners.get(channel);
            if (!sets)
                continue;
            let shouldUnsubscribe;
            if (listener) {
                // https://github.com/microsoft/TypeScript/issues/23132
                (bufferMode ? sets.buffers : sets.strings).delete(listener);
                shouldUnsubscribe = !sets.buffers.size && !sets.strings.size;
            }
            else {
                shouldUnsubscribe = true;
            }
            if (shouldUnsubscribe) {
                channelsToUnsubscribe.push(channel);
                listeners.delete(channel);
            }
        }
        if (!channelsToUnsubscribe.length) {
            return Promise.resolve();
        }
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, channelsToUnsubscribe);
    }
    resubscribe() {
        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) {
            return;
        }
        // TODO: acl error on one channel/pattern will reject the whole command
        return Promise.all([
            __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, PubSubSubscribeCommands.SUBSCRIBE, [...__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.channels.keys()]),
            __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, PubSubSubscribeCommands.PSUBSCRIBE, [...__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.patterns.keys()])
        ]);
    }
    getCommandToSend() {
        const toSend = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        if (toSend) {
            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").push({
                resolve: toSend.resolve,
                reject: toSend.reject,
                channelsCounter: toSend.channelsCounter,
                bufferMode: toSend.bufferMode
            });
        }
        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, toSend === null || toSend === void 0 ? void 0 : toSend.chainId, "f");
        return toSend === null || toSend === void 0 ? void 0 : toSend.args;
    }
    parseResponse(data) {
        var _b, _c;
        __classPrivateFieldGet(this, _RedisCommandsQueue_parser, "f").setReturnBuffers(!!((_b = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head) === null || _b === void 0 ? void 0 : _b.value.bufferMode) ||
            !!((_c = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) === null || _c === void 0 ? void 0 : _c.subscribed));
        __classPrivateFieldGet(this, _RedisCommandsQueue_parser, "f").execute(data);
    }
    flushWaitingForReply(err) {
        var _b;
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")) {
            return;
        }
        while (((_b = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").head) === null || _b === void 0 ? void 0 : _b.value.chainId) === __classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")) {
            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        }
        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, undefined, "f");
    }
    flushAll(err) {
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f"), err);
    }
}
exports.default = RedisCommandsQueue;
_a = RedisCommandsQueue, _RedisCommandsQueue_maxLength = new WeakMap(), _RedisCommandsQueue_waitingToBeSent = new WeakMap(), _RedisCommandsQueue_waitingForReply = new WeakMap(), _RedisCommandsQueue_pubSubState = new WeakMap(), _RedisCommandsQueue_parser = new WeakMap(), _RedisCommandsQueue_chainInExecution = new WeakMap(), _RedisCommandsQueue_instances = new WeakSet(), _RedisCommandsQueue_flushQueue = function _RedisCommandsQueue_flushQueue(queue, err) {
    while (queue.length) {
        queue.shift().reject(err);
    }
}, _RedisCommandsQueue_emitPubSubMessage = function _RedisCommandsQueue_emitPubSubMessage(listenersMap, message, channel, pattern) {
    const keyString = (pattern || channel).toString(), listeners = listenersMap.get(keyString);
    for (const listener of listeners.buffers) {
        listener(message, channel);
    }
    if (!listeners.strings.size)
        return;
    const messageString = message.toString(), channelString = pattern ? channel.toString() : keyString;
    for (const listener of listeners.strings) {
        listener(messageString, channelString);
    }
}, _RedisCommandsQueue_initiatePubSubState = function _RedisCommandsQueue_initiatePubSubState() {
    var _b;
    return __classPrivateFieldSet(this, _RedisCommandsQueue_pubSubState, (_b = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")) !== null && _b !== void 0 ? _b : {
        subscribed: 0,
        subscribing: 0,
        unsubscribing: 0,
        listeners: {
            channels: new Map(),
            patterns: new Map()
        }
    }, "f");
}, _RedisCommandsQueue_pushPubSubCommand = function _RedisCommandsQueue_pushPubSubCommand(command, channels) {
    return new Promise((resolve, reject) => {
        const pubSubState = __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_initiatePubSubState).call(this), isSubscribe = command === PubSubSubscribeCommands.SUBSCRIBE || command === PubSubSubscribeCommands.PSUBSCRIBE, inProgressKey = isSubscribe ? 'subscribing' : 'unsubscribing', commandArgs = [command];
        let channelsCounter;
        if (typeof channels === 'number') { // unsubscribe only
            channelsCounter = channels;
        }
        else {
            commandArgs.push(...channels);
            channelsCounter = channels.length;
        }
        pubSubState[inProgressKey] += channelsCounter;
        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").push({
            args: commandArgs,
            channelsCounter,
            bufferMode: true,
            resolve: () => {
                pubSubState[inProgressKey] -= channelsCounter;
                if (isSubscribe) {
                    pubSubState.subscribed += channelsCounter;
                }
                else {
                    pubSubState.subscribed -= channelsCounter;
                    if (!pubSubState.subscribed && !pubSubState.subscribing && !pubSubState.subscribed) {
                        __classPrivateFieldSet(this, _RedisCommandsQueue_pubSubState, undefined, "f");
                    }
                }
                resolve();
            },
            reject: () => {
                pubSubState[inProgressKey] -= channelsCounter * (isSubscribe ? 1 : -1);
                reject();
            }
        });
    });
}, _RedisCommandsQueue_shiftWaitingForReply = function _RedisCommandsQueue_shiftWaitingForReply() {
    if (!__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length) {
        throw new Error('Got an unexpected reply from Redis');
    }
    return __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift();
};
_RedisCommandsQueue_PUB_SUB_MESSAGES = { value: {
        message: Buffer.from('message'),
        pMessage: Buffer.from('pmessage'),
        subscribe: Buffer.from('subscribe'),
        pSubscribe: Buffer.from('psubscribe'),
        unsubscribe: Buffer.from('unsunscribe'),
        pUnsubscribe: Buffer.from('punsubscribe')
    } };
