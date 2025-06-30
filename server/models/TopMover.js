import mongoose from 'mongoose';

const topMoverSchema = new mongoose.Schema({
  pair: String,
  change: String,
  time: String,
  label: String,
  direction: String
}, { timestamps: true });

export default mongoose.model('TopMover', topMoverSchema);
