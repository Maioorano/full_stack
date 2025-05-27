const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('colors');

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://Maiorano:AHtGibxZyEAXmltq@clusterjao.awiwqkh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJao', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado ao banco'.green))
    .catch((err) => console.error('erro:', err.message.red));

// Servir arquivos estáticos da pasta "views"
app.use(express.static(path.join(__dirname, 'views')));

// Redirecionar / para login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rodar na porta 80
app.listen(80, () => {
    console.log('Servidor rodando.'.rainbow);
});
