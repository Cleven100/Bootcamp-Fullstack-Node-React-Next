const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');
const uploadConfig = require('./');
const LikeController = require('./controllers/LikeController')


const routes = new express.Router();
const upload = multer(uploadConfig);



routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts',  PostController.store);

routes.post('/posts/:id/like',  LikeController.store);


module.exports = routes;