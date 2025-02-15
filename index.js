const express = require('express');
const cors = require('cors');
const sequelize = require('./config/banco.js');

const UsuarioRoutes = require('./routes/usuarios.js')
const LivroRoutes = require('./routes/livros.js')
const EmprestimoRoutes = require('./routes/emprestimos.js')

const app = express();
app.use(cors());
app.use(express.json());

app.use("/Usuarios", UsuarioRoutes);
app.use("/Livros", LivroRoutes);
app.use("/Emprestimo", EmprestimoRoutes);

sequelize.sync().then(() => console.log("Banco conectado!"));

app.listen(2200, () => console.log("Servidor Rodando em http://localhost:2200"));