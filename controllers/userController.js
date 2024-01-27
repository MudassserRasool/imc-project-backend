// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import mongoose from 'mongoose';
// import validator from 'validator';
// import userModel from '../models/userModel.js';

// // function to generate token

// const generateToken = (_id) => {
//   return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });
// };

// // login user controller to save user data in mongoose database
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   // found user with respect to email entered by user
//   const user = await userModel.findOne({ email });

//   if (!user) {
//     return res.status(401).send({ message: 'Invalid User Email' });
//   }

//   try {
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (isMatch && user.email === email) {
//       const token = generateToken(user._id); // passing id of matched user to generate token
//       res.status(200).send({
//         message: 'Congratulation you have scuessfully login',
//         user: user.email,
//         token,
//       });
//     } else {
//       res.status(401).send({ message: 'Invalid Password' });
//     }
//   } catch (error) {
//     res.status(401).send({ message: 'Enter all input fields' });
//   }
// };

// // register user controller to save user data in mongoose database and bycrypt password as well
// const registerUser = async (req, res) => {
//   const { name, email, address, phone, password } = req.body;

//   // send toke
//   //check that if user have entered both email and password
//   if (!name || !email || !address || !phone || !password) {
//     return res.status(401).send({ message: 'Enter all input fields' });
//   }

//   try {
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res
//         .status(400)
//         .send({ message: 'User already exists use any other email' });
//     }
//     if (!validator.isEmail(email)) {
//       return res.status(401).send({ message: 'Invalid Email' });
//     }
//     if (!validator.isMobilePhone(phone)) {
//       return res.status(401).send({ message: 'Invalid Phone Number' });
//     }

//     if (password.length < 6) {
//       return res
//         .status(401)
//         .send({ message: 'Password must be at least 6 characters' });
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     const user = new userModel({
//       name,
//       email,
//       address,
//       phone,
//       password: hash,
//     });
//     await user.save();
//     const token = generateToken(user._id);

//     res
//       .status(200)
//       .send({ name, email, address, phone, token, message: 'User Registered' });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// };

// // get all the registration info of currently registered user
// const getRegistrationInfo = async (req, res) => {
//   const { email } = req.params;
//   if (mongoose.Types.ObjectId.isValid(email)) {
//     return res.status(404).send(`No workout with id: ${email}`);
//   }
//   try {
//     const user = await userModel.findOne({ email });
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // update the registration info of currently registered user

// const updateRegistrationInfo = async (req, res) => {
//   const { email } = req.params;
//   const { name, address, phone } = req.body;
//   try {
//     const user = await userModel.findOneAndUpdate(
//       { email },
//       { name, address, phone }
//     );
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // get all users
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await userModel.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// // delete user by id
// const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   // if (mongoose.Types.ObjectId.isValid(id)) {
//   //   return res.status(404).send(`No user with id: ${id}`);
//   // }
//   try {
//     const user = await userModel.find();
//     await userModel.findByIdAndDelete(id);
//     res.json({ message: 'User deleted successfully.' + user });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export {
//   deleteUser,
//   getAllUsers,
//   getRegistrationInfo,
//   loginUser,
//   registerUser,
//   updateRegistrationInfo,
// };

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.updateRegistrationInfo =
  exports.registerUser =
  exports.loginUser =
  exports.getRegistrationInfo =
  exports.getAllUsers =
  exports.deleteUser =
    void 0;
var _bcrypt = _interopRequireDefault(require('bcrypt'));
var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));
var _mongoose = _interopRequireDefault(require('mongoose'));
var _validator = _interopRequireDefault(require('validator'));
var _userModel = _interopRequireDefault(require('../models/userModel.js'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
// function to generate token

const generateToken = (_id) => {
  return _jsonwebtoken.default.sign(
    {
      _id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '3d',
    }
  );
};

// login user controller to save user data in mongoose database
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // found user with respect to email entered by user
  const user = await _userModel.default.findOne({
    email,
  });
  if (!user) {
    return res.status(401).send({
      message: 'Invalid User Email',
    });
  }
  try {
    const isMatch = await _bcrypt.default.compare(password, user.password);
    if (isMatch && user.email === email) {
      const token = generateToken(user._id); // passing id of matched user to generate token
      res.status(200).send({
        message: 'Congratulation you have scuessfully login',
        user: user.email,
        token,
      });
    } else {
      res.status(401).send({
        message: 'Invalid Password',
      });
    }
  } catch (error) {
    res.status(401).send({
      message: 'Enter all input fields',
    });
  }
};

// register user controller to save user data in mongoose database and bycrypt password as well
exports.loginUser = loginUser;
const registerUser = async (req, res) => {
  const { name, email, address, phone, password } = req.body;

  // send toke
  //check that if user have entered both email and password
  if (!name || !email || !address || !phone || !password) {
    return res.status(401).send({
      message: 'Enter all input fields',
    });
  }
  try {
    const existingUser = await _userModel.default.findOne({
      email,
    });
    if (existingUser) {
      return res.status(400).send({
        message: 'User already exists use any other email',
      });
    }
    if (!_validator.default.isEmail(email)) {
      return res.status(401).send({
        message: 'Invalid Email',
      });
    }
    if (!_validator.default.isMobilePhone(phone)) {
      return res.status(401).send({
        message: 'Invalid Phone Number',
      });
    }
    if (password.length < 6) {
      return res.status(401).send({
        message: 'Password must be at least 6 characters',
      });
    }
    const salt = await _bcrypt.default.genSalt(10);
    const hash = await _bcrypt.default.hash(password, salt);
    const user = new _userModel.default({
      name,
      email,
      address,
      phone,
      password: hash,
    });
    await user.save();
    const token = generateToken(user._id);
    res.status(200).send({
      name,
      email,
      address,
      phone,
      token,
      message: 'User Registered',
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

// get all the registration info of currently registered user
exports.registerUser = registerUser;
const getRegistrationInfo = async (req, res) => {
  const { email } = req.params;
  if (_mongoose.default.Types.ObjectId.isValid(email)) {
    return res.status(404).send(`No workout with id: ${email}`);
  }
  try {
    const user = await _userModel.default.findOne({
      email,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// update the registration info of currently registered user
exports.getRegistrationInfo = getRegistrationInfo;
const updateRegistrationInfo = async (req, res) => {
  const { email } = req.params;
  const { name, address, phone } = req.body;
  try {
    const user = await _userModel.default.findOneAndUpdate(
      {
        email,
      },
      {
        name,
        address,
        phone,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// get all users
exports.updateRegistrationInfo = updateRegistrationInfo;
const getAllUsers = async (req, res) => {
  try {
    const users = await _userModel.default.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// delete user by id
exports.getAllUsers = getAllUsers;
const deleteUser = async (req, res) => {
  const { id } = req.params;
  // if (mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).send(`No user with id: ${id}`);
  // }
  try {
    const user = await _userModel.default.find();
    await _userModel.default.findByIdAndDelete(id);
    res.json({
      message: 'User deleted successfully.' + user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
exports.deleteUser = deleteUser;
