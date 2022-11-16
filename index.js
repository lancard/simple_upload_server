const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((request, response) => {
    const filename = path.basename(request.url);
    const writeStream = fs.createWriteStream("out/"+filename);
    request.pipe(writeStream);

    request.on('end', () => {
        writeStream.close();
        console.dir(`wrote: ${filename}`);
        response.end("test");
    });
}).listen(9999);
