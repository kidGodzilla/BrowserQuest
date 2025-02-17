import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(keys: string | Array<string>): RedisCommandArguments;
export { transformReplyBoolean as transformReply } from './generic-transformers';
