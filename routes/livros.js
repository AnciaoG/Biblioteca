const express = require('express');
const Livro = require('../models/Livro.js');

const router = express.Router();

//novo livro
router.post('/', async (req, res) => {
    try{
        const {titulo, autor, ano} = req.body;
        const livro = await Livro.create({titulo, autor, ano});
        res.status(201).json(livro);
    } catch (error){
        res.status(500).json({erro: error.message });
    }
});

//busca
router.get('/', async (req, res) => {
    const livros = await Livro.findAll();
    res.json(livros);
});

//atualizar
router.put('/:id', async (req, res) => {
    try{
        const {titulo, autor, ano, disponibilidade} = req.body;
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) return res.status(404).json({erro: 'Livro não encontrado'})
        
        await livro.update({titulo, autor, ano, disponibilidade });
        res.json(livro);
    } catch (error){
        res.status(500).json({erro: error.message });
    }
});

module.exports = router;