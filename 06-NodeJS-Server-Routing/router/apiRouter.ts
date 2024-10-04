import http from 'http';

export class ApiRouter {
    public static mapRoutes(request: http.IncomingMessage, response: http.ServerResponse) {
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
    }
}