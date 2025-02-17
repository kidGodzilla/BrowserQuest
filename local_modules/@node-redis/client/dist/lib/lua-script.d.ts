import { RedisCommand } from './commands';
export interface RedisScriptConfig extends RedisCommand {
    SCRIPT: string;
    NUMBER_OF_KEYS: number;
}
export interface SHA1 {
    SHA1: string;
}
export declare function defineScript(script: RedisScriptConfig): typeof script & SHA1;
export declare function scriptSha1(script: string): string;
