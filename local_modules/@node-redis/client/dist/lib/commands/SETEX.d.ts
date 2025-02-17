/// <reference types="node" />
import { RedisCommandArguments } from '.';
export declare const FIRST_KEY_INDEX = 1;
export declare function transformArguments(key: string | Buffer, seconds: number, value: string): RedisCommandArguments;
export declare function transformReply(): string;
