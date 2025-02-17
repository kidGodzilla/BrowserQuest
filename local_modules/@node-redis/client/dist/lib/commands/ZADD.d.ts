import { ZMember } from './generic-transformers';
export declare const FIRST_KEY_INDEX = 1;
interface NX {
    NX?: true;
}
interface XX {
    XX?: true;
}
interface LT {
    LT?: true;
}
interface GT {
    GT?: true;
}
interface CH {
    CH?: true;
}
interface INCR {
    INCR?: true;
}
declare type ZAddOptions = (NX | (XX & LT & GT)) & CH & INCR;
export declare function transformArguments(key: string, members: ZMember | Array<ZMember>, options?: ZAddOptions): Array<string>;
export { transformReplyNumberInfinity as transformReply } from './generic-transformers';
