const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer();



routes.post('/posts', PostController.store);


module.exports = routes;