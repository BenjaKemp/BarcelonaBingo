const mongoose = require("mongoose");

const picObject =  mongoose.Schema({
  title: String,
  pic: String,
  seen: Boolean,
  info: String
});
const PicObjects = mongoose.model("bingoCards", picObject);



module.exports = PicObjects
