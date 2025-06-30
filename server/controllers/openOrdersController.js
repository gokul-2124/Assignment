import axios from 'axios';
import OpenOrder from '../models/OpenOrder.js';

export const seedOpenOrders = async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const orders = data.slice(0, 10).map(d => ({
    userId: d.userId,
    pair: 'BTC/USDT',
    price: 60000 + Math.random() * 1000,
    amount: Math.random(),
    type: d.completed ? 'sell' : 'buy',
    status: d.completed ? 'filled' : 'open'
  }));
  await OpenOrder.deleteMany({});
  res.status(201).json(await OpenOrder.insertMany(orders));
};

export const getOpenOrders = async (req, res) => {
  const orders = await OpenOrder.find();
  res.json(orders);
};
