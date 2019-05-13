const http = require('http');
const color = require('colors');
const handleServer = function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Hola Mundo desde Node js</h1>');
    res.end();
}

const server= http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.green);

});


//Método Asincrono
/*
fs.writeFile('./texto.txt', 'linea uno', function(err)
{
    if(err)
    {
        console.log(err);

    }
    console.log('Archivo Creado');

});*/
//Método Sincrono
//const resultado = fs.writeFile('','');