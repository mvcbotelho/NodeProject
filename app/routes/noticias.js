module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        const connection = app.config.db();
        const noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, (error, result) => {
            res.render('noticias/noticias', { noticia: result });
        });
    });
};

