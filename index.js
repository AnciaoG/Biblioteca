import express from 'express';
const app = express();

// Inicia o servidor
app.listen(2200, () => {
    console.log(`Servidor rodando na porta http://localhost:2200`);
});
