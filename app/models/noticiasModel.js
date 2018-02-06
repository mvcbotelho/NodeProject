module.exports = () => {

    this.getNoticias = (connection, callback) => {
        connection.query('select * from Noticias', callback);
    };

    this.getNoticia = (connection, callback) => {
        connection.query('select * from Noticias where id = 2', callback);
    };

    return this;
};