export declare function transformArguments(): Array<string>;
export declare enum RedisClusterNodeLinkStates {
    CONNECTED = "connected",
    DISCONNECTED = "disconnected"
}
interface RedisClusterNodeTransformedUrl {
    host: string;
    port: number;
    cport: number | null;
}
export interface RedisClusterReplicaNode extends RedisClusterNodeTransformedUrl {
    id: string;
    url: string;
    flags: Array<string>;
    pingSent: number;
    pongRecv: number;
    configEpoch: number;
    linkState: RedisClusterNodeLinkStates;
}
export interface RedisClusterMasterNode extends RedisClusterReplicaNode {
    slots: Array<{
        from: number;
        to: number;
    }>;
    replicas: Array<RedisClusterReplicaNode>;
}
export declare function transformReply(reply: string): Array<RedisClusterMasterNode>;
export {};
