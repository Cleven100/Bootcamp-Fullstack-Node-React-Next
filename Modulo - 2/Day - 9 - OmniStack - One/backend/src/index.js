const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


mongoose.connect('mongodb+srv://omnistack:157455@cluster0.pfbsymh.mongodb.net/?retryWrites=true&w=majority',{ 
    useNewUrlParser: true,
})

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));



app.use(require('./routes'));

server.listen(8080);