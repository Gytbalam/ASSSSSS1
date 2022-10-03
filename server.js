const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello wolrs');
});

server.listen(port, hostname, () => {
    console.log('App listening on port 4000')
});