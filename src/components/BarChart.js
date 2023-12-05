import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar, registerables  } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = ({ regionData}) => {
    
  const chartData = {
    labels: Object.keys(regionData),
    datasets: [
      {
        label: 'Population by Region',
        data: Object.values(regionData),
        backgroundColor: 'rgba(97, 219, 251, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    scales: {
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.2)', 
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.4)', 
          },
        },
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.2)', 
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.4)', 
          },
        },
      },
  };

  return (
    <Bar data={chartData} options={chartOptions} />
  );
};

export default BarChart;