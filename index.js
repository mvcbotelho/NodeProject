const http = require('http');

const server = http.createServer(function (req, res) {

    let category = req.url;

    if(category === '/tecnologia') {
        res.end('<html><body><h1>Pagina de tecnologia</h1></body></body></html>');
    } else if(category === '/moda') {
        res.end('<html><body><h1>Pagina de moda</h1></body></body></html>');
    } else if(category === '/beleza') {
        res.end('<html><body><h1>Pagina de beleza</h1></body></body></html>');
    } else {
        res.end('<html><body><h1>Servidor com NODE JS</h1></body></body></html>');
    }
});

server.listen(3000);