var http = require('http');


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var url = req.url; 
    if (url === '/settings') { 
        res.write ('<h1> MelisaGramajo95 <h1>'); // escribe una respuesta 
        res.write ('<h3> Gramajo, Melisa Rocio <h3>'); // escribe una respuesta 
        res.write ('<h3> 24/05/1995 <h3>'); // escribe una respuesta 
        res.end (); // finaliza la respuesta 
    } else { 
        
        res.write('<img src="img/fotoperfil.png"></a>');
        res.write (' <h1> Gramajo Melisa Rocio <h1> '); // escribe una respuesta
        res.end();
    }
}).listen(3000, function(){
    console.log("Server listen port 3000")

});