import axios from 'axios';
import MarketFeed from '../models/MarketFeed.js';

export const fetchMarketFeeds = async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const savedFeeds = await MarketFeed.insertMany(data.slice(0, 10)); 
    res.status(200).json(savedFeeds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllFeeds = async (req, res) => {
  try {
    const feeds = await MarketFeed.find();
    res.status(200).json(feeds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
