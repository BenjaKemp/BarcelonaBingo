const monk = require('monk');
const db = monk(process.env.MONGODB_URL || 'localhost/bingoPlayers');
const User = db.get('users');

const authorize = async (ctx, next) => {

  console.log('authorize', ctx)

  ctx.user = await User.findOne({token:ctx.token.token});
  console.log('ctx.user ' , ctx.user);
  if (!ctx.user) {
    ctx.status = 401;
    return;
  }

  await next();
};

module.exports = authorize;
