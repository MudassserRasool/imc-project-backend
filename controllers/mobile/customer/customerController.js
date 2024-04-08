import bcrypt from 'bcrypt'; // vercel is not supporting it so use olde rversion or js-sha512
import jwt from 'jsonwebtoken';
import validator from 'validator';
import customerModal from '../../../models/mobile/customersModal.js';

// function to generate token

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });
};

// login user controller to save user data in mongoose database
const loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  // found user with respect to email entered by user
  const user = await customerModal.findOne({ email });

  if (!user) {
    return res.status(401).send({ message: 'Invalid User Email' });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch && user.email === email) {
      const token = generateToken(user._id); // passing id of matched user to generate token
      res.status(200).send({
        message: 'Congratulation you have scuessfully login',
        user: user.email,
        token,
      });
    } else {
      res.status(401).send({ message: 'Invalid Password' });
    }
  } catch (error) {
    res.status(401).send({ message: 'Enter all input fields' });
  }
};

// register user controller to save user data in mongoose database and bycrypt password as well
const registerCustomer = async (req, res) => {
  const { email, password } = req.body;

  // send toke
  //check that if user have entered both email and password
  if (!email || !password) {
    return res.status(401).send({ message: 'Enter all input fields' });
  }

  try {
    const existingUser = await customerModal.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ message: 'User already exists use any other email' });
    }
    if (!validator.isEmail(email)) {
      return res.status(401).send({ message: 'Invalid Email' });
    }

    if (password.length < 6) {
      return res
        .status(401)
        .send({ message: 'Password must be at least 6 characters' });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = new customerModal({
      email,
      password: hash,
    });
    await user.save();
    const token = generateToken(user._id);

    res.status(200).send({ email, token, message: 'User Registered' });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// get profile of user with it email
const getProfile = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await customerModal.findOne({ email: email });

    if (!user) {
      return res.status(401).send({ message: 'Invalid User Email' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// now update name , phon and adress of that user
const updateProfile = async (req, res) => {
  const { email } = req.params;
  const { name, phone, address } = req.body;
  try {
    const user = await customerModal.findOne({ email: email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid User Email' });
    }
    user.name = name;
    user.phone = phone;
    user.address = address;
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export { getProfile, loginCustomer, registerCustomer, updateProfile };
