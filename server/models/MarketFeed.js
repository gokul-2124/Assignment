import mongoose from 'mongoose';

const MarketFeedSchema = new mongoose.Schema({
  userId: Number,
  title: String,
  body: String
});

export default mongoose.model('MarketFeed', MarketFeedSchema);
