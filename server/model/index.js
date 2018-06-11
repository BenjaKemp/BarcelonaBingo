const mongoose = require("mongoose");

const picObject =  mongoose.Schema({
  title: String,
  pic: String,
  seen: Boolean,
  info: String
});
const PicObjects = mongoose.model("zeus", picObject);



module.exports = PicObjects
