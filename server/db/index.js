const mongoose = require("mongoose");
const fetch = require("cross-fetch");
mongoose.connect("mongodb://localhost/bingoCards");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
});

// const Schema = mongoose.Schema;
// const apiCall = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyD7M54VlXGX4-kQPKFV5SEHGk5W-xgBhJI&placeid=ChIJ5TCOcRaYpBIRCmZHTz37sEQ`
// const picMap =`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=`;
// const myApi = `&key=AIzaSyD7M54VlXGX4-kQPKFV5SEHGk5W-xgBhJI`;
// const myArray = [];
//
//
// const callApi = () => {
//   return fetch(apiCall)
//   .then(res => res.json());
// };
// const addObjects = async () => {
//   const data = await callApi();
//   const barcelonaPics = data.result;
//   barcelonaPics.photos.forEach(e => {
//     myArray.push(picMap + e.photo_reference + myApi);
//   });
// };
// addObjects();
// module.exports = db;
