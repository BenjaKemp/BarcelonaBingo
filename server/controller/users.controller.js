const db = require('monk')('localhost/bingoPlayers')
const mongoose = require('mongoose');
const players = db.get('players')
const uuidv4 = require('uuid/v4');
const bcrypt = require ('bcrypt');
const atob = require('atob');
const filterProps = require('../services/utils').filterProps;;

module.exports.create = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();

  const playerData = ctx.request.body;
  let player = await players.findOne({playername:playerData.playername});

  if (player) {
    ctx.status = 400;
    ctx.body = {
      errors:[
        'playername already exists.'
      ]
    };
  } else {
    const hash = await bcrypt.hash(playerData.password, 10);
    playerData.password = hash;
    playerData.token = uuidv4();
    player = await filterProps(playerData, ['playername', 'password', 'token']);
    await players.insert(player);
    ctx.body = player;
    ctx.status = 201;
    console.log(`player ${playerData.playername} has been added`);
  }
};
module.exports.signIn = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();

  const credentials = atob(ctx.headers.authorization.split(' ')[1]);
  const userData = {
    playername: credentials.split(':')[0],
    password: credentials.split(':')[1]
  };
  console.log(userData);
  let player = await players.findOne({playername:userData.playername});
  if (player) {
    const response = await  bcrypt.compare(userData.password, player.password);
    if (response) {
      ctx.body = player;
      ctx.status = 200;
    } else {
      ctx.body = 'hells no';
      ctx.status = 401;
    }
  } else {
    ctx.status = 400;
    ctx.body = {
      errors:[
        'No such Player.'
      ]
    };
  }
  ctx.status = 201;
};
