// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema(
//   {
//     items: [
//       {
//         name: String,
//         quantity: Number,
//         price: Number,
//       },
//     ],
//     totalPrice: Number,
//     orderDate: { type: Date, default: Date.now },
//     address: String,
//     phoneNumber: String,
//     userName: String,
//     email: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// const Order = mongoose.model('Order', orderSchema);

// export default Order;

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require('mongoose'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const orderSchema = new _mongoose.default.Schema(
  {
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    totalPrice: Number,
    orderDate: {
      type: Date,
      default: Date.now,
    },
    address: String,
    phoneNumber: String,
    userName: String,
    email: String,
  },
  {
    timestamps: true,
  }
);
const Order = _mongoose.default.model('Order', orderSchema);
var _default = (exports.default = Order);
