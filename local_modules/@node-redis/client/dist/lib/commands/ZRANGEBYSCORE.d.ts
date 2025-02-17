import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export interface ZRangeByScoreOptions {
    LIMIT?: {
        offset: number;
        count: number;
    };
}
export declare function transformArguments(key: string, min: number | string, max: number | string, options?: ZRangeByScoreOptions): RedisCommandArguments;
export declare function transformReply(): Array<string>;
