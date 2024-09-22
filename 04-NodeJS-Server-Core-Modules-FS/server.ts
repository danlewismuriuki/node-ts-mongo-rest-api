import http, { Server, IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import fs from 'fs';

const hostname: string = '127.0.0.1';
const port: number = 5000;

const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    fs.readFile(path.join(__dirname, 'data', 'notes.txt'), 'utf-8', (error, result) => {
        if (error) {
            console.log(error)
        }
        response.end(`<pre>${result}</pre>`)
    });


    // response.end(`<h3 style="font-family: Lato, sans-serif; color: green">Welcome to NodeJs`)
};

const server: Server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`NodeJs Server is started at http://${hostname}:${port}`)
});
