const express = require('express');
const app = express();
const db = require('./db/connection');


const PORT = 7000;


app.listen(PORT, function(){
    console.log('O express está rodando na porta 7000r')
});
//db connection 
db //promise
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso')
    });
    .catch(err )=> ({
        console.log('ocorre um erro ao conectar', err),
    })

//routes
app.get('/', (req, res) => {
    res.send('Está funcionando ')
});