const uuid = require('uuid');

let tasks = [
    { id: '1', nome: 'Learn React', conclude: true},
    { id: '2', nome: 'Learn Design patterns', conclude: true},
    { id: '4', nome: 'Learn Typescript', conclude: true},
    { id: '4', nome: 'Learn Node.js', conclude: true}
    
];

function listTaskId(require, response) {
    const id = require.params.id;
    const task = tasks.filter(task => task.id === id);
    if(task.length === 0) {
         response.status(404).json({ erro: 'Task not found'});
    }
    response.json(task[0]);
}

function listTasks(require, response) {
const pag = require.query['pag'] || 1;
const order = require.query['order'];
const filteTasl = require.query['filter-task'];
const itensPerPag = require.query['itens-por-pagina'] || 3;

}

module.exports = {
    listTaskId,
    listTasks
}