import mongoose from 'mongoose';
import { port } from '../constants/index.js';
import { app, handelDbError } from '../utils/helperFunctions.js';

// const connectDb = async () => {
//   if (environment === 'development') {
//     try {
//       await mongoose.connect(process.env.MONGODB_URI);
//       app.listen(port, () => {
//         console.log(
//           `Connected to mongodb and running on port ${port} and environment is development`
//         );
//       });
//     } catch (error) {
//       handelDbError(error);
//     }
//   } else {
//     try {
//       await mongoose.connect(process.env.MONGODB_URI).then(() => {
//         server.listen(port, () => {
//           console.log(
//             `Connected to mongodb and running on port ${port} and environment is production`
//           );
//         });
//       });
//     } catch (error) {
//       handelDbError(error);
//     }
//   }
// };
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(
        `Connected to mongodb and running on port ${port} and environment is development`
      );
    });
  } catch (error) {
    handelDbError(error);
  }
};
export { app, connectDb };
