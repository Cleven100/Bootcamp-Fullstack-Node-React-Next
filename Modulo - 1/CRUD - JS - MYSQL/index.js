const http = require('http')

const hostname = '127.0.0.1'

const port = 4000;

const server = http.createServer((require, response) =>{
    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n');
});


server.listen(port, hostname, () =>{
    console.log(`Server Running at http://${hostname}:${port}/`)
})