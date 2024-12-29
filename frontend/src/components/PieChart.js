import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ stocks }) => {
  const chartData = {
    labels: stocks.map((item) => item.name),
    datasets: [
      {
        data: stocks.map((item) => ((item.qty * item.currentPrice) || 0).toFixed(2)), // Round to 2 decimal places
        backgroundColor: stocks.map(
          () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
        ),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20, 
          padding: 15,
          font: {
            size: 12, 
          },
        },
      },
    },
    maintainAspectRatio: false, 
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
