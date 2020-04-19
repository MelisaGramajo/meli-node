var http = require('http');

http.createServer(function(req, res){
    res.write("Hello Word");
    res.end();
}).listen(3000, function(){
    console.log("Server listen port 3000")

});