var Utils = require('../utils');

var cls = require("../lib/class"),
    Player = require('../player'),
    Messages = require("../message"),
    redis = require("../../../local_modules/redis"),
    bcrypt = require("bcrypt");

var client;

module.exports = DatabaseHandler = cls.Class.extend({
    init: async function(config) {
        console.log('redis config', config);

        if (process.env.HEROKU_REDIS_PORT) config.redis_port = process.env.HEROKU_REDIS_PORT
        if (process.env.HEROKU_REDIS_HOST) config.redis_host = process.env.HEROKU_REDIS_HOST
        if (process.env.HEROKU_REDIS_PASSWORD) config.redis_password = process.env.HEROKU_REDIS_PASSWORD

        client = redis.createClient({ socket: { port: config.redis_port, host: config.redis_host, nodelay: true }, password: config.redis_password });
        await client.connect();
        this.client = client;
        // console.log('client', client, this.client);
    },
    loadPlayer: async function(player) {
        var self = this;
        var userKey = "u:" + player.name;
        var curTime = new Date().getTime();

        var replies_1 = await client.SMEMBERS('usr');

        // console.log('replies_1', replies_1);

        // client.SMEMBERS("usr", function(err, replies){
            for (var index = 0; index < replies_1.length; index++) {
                if (replies_1[index].toString() === player.name) {
                    const replies = await client.multi()
                        .HGET(userKey, "pw") // 0
                        .HGET(userKey, "armor") // 1
                        .HGET(userKey, "weapon") // 2
                        .HGET(userKey, "exp") // 3
                        .HGET("b:" + player.connection._connection.remoteAddress, "time") // 4
                        .HGET("b:" + player.connection._connection.remoteAddress, "banUseTime") // 5
                        .HGET("b:" + player.connection._connection.remoteAddress, "loginTime") // 6
                        .HGET(userKey, "avatar") // 7
                        .ZRANGE("adrank", "-1", "-1") // 8
                        .GET("nextNewArmor") // 9
                        .HGET(userKey, "inventory0") // 10
                        .HGET(userKey, "inventory0:number") // 11
                        .HGET(userKey, "inventory1") // 12
                        .HGET(userKey, "inventory1:number") // 13
                        .HGET(userKey, "achievement1:found") // 14
                        .HGET(userKey, "achievement1:progress") // 15
                        .HGET(userKey, "achievement2:found") // 16
                        .HGET(userKey, "achievement2:progress") // 17
                        .HGET(userKey, "achievement3:found") // 18
                        .HGET(userKey, "achievement3:progress") // 19
                        .HGET(userKey, "achievement4:found") // 20
                        .HGET(userKey, "achievement4:progress") // 21
                        .HGET(userKey, "achievement5:found") // 22
                        .HGET(userKey, "achievement5:progress") // 23
                        .HGET(userKey, "achievement6:found") // 24
                        .HGET(userKey, "achievement6:progress") // 25
                        .SMEMBERS("adminname") // 26
                        .ZSCORE("adrank", player.name) // 27
                        .HGET(userKey, "weaponAvatar") // 28
                        .HGET(userKey, "x") // 29
                        .HGET(userKey, "y") // 30
                        .HGET(userKey, "achievement7:found") // 31
                        .HGET(userKey, "achievement7:progress") // 32
                        .HGET(userKey, "achievement8:found") // 33
                        .HGET(userKey, "achievement8:progress") // 34
                        .HGET("cb:" + player.connection._connection.remoteAddress, "etime") // 35
                        .exec(); // function(err, replies){
                            var pw = replies[0];
                            var armor = replies[1];
                            var weapon = replies[2];
                            var exp = Utils.NaN2Zero(replies[3]);
                            var bannedTime = Utils.NaN2Zero(replies[4]);
                            var banUseTime = Utils.NaN2Zero(replies[5]);
                            var lastLoginTime = Utils.NaN2Zero(replies[6]);
                            var avatar = replies[7];
                            var pubTopName = replies[8];
                            var nextNewArmor = replies[9];
                            var inventory = [replies[10], replies[12]];
                            var inventoryNumber = [
                              Utils.NaN2Zero(replies[11]),
                              Utils.NaN2Zero(replies[13])];
                            var achievementFound = [
                              Utils.trueFalse(replies[14]),
                              Utils.trueFalse(replies[16]),
                              Utils.trueFalse(replies[18]),
                              Utils.trueFalse(replies[20]),
                              Utils.trueFalse(replies[22]),
                              Utils.trueFalse(replies[24]),
                              Utils.trueFalse(replies[31]),
                              Utils.trueFalse(replies[33]),
                            ];
                            var achievementProgress = [
                              Utils.NaN2Zero(replies[15]),
                              Utils.NaN2Zero(replies[17]),
                              Utils.NaN2Zero(replies[19]),
                              Utils.NaN2Zero(replies[21]),
                              Utils.NaN2Zero(replies[23]),
                              Utils.NaN2Zero(replies[25]),
                              Utils.NaN2Zero(replies[32]),
                              Utils.NaN2Zero(replies[34]),
                            ];
                            var adminnames = replies[26];
                            var pubPoint =  Utils.NaN2Zero(replies[27]);
                            var weaponAvatar = replies[28] ? replies[28] : weapon;
                            var x = Utils.NaN2Zero(replies[29]);
                            var y = Utils.NaN2Zero(replies[30]);
                            var chatBanEndTime = Utils.NaN2Zero(replies[35]);

                            // Check Password

                            bcrypt.compare(player.pw, pw, function(err, res) {
                                if (!res) {
                                    player.connection.sendUTF8("invalidlogin");
                                    player.connection.close("Wrong Password: " + player.name);
                                    return;
                                }

                                var d = new Date();
                                var lastLoginTimeDate = new Date(lastLoginTime);
                                if (lastLoginTimeDate.getDate() !== d.getDate()
                                && pubPoint > 0) {
                                  var targetInventoryNumber = -1;
                                  if(inventory[0] === "burger"){
                                    targetInventoryNumber = 0;
                                  } else if(inventory[1] === "burger"){
                                    targetInventoryNumber = 1;
                                  } else if(inventory[0] === null){
                                    targetInventoryNumber = 0;
                                  } else if(inventory[1] === null){
                                    targetInventoryNumber = 1;
                                  }

                                  if (targetInventoryNumber >= 0) {
                                    if (pubPoint > 100) {
                                      pubPoint = 100;
                                    }
                                    inventory[targetInventoryNumber] = "burger";
                                    inventoryNumber[targetInventoryNumber] += pubPoint*10;
                                    self.setInventory(player.name,
                                             Types.getKindFromString("burger"),
                                             targetInventoryNumber,
                                             inventoryNumber[targetInventoryNumber]);
                                    client.ZREM("adrank", player.name);
                                  }
                                }

                                // Check Ban
                                d.setDate(d.getDate() - d.getDay());
                                d.setHours(0, 0, 0);
                                if (lastLoginTime < d.getTime()) {
                                    log.info(player.name + "ban is initialized.");
                                    bannedTime = 0;
                                    client.HSET("b:" + player.connection._connection.remoteAddress, "time", bannedTime);
                                }
                                client.HSET("b:" + player.connection._connection.remoteAddress, "loginTime", curTime.toString());

                                if (player.name === pubTopName.toString()) {
                                    avatar = nextNewArmor;
                                }

                                var admin = null;
                                var i = 0;
                                for (i = 0; i < adminnames.length; i++) {
                                    if (adminnames[i] === player.name) {
                                        admin = 1;
                                        log.info("Admin " + player.name + "login");
                                    }
                                }
                                log.info("Player name: " + player.name);
                                log.info("Armor: " + armor);
                                log.info("Weapon: " + weapon);
                                log.info("Experience: " + exp);
                                log.info("Banned Time: " + (new Date(bannedTime)).toString());
                                log.info("Ban Use Time: " + (new Date(banUseTime)).toString());
                                log.info("Last Login Time: " + lastLoginTimeDate.toString());
                                log.info("Chatting Ban End Time: " + (new Date(chatBanEndTime)).toString());

                                player.sendWelcome(armor, weapon,
                                    avatar, weaponAvatar, exp, admin,
                                    bannedTime, banUseTime,
                                    inventory, inventoryNumber,
                                    achievementFound, achievementProgress,
                                    x, y,
                                    chatBanEndTime);
                            });
                    // });
                    return;
                }
            }

            // Could not find the user
            player.connection.sendUTF8("invalidlogin");
            player.connection.close("User does not exist: " + player.name);
            return;
        // });
    },

    createPlayer: async function(player) {
        var userKey = "u:" + player.name;
        var curTime = new Date().getTime();

        // Check if username is taken
        var reply = await client.SISMEMBER('usr', player.name); //, function(err, reply) {
            if (reply === 1) {
                player.connection.sendUTF8("userexists");
                player.connection.close("Username not available: " + player.name);
                return;
            } else {
                // Add the player
                // console.log('player', player);
                const replies = client.multi()
                    .SADD("usr", player.name)
                    .HSET(userKey, "pw", player.pw)
                    .HSET(userKey, "email", player.email)
                    .HSET(userKey, "armor", "clotharmor")
                    .HSET(userKey, "avatar", "clotharmor")
                    .HSET(userKey, "weapon", "sword1")
                    .HSET(userKey, "exp", 0)
                    .HSET("b:" + player.connection._connection.remoteAddress, "loginTime", curTime.toString())
                    .exec(); // function(err, replies){
                        log.info("New User: " + player.name);
                        player.sendWelcome(
                            "clotharmor", "sword1", "clotharmor", "sword1", 0,
                             null, 0, 0,
                             [null, null], [0, 0],
                             [false, false, false, false, false, false],
                             [0, 0, 0, 0, 0, 0],
                             player.x, player.y, 0);
                    // });
            }
        // });
    },

    checkBan: async function(player) {
        const replies_1 = await client.SMEMBERS("ipban"); // , function(err, replies){
            for (var index = 0; index < replies_1.length; index++) {
                if (replies_1[index].toString() === player.connection._connection.remoteAddress) {
                    const replies = await client.multi()
                        .HGET("b:" + player.connection._connection.remoteAddress, "rtime")
                        .HGET("b:" + player.connection._connection.remoteAddress, "time")
                        .exec(); // function(err, replies){
                             var curTime = new Date();
                             var banEndTime = new Date(replies[0]*1);
                             log.info("curTime: " + curTime.toString());
                             log.info("banEndTime: " + banEndTime.toString());
                             if (banEndTime.getTime() > curTime.getTime()) {
                                 player.connection.sendUTF8("ban");
                                 player.connection.close("IP Banned player: " + player.name + " " + player.connection._connection.remoteAddress);
                             }
                        // });
                    return;
                }
            }
        // });
    },

    banPlayer: async function(adminPlayer, banPlayer, days) {
        const replies = await client.SMEMBERS("adminname"); // , function(err, replies) {
            for (var index = 0; index < replies.length; index++) {
                if (replies[index].toString() === adminPlayer.name) {
                    var curTime = (new Date()).getTime();
                    client.SADD("ipban", banPlayer.connection._connection.remoteAddress);
                    adminPlayer.server.pushBroadcast(new Messages.Chat(banPlayer, "/1 " + adminPlayer.name + "-- 밴 ->" + banPlayer.name + " " + days + "일"));

                    setTimeout( function() {
                        banPlayer.connection.close("Added IP Banned player: " + banPlayer.name + " " + banPlayer.connection._connection.remoteAddress);
                    }, 30000);

                    client.HSET("b:" + banPlayer.connection._connection.remoteAddress, "rtime", (curTime+(days*24*60*60*1000)).toString());

                    log.info(adminPlayer.name + "-- BAN ->" + banPlayer.name + " to " + (new Date(curTime+(days*24*60*60*1000)).toString()));
                    return;
                }
            }
        // });
    },

    chatBan: async function(adminPlayer, targetPlayer) {
        const replies = await client.SMEMBERS("adminname"); // , function(err, replies){
            for (var index = 0; index < replies.length; index++) {
                if (replies[index].toString() === adminPlayer.name) {
                    var curTime = (new Date()).getTime();
                    adminPlayer.server.pushBroadcast(new Messages.Chat(targetPlayer, "/1 " + adminPlayer.name + "-- 채금 ->" + targetPlayer.name + " 10분"));
                    targetPlayer.chatBanEndTime = curTime + (10*60*1000);
                    client.HSET("cb:" + targetPlayer.connection._connection.remoteAddress, "etime", (targetPlayer.chatBanEndTime).toString());
                    log.info(adminPlayer.name + "-- Chatting BAN ->" + targetPlayer.name + " to " + (new Date(targetPlayer.chatBanEndTime).toString()));
                    return;
                }
            }
        // });
    },

    newBanPlayer: async function(adminPlayer, banPlayer) {
        log.debug("1");
        if (adminPlayer.experience > 100000) {
            log.debug("2");
            const reply = await client.HGET("b:" + adminPlayer.connection._connection.remoteAddress, "banUseTime"); // , function(err, reply){
                log.debug("3");
                var curTime = new Date();
                log.debug("curTime: " + curTime.getTime());
                log.debug("bannable Time: " + (reply*1) + 1000*60*60*24);
                if (curTime.getTime() > (reply*1) + 1000*60*60*24) {
                    log.debug("4");
                    banPlayer.bannedTime++;
                    var banMsg = "" + adminPlayer.name + "-- 밴 ->" + banPlayer.name + " " + banPlayer.bannedTime + "번째 " + (Math.pow(2,(banPlayer.bannedTime))/2) + "분";
                    client.SADD("ipban", banPlayer.connection._connection.remoteAddress);
                    client.HSET("b:" + banPlayer.connection._connection.remoteAddress, "rtime", (curTime.getTime()+(Math.pow(2,(banPlayer.bannedTime))*500*60)).toString());
                    client.HSET("b:" + banPlayer.connection._connection.remoteAddress, "time", banPlayer.bannedTime.toString());
                    client.HSET("b:" + adminPlayer.connection._connection.remoteAddress, "banUseTime", curTime.getTime().toString());

                    setTimeout( function() {
                        banPlayer.connection.close("Added IP Banned player: " + banPlayer.name + " " + banPlayer.connection._connection.remoteAddress);
                    }, 30000);

                    adminPlayer.server.pushBroadcast(new Messages.Chat(banPlayer, "/1 " + banMsg));
                    log.info(banMsg);
                }
                return;
            // });
        }
    },

    banTerm: function(time){
        return Math.pow(2, time)*500*60;
    },

    equipArmor: async function(name, armor){
        log.info("Set Armor: " + name + " " + armor);
        client.HSET("u:" + name, "armor", armor);
    },

    equipAvatar: async function(name, armor){
        log.info("Set Avatar: " + name + " " + armor);
        client.HSET("u:" + name, "avatar", armor);
    },

    equipWeapon: async function(name, weapon){
        log.info("Set Weapon: " + name + " " + weapon);
        client.HSET("u:" + name, "weapon", weapon);
    },

    setExp: async function(name, exp){
        log.info("Set Exp: " + name + " " + exp);
        client.HSET("u:" + name, "exp", exp.toString());
    },

    setInventory: async function(name, itemKind, inventoryNumber, itemNumber){
        if (itemKind) {
            client.HSET("u:" + name, "inventory" + inventoryNumber, Types.getKindAsString(itemKind));
            client.HSET("u:" + name, "inventory" + inventoryNumber + ":number", itemNumber);
            log.info("SetInventory: " + name + ", "
                                     + Types.getKindAsString(itemKind) + ", "
                                     + inventoryNumber + ", "
                                     + itemNumber);
        } else {
            this.makeEmptyInventory(name, inventoryNumber);
        }
    },

    makeEmptyInventory: async function(name, number){
        log.info("Empty Inventory: " + name + " " + number);
        client.HDEL("u:" + name, "inventory" + number);
        client.HDEL("u:" + name, "inventory" + number + ":number");
    },

    foundAchievement: async function(name, number){
        log.info("Found Achievement: " + name + " " + number);
        client.HSET("u:" + name, "achievement" + number + ":found", "true");
    },

    progressAchievement: async function(name, number, progress){
        log.info("Progress Achievement: " + name + " " + number + " " + progress);
        client.HSET("u:" + name, "achievement" + number + ":progress", progress.toString());
    },

    setUsedPubPts: async function(name, usedPubPts){
        log.info("Set Used Pub Points: " + name + " " + usedPubPts);
        client.HSET("u:" + name, "usedPubPts", usedPubPts);
    },

    setCheckpoint: async function(name, x, y){
        log.info("Set Check Point: " + name + " " + x + " " + y);
        client.HSET("u:" + name, "x", x.toString());
        client.HSET("u:" + name, "y", y.toString());
    },

    loadBoard: async function(player, command, number, replyNumber) {
      log.info("Load Board: " + player.name + " " + command + " " + number + " " + replyNumber);
      if (command === 'view') {
        var replies = await client.multi()
        .HGET('bo:free', number+':title')
        .HGET('bo:free', number+':content')
        .HGET('bo:free', number+':writer')
        .HINCRBY('bo:free', number+':cnt', 1)
        .SMEMBERS('bo:free:' + number + ':up')
        .SMEMBERS('bo:free:' + number + ':down')
        .HGET('bo:free', number+':time')
        .exec(); // function(err, replies){
          var title = replies[0];
          var content = replies[1];
          var writer = replies[2];
          var counter = replies[3];
          var up = replies[4].length;
          var down = replies[5].length;
          var time = replies[6];
          player.send([Types.Messages.BOARD,
                       'view',
                       title,
                       content,
                       writer,
                       counter,
                       up,
                       down,
                       time]);
        // });
      } else if (command === 'reply') {
        var replies = await client.multi()
        .HGET('bo:free', number+':reply:'+replyNumber+':writer')
        .HGET('bo:free', number+':reply:'+replyNumber+':content')
        .SMEMBERS('bo:free:' + number+':reply:'+replyNumber+':up')
        .SMEMBERS('bo:free:' + number+':reply:'+replyNumber+':down')

        .HGET('bo:free', number+':reply:'+(replyNumber+1)+':writer')
        .HGET('bo:free', number+':reply:'+(replyNumber+1)+':content')
        .SMEMBERS('bo:free:' + number+':reply:'+(replyNumber+1)+':up')
        .SMEMBERS('bo:free:' + number+':reply:'+(replyNumber+1)+':down')

        .HGET('bo:free', number+':reply:'+(replyNumber+2)+':writer')
        .HGET('bo:free', number+':reply:'+(replyNumber+2)+':content')
        .SMEMBERS('bo:free:' + number+':reply:'+(replyNumber+2)+':up')
        .SMEMBERS('bo:free:' + number+':reply:'+(replyNumber+2)+':down')

        .HGET('bo:free', number+':reply:'+(replyNumber+3)+':writer')
        .HGET('bo:free', number+':reply:'+(replyNumber+3)+':content')
        .SMEMBERS('bo:free:' + number+':reply:'+(replyNumber+3)+':up')
        .SMEMBERS('bo:free:' + number+':reply:'+(replyNumber+3)+':down')

        .HGET('bo:free', number+':reply:'+(replyNumber+4)+':writer')
        .HGET('bo:free', number+':reply:'+(replyNumber+4)+':content')
        .SMEMBERS('bo:free:' + number+':reply:'+(replyNumber+4)+':up')
        .SMEMBERS('bo:free:' + number+':reply:'+(replyNumber+4)+':down')

        .exec(); // function(err, replies){
          player.send([Types.Messages.BOARD,
                       'reply',
                        replies[0],  replies[1],  replies[2].length, replies[3].length,
                        replies[4],  replies[5],  replies[6].length, replies[7].length,
                        replies[8],  replies[9],  replies[10].length, replies[11].length,
                        replies[12], replies[13], replies[14].length, replies[15].length,
                        replies[16], replies[17], replies[18].length, replies[19].length]);
        // });
      } else if (command === 'up') {
        if (player.level >= 50) {
          client.SADD('bo:free:' + number + ':up', player.name);
        }
      } else if (command === 'down') {
        if (player.level >= 50) {
          client.SADD('bo:free:' + number + ':down', player.name);
        }
      } else if (command === 'replyup') {
        if (player.level >= 50) {
          client.SADD('bo:free:'+number+':reply:'+replyNumber+':up', player.name);
        }
      } else if (command === 'replydown') {
        if (player.level >= 50) {
          client.SADD('bo:free:'+number+':reply:'+replyNumber+':down', player.name);
        }
      } else if (command === 'list') {
        var reply = await client.HGET('bo:free', 'lastnum'); // , function(err, reply){
          var lastnum = reply;
          if (number > 0) {
            lastnum = number;
          }
          var replies = await client.multi()
          .HGET('bo:free', lastnum +':title')
          .HGET('bo:free', (lastnum-1) +':title')
          .HGET('bo:free', (lastnum-2) +':title')
          .HGET('bo:free', (lastnum-3) +':title')
          .HGET('bo:free', (lastnum-4) +':title')
          .HGET('bo:free', (lastnum-5) +':title')
          .HGET('bo:free', (lastnum-6) +':title')
          .HGET('bo:free', (lastnum-7) +':title')
          .HGET('bo:free', (lastnum-8) +':title')
          .HGET('bo:free', (lastnum-9) +':title')

          .HGET('bo:free', lastnum +':writer')
          .HGET('bo:free', (lastnum-1) +':writer')
          .HGET('bo:free', (lastnum-2) +':writer')
          .HGET('bo:free', (lastnum-3) +':writer')
          .HGET('bo:free', (lastnum-4) +':writer')
          .HGET('bo:free', (lastnum-5) +':writer')
          .HGET('bo:free', (lastnum-6) +':writer')
          .HGET('bo:free', (lastnum-7) +':writer')
          .HGET('bo:free', (lastnum-8) +':writer')
          .HGET('bo:free', (lastnum-9) +':writer')

          .HGET('bo:free', lastnum +':cnt')
          .HGET('bo:free', (lastnum-1) +':cnt')
          .HGET('bo:free', (lastnum-2) +':cnt')
          .HGET('bo:free', (lastnum-3) +':cnt')
          .HGET('bo:free', (lastnum-4) +':cnt')
          .HGET('bo:free', (lastnum-5) +':cnt')
          .HGET('bo:free', (lastnum-6) +':cnt')
          .HGET('bo:free', (lastnum-7) +':cnt')
          .HGET('bo:free', (lastnum-8) +':cnt')
          .HGET('bo:free', (lastnum-9) +':cnt')

          .SMEMBERS('bo:free:' + lastnum + ':up')
          .SMEMBERS('bo:free:' + (lastnum-1) + ':up')
          .SMEMBERS('bo:free:' + (lastnum-2) + ':up')
          .SMEMBERS('bo:free:' + (lastnum-3) + ':up')
          .SMEMBERS('bo:free:' + (lastnum-4) + ':up')
          .SMEMBERS('bo:free:' + (lastnum-5) + ':up')
          .SMEMBERS('bo:free:' + (lastnum-6) + ':up')
          .SMEMBERS('bo:free:' + (lastnum-7) + ':up')
          .SMEMBERS('bo:free:' + (lastnum-8) + ':up')
          .SMEMBERS('bo:free:' + (lastnum-9) + ':up')

          .SMEMBERS('bo:free:' + lastnum + ':down')
          .SMEMBERS('bo:free:' + (lastnum-1) + ':down')
          .SMEMBERS('bo:free:' + (lastnum-2) + ':down')
          .SMEMBERS('bo:free:' + (lastnum-3) + ':down')
          .SMEMBERS('bo:free:' + (lastnum-4) + ':down')
          .SMEMBERS('bo:free:' + (lastnum-5) + ':down')
          .SMEMBERS('bo:free:' + (lastnum-6) + ':down')
          .SMEMBERS('bo:free:' + (lastnum-7) + ':down')
          .SMEMBERS('bo:free:' + (lastnum-8) + ':down')
          .SMEMBERS('bo:free:' + (lastnum-9) + ':down')

          .HGET('bo:free', lastnum + ':replynum')
          .HGET('bo:free', (lastnum+1) + ':replynum')
          .HGET('bo:free', (lastnum+2) + ':replynum')
          .HGET('bo:free', (lastnum+3) + ':replynum')
          .HGET('bo:free', (lastnum+4) + ':replynum')
          .HGET('bo:free', (lastnum+5) + ':replynum')
          .HGET('bo:free', (lastnum+6) + ':replynum')
          .HGET('bo:free', (lastnum+7) + ':replynum')
          .HGET('bo:free', (lastnum+8) + ':replynum')
          .HGET('bo:free', (lastnum+9) + ':replynum')

          .exec(); // function(err, replies){
            var i = 0;
            var msg = [Types.Messages.BOARD, 'list', lastnum];

            for (i = 0; i < 30; i++) {
                msg.push(replies[i]);
            }
            for (i = 30; i < 50; i++) {
                msg.push(replies[i].length);
            }
            for (i = 50; i < 60; i++) {
                msg.push(replies[i]);
            }

            player.send(msg);
          // });
        // });
      }
    },

    writeBoard: async function(player, title, content) {
      log.info("Write Board: " + player.name + " " + title);
      var reply = await client.HINCRBY('bo:free', 'lastnum', 1); // , function(err, reply){
        var curTime = new Date().getTime();
        var number = reply ? reply : 1;
        var replies = await client.multi()
        .HSET('bo:free', number+':title', title)
        .HSET('bo:free', number+':content', content)
        .HSET('bo:free', number+':writer', player.name)
        .HSET('bo:free', number+':time', curTime)
        .exec();
        player.send([Types.Messages.BOARD,
                     'view',
                     title,
                     content,
                     player.name,
                     0,
                     0,
                     0,
                     curTime]);
      // });
    },

    writeReply: async function(player, content, number){
      log.info("Write Reply: " + player.name + " " + content + " " + number);
      var self = this;
      var reply = await client.HINCRBY('bo:free', number + ':replynum', 1); // , function(err, reply){
        var replyNum = reply ? reply : 1;
        var replies = await client.multi()
        .HSET('bo:free', number+':reply:'+replyNum+':content', content)
        .HSET('bo:free', number+':reply:'+replyNum+':writer', player.name)
        .exec(); // function(err, replies){
          player.send([Types.Messages.BOARD,
                       'reply',
                       player.name,
                       content]);
        // });
      // });
    },

    pushKungWord: async function(player, word){
      var server = player.server;

      if (player === server.lastKungPlayer) return;
      if (server.isAlreadyKung(word)) return;
      if (!server.isRightKungWord(word)) return;

      if (server.kungWords.length === 0) {
        var reply = await client.SRANDMEMBER('dic'); // , function(err, reply) {
          var randWord = reply;
          server.pushKungWord(player, randWord);
        // });
      } else {
        var reply = await client.SISMEMBER('dic', word); // , function(err, reply) {
          if (reply === 1) {
            server.pushKungWord(player, word);
          } else {
            player.send([Types.Messages.NOTIFY, word + "는 사전에 없습니다."]);
          }
        // });
      }
    }
});
