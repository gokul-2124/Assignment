import axios from 'axios';
import TopMover from '../models/TopMover.js';

export const seedTopMovers = async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums');
  const movers =  data.slice(0, 10).map((item, i) => ({
      pair: `Pair ${i + 1}`,
      change: i % 2 === 0 ? `+${(Math.random() * 10).toFixed(2)}%` : `-${(Math.random() * 10).toFixed(2)}%`,
      time: new Date().toLocaleTimeString(),
      label: i % 2 === 0 ? 'New 24hr High' : 'New 7day Low',
      direction: i % 2 === 0 ? 'up' : 'down',
    }));;
  await TopMover.deleteMany({});
  res.status(201).json(await TopMover.insertMany(movers));
};

export const getTopMovers = async (req, res) => {
  const movers = await TopMover.find();
  res.json(movers);
};
