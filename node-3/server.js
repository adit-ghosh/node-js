const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('html/index.html',(err,data)=>{
            if(!err){
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
            else{
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error loading page');
            }
        })
    }
    else if(req.url==='/page2'){
        fs.readFile('html/page2.html',(err,data)=>{
            if(!err){
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
            else{
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error loading page');
            }
        })
    }
    else{
        fs.readFile('html/404.html',(err,data)=>{
            if(!err){
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
            else{
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error loading page');
            }
        })
    }
})

server.listen(4358,()=>{
    console.log('Server is running on port 4358');
})