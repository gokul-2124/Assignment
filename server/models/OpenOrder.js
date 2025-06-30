import mongoose from 'mongoose';

const openOrderSchema = new mongoose.Schema({
  userId: Number,
  pair: String,
  price: Number,
  amount: Number,
  type: String,       
  status: String      
}, { timestamps: true });

export default mongoose.model('OpenOrder', openOrderSchema);
