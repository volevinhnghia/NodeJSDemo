const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users');

router.get('/get-all-users', usersControllers.getAllUsers);
router.get('/get-user/:userId', usersControllers.getUserByID);
router.get('/getUserByNameAndAge', usersControllers.getUserByNameAndAge);
router.post('/createUser', usersControllers.createUser);
router.post('/createManyUsers', usersControllers.createManyUsers);

module.exports = router;