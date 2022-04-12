const restify = require('restify');

const server = restify.createServer({
    name: 'CRUD',
    version: '1.0.0'
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'db'
    }
})

server.use(restify.plugins.acceptParser(server.acceptable));

server.use(restify.plugins.queryParser());

server.use(restify.plugins.bodyParser());

server.get('/echo/:name', function (require,response, next) {
    response.send(require.params);
    return next();
})


server.listen(8080, function(){
    console.log('%s listening at %s', server.name, server.url);
});