var express = require('express');
var router = express.Router();

// Require controller modules
const user_controller = require('../controllers/userController');
const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');


router.get('/', user_controller.index);

router.get('/sign-up', user_controller.user_create_get);

router.post('/sign-up', user_controller.user_create_post);

router.get('/posts', post_controller.post_get_all);

router.post('/posts', post_controller.post_create_post);

router.get('/posts/:postId/comments', comment_controller.comments_get);

router.post('/posts/:postId/comments', comment_controller.comments_post);



module.exports = router;