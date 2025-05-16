var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = "mongodb+srv://Maiorano:AHtGibxZyEAXmltq@clusterjao.awiwqkh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJao";


const client = new MongoClient(uri, { useNewUrlParser: true });
var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);
const dbo = client.db("exemplo_bd");
const usuarios = dbo.collection("usuarios");

app.post("/cadastrar_usuario", function (req, resp) {
    var data = { db_login: req.body.nome, db_senha: req.body.senha };

    usuarios.insertOne(data, function (err) {
        if (err) {
            resp.render('resposta_erro', { resposta: "Erro ao cadastrar usuário!" })
        } else {
            resp.render('resposta_cadastro', { nome: req.body.nome, senha: req.body.senha })
        };
    });

});

app.post("/logar_usuario", function (req, resp) {
    var data = { db_login: req.body.login, db_senha: req.body.senha };

    usuarios.find(data).toArray(function (err, items) {
        console.log(items);
        if (items.length == 0) {
            resp.render('resposta_erro', { resposta: "Usuário/senha não encontrado!" })
        } else if (err) {
            resp.render('resposta_erro', { resposta: "Erro ao logar usuário!" })
        } else {
            resp.render('resposta_usuario', { resposta: "Usuário logado com sucesso!", nome: req.body.login })
        };
    });

});



app.get('/', function (requisicao, resposta) {
    resposta.redirect('login.html')
})