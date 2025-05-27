const mongoose = require('mongoose');

const carroSchema = new mongoose.Schema({
    modelo: String,
    marca: String,
    ano: Number,
    quantidade: Number,
    dono: String // login do usuário dono
});

const Carro = mongoose.model('Carro', carroSchema);

module.exports = Carro;
