const http = require('http');
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const mongodb = require("mongodb");
const path = require('path');

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://Maiorano:AHtGibxZyEAXmltq@clusterjao.awiwqkh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJao";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

client.connect().then(() => {
  console.log('✅ MongoDB conectado com sucesso'.green);
  const dbo = client.db("exemplo_bd");
  const usuarios = dbo.collection("usuarios");
  const posts = dbo.collection("posts");

  // ROTA PADRÃO
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
  });

  // ROTAS USUÁRIOS
  app.post("/cadastrar_usuario", (req, res) => {
    const data = { db_login: req.body.nome, db_senha: req.body.senha };
    usuarios.insertOne(data, err => {
      if (err) res.render('resposta_erro', { resposta: "Erro ao cadastrar usuário!" });
      else res.render('resposta_cadastro', { nome: req.body.nome, senha: req.body.senha });
    });
  });

  app.post("/logar_usuario", (req, res) => {
    const data = { db_login: req.body.login, db_senha: req.body.senha };
    usuarios.find(data).toArray((err, items) => {
      if (err) res.render('resposta_erro', { resposta: "Erro ao logar usuário!" });
      else if (items.length == 0) res.render('resposta_erro', { resposta: "Usuário/senha não encontrado!" });
      else res.render('resposta_usuario', { resposta: "Usuário logado com sucesso!", nome: req.body.login });
    });
  });

  // ROTAS BLOG

  app.get('/blog', async (req, res) => {
    const postagens = await posts.find().sort({ _id: -1 }).toArray();
    res.render('blog', { posts: postagens });
  });

  app.get('/cadastrar_post', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cadastrar_post.html'));
  });

  app.post('/cadastrar_post', async (req, res) => {
    const { titulo, resumo, conteudo } = req.body;
    await posts.insertOne({ titulo, resumo, conteudo });
    res.redirect('/blog');
  });

  // INICIA SERVIDOR
  http.createServer(app).listen(80, () => {
    console.log('🚀 Servidor rodando na porta 80'.cyan);
  });
}).catch(err => {
  console.error('❌ Erro ao conectar no MongoDB:', err);
});
