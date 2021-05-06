var http =require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application\json'});
    res.write("{name:'ayush'}");
    res.end();
}).listen(3400);