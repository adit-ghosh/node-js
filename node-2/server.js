const http = require('http');

const node_server = () => {
    const server = http.createServer((request, response) => {
            console.log(request.url, request.method, request.headers);
            if (request.url === '/') {
                response.setHeader('Content-Type', 'text/html');
                response.write('<html>')
                response.write('<head>')
                response.write('<title>Node Server</title>')
                response.write('</head>')
                response.write('<body>')
                response.write('<h1>Hello from Node Server!</h1>')
                response.write('</body>')
                response.write('</html>')
                response.end();
            }
            else if (request.url === '/2') {
                response.setHeader('Content-Type', 'text/html');
                response.write('<html>')
                response.write('<head>')
                response.write('<title>Page 2</title>')
                response.write('</head>')
                response.write('<body>')
                response.write('<h1>Page 2</h1>')
                response.write('</body>')
                response.write('</html>')
                response.end();
            }
            else{
                response.setHeader('Content-Type', 'text/html');
                response.write('<html>')
                response.write('<head>')
                response.write('<title>Not Found</title>')
                response.write('</head>')
                response.write('<body>')
                response.write('<h1>Page Not Found</h1>')
                response.write('</body>')
                response.write('</html>')
                response.end();
            }
    })

    const PORT = 3149;

    server.listen(PORT,()=>{
        console.log(`Node server is running on port ${PORT}`);
    });

    return true;
}

node_server();
