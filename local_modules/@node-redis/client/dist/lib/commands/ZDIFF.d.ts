import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 2;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(keys: Array<string> | string): RedisCommandArguments;
export declare function transformReply(): Array<string>;
