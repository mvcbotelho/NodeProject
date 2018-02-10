module.exports = (app) => {
    app.get('/form_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;

        const connection = app.config.db();
        const noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
            res.redirect('/noticias');
        });
    });
};