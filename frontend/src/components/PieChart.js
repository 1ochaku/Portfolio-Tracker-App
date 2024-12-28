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

  return <Pie data={chartData} />;
};

export default PieChart;
