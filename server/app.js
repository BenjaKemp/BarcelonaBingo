const Koa         = require("koa");
const bodyparser  = require("koa-bodyparser");
const cors        = require("koa-cors");
// const token       = require('./middlewares/token');
const authorization = require('./middlewares/authorization');
const router      = require("./routes/index");
const myApi       = require("./API/index");
const db          = require("./db");
const app = new Koa();

app
  .use(cors())
  .use(bodyparser())
  // .use(token)
  //.use(authorization)
  .use(router.routes())
  .use(router.allowedMethods());
  const server      = require("http").createServer(app.callback())
  const io           = require("socket.io")(server);


const clients = [];

io.on('connection', (socket) => {

    socket.emit( 'tester' ,{
      description: 'we have received your connection'
    })


  socket.on('score', (data)=> {

  console.log('data firing from score', data)
io.emit('opponentScored', {description: data});

  })
  socket.on('victory', ()=> {
    console.log('the game is over' )

  })
})


app.use(async ctx => {
  console.log("listening on port 3000");
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
