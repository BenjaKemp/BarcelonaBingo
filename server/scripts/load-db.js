const db = require('../db');
const PicObject = require('../model');

const data = require('../API');


async function load() {
  console.log('Loading');
  
  await Promise.all(data.map(async item => {
    const pic = new PicObject(item);

    await pic.save();
  }));

  console.log('Done');
  process.exit(0);
};


load();
