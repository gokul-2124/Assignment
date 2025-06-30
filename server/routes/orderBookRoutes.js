import express from 'express';
import { seedOrderBook, getOrderBook ,createOrder } from '../controllers/orderBookController.js';

const router = express.Router();
router.get('/seed', seedOrderBook);
router.get('/', getOrderBook);
router.post('/', createOrder);
export default router;
