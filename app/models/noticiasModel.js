module.exports = () => {

    this.getNoticias = (connection, callback) => {
        connection.query('select * from Noticias', callback);
    };

    this.getNoticia = (connection, callback) => {
        connection.query('select * from Noticias where id = 2', callback);
    };

    this.salvarNoticia = (noticia, connection, callback) => {
        connection.query('insert into Noticias set ?', noticia, callback);
    };

    return this;
};