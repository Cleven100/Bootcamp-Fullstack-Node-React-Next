
const restify = require('restify');

var valores;

const server = restify.createServer({
    name: 'CRUD',
    version: '1.0.0'
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'db'
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


server.get('/', function (require,response, next) {
    
    knex('rest').then((dados) =>{
       console.log(dados);
    }, next);


 
    return next();
});


server.get('/show/:id', function (require,response, next) {
    const { id } = require.params;
    knex('rest')
    .where('id', id)
    .first()
    .then((dados) =>{
        console.log(dados);
      
    }, next);


 
    return next();
});



server.put('/update/:id', function (require,response, next) {
    const { id } = require.params;
    knex('rest')
    .where('id', id)
    .update(require.body)
    .then((dados) =>{
        console.log(dados);
      
    }, next);


 
    return next();
});


