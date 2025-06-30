

import {
  Chart,
  CategoryScale,
  LinearScale,
  TimeSeriesScale,
  Tooltip,
  Title,
  Legend
} from 'chart.js';

import {
  CandlestickController,
  CandlestickElement
} from 'chartjs-chart-financial';

import 'chartjs-adapter-date-fns';


export function registerFinancialChart() {
  Chart.register(
    CategoryScale,
    LinearScale,
    TimeSeriesScale,
    Tooltip,
    Title,
    Legend,
    CandlestickController,
    CandlestickElement
  );
}
