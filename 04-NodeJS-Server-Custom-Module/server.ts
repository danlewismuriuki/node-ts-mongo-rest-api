import http, { Server, IncomingMessage, ServerResponse } from 'http';
import os from 'os';
import { Mathutil } from './Utils/MathUtils';

const hostname: string = '127.0.0.1';
const port: number = 5000;

const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    let osData = {
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        homedir: os.homedir(),
        type: os.type()
    };

    let myNumber: number = 10;
    let myResult = Mathutil.printMathTable(myNumber);

    //response.end(`<pre>${JSON.stringify(osData)}</pre>`);
    //response.end(`<h3 style="font-family: Lato, sans-serif; color: green">Welcome to NodeJs`)
    response.end(`<h3 style="font-family: Lato, sans-serif; color: green">${myResult}`);
}

const server: Server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`NodeJs Server is started at http://${hostname}:${port}`)
});
