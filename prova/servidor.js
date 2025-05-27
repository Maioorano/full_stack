const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


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

// Redirecionar / para home.ejs
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','home.html'));
});

app.get('/blog', async (req, res) => {
    const postagens = await posts.find().sort({ _id: -1 }).toArray();
    res.render('blog', { posts: postagens });
  });
app.get('/enviar_avaliacao', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
  });

  app.post('/enviar_avaliacao', async (req, res) => {
    const { nome, produto, avaliacao, comentario } = req.body;
    await posts.insertOne({ nome, produto, avaliacao, comentario });
    res.redirect('/blog');
  });


app.listen(80, () => {
    console.log('Servidor rodando.'.rainbow);
});