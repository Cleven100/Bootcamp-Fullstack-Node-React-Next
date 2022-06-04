const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://omnistack:157455@cluster0.pfbsymh.mongodb.net/?retryWrites=true&w=majority',{ 
    useNewUrlParser: true,
})

const app = express();

app.use(require('./routes'));

app.listen(8080);