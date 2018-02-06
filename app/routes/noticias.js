module.exports = (app) => {
    app.get('/noticias', (req, res) => {

        const connection = app.config.db();

        connection.query('select * from Noticias', (error, result) => {
            res.render('noticias/noticias', { noticia: result });
        });
    });
};

