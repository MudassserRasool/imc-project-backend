import { Router } from 'express';
// import {
//   // deleteUser,
//   // getAllUsers,
//   // getRegistrationInfo,
//   loginUser,
//   // registerUser,
//   // updateRegistrationInfo,
// } from '../controllers/userController.js';
const router = Router();

// login user
router.post('/login', (req, res) => {
  res.send('login');
});

// register user
// router.post('/register', registerUser);

// // get information of current user
// router.get('/current/:email', getRegistrationInfo);

// // update the registration info of currently registered user
// router.patch('/current/:email', updateRegistrationInfo);

// get all users
// router.get('/', getAllUsers);

// delete user by id
// router.delete('/:id', deleteUser);
export default router;
