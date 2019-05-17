
const http = require("http");

// Creación del servidor HTTP, y se define la escucha
// de peticiones en el puerto 8000
http.createServer(function(request, response) {

   // Se define la cabecera HTTP, con el estado HTTP (OK: 200) y el tipo de contenido
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World"
   response.end('Hola Mundo!\n');
}).listen(8000);

// Se escribe la URL para el acceso al servidor
console.log('Servidor en la url http://127.0.0.1:8000/');

/*
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
*/


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