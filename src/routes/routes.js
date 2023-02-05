const express = require('express');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginController.loginValidation);
router.post('/user', userController.addUser);

module.exports = router;
