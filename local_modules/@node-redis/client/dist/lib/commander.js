"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformLegacyCommandArguments = exports.transformCommandReply = exports.encodeCommand = exports.transformCommandArguments = exports.extendWithModulesAndScripts = exports.extendWithCommands = void 0;
const command_options_1 = require("./command-options");
function extendWithCommands({ BaseClass, commands, executor }) {
    for (const [name, command] of Object.entries(commands)) {
        BaseClass.prototype[name] = function (...args) {
            return executor.call(this, command, args);
        };
    }
}
exports.extendWithCommands = extendWithCommands;
function extendWithModulesAndScripts(config) {
    let Commander;
    if (config.modules) {
        Commander = class extends config.BaseClass {
            constructor(...args) {
                super(...args);
                for (const module of Object.keys(config.modules)) {
                    this[module] = new this[module](this);
                }
            }
        };
        for (const [moduleName, module] of Object.entries(config.modules)) {
            Commander.prototype[moduleName] = class {
                constructor(self) {
                    Object.defineProperty(this, "self", {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: void 0
                    });
                    this.self = self;
                }
            };
            for (const [commandName, command] of Object.entries(module)) {
                Commander.prototype[moduleName].prototype[commandName] = function (...args) {
                    return config.modulesCommandsExecutor.call(this.self, command, args);
                };
            }
        }
    }
    if (config.scripts) {
        Commander !== null && Commander !== void 0 ? Commander : (Commander = class extends config.BaseClass {
        });
        for (const [name, script] of Object.entries(config.scripts)) {
            Commander.prototype[name] = function (...args) {
                return config.scriptsExecutor.call(this, script, args);
            };
        }
    }
    return (Commander !== null && Commander !== void 0 ? Commander : config.BaseClass);
}
exports.extendWithModulesAndScripts = extendWithModulesAndScripts;
function transformCommandArguments(command, args) {
    let options;
    if ((0, command_options_1.isCommandOptions)(args[0])) {
        options = args[0];
        args = args.slice(1);
    }
    return {
        args: command.transformArguments(...args),
        options
    };
}
exports.transformCommandArguments = transformCommandArguments;
const DELIMITER = '\r\n';
function* encodeCommand(args) {
    yield `*${args.length}${DELIMITER}`;
    for (let arg of args) {
        arg = arg || '';
        const byteLength = Buffer.byteLength(typeof arg === 'string' ? arg : '');
        yield `$${byteLength.toString()}${DELIMITER}`;
        yield arg;
        yield DELIMITER;
    }
}
exports.encodeCommand = encodeCommand;
function transformCommandReply(command, rawReply, preserved) {
    if (!command.transformReply) {
        return rawReply;
    }
    return command.transformReply(rawReply, preserved);
}
exports.transformCommandReply = transformCommandReply;
function transformLegacyCommandArguments(args, flat = []) {
    for (const arg of args) {
        if (Array.isArray(arg)) {
            transformLegacyCommandArguments(arg, flat);
            continue;
        }
        flat.push(typeof arg === 'number' ? arg.toString() : arg);
    }
    return flat;
}
exports.transformLegacyCommandArguments = transformLegacyCommandArguments;
