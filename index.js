const app = require('./config/server');
const rotaNoticias = require('./app/routes/noticias')(app);
const rotaForm = require('./app/routes/form_noticia')(app);
const rotaHome = require('./app/routes/home')(app);

app.listen(3000, () => {
    console.log('Servidor rodando...');
});