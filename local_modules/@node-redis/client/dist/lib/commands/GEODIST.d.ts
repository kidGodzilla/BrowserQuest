import { GeoUnits } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
export declare const IS_READ_ONLY = true;
export declare function transformArguments(key: string, member1: string, member2: string, unit?: GeoUnits): Array<string>;
export declare function transformReply(reply: string | null): number | null;
