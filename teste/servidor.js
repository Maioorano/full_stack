//npm i express mongoose ejs colors
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Carro = require('./models/Carro');


require('colors');

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://Maiorano:AHtGibxZyEAXmltq@clusterjao.awiwqkh.mongodb.net/usuariosDB?retryWrites=true&w=majority&appName=ClusterJao', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado ao banco'.green))
    .catch((err) => console.error('Erro:', err.message.red));

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para ler dados do formulário
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta "views"
app.use(express.static(path.join(__dirname, 'views')));

// Modelo do MongoDB
const usuarioSchema = new mongoose.Schema({
    db_login: String,
    db_senha: String,
});
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Redirecionar / para login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota de cadastro - deve estar antes do app.listen
app.post("/cadastrar_usuario", async (req, res) => {
    const data = { db_login: req.body.nome, db_senha: req.body.senha };

    try {
        await Usuario.create(data);
        res.render('resposta_cadastro', { nome: req.body.nome, senha: req.body.senha });
    } catch (err) {
        console.error(err);
        res.render('resposta_erro', { resposta: "Erro ao cadastrar usuário!" });
    }
});
app.post("/logar_usuario", async (req, res) => {
    try {
        const data = { db_login: req.body.login, db_senha: req.body.senha };
        const usuario = await Usuario.findOne(data);

        if (!usuario) {
            return res.render('resposta_erro', { resposta: "Usuário/senha não encontrado!" });
        }

        // Busca carros do usuário logado
        const carros = await Carro.find({ dono: req.body.login });

        console.log('Carros encontrados:', carros); // DEBUG: vê no console se acha carros

        // Renderiza o painel passando lista de carros
        res.render('resposta_usuario', {
            resposta: "Usuário logado com sucesso!",
            nome: req.body.login,
            carros: carros
        });
    } catch (err) {
        console.error(err);
        res.render('resposta_erro', { resposta: "Erro ao logar usuário!" });
    }
});

// Cadastrar carro
app.post('/cadastrar_carro', async (req, res) => {
    try {
        const { dono, modelo, ano, quantidade } = req.body;
        await Carro.create({ dono, modelo, ano, quantidade });
        const carros = await Carro.find({ dono });
        res.render('resposta_usuario', { resposta: "Carro cadastrado!", nome: dono, carros });
    } catch (err) {
        console.error(err);
        res.render('resposta_erro', { resposta: "Erro ao cadastrar carro!" });
    }
});

// Vender carro (decrementar quantidade)
app.post('/vender_carro', async (req, res) => {
    try {
        const { carro_id } = req.body;
        const carro = await Carro.findById(carro_id);
        if (!carro) throw new Error('Carro não encontrado');

        if (carro.quantidade > 0) {
            carro.quantidade -= 1;
            await carro.save();
        }

        const carros = await Carro.find({ dono: carro.dono });
        const mensagem = carro.quantidade === 0 ? "Esgotado!" : "Venda realizada com sucesso!";
        res.render('resposta_usuario', { resposta: mensagem, nome: carro.dono, carros });
    } catch (err) {
        console.error(err);
        res.render('resposta_erro', { resposta: "Erro ao vender carro!" });
    }
});

// Remover carro
app.post('/remover_carro', async (req, res) => {
    try {
        const { carro_id } = req.body;
        const carro = await Carro.findById(carro_id);
        if (!carro) throw new Error('Carro não encontrado');

        const dono = carro.dono;
        await Carro.deleteOne({ _id: carro_id });

        const carros = await Carro.find({ dono });
        res.render('resposta_usuario', { resposta: "Carro removido!", nome: dono, carros });
    } catch (err) {
        console.error(err);
        res.render('resposta_erro', { resposta: "Erro ao remover carro!" });
    }
});

// Rodar na porta 80
app.listen(80, () => {
    console.log('Servidor rodando.'.rainbow);
});
