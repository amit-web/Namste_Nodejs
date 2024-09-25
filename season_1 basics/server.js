const http = require('node:http');


const server = http.createServer(function(req,res){
    if(req.url==="/getSecretData"){
        res.end("There is no secret data");
    }
   
    res.end('Welcome it is our first server which i have created');
});

server.listen(7777);




