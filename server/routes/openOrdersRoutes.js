import express from 'express';
import {
  seedOpenOrders,
  getOpenOrders
} from '../controllers/openOrdersController.js';

const router = express.Router();


router.get('/seed', seedOpenOrders);


router.get('/', getOpenOrders);

export default router;
