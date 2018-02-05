const express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('secao/tecnologia');
});

app.get('/tecnologia', (req, res) => {
    res.render('secao/tecnologia');
});

app.get('/moda', (req, res) => {
    res.send('<h1>Moda</h1>');
});

app.get('/beleza', (req, res) => {
    res.send('<h1>Beleza</h1>');
});

app.listen(3000, () => {
    console.log('Servidor rodando...');
});