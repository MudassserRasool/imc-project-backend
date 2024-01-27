import express from 'express';
import {
  getAllOrders,
  getOrders,
  placeOrder,
} from '../controllers/orderControllers.js';

const router = express.Router();
// router.use(requireAuth);

router.post('/', placeOrder);
router.get('/user/:email', getOrders);
router.get('/', getAllOrders);

//
// router.delete('/:id',deleteOrder );

export default router;

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
