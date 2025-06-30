import axios from 'axios';
import OrderBook from '../models/OrderBook.js';

export const seedOrderBook = async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments');

    const orders = data.slice(0, 50).map((d, i) => {
      const price = 60000 + i * 100;
      const amount = parseFloat((Math.random() * 2).toFixed(4));
      const total = parseFloat((price * amount).toFixed(2));

      return {
        price,
        amount,
        total,
        type: i % 2 === 0 ? 'buy' : 'sell'
      };
    });

    await OrderBook.deleteMany({});
    const insertedOrders = await OrderBook.insertMany(orders);
    res.status(201).json(insertedOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderBook = async (req, res) => {
  try {
    const orders = await OrderBook.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  const { price, amount, total, type } = req.body;
  try {
    const newOrder = new OrderBook({ price, amount, total, type });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

