import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import marketFeedRoutes from './routes/marketFeedRoutes.js';
import orderBookRoutes from './routes/orderBookRoutes.js';
import openOrdersRoutes from './routes/openOrdersRoutes.js';
import topMoversRoutes from './routes/topMoversRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/market-feeds', marketFeedRoutes);
app.use('/api/order-book', orderBookRoutes);
app.use('/api/open-orders', openOrdersRoutes);
app.use('/api/top-movers', topMoversRoutes);



const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection failed:', err));
