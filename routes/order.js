import express from 'express';
import { placeOrder,deleteOrder } from '../controllers/orderControllers.js';

const router = express.Router();

router.post('/', placeOrder);

//
router.delete('/:id',deleteOrder );

export default router;
