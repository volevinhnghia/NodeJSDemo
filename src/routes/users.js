const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users');

router.get('/users', usersControllers.getAllUsers);
router.get('/users/:userId', usersControllers.getUserByID);
router.get('/users/user-by-name-and-age', usersControllers.getUserByNameAndAge);
router.post('/users', usersControllers.createUser);

module.exports = router;