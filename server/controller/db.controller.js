const PicObjects = require("../model/index.js");
const db = require("../db/index");
const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};


const getAll = async ctx => {

  const boardArray = await PicObjects.find((err, pics) => {
    if (err) return console.log("error in db");
  });
  ctx.body = shuffle(boardArray);
};

const createnew = ctx => {
  ctx.body = PicObjects.create({
    title: ctx.request.body.title,
    pic: ctx.request.body.pic,
    seen: ctx.request.body.seen,
    info: ctx.request.body.info
  });
};
module.exports = { createnew, getAll };
