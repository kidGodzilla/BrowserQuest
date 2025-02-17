"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("../cluster/commands");
const ACL_CAT = require("../commands/ACL_CAT");
const ACL_DELUSER = require("../commands/ACL_DELUSER");
const ACL_GENPASS = require("../commands/ACL_GENPASS");
const ACL_GETUSER = require("../commands/ACL_GETUSER");
const ACL_LIST = require("../commands/ACL_LIST");
const ACL_LOAD = require("../commands/ACL_LOAD");
const ACL_LOG_RESET = require("../commands/ACL_LOG_RESET");
const ACL_LOG = require("../commands/ACL_LOG");
const ACL_SAVE = require("../commands/ACL_SAVE");
const ACL_SETUSER = require("../commands/ACL_SETUSER");
const ACL_USERS = require("../commands/ACL_USERS");
const ACL_WHOAMI = require("../commands/ACL_WHOAMI");
const ASKING = require("../commands/ASKING");
const AUTH = require("../commands/AUTH");
const BGREWRITEAOF = require("../commands/BGREWRITEAOF");
const BGSAVE = require("../commands/BGSAVE");
const CLIENT_ID = require("../commands/CLIENT_ID");
const CLIENT_INFO = require("../commands/CLIENT_INFO");
const CLUSTER_ADDSLOTS = require("../commands/CLUSTER_ADDSLOTS");
const CLUSTER_FLUSHSLOTS = require("../commands/CLUSTER_FLUSHSLOTS");
const CLUSTER_INFO = require("../commands/CLUSTER_INFO");
const CLUSTER_NODES = require("../commands/CLUSTER_NODES");
const CLUSTER_MEET = require("../commands/CLUSTER_MEET");
const CLUSTER_RESET = require("../commands/CLUSTER_RESET");
const CLUSTER_SETSLOT = require("../commands/CLUSTER_SETSLOT");
const CLUSTER_SLOTS = require("../commands/CLUSTER_SLOTS");
const COMMAND_COUNT = require("../commands/COMMAND_COUNT");
const COMMAND_GETKEYS = require("../commands/COMMAND_GETKEYS");
const COMMAND_INFO = require("../commands/COMMAND_INFO");
const COMMAND = require("../commands/COMMAND");
const CONFIG_GET = require("../commands/CONFIG_GET");
const CONFIG_RESETASTAT = require("../commands/CONFIG_RESETSTAT");
const CONFIG_REWRITE = require("../commands/CONFIG_REWRITE");
const CONFIG_SET = require("../commands/CONFIG_SET");
const DBSIZE = require("../commands/DBSIZE");
const DISCARD = require("../commands/DISCARD");
const ECHO = require("../commands/ECHO");
const FAILOVER = require("../commands/FAILOVER");
const FLUSHALL = require("../commands/FLUSHALL");
const FLUSHDB = require("../commands/FLUSHDB");
const HELLO = require("../commands/HELLO");
const INFO = require("../commands/INFO");
const KEYS = require("../commands/KEYS");
const LASTSAVE = require("../commands/LASTSAVE");
const LOLWUT = require("../commands/LOLWUT");
const MEMOERY_DOCTOR = require("../commands/MEMORY_DOCTOR");
const MEMORY_MALLOC_STATS = require("../commands/MEMORY_MALLOC-STATS");
const MEMORY_PURGE = require("../commands/MEMORY_PURGE");
const MEMORY_STATS = require("../commands/MEMORY_STATS");
const MEMORY_USAGE = require("../commands/MEMORY_USAGE");
const MODULE_LIST = require("../commands/MODULE_LIST");
const MODULE_LOAD = require("../commands/MODULE_LOAD");
const MODULE_UNLOAD = require("../commands/MODULE_UNLOAD");
const MOVE = require("../commands/MOVE");
const PING = require("../commands/PING");
const PUBSUB_CHANNELS = require("../commands/PUBSUB_CHANNELS");
const PUBSUB_NUMPAT = require("../commands/PUBSUB_NUMPAT");
const PUBSUB_NUMSUB = require("../commands/PUBSUB_NUMSUB");
const RANDOMKEY = require("../commands/RANDOMKEY");
const READONLY = require("../commands/READONLY");
const READWRITE = require("../commands/READWRITE");
const REPLICAOF = require("../commands/REPLICAOF");
const RESTORE_ASKING = require("../commands/RESTORE-ASKING");
const ROLE = require("../commands/ROLE");
const SAVE = require("../commands/SAVE");
const SCAN = require("../commands/SCAN");
const SCRIPT_DEBUG = require("../commands/SCRIPT_DEBUG");
const SCRIPT_EXISTS = require("../commands/SCRIPT_EXISTS");
const SCRIPT_FLUSH = require("../commands/SCRIPT_FLUSH");
const SCRIPT_KILL = require("../commands/SCRIPT_KILL");
const SCRIPT_LOAD = require("../commands/SCRIPT_LOAD");
const SHUTDOWN = require("../commands/SHUTDOWN");
const SWAPDB = require("../commands/SWAPDB");
const TIME = require("../commands/TIME");
const UNWATCH = require("../commands/UNWATCH");
const WAIT = require("../commands/WAIT");
exports.default = {
    ...commands_1.default,
    ACL_CAT,
    aclCat: ACL_CAT,
    ACL_DELUSER,
    aclDelUser: ACL_DELUSER,
    ACL_GENPASS,
    aclGenPass: ACL_GENPASS,
    ACL_GETUSER,
    aclGetUser: ACL_GETUSER,
    ACL_LIST,
    aclList: ACL_LIST,
    ACL_LOAD,
    aclLoad: ACL_LOAD,
    ACL_LOG_RESET,
    aclLogReset: ACL_LOG_RESET,
    ACL_LOG,
    aclLog: ACL_LOG,
    ACL_SAVE,
    aclSave: ACL_SAVE,
    ACL_SETUSER,
    aclSetUser: ACL_SETUSER,
    ACL_USERS,
    aclUsers: ACL_USERS,
    ACL_WHOAMI,
    aclWhoAmI: ACL_WHOAMI,
    ASKING,
    asking: ASKING,
    AUTH,
    auth: AUTH,
    BGREWRITEAOF,
    bgRewriteAof: BGREWRITEAOF,
    BGSAVE,
    bgSave: BGSAVE,
    CLIENT_ID,
    clientId: CLIENT_ID,
    CLIENT_INFO,
    clientInfo: CLIENT_INFO,
    CLUSTER_ADDSLOTS,
    clusterAddSlots: CLUSTER_ADDSLOTS,
    CLUSTER_FLUSHSLOTS,
    clusterFlushSlots: CLUSTER_FLUSHSLOTS,
    CLUSTER_INFO,
    clusterInfo: CLUSTER_INFO,
    CLUSTER_NODES,
    clusterNodes: CLUSTER_NODES,
    CLUSTER_MEET,
    clusterMeet: CLUSTER_MEET,
    CLUSTER_RESET,
    clusterReset: CLUSTER_RESET,
    CLUSTER_SETSLOT,
    clusterSetSlot: CLUSTER_SETSLOT,
    CLUSTER_SLOTS,
    clusterSlots: CLUSTER_SLOTS,
    COMMAND_COUNT,
    commandCount: COMMAND_COUNT,
    COMMAND_GETKEYS,
    commandGetKeys: COMMAND_GETKEYS,
    COMMAND_INFO,
    commandInfo: COMMAND_INFO,
    COMMAND,
    command: COMMAND,
    CONFIG_GET,
    configGet: CONFIG_GET,
    CONFIG_RESETASTAT,
    configResetStat: CONFIG_RESETASTAT,
    CONFIG_REWRITE,
    configRewrite: CONFIG_REWRITE,
    CONFIG_SET,
    configSet: CONFIG_SET,
    DBSIZE,
    dbSize: DBSIZE,
    DISCARD,
    discard: DISCARD,
    ECHO,
    echo: ECHO,
    FAILOVER,
    failover: FAILOVER,
    FLUSHALL,
    flushAll: FLUSHALL,
    FLUSHDB,
    flushDb: FLUSHDB,
    HELLO,
    hello: HELLO,
    INFO,
    info: INFO,
    KEYS,
    keys: KEYS,
    LASTSAVE,
    lastSave: LASTSAVE,
    LOLWUT,
    lolwut: LOLWUT,
    MEMOERY_DOCTOR,
    memoryDoctor: MEMOERY_DOCTOR,
    'MEMORY_MALLOC-STATS': MEMORY_MALLOC_STATS,
    memoryMallocStats: MEMORY_MALLOC_STATS,
    MEMORY_PURGE,
    memoryPurge: MEMORY_PURGE,
    MEMORY_STATS,
    memoryStats: MEMORY_STATS,
    MEMORY_USAGE,
    memoryUsage: MEMORY_USAGE,
    MODULE_LIST,
    moduleList: MODULE_LIST,
    MODULE_LOAD,
    moduleLoad: MODULE_LOAD,
    MODULE_UNLOAD,
    moduleUnload: MODULE_UNLOAD,
    MOVE,
    move: MOVE,
    PING,
    ping: PING,
    PUBSUB_CHANNELS,
    pubSubChannels: PUBSUB_CHANNELS,
    PUBSUB_NUMPAT,
    pubSubNumPat: PUBSUB_NUMPAT,
    PUBSUB_NUMSUB,
    pubSubNumSub: PUBSUB_NUMSUB,
    RANDOMKEY,
    randomKey: RANDOMKEY,
    READONLY,
    readonly: READONLY,
    READWRITE,
    readwrite: READWRITE,
    REPLICAOF,
    replicaOf: REPLICAOF,
    'RESTORE-ASKING': RESTORE_ASKING,
    restoreAsking: RESTORE_ASKING,
    ROLE,
    role: ROLE,
    SAVE,
    save: SAVE,
    SCAN,
    scan: SCAN,
    SCRIPT_DEBUG,
    scriptDebug: SCRIPT_DEBUG,
    SCRIPT_EXISTS,
    scriptExists: SCRIPT_EXISTS,
    SCRIPT_FLUSH,
    scriptFlush: SCRIPT_FLUSH,
    SCRIPT_KILL,
    scriptKill: SCRIPT_KILL,
    SCRIPT_LOAD,
    scriptLoad: SCRIPT_LOAD,
    SHUTDOWN,
    shutdown: SHUTDOWN,
    SWAPDB,
    swapDb: SWAPDB,
    TIME,
    time: TIME,
    UNWATCH,
    unwatch: UNWATCH,
    WAIT,
    wait: WAIT
};
