import express from 'express';
const app = express();
import { engine } from 'express-handlebars';


/**CONFIGURAÇÃO DA VISÃO */
app.engine('handlebars', engine({ defaultLayout: 'Principal' })); 
app.set('view engine', 'handlebars');

/**ROTAS DO SISTEMA */
app.get('/', function(req, res){
    res.render('layouts/Principal')
})

// Inicia o servidor
app.listen(2200, () => {
    console.log(`Servidor rodando na porta http://localhost:2200`);
});
