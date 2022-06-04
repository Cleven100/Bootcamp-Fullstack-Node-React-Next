const express = require('express');
const app = express();

app.get('/', (req, res) => {
 return res.json([
     {name: 'Hello'},
     {name: 'world'}
 ]);
})

app.listen('8080');