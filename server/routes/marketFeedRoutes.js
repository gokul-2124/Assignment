import express from 'express';
import { fetchMarketFeeds, getAllFeeds } from '../controllers/marketFeedController.js';

const router = express.Router();

router.get('/fetch', fetchMarketFeeds); 
router.get('/', getAllFeeds);           

export default router;
