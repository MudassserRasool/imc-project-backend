// import express from 'express';
// import { getAllOrders, getOrders, placeOrder } from '../controllers/orderControllers.js';

// const router = express.Router();
// // router.use(requireAuth);

// router.post('/', placeOrder);
// router.get('/user/:email', getOrders);
// router.get('/', getAllOrders);

// //
// // router.delete('/:id',deleteOrder );

// export default router;

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _express = _interopRequireDefault(require('express'));
var _orderControllers = require('../controllers/orderControllers.js');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const router = _express.default.Router();
// router.use(requireAuth);

router.post('/', _orderControllers.placeOrder);
router.get('/user/:email', _orderControllers.getOrders);
router.get('/', _orderControllers.getAllOrders);

//
// router.delete('/:id',deleteOrder );
var _default = (exports.default = router);
/*

{
    "email":"ghdsh@ghj.com",
    "name": "mudas",
    "address": "sdssssssssssssss",
"phone":"020444444",
"password":"mudasserRasool2023@+"
}
 "user_id": "65a32f3e9e762bb81798b9af",
*/
