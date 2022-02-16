const express = require("express"); // atribuindo uma constante express
const app = express(); // chamando uma função dentro do express.
app.listen(3000,function(){ // colocando o servidor no ar usando o express "ouça a porta 3000"
    console.log('Servidor rodando na porta 3000'); // rodando uma mensagem
});
// requisição post | requisição "fechada" | login e senha

/*
post -   Create
get -    Read
put -    Update
delete - Delete
*/

app.get('/',function(req, resp){ // requisição get | requisição "aberta"
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Desenvolvimento web II</h1>
            </body>
        </html>
        `
    );
});

app.get('/sobre',function(req, resp){
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Sobre</h1>
            </body>
        </html>
        `
    );
});

app.get('/cadastro', function(req, resp){
    resp.sendFile(__dirname + '/cadastro.html');

});

app.get('/mel',function(req, resp){
    var valorx = 13;
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>A mel  disse que vai votar ${valorx}</h1>
            </body>
        </html>
        `
    );
});