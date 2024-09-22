import http, { Server, IncomingMessage, ServerResponse } from 'http';

const hostname: string = '127.0.0.1';
const port: number = 5000;

const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');


    let url: string | undefined = request.url;
    let method: string | undefined = request.method;
    let result: string = '';

    if (url == '/' && method === 'GET') {
        result = `<h3 style="font-family: Lato, sans-serif; color: green">Welcome to NodeJs`;
    } else if (url === '/about' && method === 'GET') {
        result = `<h3 style="font-family: Lato, sans-serif; color: green">Welcome to About Page`;
    } else if (url === '/contact' && method === 'GET') {
        result = `<h3 style="font-family: Lato, sans-serif; color: green">Welcome to NodeJs`;
    } else {
        result = `<h3 style="font-family: Lato, sans-serif; color: green"> 404 page`;
    }
    response.end(`${result}`);

    //response.end(`<h3 style="font-family: Lato, sans-serif; color: green">Welcome to NodeJs`)
};

const server: Server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`NodeJs Server is started at http://${hostname}:${port}`)
});
