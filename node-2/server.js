const http = require('http');

const node_server = () => {
    const server = http.createServer((request, response) => {
            console.log(request);
    })

    const PORT = 3149;

    server.listen(PORT,()=>{
        console.log(`Node server is running on port ${PORT}`);
    });

    return true;
}

node_server();
