const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users');

router.get('/users', usersControllers.getAllUsers);
router.get('/users/:userID', usersControllers.getUserByID);
router.get('/users/', usersControllers.getUserByNameAndAge);
router.post('/users/', usersControllers.createUser);
router.post('/users/', usersControllers.createManyUsers);

module.exports = router;