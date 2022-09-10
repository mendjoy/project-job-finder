const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const Job = require('./models/Job');


const PORT = 7000;


app.listen(PORT, function(){
    console.log('O express está rodando na porta 7000')
});

//handlebars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

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
    Job.findAll({order: [
        ['creatdAt', 'DESC']
    ]})
    .then(jobs => {
        res.render('index', {
            jobs
        });
    })
    
});

//jobs route
app.use('/Jobs', require('./routes/jobs'))