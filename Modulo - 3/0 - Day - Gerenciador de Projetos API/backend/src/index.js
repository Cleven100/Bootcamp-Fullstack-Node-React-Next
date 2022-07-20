const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const { listTaskId, listTasks } = require('./controllers/manager.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

function notImplemented(require, response) {
    response.status(501).json({ erro: "Não implementado" });
}

app.get("/task-manager", listTasks);

app.get("/task-manager/:id", listTaskId);

app.post('/task-manager', notImplemented);

app.put('/task-manager/:id', notImplemented);

app.put('/task-manager/:id/conclude', notImplemented);

app.delete('/task-manager/:id', notImplemented);



app.listen(port, () => console.log(`Servidor rodando na por ${port} `));
