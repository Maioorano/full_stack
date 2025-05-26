const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta "views"
app.use(express.static(path.join(__dirname, 'views')));

// Redirecionar / para login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rodar na porta 80
app.listen(80, () => {
    console.log('Servidor rodando.');
});
