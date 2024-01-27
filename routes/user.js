'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _express = require('express');
var _userController = require('../controllers/userController.js');
const router = (0, _express.Router)();

// login user
router.post('/login', _userController.loginUser);

// register user
router.post('/register', _userController.registerUser);

// get information of current user
router.get('/current/:email', _userController.getRegistrationInfo);

// update the registration info of currently registered user
router.patch('/current/:email', _userController.updateRegistrationInfo);

// get all users
router.get('/', _userController.getAllUsers);

// delete user by id
router.delete('/:id', _userController.deleteUser);
var _default = (exports.default = router);
