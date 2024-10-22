const http = require('http')
const fs = require('fs');

//create serever
const server = http.createServer((req,res)=>{

    if(req.method === 'GET'){
        res.statusCode = 200;
        fs.readFile('index.html',(err,data)=>{
            if(err){
                res.statusCode=400;
                console.log(err);
                res.end('Error',err);
                return
            }
            res.setHeader('Content-Type','text/html');
            res.end(data);
        });
        
      
    }
});

server.listen(3000,()=>{   
    console.log('Server running at http://localhost:3000/');
});