import http, { Server, IncomingMessage, ServerResponse } from 'http';
import { ApiRouter } from './router/apiRouter';
const hostname: string = '127.0.0.1';
const port: number = 5000;

const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    ApiRouter.mapRoutes(request, response);
    //response.end(`<h3 style="font-family: Lato, sans-serif; color: green">Welcome to NodeJs`)
};

const server: Server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`NodeJs Server is started at http://${hostname}:${port}`)
});
