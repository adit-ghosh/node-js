const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        fs.readFile('index.html',(err,data)=>{
            if(!err){
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
            else{
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/plain')
                res.end('500 error')
            }
        })
    }
    else if (req.url === '/form' && req.method == 'POST') {
        res.writeHead(302,{'Location': '/', 'Content-Type': 'text/html' })
        res.write('<html> <head> <title>Form</title> </head> <body> <h1>Redirecting</h1> </body> </html>')
        console.log("Form submitted");
        res.end()
    }
    else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.write('<html> <head> <title>Form 404</title> </head> <body> <h1>404 Page not Found</h1> </body> </html>')
        res.end()
    }
})

server.listen(7409,()=>{
    console.log("Server is running on port 7409")
})