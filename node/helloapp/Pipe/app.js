const fs = require('fs');
const zlib = require('zlib');

let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

let writeableStream = fs.createWriteStream('hello.txt.gz');

let gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStream);

// const fs = require('fs');

// let readableStream = fs.createReadStream(
//     'hello.txt',
//     'utf8'
// );

// let writeableStream = fs.createWriteStream('some2.txt');

// readableStream.pipe(writeableStream);

// const fs = require('fs');

// let readableStream = fs.createReadStream(
//     'hello.txt',
//     'utf8'
// );

// let writeableStream = fs.createWriteStream('some.txt');

// readableStream.on('data', function (chunk) {
//     writeableStream.write(chunk);
// });
