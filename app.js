const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');


const PORT = 7000;


app.listen(PORT, function(){
    console.log('O express está rodando na porta 7000')
});

//body-parser
app.use(bodyParser.urlencoded({extended: false}));

//db connection 
db //promise
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso')
    })
    .catch(err => console.log(err));

//routes
app.get('/', (req, res) => {
    res.send('Está funcionando ')
});

//jobs route
app.use('/Jobs', require('./routes/jobs'))