const express = require('express');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.post('/login', loginController.loginValidation);
router.post('/user', userController.addUser);
router.get('/user', validateJWT, userController.getUsers);
router.get('/user/:id', validateJWT, userController.getUserById);

module.exports = router;
