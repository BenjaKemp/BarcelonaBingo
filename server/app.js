const Koa         = require("koa");
const bodyparser  = require("koa-bodyparser");
const cors        = require("koa-cors");

const router      = require("./routes/index");
const myApi       = require("./API/index");
const db          = require("./db");
const app = new Koa();

app
  .use(cors({origin: 'http://localhost:3001'}))
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods());
  const server      = require("http").createServer(app.callback())
  const io           = require("socket.io")(server);


const clients = [];

io.on("connection", client => {
  clients.forEach(client => client.emit("user_connected"));
  clients.push(client);
  client.on("bingo_card_seen", () => {});
  console.log("a user connected");
});

app.use(async ctx => {
  console.log("listening on port 3000");
  console.log(clients);
});

server.listen(3000);
