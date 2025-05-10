var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = "mongodb+srv://Maiorano:KNUfH8qWASB3695z@clusterjao.awiwqkh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJao";


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

var dbo = client.db("Informações Blog");
var Post = dbo.collection("Post");

app.post("/cadastrar_usuario", function (req, resp) {
    var data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    usuarios.insertOne(data, function (err) {
        if (err) {
            resp.render('resposta_login', { resposta: "Erro ao cadastrar usuário!" })
        } else {
            resp.render('resposta_login', { resposta: "Usuário cadastrado com sucesso!" })
        };
    });

});

app.post("/logar_usuario", function (req, resp) {
    var data = { db_login: req.body.login, db_senha: req.body.senha };

    usuarios.find(data).toArray(function (err, items) {
        console.log(items);
        if (items.length == 0) {
            resp.render('resposta_usuario', { resposta: "Usuário/senha não encontrado!" })
        } else if (err) {
            resp.render('resposta_usuario', { resposta: "Erro ao logar usuário!" })
        } else {
            resp.render('resposta_usuario', { resposta: "Usuário logado com sucesso!" })
        };
    });

});



app.post('/', function (requisicao, resposta) {
    resposta.redirect('login.html')
})

app.get('/inicio', function (requisicao, resposta) {
    var nome = requisicao.query.login;
    console.log(nome);
    resposta.render('resposta_usuario', { nome })
})

app.post('/inicio', function (requisicao, resposta) {
    var nome = requisicao.body.data;
    console.log(data);
    resposta.render('resposta_usuario', { nome })
})

app.get('/cadastro', function (requisicao, resposta) {
    var nome = requisicao.query.nome;
    var senha = requisicao.query.senha;

    resposta.render('resposta_cadastro', { nome, senha })
})