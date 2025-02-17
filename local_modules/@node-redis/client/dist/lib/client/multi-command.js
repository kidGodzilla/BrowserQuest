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
var _RedisClientMultiCommand_instances, _RedisClientMultiCommand_multi, _RedisClientMultiCommand_executor, _RedisClientMultiCommand_legacyMode, _RedisClientMultiCommand_defineLegacyCommand;
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("./commands");
const multi_command_1 = require("../multi-command");
const commander_1 = require("../commander");
class RedisClientMultiCommand {
    constructor(executor, legacyMode = false) {
        _RedisClientMultiCommand_instances.add(this);
        _RedisClientMultiCommand_multi.set(this, new multi_command_1.default());
        _RedisClientMultiCommand_executor.set(this, void 0);
        Object.defineProperty(this, "v4", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "EXEC", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.exec
        });
        __classPrivateFieldSet(this, _RedisClientMultiCommand_executor, executor, "f");
        if (legacyMode) {
            __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_legacyMode).call(this);
        }
    }
    static extend(plugins) {
        return (0, commander_1.extendWithModulesAndScripts)({
            BaseClass: RedisClientMultiCommand,
            modules: plugins === null || plugins === void 0 ? void 0 : plugins.modules,
            modulesCommandsExecutor: RedisClientMultiCommand.prototype.commandsExecutor,
            scripts: plugins === null || plugins === void 0 ? void 0 : plugins.scripts,
            scriptsExecutor: RedisClientMultiCommand.prototype.scriptsExecutor
        });
    }
    commandsExecutor(command, args) {
        return this.addCommand(command.transformArguments(...args), command.transformReply);
    }
    addCommand(args, transformReply) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand(args, transformReply);
        return this;
    }
    scriptsExecutor(script, args) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addScript(script, args);
        return this;
    }
    async exec(execAsPipeline = false) {
        if (execAsPipeline) {
            return this.execAsPipeline();
        }
        const commands = __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").exec();
        if (!commands)
            return [];
        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, commands, multi_command_1.default.generateChainId()));
    }
    async execAsPipeline() {
        if (!__classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue.length)
            return [];
        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue));
    }
}
exports.default = RedisClientMultiCommand;
_RedisClientMultiCommand_multi = new WeakMap(), _RedisClientMultiCommand_executor = new WeakMap(), _RedisClientMultiCommand_instances = new WeakSet(), _RedisClientMultiCommand_legacyMode = function _RedisClientMultiCommand_legacyMode() {
    this.v4.addCommand = this.addCommand.bind(this);
    this.addCommand = (...args) => {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand((0, commander_1.transformLegacyCommandArguments)(args));
        return this;
    };
    this.v4.exec = this.exec.bind(this);
    this.exec = (callback) => {
        this.v4.exec()
            .then((reply) => {
            if (!callback)
                return;
            callback(null, reply);
        })
            .catch((err) => {
            if (!callback) {
                // this.emit('error', err);
                return;
            }
            callback(err);
        });
    };
    for (const name of Object.keys(commands_1.default)) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_defineLegacyCommand).call(this, name);
    }
}, _RedisClientMultiCommand_defineLegacyCommand = function _RedisClientMultiCommand_defineLegacyCommand(name) {
    this.v4[name] = this[name].bind(this.v4);
    this[name] = (...args) => this.addCommand(name, args);
};
(0, commander_1.extendWithCommands)({
    BaseClass: RedisClientMultiCommand,
    commands: commands_1.default,
    executor: RedisClientMultiCommand.prototype.commandsExecutor
});
