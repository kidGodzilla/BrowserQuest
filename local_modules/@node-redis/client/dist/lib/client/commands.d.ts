import * as ACL_CAT from '../commands/ACL_CAT';
import * as ACL_DELUSER from '../commands/ACL_DELUSER';
import * as ACL_GENPASS from '../commands/ACL_GENPASS';
import * as ACL_GETUSER from '../commands/ACL_GETUSER';
import * as ACL_LIST from '../commands/ACL_LIST';
import * as ACL_LOAD from '../commands/ACL_LOAD';
import * as ACL_LOG_RESET from '../commands/ACL_LOG_RESET';
import * as ACL_LOG from '../commands/ACL_LOG';
import * as ACL_SAVE from '../commands/ACL_SAVE';
import * as ACL_SETUSER from '../commands/ACL_SETUSER';
import * as ACL_USERS from '../commands/ACL_USERS';
import * as ACL_WHOAMI from '../commands/ACL_WHOAMI';
import * as ASKING from '../commands/ASKING';
import * as AUTH from '../commands/AUTH';
import * as BGREWRITEAOF from '../commands/BGREWRITEAOF';
import * as BGSAVE from '../commands/BGSAVE';
import * as CLIENT_ID from '../commands/CLIENT_ID';
import * as CLIENT_INFO from '../commands/CLIENT_INFO';
import * as CLUSTER_ADDSLOTS from '../commands/CLUSTER_ADDSLOTS';
import * as CLUSTER_FLUSHSLOTS from '../commands/CLUSTER_FLUSHSLOTS';
import * as CLUSTER_INFO from '../commands/CLUSTER_INFO';
import * as CLUSTER_NODES from '../commands/CLUSTER_NODES';
import * as CLUSTER_MEET from '../commands/CLUSTER_MEET';
import * as CLUSTER_RESET from '../commands/CLUSTER_RESET';
import * as CLUSTER_SETSLOT from '../commands/CLUSTER_SETSLOT';
import * as CLUSTER_SLOTS from '../commands/CLUSTER_SLOTS';
import * as COMMAND_COUNT from '../commands/COMMAND_COUNT';
import * as COMMAND_GETKEYS from '../commands/COMMAND_GETKEYS';
import * as COMMAND_INFO from '../commands/COMMAND_INFO';
import * as COMMAND from '../commands/COMMAND';
import * as CONFIG_GET from '../commands/CONFIG_GET';
import * as CONFIG_RESETASTAT from '../commands/CONFIG_RESETSTAT';
import * as CONFIG_REWRITE from '../commands/CONFIG_REWRITE';
import * as CONFIG_SET from '../commands/CONFIG_SET';
import * as DBSIZE from '../commands/DBSIZE';
import * as DISCARD from '../commands/DISCARD';
import * as ECHO from '../commands/ECHO';
import * as FAILOVER from '../commands/FAILOVER';
import * as FLUSHALL from '../commands/FLUSHALL';
import * as FLUSHDB from '../commands/FLUSHDB';
import * as HELLO from '../commands/HELLO';
import * as INFO from '../commands/INFO';
import * as KEYS from '../commands/KEYS';
import * as LASTSAVE from '../commands/LASTSAVE';
import * as LOLWUT from '../commands/LOLWUT';
import * as MEMOERY_DOCTOR from '../commands/MEMORY_DOCTOR';
import * as MEMORY_MALLOC_STATS from '../commands/MEMORY_MALLOC-STATS';
import * as MEMORY_PURGE from '../commands/MEMORY_PURGE';
import * as MEMORY_STATS from '../commands/MEMORY_STATS';
import * as MEMORY_USAGE from '../commands/MEMORY_USAGE';
import * as MODULE_LIST from '../commands/MODULE_LIST';
import * as MODULE_LOAD from '../commands/MODULE_LOAD';
import * as MODULE_UNLOAD from '../commands/MODULE_UNLOAD';
import * as MOVE from '../commands/MOVE';
import * as PING from '../commands/PING';
import * as PUBSUB_CHANNELS from '../commands/PUBSUB_CHANNELS';
import * as PUBSUB_NUMPAT from '../commands/PUBSUB_NUMPAT';
import * as PUBSUB_NUMSUB from '../commands/PUBSUB_NUMSUB';
import * as RANDOMKEY from '../commands/RANDOMKEY';
import * as READONLY from '../commands/READONLY';
import * as READWRITE from '../commands/READWRITE';
import * as REPLICAOF from '../commands/REPLICAOF';
import * as RESTORE_ASKING from '../commands/RESTORE-ASKING';
import * as ROLE from '../commands/ROLE';
import * as SAVE from '../commands/SAVE';
import * as SCAN from '../commands/SCAN';
import * as SCRIPT_DEBUG from '../commands/SCRIPT_DEBUG';
import * as SCRIPT_EXISTS from '../commands/SCRIPT_EXISTS';
import * as SCRIPT_FLUSH from '../commands/SCRIPT_FLUSH';
import * as SCRIPT_KILL from '../commands/SCRIPT_KILL';
import * as SCRIPT_LOAD from '../commands/SCRIPT_LOAD';
import * as SHUTDOWN from '../commands/SHUTDOWN';
import * as SWAPDB from '../commands/SWAPDB';
import * as TIME from '../commands/TIME';
import * as UNWATCH from '../commands/UNWATCH';
import * as WAIT from '../commands/WAIT';
declare const _default: {
    ACL_CAT: typeof ACL_CAT;
    aclCat: typeof ACL_CAT;
    ACL_DELUSER: typeof ACL_DELUSER;
    aclDelUser: typeof ACL_DELUSER;
    ACL_GENPASS: typeof ACL_GENPASS;
    aclGenPass: typeof ACL_GENPASS;
    ACL_GETUSER: typeof ACL_GETUSER;
    aclGetUser: typeof ACL_GETUSER;
    ACL_LIST: typeof ACL_LIST;
    aclList: typeof ACL_LIST;
    ACL_LOAD: typeof ACL_LOAD;
    aclLoad: typeof ACL_LOAD;
    ACL_LOG_RESET: typeof ACL_LOG_RESET;
    aclLogReset: typeof ACL_LOG_RESET;
    ACL_LOG: typeof ACL_LOG;
    aclLog: typeof ACL_LOG;
    ACL_SAVE: typeof ACL_SAVE;
    aclSave: typeof ACL_SAVE;
    ACL_SETUSER: typeof ACL_SETUSER;
    aclSetUser: typeof ACL_SETUSER;
    ACL_USERS: typeof ACL_USERS;
    aclUsers: typeof ACL_USERS;
    ACL_WHOAMI: typeof ACL_WHOAMI;
    aclWhoAmI: typeof ACL_WHOAMI;
    ASKING: typeof ASKING;
    asking: typeof ASKING;
    AUTH: typeof AUTH;
    auth: typeof AUTH;
    BGREWRITEAOF: typeof BGREWRITEAOF;
    bgRewriteAof: typeof BGREWRITEAOF;
    BGSAVE: typeof BGSAVE;
    bgSave: typeof BGSAVE;
    CLIENT_ID: typeof CLIENT_ID;
    clientId: typeof CLIENT_ID;
    CLIENT_INFO: typeof CLIENT_INFO;
    clientInfo: typeof CLIENT_INFO;
    CLUSTER_ADDSLOTS: typeof CLUSTER_ADDSLOTS;
    clusterAddSlots: typeof CLUSTER_ADDSLOTS;
    CLUSTER_FLUSHSLOTS: typeof CLUSTER_FLUSHSLOTS;
    clusterFlushSlots: typeof CLUSTER_FLUSHSLOTS;
    CLUSTER_INFO: typeof CLUSTER_INFO;
    clusterInfo: typeof CLUSTER_INFO;
    CLUSTER_NODES: typeof CLUSTER_NODES;
    clusterNodes: typeof CLUSTER_NODES;
    CLUSTER_MEET: typeof CLUSTER_MEET;
    clusterMeet: typeof CLUSTER_MEET;
    CLUSTER_RESET: typeof CLUSTER_RESET;
    clusterReset: typeof CLUSTER_RESET;
    CLUSTER_SETSLOT: typeof CLUSTER_SETSLOT;
    clusterSetSlot: typeof CLUSTER_SETSLOT;
    CLUSTER_SLOTS: typeof CLUSTER_SLOTS;
    clusterSlots: typeof CLUSTER_SLOTS;
    COMMAND_COUNT: typeof COMMAND_COUNT;
    commandCount: typeof COMMAND_COUNT;
    COMMAND_GETKEYS: typeof COMMAND_GETKEYS;
    commandGetKeys: typeof COMMAND_GETKEYS;
    COMMAND_INFO: typeof COMMAND_INFO;
    commandInfo: typeof COMMAND_INFO;
    COMMAND: typeof COMMAND;
    command: typeof COMMAND;
    CONFIG_GET: typeof CONFIG_GET;
    configGet: typeof CONFIG_GET;
    CONFIG_RESETASTAT: typeof CONFIG_RESETASTAT;
    configResetStat: typeof CONFIG_RESETASTAT;
    CONFIG_REWRITE: typeof CONFIG_REWRITE;
    configRewrite: typeof CONFIG_REWRITE;
    CONFIG_SET: typeof CONFIG_SET;
    configSet: typeof CONFIG_SET;
    DBSIZE: typeof DBSIZE;
    dbSize: typeof DBSIZE;
    DISCARD: typeof DISCARD;
    discard: typeof DISCARD;
    ECHO: typeof ECHO;
    echo: typeof ECHO;
    FAILOVER: typeof FAILOVER;
    failover: typeof FAILOVER;
    FLUSHALL: typeof FLUSHALL;
    flushAll: typeof FLUSHALL;
    FLUSHDB: typeof FLUSHDB;
    flushDb: typeof FLUSHDB;
    HELLO: typeof HELLO;
    hello: typeof HELLO;
    INFO: typeof INFO;
    info: typeof INFO;
    KEYS: typeof KEYS;
    keys: typeof KEYS;
    LASTSAVE: typeof LASTSAVE;
    lastSave: typeof LASTSAVE;
    LOLWUT: typeof LOLWUT;
    lolwut: typeof LOLWUT;
    MEMOERY_DOCTOR: typeof MEMOERY_DOCTOR;
    memoryDoctor: typeof MEMOERY_DOCTOR;
    'MEMORY_MALLOC-STATS': typeof MEMORY_MALLOC_STATS;
    memoryMallocStats: typeof MEMORY_MALLOC_STATS;
    MEMORY_PURGE: typeof MEMORY_PURGE;
    memoryPurge: typeof MEMORY_PURGE;
    MEMORY_STATS: typeof MEMORY_STATS;
    memoryStats: typeof MEMORY_STATS;
    MEMORY_USAGE: typeof MEMORY_USAGE;
    memoryUsage: typeof MEMORY_USAGE;
    MODULE_LIST: typeof MODULE_LIST;
    moduleList: typeof MODULE_LIST;
    MODULE_LOAD: typeof MODULE_LOAD;
    moduleLoad: typeof MODULE_LOAD;
    MODULE_UNLOAD: typeof MODULE_UNLOAD;
    moduleUnload: typeof MODULE_UNLOAD;
    MOVE: typeof MOVE;
    move: typeof MOVE;
    PING: typeof PING;
    ping: typeof PING;
    PUBSUB_CHANNELS: typeof PUBSUB_CHANNELS;
    pubSubChannels: typeof PUBSUB_CHANNELS;
    PUBSUB_NUMPAT: typeof PUBSUB_NUMPAT;
    pubSubNumPat: typeof PUBSUB_NUMPAT;
    PUBSUB_NUMSUB: typeof PUBSUB_NUMSUB;
    pubSubNumSub: typeof PUBSUB_NUMSUB;
    RANDOMKEY: typeof RANDOMKEY;
    randomKey: typeof RANDOMKEY;
    READONLY: typeof READONLY;
    readonly: typeof READONLY;
    READWRITE: typeof READWRITE;
    readwrite: typeof READWRITE;
    REPLICAOF: typeof REPLICAOF;
    replicaOf: typeof REPLICAOF;
    'RESTORE-ASKING': typeof RESTORE_ASKING;
    restoreAsking: typeof RESTORE_ASKING;
    ROLE: typeof ROLE;
    role: typeof ROLE;
    SAVE: typeof SAVE;
    save: typeof SAVE;
    SCAN: typeof SCAN;
    scan: typeof SCAN;
    SCRIPT_DEBUG: typeof SCRIPT_DEBUG;
    scriptDebug: typeof SCRIPT_DEBUG;
    SCRIPT_EXISTS: typeof SCRIPT_EXISTS;
    scriptExists: typeof SCRIPT_EXISTS;
    SCRIPT_FLUSH: typeof SCRIPT_FLUSH;
    scriptFlush: typeof SCRIPT_FLUSH;
    SCRIPT_KILL: typeof SCRIPT_KILL;
    scriptKill: typeof SCRIPT_KILL;
    SCRIPT_LOAD: typeof SCRIPT_LOAD;
    scriptLoad: typeof SCRIPT_LOAD;
    SHUTDOWN: typeof SHUTDOWN;
    shutdown: typeof SHUTDOWN;
    SWAPDB: typeof SWAPDB;
    swapDb: typeof SWAPDB;
    TIME: typeof TIME;
    time: typeof TIME;
    UNWATCH: typeof UNWATCH;
    unwatch: typeof UNWATCH;
    WAIT: typeof WAIT;
    wait: typeof WAIT;
    APPEND: typeof import("../commands/APPEND");
    append: typeof import("../commands/APPEND");
    BITCOUNT: typeof import("../commands/BITCOUNT");
    bitCount: typeof import("../commands/BITCOUNT");
    BITFIELD: typeof import("../commands/BITFIELD");
    bitField: typeof import("../commands/BITFIELD");
    BITOP: typeof import("../commands/BITOP");
    bitOp: typeof import("../commands/BITOP");
    BITPOS: typeof import("../commands/BITPOS");
    bitPos: typeof import("../commands/BITPOS");
    BLMOVE: typeof import("../commands/BLMOVE");
    blMove: typeof import("../commands/BLMOVE");
    BLPOP: typeof import("../commands/BLPOP");
    blPop: typeof import("../commands/BLPOP");
    BRPOP: typeof import("../commands/BRPOP");
    brPop: typeof import("../commands/BRPOP");
    BRPOPLPUSH: typeof import("../commands/BRPOPLPUSH");
    brPopLPush: typeof import("../commands/BRPOPLPUSH");
    BZPOPMAX: typeof import("../commands/BZPOPMAX");
    bzPopMax: typeof import("../commands/BZPOPMAX");
    BZPOPMIN: typeof import("../commands/BZPOPMIN");
    bzPopMin: typeof import("../commands/BZPOPMIN");
    COPY: typeof import("../commands/COPY");
    copy: typeof import("../commands/COPY");
    DECR: typeof import("../commands/DECR");
    decr: typeof import("../commands/DECR");
    DECRBY: typeof import("../commands/DECRBY");
    decrBy: typeof import("../commands/DECRBY");
    DEL: typeof import("../commands/DEL");
    del: typeof import("../commands/DEL");
    DUMP: typeof import("../commands/DUMP");
    dump: typeof import("../commands/DUMP");
    EVAL: typeof import("../commands/EVAL");
    eval: typeof import("../commands/EVAL");
    EVALSHA: typeof import("../commands/EVALSHA");
    evalSha: typeof import("../commands/EVALSHA");
    EXISTS: typeof import("../commands/EXISTS");
    exists: typeof import("../commands/EXISTS");
    EXPIRE: typeof import("../commands/EXPIRE");
    expire: typeof import("../commands/EXPIRE");
    EXPIREAT: typeof import("../commands/EXPIREAT");
    expireAt: typeof import("../commands/EXPIREAT");
    GEOADD: typeof import("../commands/GEOADD");
    geoAdd: typeof import("../commands/GEOADD");
    GEODIST: typeof import("../commands/GEODIST");
    geoDist: typeof import("../commands/GEODIST");
    GEOHASH: typeof import("../commands/GEOHASH");
    geoHash: typeof import("../commands/GEOHASH");
    GEOPOS: typeof import("../commands/GEOPOS");
    geoPos: typeof import("../commands/GEOPOS");
    GEOSEARCH_WITH: typeof import("../commands/GEOSEARCH_WITH");
    geoSearchWith: typeof import("../commands/GEOSEARCH_WITH");
    GEOSEARCH: typeof import("../commands/GEOSEARCH");
    geoSearch: typeof import("../commands/GEOSEARCH");
    GEOSEARCHSTORE: typeof import("../commands/GEOSEARCHSTORE");
    geoSearchStore: typeof import("../commands/GEOSEARCHSTORE");
    GET_BUFFER: typeof import("../commands/GET_BUFFER");
    getBuffer: typeof import("../commands/GET_BUFFER");
    GET: typeof import("../commands/GET");
    get: typeof import("../commands/GET");
    GETBIT: typeof import("../commands/GETBIT");
    getBit: typeof import("../commands/GETBIT");
    GETDEL: typeof import("../commands/GETDEL");
    getDel: typeof import("../commands/GETDEL");
    GETEX: typeof import("../commands/GETEX");
    getEx: typeof import("../commands/GETEX");
    GETRANGE: typeof import("../commands/GETRANGE");
    getRange: typeof import("../commands/GETRANGE");
    GETSET: typeof import("../commands/GETSET");
    getSet: typeof import("../commands/GETSET");
    HDEL: typeof import("../commands/HDEL");
    hDel: typeof import("../commands/HDEL");
    HEXISTS: typeof import("../commands/HEXISTS");
    hExists: typeof import("../commands/HEXISTS");
    HGET: typeof import("../commands/HGET");
    hGet: typeof import("../commands/HGET");
    HGETALL: typeof import("../commands/HGETALL");
    hGetAll: typeof import("../commands/HGETALL");
    HINCRBY: typeof import("../commands/HINCRBY");
    hIncrBy: typeof import("../commands/HINCRBY");
    HINCRBYFLOAT: typeof import("../commands/HINCRBYFLOAT");
    hIncrByFloat: typeof import("../commands/HINCRBYFLOAT");
    HKEYS: typeof import("../commands/HKEYS");
    hKeys: typeof import("../commands/HKEYS");
    HLEN: typeof import("../commands/HLEN");
    hLen: typeof import("../commands/HLEN");
    HMGET: typeof import("../commands/HMGET");
    hmGet: typeof import("../commands/HMGET");
    HRANDFIELD_COUNT_WITHVALUES: typeof import("../commands/HRANDFIELD_COUNT_WITHVALUES");
    hRandFieldCountWithValues: typeof import("../commands/HRANDFIELD_COUNT_WITHVALUES");
    HRANDFIELD_COUNT: typeof import("../commands/HRANDFIELD_COUNT");
    hRandFieldCount: typeof import("../commands/HRANDFIELD_COUNT");
    HRANDFIELD: typeof import("../commands/HRANDFIELD");
    hRandField: typeof import("../commands/HRANDFIELD");
    HSCAN: typeof import("../commands/HSCAN");
    hScan: typeof import("../commands/HSCAN");
    HSET: typeof import("../commands/HSET");
    hSet: typeof import("../commands/HSET");
    HSETNX: typeof import("../commands/HSETNX");
    hSetNX: typeof import("../commands/HSETNX");
    HSTRLEN: typeof import("../commands/HSTRLEN");
    hStrLen: typeof import("../commands/HSTRLEN");
    HVALS: typeof import("../commands/HVALS");
    hVals: typeof import("../commands/HVALS");
    INCR: typeof import("../commands/INCR");
    incr: typeof import("../commands/INCR");
    INCRBY: typeof import("../commands/INCRBY");
    incrBy: typeof import("../commands/INCRBY");
    INCRBYFLOAT: typeof import("../commands/INCRBYFLOAT");
    incrByFloat: typeof import("../commands/INCRBYFLOAT");
    LINDEX: typeof import("../commands/LINDEX");
    lIndex: typeof import("../commands/LINDEX");
    LINSERT: typeof import("../commands/LINSERT");
    lInsert: typeof import("../commands/LINSERT");
    LLEN: typeof import("../commands/LLEN");
    lLen: typeof import("../commands/LLEN");
    LMOVE: typeof import("../commands/LMOVE");
    lMove: typeof import("../commands/LMOVE");
    LPOP_COUNT: typeof import("../commands/LPOP_COUNT");
    lPopCount: typeof import("../commands/LPOP_COUNT");
    LPOP: typeof import("../commands/LPOP");
    lPop: typeof import("../commands/LPOP");
    LPOS_COUNT: typeof import("../commands/LPOS_COUNT");
    lPosCount: typeof import("../commands/LPOS_COUNT");
    LPOS: typeof import("../commands/LPOS");
    lPos: typeof import("../commands/LPOS");
    LPUSH: typeof import("../commands/LPUSH");
    lPush: typeof import("../commands/LPUSH");
    LPUSHX: typeof import("../commands/LPUSHX");
    lPushX: typeof import("../commands/LPUSHX");
    LRANGE: typeof import("../commands/LRANGE");
    lRange: typeof import("../commands/LRANGE");
    LREM: typeof import("../commands/LREM");
    lRem: typeof import("../commands/LREM");
    LSET: typeof import("../commands/LSET");
    lSet: typeof import("../commands/LSET");
    LTRIM: typeof import("../commands/LTRIM");
    lTrim: typeof import("../commands/LTRIM");
    MGET: typeof import("../commands/MGET");
    mGet: typeof import("../commands/MGET");
    MIGRATE: typeof import("../commands/MIGRATE");
    migrate: typeof import("../commands/MIGRATE");
    MSET: typeof import("../commands/MSET");
    mSet: typeof import("../commands/MSET");
    MSETNX: typeof import("../commands/MSETNX");
    mSetNX: typeof import("../commands/MSETNX");
    PERSIST: typeof import("../commands/PERSIST");
    persist: typeof import("../commands/PERSIST");
    PEXPIRE: typeof import("../commands/PEXPIRE");
    pExpire: typeof import("../commands/PEXPIRE");
    PEXPIREAT: typeof import("../commands/PEXPIREAT");
    pExpireAt: typeof import("../commands/PEXPIREAT");
    PFADD: typeof import("../commands/PFADD");
    pfAdd: typeof import("../commands/PFADD");
    PFCOUNT: typeof import("../commands/PFCOUNT");
    pfCount: typeof import("../commands/PFCOUNT");
    PFMERGE: typeof import("../commands/PFMERGE");
    pfMerge: typeof import("../commands/PFMERGE");
    PSETEX: typeof import("../commands/PSETEX");
    pSetEx: typeof import("../commands/PSETEX");
    PTTL: typeof import("../commands/PTTL");
    pTTL: typeof import("../commands/PTTL");
    PUBLISH: typeof import("../commands/PUBLISH");
    publish: typeof import("../commands/PUBLISH");
    RENAME: typeof import("../commands/RENAME");
    rename: typeof import("../commands/RENAME");
    RENAMENX: typeof import("../commands/RENAMENX");
    renameNX: typeof import("../commands/RENAMENX");
    RPOP_COUNT: typeof import("../commands/RPOP_COUNT");
    rPopCount: typeof import("../commands/RPOP_COUNT");
    RPOP: typeof import("../commands/RPOP");
    rPop: typeof import("../commands/RPOP");
    RPOPLPUSH: typeof import("../commands/RPOPLPUSH");
    rPopLPush: typeof import("../commands/RPOPLPUSH");
    RPUSH: typeof import("../commands/RPUSH");
    rPush: typeof import("../commands/RPUSH");
    RPUSHX: typeof import("../commands/RPUSHX");
    rPushX: typeof import("../commands/RPUSHX");
    SADD: typeof import("../commands/SADD");
    sAdd: typeof import("../commands/SADD");
    SCARD: typeof import("../commands/SCARD");
    sCard: typeof import("../commands/SCARD");
    SDIFF: typeof import("../commands/SDIFF");
    sDiff: typeof import("../commands/SDIFF");
    SDIFFSTORE: typeof import("../commands/SDIFFSTORE");
    sDiffStore: typeof import("../commands/SDIFFSTORE");
    SINTER: typeof import("../commands/SINTER");
    sInter: typeof import("../commands/SINTER");
    SINTERSTORE: typeof import("../commands/SINTERSTORE");
    sInterStore: typeof import("../commands/SINTERSTORE");
    SET: typeof import("../commands/SET");
    set: typeof import("../commands/SET");
    SETBIT: typeof import("../commands/SETBIT");
    setBit: typeof import("../commands/SETBIT");
    SETEX: typeof import("../commands/SETEX");
    setEx: typeof import("../commands/SETEX");
    SETNX: typeof import("../commands/SETNX");
    setNX: typeof import("../commands/SETNX");
    SETRANGE: typeof import("../commands/SETRANGE");
    setRange: typeof import("../commands/SETRANGE");
    SISMEMBER: typeof import("../commands/SISMEMBER");
    sIsMember: typeof import("../commands/SISMEMBER");
    SMEMBERS: typeof import("../commands/SMEMBERS");
    sMembers: typeof import("../commands/SMEMBERS");
    SMISMEMBER: typeof import("../commands/SMISMEMBER");
    smIsMember: typeof import("../commands/SMISMEMBER");
    SMOVE: typeof import("../commands/SMOVE");
    sMove: typeof import("../commands/SMOVE");
    SORT: typeof import("../commands/SORT");
    sort: typeof import("../commands/SORT");
    SPOP: typeof import("../commands/SPOP");
    sPop: typeof import("../commands/SPOP");
    SRANDMEMBER_COUNT: typeof import("../commands/SRANDMEMBER_COUNT");
    sRandMemberCount: typeof import("../commands/SRANDMEMBER_COUNT");
    SRANDMEMBER: typeof import("../commands/SRANDMEMBER");
    sRandMember: typeof import("../commands/SRANDMEMBER");
    SREM: typeof import("../commands/SREM");
    sRem: typeof import("../commands/SREM");
    SSCAN: typeof import("../commands/SSCAN");
    sScan: typeof import("../commands/SSCAN");
    STRLEN: typeof import("../commands/STRLEN");
    strLen: typeof import("../commands/STRLEN");
    SUNION: typeof import("../commands/SUNION");
    sUnion: typeof import("../commands/SUNION");
    SUNIONSTORE: typeof import("../commands/SUNIONSTORE");
    sUnionStore: typeof import("../commands/SUNIONSTORE");
    TOUCH: typeof import("../commands/TOUCH");
    touch: typeof import("../commands/TOUCH");
    TTL: typeof import("../commands/TTL");
    ttl: typeof import("../commands/TTL");
    TYPE: typeof import("../commands/TYPE");
    type: typeof import("../commands/TYPE");
    UNLINK: typeof import("../commands/UNLINK");
    unlink: typeof import("../commands/UNLINK");
    WATCH: typeof import("../commands/WATCH");
    watch: typeof import("../commands/WATCH");
    XACK: typeof import("../commands/XACK");
    xAck: typeof import("../commands/XACK");
    XADD: typeof import("../commands/XADD");
    xAdd: typeof import("../commands/XADD");
    XAUTOCLAIM_JUSTID: typeof import("../commands/XAUTOCLAIM_JUSTID");
    xAutoClaimJustId: typeof import("../commands/XAUTOCLAIM_JUSTID");
    XAUTOCLAIM: typeof import("../commands/XAUTOCLAIM");
    xAutoClaim: typeof import("../commands/XAUTOCLAIM");
    XCLAIM: typeof import("../commands/XCLAIM");
    xClaim: typeof import("../commands/XCLAIM");
    XCLAIM_JUSTID: typeof import("../commands/XCLAIM_JUSTID");
    xClaimJustId: typeof import("../commands/XCLAIM_JUSTID");
    XDEL: typeof import("../commands/XDEL");
    xDel: typeof import("../commands/XDEL");
    XGROUP_CREATE: typeof import("../commands/XGROUP_CREATE");
    xGroupCreate: typeof import("../commands/XGROUP_CREATE");
    XGROUP_CREATECONSUMER: typeof import("../commands/XGROUP_CREATECONSUMER");
    xGroupCreateConsumer: typeof import("../commands/XGROUP_CREATECONSUMER");
    XGROUP_DELCONSUMER: typeof import("../commands/XGROUP_DELCONSUMER");
    xGroupDelConsumer: typeof import("../commands/XGROUP_DELCONSUMER");
    XGROUP_DESTROY: typeof import("../commands/XGROUP_DESTROY");
    xGroupDestroy: typeof import("../commands/XGROUP_DESTROY");
    XGROUP_SETID: typeof import("../commands/XGROUP_SETID");
    xGroupSetId: typeof import("../commands/XGROUP_SETID");
    XINFO_CONSUMERS: typeof import("../commands/XINFO_CONSUMERS");
    xInfoConsumers: typeof import("../commands/XINFO_CONSUMERS");
    XINFO_GROUPS: typeof import("../commands/XINFO_GROUPS");
    xInfoGroups: typeof import("../commands/XINFO_GROUPS");
    XINFO_STREAM: typeof import("../commands/XINFO_STREAM");
    xInfoStream: typeof import("../commands/XINFO_STREAM");
    XLEN: typeof import("../commands/XLEN");
    xLen: typeof import("../commands/XLEN");
    XPENDING_RANGE: typeof import("../commands/XPENDING_RANGE");
    xPendingRange: typeof import("../commands/XPENDING_RANGE");
    XPENDING: typeof import("../commands/XPENDING");
    xPending: typeof import("../commands/XPENDING");
    XRANGE: typeof import("../commands/XRANGE");
    xRange: typeof import("../commands/XRANGE");
    XREAD: typeof import("../commands/XREAD");
    xRead: typeof import("../commands/XREAD");
    XREADGROUP: typeof import("../commands/XREADGROUP");
    xReadGroup: typeof import("../commands/XREADGROUP");
    XREVRANGE: typeof import("../commands/XREVRANGE");
    xRevRange: typeof import("../commands/XREVRANGE");
    XTRIM: typeof import("../commands/XTRIM");
    xTrim: typeof import("../commands/XTRIM");
    ZADD: typeof import("../commands/ZADD");
    zAdd: typeof import("../commands/ZADD");
    ZCARD: typeof import("../commands/ZCARD");
    zCard: typeof import("../commands/ZCARD");
    ZCOUNT: typeof import("../commands/ZCOUNT");
    zCount: typeof import("../commands/ZCOUNT");
    ZDIFF_WITHSCORES: typeof import("../commands/ZDIFF_WITHSCORES");
    zDiffWithScores: typeof import("../commands/ZDIFF_WITHSCORES");
    ZDIFF: typeof import("../commands/ZDIFF");
    zDiff: typeof import("../commands/ZDIFF");
    ZDIFFSTORE: typeof import("../commands/ZDIFFSTORE");
    zDiffStore: typeof import("../commands/ZDIFFSTORE");
    ZINCRBY: typeof import("../commands/ZINCRBY");
    zIncrBy: typeof import("../commands/ZINCRBY");
    ZINTER_WITHSCORES: typeof import("../commands/ZINTER_WITHSCORES");
    zInterWithScores: typeof import("../commands/ZINTER_WITHSCORES");
    ZINTER: typeof import("../commands/ZINTER");
    zInter: typeof import("../commands/ZINTER");
    ZINTERSTORE: typeof import("../commands/ZINTERSTORE");
    zInterStore: typeof import("../commands/ZINTERSTORE");
    ZLEXCOUNT: typeof import("../commands/ZLEXCOUNT");
    zLexCount: typeof import("../commands/ZLEXCOUNT");
    ZMSCORE: typeof import("../commands/ZMSCORE");
    zmScore: typeof import("../commands/ZMSCORE");
    ZPOPMAX_COUNT: typeof import("../commands/ZPOPMAX_COUNT");
    zPopMaxCount: typeof import("../commands/ZPOPMAX_COUNT");
    ZPOPMAX: typeof import("../commands/ZPOPMAX");
    zPopMax: typeof import("../commands/ZPOPMAX");
    ZPOPMIN_COUNT: typeof import("../commands/ZPOPMIN_COUNT");
    zPopMinCount: typeof import("../commands/ZPOPMIN_COUNT");
    ZPOPMIN: typeof import("../commands/ZPOPMIN");
    zPopMin: typeof import("../commands/ZPOPMIN");
    ZRANDMEMBER_COUNT_WITHSCORES: typeof import("../commands/ZRANDMEMBER_COUNT_WITHSCORES");
    zRandMemberCountWithScores: typeof import("../commands/ZRANDMEMBER_COUNT_WITHSCORES");
    ZRANDMEMBER_COUNT: typeof import("../commands/ZRANDMEMBER_COUNT");
    zRandMemberCount: typeof import("../commands/ZRANDMEMBER_COUNT");
    ZRANDMEMBER: typeof import("../commands/ZRANDMEMBER");
    zRandMember: typeof import("../commands/ZRANDMEMBER");
    ZRANGE_WITHSCORES: typeof import("../commands/ZRANGE_WITHSCORES");
    zRangeWithScores: typeof import("../commands/ZRANGE_WITHSCORES");
    ZRANGE: typeof import("../commands/ZRANGE");
    zRange: typeof import("../commands/ZRANGE");
    ZRANGEBYLEX: typeof import("../commands/ZRANGEBYLEX");
    zRangeByLex: typeof import("../commands/ZRANGEBYLEX");
    ZRANGEBYSCORE_WITHSCORES: typeof import("../commands/ZRANGEBYSCORE_WITHSCORES");
    zRangeByScoreWithScores: typeof import("../commands/ZRANGEBYSCORE_WITHSCORES");
    ZRANGEBYSCORE: typeof import("../commands/ZRANGEBYSCORE");
    zRangeByScore: typeof import("../commands/ZRANGEBYSCORE");
    ZRANGESTORE: typeof import("../commands/ZRANGESTORE");
    zRangeStore: typeof import("../commands/ZRANGESTORE");
    ZRANK: typeof import("../commands/ZRANK");
    zRank: typeof import("../commands/ZRANK");
    ZREM: typeof import("../commands/ZREM");
    zRem: typeof import("../commands/ZREM");
    ZREMRANGEBYLEX: typeof import("../commands/ZREMRANGEBYLEX");
    zRemRangeByLex: typeof import("../commands/ZREMRANGEBYLEX");
    ZREMRANGEBYRANK: typeof import("../commands/ZREMRANGEBYRANK");
    zRemRangeByRank: typeof import("../commands/ZREMRANGEBYRANK");
    ZREMRANGEBYSCORE: typeof import("../commands/ZREMRANGEBYSCORE");
    zRemRangeByScore: typeof import("../commands/ZREMRANGEBYSCORE");
    ZREVRANK: typeof import("../commands/ZREVRANK");
    zRevRank: typeof import("../commands/ZREVRANK");
    ZSCAN: typeof import("../commands/ZSCAN");
    zScan: typeof import("../commands/ZSCAN");
    ZSCORE: typeof import("../commands/ZSCORE");
    zScore: typeof import("../commands/ZSCORE");
    ZUNION_WITHSCORES: typeof import("../commands/ZUNION_WITHSCORES");
    zUnionWithScores: typeof import("../commands/ZUNION_WITHSCORES");
    ZUNION: typeof import("../commands/ZUNION");
    zUnion: typeof import("../commands/ZUNION");
    ZUNIONSTORE: typeof import("../commands/ZUNIONSTORE");
    zUnionStore: typeof import("../commands/ZUNIONSTORE");
};
export default _default;
