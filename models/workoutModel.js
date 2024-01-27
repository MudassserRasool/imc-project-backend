// import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

// const workoutSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     reps: {
//       type: Number,
//       required: true,
//     },
//     load: {
//       type: Number,
//       required: true,
//     },
//     user_id: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
// const Workout = mongoose.model('Workout', workoutSchema);

// export default Workout;

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require('mongoose'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const Schema = _mongoose.default.Schema;
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Workout = _mongoose.default.model('Workout', workoutSchema);
var _default = (exports.default = Workout);
