import express from 'express';
import {
  seedTopMovers,
  getTopMovers
} from '../controllers/topMoversController.js';

const router = express.Router();


router.get('/seed', seedTopMovers);


router.get('/', getTopMovers);

export default router;
