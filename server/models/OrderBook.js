import mongoose from 'mongoose';

const orderBookSchema = new mongoose.Schema({
  total: String,
  price: Number,
  amount: Number,
  type: String        
}, { timestamps: true });

export default mongoose.model('OrderBook', orderBookSchema);
