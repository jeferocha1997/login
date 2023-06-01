const express = require('express');
const routes = express.Router();

const usuarios = [{
    id:1,
    nome: 'jeferson',
    email:'abc@123.com',
    senha: '123'
}];

routes.post('/login', (req,res) => {
    const {email, senha} = req.body;

    const usuario = usuarios.find(usuario =>  usuario.email === email && usuario.senha === senha);
    if (usuario){
        res.status(200).json(usuario);
    }
    res.status(401).json({message: 'Usuário / Senha incorreto'});
});

module.exports = routes;