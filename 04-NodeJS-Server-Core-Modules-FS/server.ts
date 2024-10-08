import http, { Server, IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import fs from 'fs';

const hostname: string = '127.0.0.1';
const port: number = 5000;

const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    // fs.readFile(path.join(__dirname, 'data', 'notes.txt'), 'utf-8', (error, result) => {
    //     if (error) {
    //         console.log(error)
    //     }
    //     fs.writeFile(path.join(__dirname, 'data', 'data.txt'), result, 'utf-8', (error) => {
    //         if (error) {
    //             console.log("there is an error")
    //         }
    //         response.end(`<pre>Data has been written: ${result}</pre>`)
    //     })
    //response.end(`<pre>${result}</pre>`)


    fs.readFile(path.join(__dirname, 'data', 'test.json'), 'utf-8', (error, result) => {
        if (error) {
            console.log("there is an error");
        }
        response.end(`<pre>${result}</pre>`);
        return;
    });
};//);


// response.end(`<h3 style="font-family: Lato, sans-serif; color: green">Welcome to NodeJs`)
//};

const server: Server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`NodeJs Server is started at http://${hostname}:${port}`)
});
