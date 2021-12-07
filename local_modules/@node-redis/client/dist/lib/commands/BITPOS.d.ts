import { BitValue } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, bit: BitValue, start?: number, end?: number): Array<string>;
export declare function transformReply(): number;
