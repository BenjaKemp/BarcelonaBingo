const monk = require('monk');
const db = monk(process.env.MONGODB_URL || 'localhost/bingoPlayers');
const User = db.get('users');


const token = async (ctx, next) => {
  let userToken = ctx.headers.authorization.split(' ');
  if (userToken[0] !== 'Basic' ) {
    let token = await User.findOne({token: userToken[1]});
    console.log('token in token ', token);
    ctx.token = token;
  }
  await next();
};

module.exports = token;
