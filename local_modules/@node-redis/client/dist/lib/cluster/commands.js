"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APPEND = require("../commands/APPEND");
const BITCOUNT = require("../commands/BITCOUNT");
const BITFIELD = require("../commands/BITFIELD");
const BITOP = require("../commands/BITOP");
const BITPOS = require("../commands/BITPOS");
const BLMOVE = require("../commands/BLMOVE");
const BLPOP = require("../commands/BLPOP");
const BRPOP = require("../commands/BRPOP");
const BRPOPLPUSH = require("../commands/BRPOPLPUSH");
const BZPOPMAX = require("../commands/BZPOPMAX");
const BZPOPMIN = require("../commands/BZPOPMIN");
const COPY = require("../commands/COPY");
const DECR = require("../commands/DECR");
const DECRBY = require("../commands/DECRBY");
const DEL = require("../commands/DEL");
const DUMP = require("../commands/DUMP");
const EVAL = require("../commands/EVAL");
const EVALSHA = require("../commands/EVALSHA");
const EXISTS = require("../commands/EXISTS");
const EXPIRE = require("../commands/EXPIRE");
const EXPIREAT = require("../commands/EXPIREAT");
const GEOADD = require("../commands/GEOADD");
const GEODIST = require("../commands/GEODIST");
const GEOHASH = require("../commands/GEOHASH");
const GEOPOS = require("../commands/GEOPOS");
const GEOSEARCH_WITH = require("../commands/GEOSEARCH_WITH");
const GEOSEARCH = require("../commands/GEOSEARCH");
const GEOSEARCHSTORE = require("../commands/GEOSEARCHSTORE");
const GET_BUFFER = require("../commands/GET_BUFFER");
const GET = require("../commands/GET");
const GETBIT = require("../commands/GETBIT");
const GETDEL = require("../commands/GETDEL");
const GETEX = require("../commands/GETEX");
const GETRANGE = require("../commands/GETRANGE");
const GETSET = require("../commands/GETSET");
const HDEL = require("../commands/HDEL");
const HEXISTS = require("../commands/HEXISTS");
const HGET = require("../commands/HGET");
const HGETALL = require("../commands/HGETALL");
const HINCRBY = require("../commands/HINCRBY");
const HINCRBYFLOAT = require("../commands/HINCRBYFLOAT");
const HKEYS = require("../commands/HKEYS");
const HLEN = require("../commands/HLEN");
const HMGET = require("../commands/HMGET");
const HRANDFIELD_COUNT_WITHVALUES = require("../commands/HRANDFIELD_COUNT_WITHVALUES");
const HRANDFIELD_COUNT = require("../commands/HRANDFIELD_COUNT");
const HRANDFIELD = require("../commands/HRANDFIELD");
const HSCAN = require("../commands/HSCAN");
const HSET = require("../commands/HSET");
const HSETNX = require("../commands/HSETNX");
const HSTRLEN = require("../commands/HSTRLEN");
const HVALS = require("../commands/HVALS");
const INCR = require("../commands/INCR");
const INCRBY = require("../commands/INCRBY");
const INCRBYFLOAT = require("../commands/INCRBYFLOAT");
const LINDEX = require("../commands/LINDEX");
const LINSERT = require("../commands/LINSERT");
const LLEN = require("../commands/LLEN");
const LMOVE = require("../commands/LMOVE");
const LPOP_COUNT = require("../commands/LPOP_COUNT");
const LPOP = require("../commands/LPOP");
const LPOS_COUNT = require("../commands/LPOS_COUNT");
const LPOS = require("../commands/LPOS");
const LPUSH = require("../commands/LPUSH");
const LPUSHX = require("../commands/LPUSHX");
const LRANGE = require("../commands/LRANGE");
const LREM = require("../commands/LREM");
const LSET = require("../commands/LSET");
const LTRIM = require("../commands/LTRIM");
const MGET = require("../commands/MGET");
const MIGRATE = require("../commands/MIGRATE");
const MSET = require("../commands/MSET");
const MSETNX = require("../commands/MSETNX");
const PERSIST = require("../commands/PERSIST");
const PEXPIRE = require("../commands/PEXPIRE");
const PEXPIREAT = require("../commands/PEXPIREAT");
const PFADD = require("../commands/PFADD");
const PFCOUNT = require("../commands/PFCOUNT");
const PFMERGE = require("../commands/PFMERGE");
const PSETEX = require("../commands/PSETEX");
const PTTL = require("../commands/PTTL");
const PUBLISH = require("../commands/PUBLISH");
const RENAME = require("../commands/RENAME");
const RENAMENX = require("../commands/RENAMENX");
const RPOP_COUNT = require("../commands/RPOP_COUNT");
const RPOP = require("../commands/RPOP");
const RPOPLPUSH = require("../commands/RPOPLPUSH");
const RPUSH = require("../commands/RPUSH");
const RPUSHX = require("../commands/RPUSHX");
const SADD = require("../commands/SADD");
const SCARD = require("../commands/SCARD");
const SDIFF = require("../commands/SDIFF");
const SDIFFSTORE = require("../commands/SDIFFSTORE");
const SET = require("../commands/SET");
const SETBIT = require("../commands/SETBIT");
const SETEX = require("../commands/SETEX");
const SETNX = require("../commands/SETNX");
const SETRANGE = require("../commands/SETRANGE");
const SINTER = require("../commands/SINTER");
const SINTERSTORE = require("../commands/SINTERSTORE");
const SISMEMBER = require("../commands/SISMEMBER");
const SMEMBERS = require("../commands/SMEMBERS");
const SMISMEMBER = require("../commands/SMISMEMBER");
const SMOVE = require("../commands/SMOVE");
const SORT = require("../commands/SORT");
const SPOP = require("../commands/SPOP");
const SRANDMEMBER_COUNT = require("../commands/SRANDMEMBER_COUNT");
const SRANDMEMBER = require("../commands/SRANDMEMBER");
const SREM = require("../commands/SREM");
const SSCAN = require("../commands/SSCAN");
const STRLEN = require("../commands/STRLEN");
const SUNION = require("../commands/SUNION");
const SUNIONSTORE = require("../commands/SUNIONSTORE");
const TOUCH = require("../commands/TOUCH");
const TTL = require("../commands/TTL");
const TYPE = require("../commands/TYPE");
const UNLINK = require("../commands/UNLINK");
const WATCH = require("../commands/WATCH");
const XACK = require("../commands/XACK");
const XADD = require("../commands/XADD");
const XAUTOCLAIM_JUSTID = require("../commands/XAUTOCLAIM_JUSTID");
const XAUTOCLAIM = require("../commands/XAUTOCLAIM");
const XCLAIM = require("../commands/XCLAIM");
const XCLAIM_JUSTID = require("../commands/XCLAIM_JUSTID");
const XDEL = require("../commands/XDEL");
const XGROUP_CREATE = require("../commands/XGROUP_CREATE");
const XGROUP_CREATECONSUMER = require("../commands/XGROUP_CREATECONSUMER");
const XGROUP_DELCONSUMER = require("../commands/XGROUP_DELCONSUMER");
const XGROUP_DESTROY = require("../commands/XGROUP_DESTROY");
const XGROUP_SETID = require("../commands/XGROUP_SETID");
const XINFO_CONSUMERS = require("../commands/XINFO_CONSUMERS");
const XINFO_GROUPS = require("../commands/XINFO_GROUPS");
const XINFO_STREAM = require("../commands/XINFO_STREAM");
const XLEN = require("../commands/XLEN");
const XPENDING_RANGE = require("../commands/XPENDING_RANGE");
const XPENDING = require("../commands/XPENDING");
const XRANGE = require("../commands/XRANGE");
const XREAD = require("../commands/XREAD");
const XREADGROUP = require("../commands/XREADGROUP");
const XREVRANGE = require("../commands/XREVRANGE");
const XTRIM = require("../commands/XTRIM");
const ZADD = require("../commands/ZADD");
const ZCARD = require("../commands/ZCARD");
const ZCOUNT = require("../commands/ZCOUNT");
const ZDIFF_WITHSCORES = require("../commands/ZDIFF_WITHSCORES");
const ZDIFF = require("../commands/ZDIFF");
const ZDIFFSTORE = require("../commands/ZDIFFSTORE");
const ZINCRBY = require("../commands/ZINCRBY");
const ZINTER_WITHSCORES = require("../commands/ZINTER_WITHSCORES");
const ZINTER = require("../commands/ZINTER");
const ZINTERSTORE = require("../commands/ZINTERSTORE");
const ZLEXCOUNT = require("../commands/ZLEXCOUNT");
const ZMSCORE = require("../commands/ZMSCORE");
const ZPOPMAX_COUNT = require("../commands/ZPOPMAX_COUNT");
const ZPOPMAX = require("../commands/ZPOPMAX");
const ZPOPMIN_COUNT = require("../commands/ZPOPMIN_COUNT");
const ZPOPMIN = require("../commands/ZPOPMIN");
const ZRANDMEMBER_COUNT_WITHSCORES = require("../commands/ZRANDMEMBER_COUNT_WITHSCORES");
const ZRANDMEMBER_COUNT = require("../commands/ZRANDMEMBER_COUNT");
const ZRANDMEMBER = require("../commands/ZRANDMEMBER");
const ZRANGE_WITHSCORES = require("../commands/ZRANGE_WITHSCORES");
const ZRANGE = require("../commands/ZRANGE");
const ZRANGEBYLEX = require("../commands/ZRANGEBYLEX");
const ZRANGEBYSCORE_WITHSCORES = require("../commands/ZRANGEBYSCORE_WITHSCORES");
const ZRANGEBYSCORE = require("../commands/ZRANGEBYSCORE");
const ZRANGESTORE = require("../commands/ZRANGESTORE");
const ZRANK = require("../commands/ZRANK");
const ZREM = require("../commands/ZREM");
const ZREMRANGEBYLEX = require("../commands/ZREMRANGEBYLEX");
const ZREMRANGEBYRANK = require("../commands/ZREMRANGEBYRANK");
const ZREMRANGEBYSCORE = require("../commands/ZREMRANGEBYSCORE");
const ZREVRANK = require("../commands/ZREVRANK");
const ZSCAN = require("../commands/ZSCAN");
const ZSCORE = require("../commands/ZSCORE");
const ZUNION_WITHSCORES = require("../commands/ZUNION_WITHSCORES");
const ZUNION = require("../commands/ZUNION");
const ZUNIONSTORE = require("../commands/ZUNIONSTORE");
exports.default = {
    APPEND,
    append: APPEND,
    BITCOUNT,
    bitCount: BITCOUNT,
    BITFIELD,
    bitField: BITFIELD,
    BITOP,
    bitOp: BITOP,
    BITPOS,
    bitPos: BITPOS,
    BLMOVE,
    blMove: BLMOVE,
    BLPOP,
    blPop: BLPOP,
    BRPOP,
    brPop: BRPOP,
    BRPOPLPUSH,
    brPopLPush: BRPOPLPUSH,
    BZPOPMAX,
    bzPopMax: BZPOPMAX,
    BZPOPMIN,
    bzPopMin: BZPOPMIN,
    COPY,
    copy: COPY,
    DECR,
    decr: DECR,
    DECRBY,
    decrBy: DECRBY,
    DEL,
    del: DEL,
    DUMP,
    dump: DUMP,
    EVAL,
    eval: EVAL,
    EVALSHA,
    evalSha: EVALSHA,
    EXISTS,
    exists: EXISTS,
    EXPIRE,
    expire: EXPIRE,
    EXPIREAT,
    expireAt: EXPIREAT,
    GEOADD,
    geoAdd: GEOADD,
    GEODIST,
    geoDist: GEODIST,
    GEOHASH,
    geoHash: GEOHASH,
    GEOPOS,
    geoPos: GEOPOS,
    GEOSEARCH_WITH,
    geoSearchWith: GEOSEARCH_WITH,
    GEOSEARCH,
    geoSearch: GEOSEARCH,
    GEOSEARCHSTORE,
    geoSearchStore: GEOSEARCHSTORE,
    GET_BUFFER,
    getBuffer: GET_BUFFER,
    GET,
    get: GET,
    GETBIT,
    getBit: GETBIT,
    GETDEL,
    getDel: GETDEL,
    GETEX,
    getEx: GETEX,
    GETRANGE,
    getRange: GETRANGE,
    GETSET,
    getSet: GETSET,
    HDEL,
    hDel: HDEL,
    HEXISTS,
    hExists: HEXISTS,
    HGET,
    hGet: HGET,
    HGETALL,
    hGetAll: HGETALL,
    HINCRBY,
    hIncrBy: HINCRBY,
    HINCRBYFLOAT,
    hIncrByFloat: HINCRBYFLOAT,
    HKEYS,
    hKeys: HKEYS,
    HLEN,
    hLen: HLEN,
    HMGET,
    hmGet: HMGET,
    HRANDFIELD_COUNT_WITHVALUES,
    hRandFieldCountWithValues: HRANDFIELD_COUNT_WITHVALUES,
    HRANDFIELD_COUNT,
    hRandFieldCount: HRANDFIELD_COUNT,
    HRANDFIELD,
    hRandField: HRANDFIELD,
    HSCAN,
    hScan: HSCAN,
    HSET,
    hSet: HSET,
    HSETNX,
    hSetNX: HSETNX,
    HSTRLEN,
    hStrLen: HSTRLEN,
    HVALS,
    hVals: HVALS,
    INCR,
    incr: INCR,
    INCRBY,
    incrBy: INCRBY,
    INCRBYFLOAT,
    incrByFloat: INCRBYFLOAT,
    LINDEX,
    lIndex: LINDEX,
    LINSERT,
    lInsert: LINSERT,
    LLEN,
    lLen: LLEN,
    LMOVE,
    lMove: LMOVE,
    LPOP_COUNT,
    lPopCount: LPOP_COUNT,
    LPOP,
    lPop: LPOP,
    LPOS_COUNT,
    lPosCount: LPOS_COUNT,
    LPOS,
    lPos: LPOS,
    LPUSH,
    lPush: LPUSH,
    LPUSHX,
    lPushX: LPUSHX,
    LRANGE,
    lRange: LRANGE,
    LREM,
    lRem: LREM,
    LSET,
    lSet: LSET,
    LTRIM,
    lTrim: LTRIM,
    MGET,
    mGet: MGET,
    MIGRATE,
    migrate: MIGRATE,
    MSET,
    mSet: MSET,
    MSETNX,
    mSetNX: MSETNX,
    PERSIST,
    persist: PERSIST,
    PEXPIRE,
    pExpire: PEXPIRE,
    PEXPIREAT,
    pExpireAt: PEXPIREAT,
    PFADD,
    pfAdd: PFADD,
    PFCOUNT,
    pfCount: PFCOUNT,
    PFMERGE,
    pfMerge: PFMERGE,
    PSETEX,
    pSetEx: PSETEX,
    PTTL,
    pTTL: PTTL,
    PUBLISH,
    publish: PUBLISH,
    RENAME,
    rename: RENAME,
    RENAMENX,
    renameNX: RENAMENX,
    RPOP_COUNT,
    rPopCount: RPOP_COUNT,
    RPOP,
    rPop: RPOP,
    RPOPLPUSH,
    rPopLPush: RPOPLPUSH,
    RPUSH,
    rPush: RPUSH,
    RPUSHX,
    rPushX: RPUSHX,
    SADD,
    sAdd: SADD,
    SCARD,
    sCard: SCARD,
    SDIFF,
    sDiff: SDIFF,
    SDIFFSTORE,
    sDiffStore: SDIFFSTORE,
    SINTER,
    sInter: SINTER,
    SINTERSTORE,
    sInterStore: SINTERSTORE,
    SET,
    set: SET,
    SETBIT,
    setBit: SETBIT,
    SETEX,
    setEx: SETEX,
    SETNX,
    setNX: SETNX,
    SETRANGE,
    setRange: SETRANGE,
    SISMEMBER,
    sIsMember: SISMEMBER,
    SMEMBERS,
    sMembers: SMEMBERS,
    SMISMEMBER,
    smIsMember: SMISMEMBER,
    SMOVE,
    sMove: SMOVE,
    SORT,
    sort: SORT,
    SPOP,
    sPop: SPOP,
    SRANDMEMBER_COUNT,
    sRandMemberCount: SRANDMEMBER_COUNT,
    SRANDMEMBER,
    sRandMember: SRANDMEMBER,
    SREM,
    sRem: SREM,
    SSCAN,
    sScan: SSCAN,
    STRLEN,
    strLen: STRLEN,
    SUNION,
    sUnion: SUNION,
    SUNIONSTORE,
    sUnionStore: SUNIONSTORE,
    TOUCH,
    touch: TOUCH,
    TTL,
    ttl: TTL,
    TYPE,
    type: TYPE,
    UNLINK,
    unlink: UNLINK,
    WATCH,
    watch: WATCH,
    XACK,
    xAck: XACK,
    XADD,
    xAdd: XADD,
    XAUTOCLAIM_JUSTID,
    xAutoClaimJustId: XAUTOCLAIM_JUSTID,
    XAUTOCLAIM,
    xAutoClaim: XAUTOCLAIM,
    XCLAIM,
    xClaim: XCLAIM,
    XCLAIM_JUSTID,
    xClaimJustId: XCLAIM_JUSTID,
    XDEL,
    xDel: XDEL,
    XGROUP_CREATE,
    xGroupCreate: XGROUP_CREATE,
    XGROUP_CREATECONSUMER,
    xGroupCreateConsumer: XGROUP_CREATECONSUMER,
    XGROUP_DELCONSUMER,
    xGroupDelConsumer: XGROUP_DELCONSUMER,
    XGROUP_DESTROY,
    xGroupDestroy: XGROUP_DESTROY,
    XGROUP_SETID,
    xGroupSetId: XGROUP_SETID,
    XINFO_CONSUMERS,
    xInfoConsumers: XINFO_CONSUMERS,
    XINFO_GROUPS,
    xInfoGroups: XINFO_GROUPS,
    XINFO_STREAM,
    xInfoStream: XINFO_STREAM,
    XLEN,
    xLen: XLEN,
    XPENDING_RANGE,
    xPendingRange: XPENDING_RANGE,
    XPENDING,
    xPending: XPENDING,
    XRANGE,
    xRange: XRANGE,
    XREAD,
    xRead: XREAD,
    XREADGROUP,
    xReadGroup: XREADGROUP,
    XREVRANGE,
    xRevRange: XREVRANGE,
    XTRIM,
    xTrim: XTRIM,
    ZADD,
    zAdd: ZADD,
    ZCARD,
    zCard: ZCARD,
    ZCOUNT,
    zCount: ZCOUNT,
    ZDIFF_WITHSCORES,
    zDiffWithScores: ZDIFF_WITHSCORES,
    ZDIFF,
    zDiff: ZDIFF,
    ZDIFFSTORE,
    zDiffStore: ZDIFFSTORE,
    ZINCRBY,
    zIncrBy: ZINCRBY,
    ZINTER_WITHSCORES,
    zInterWithScores: ZINTER_WITHSCORES,
    ZINTER,
    zInter: ZINTER,
    ZINTERSTORE,
    zInterStore: ZINTERSTORE,
    ZLEXCOUNT,
    zLexCount: ZLEXCOUNT,
    ZMSCORE,
    zmScore: ZMSCORE,
    ZPOPMAX_COUNT,
    zPopMaxCount: ZPOPMAX_COUNT,
    ZPOPMAX,
    zPopMax: ZPOPMAX,
    ZPOPMIN_COUNT,
    zPopMinCount: ZPOPMIN_COUNT,
    ZPOPMIN,
    zPopMin: ZPOPMIN,
    ZRANDMEMBER_COUNT_WITHSCORES,
    zRandMemberCountWithScores: ZRANDMEMBER_COUNT_WITHSCORES,
    ZRANDMEMBER_COUNT,
    zRandMemberCount: ZRANDMEMBER_COUNT,
    ZRANDMEMBER,
    zRandMember: ZRANDMEMBER,
    ZRANGE_WITHSCORES,
    zRangeWithScores: ZRANGE_WITHSCORES,
    ZRANGE,
    zRange: ZRANGE,
    ZRANGEBYLEX,
    zRangeByLex: ZRANGEBYLEX,
    ZRANGEBYSCORE_WITHSCORES,
    zRangeByScoreWithScores: ZRANGEBYSCORE_WITHSCORES,
    ZRANGEBYSCORE,
    zRangeByScore: ZRANGEBYSCORE,
    ZRANGESTORE,
    zRangeStore: ZRANGESTORE,
    ZRANK,
    zRank: ZRANK,
    ZREM,
    zRem: ZREM,
    ZREMRANGEBYLEX,
    zRemRangeByLex: ZREMRANGEBYLEX,
    ZREMRANGEBYRANK,
    zRemRangeByRank: ZREMRANGEBYRANK,
    ZREMRANGEBYSCORE,
    zRemRangeByScore: ZREMRANGEBYSCORE,
    ZREVRANK,
    zRevRank: ZREVRANK,
    ZSCAN,
    zScan: ZSCAN,
    ZSCORE,
    zScore: ZSCORE,
    ZUNION_WITHSCORES,
    zUnionWithScores: ZUNION_WITHSCORES,
    ZUNION,
    zUnion: ZUNION,
    ZUNIONSTORE,
    zUnionStore: ZUNIONSTORE
};
