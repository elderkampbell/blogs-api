const express = require('express');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const postController = require('../controllers/postController');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.post('/login', loginController.loginValidation);
router.post('/user', userController.addUser);
router.get('/user', validateJWT, userController.getUsers);
router.get('/user/:id', validateJWT, userController.getUserById);
router.post('/categories', validateJWT, categoryController.addCategory);
router.get('/categories', validateJWT, categoryController.getCategories);
router.get('/post', validateJWT, postController.getPosts);

module.exports = router;
