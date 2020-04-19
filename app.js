var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello Word con HTML</h1>");
    res.end();
}).listen(3000, function(){
    console.log("Server listen port 3000")

});