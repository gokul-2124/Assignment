import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { registerFinancialChart } from './chart';

registerFinancialChart();

const ChartPanel = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [
          {
            label: 'BTC/USDT',
            data: [
              { x: '2025-06-24', o: 25000, h: 25500, l: 24000, c: 24800 },
              { x: '2025-06-25', o: 24800, h: 26000, l: 24500, c: 25900 },
              { x: '2025-06-26', o: 25900, h: 26200, l: 25000, c: 25500 },
              { x: '2025-06-27', o: 25500, h: 25800, l: 24800, c: 25200 },
              { x: '2025-06-28', o: 25200, h: 26500, l: 25000, c: 26000 },
            ],
            borderColor: '#fff', 
            upColor: '#00C896', 
            downColor: '#FF5C5C', 
            color: {
              up: '#00C896',
              down: '#FF5C5C',
              unchanged: '#999',
            }
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        parsing: {
          xAxisKey: 'x',
          yAxisKey: '', 
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
            ticks: {
              color: '#ccc'
            },
            grid: {
              color: '#2a2a2a',
            }
          },
          y: {
            ticks: {
              color: '#ccc',
            },
            grid: {
              color: '#2a2a2a',
            }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-[#121212] p-4 rounded-xl shadow-md">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartPanel;
