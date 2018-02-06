const db = require('../../config/db');

module.exports = (app) => {
    const connection = db();

    app.get('/noticias', (req, res) => {

        connection.query('select * from Noticias', (error, result) => {
            res.render('noticias/noticias', { noticia: result });
        });
    });
};

