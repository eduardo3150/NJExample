var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type': 'text/plain'});
    res.end('Hello World \n');

}).listen(8080);

console.log('Server running on port 8080');