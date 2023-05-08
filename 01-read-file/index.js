const fs = require('fs');
const path = require('path');
const { Stream } = require('stream');

const textPath = path.join(__dirname, 'text.txt');


const textStream = fs.createReadStream(textPath, { encoding: 'utf-8' });

textStream.on('data', (data) => {
    console.log(data);
  });
  
  textStream.on('error', (err) => {
    console.error(err);
  });
