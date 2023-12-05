import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ regionData }) => {
  const options = {
    chart: {
      type: 'bar',
      backgroundColor: 'rgb(40, 44, 52)',
      animation: {
        duration: 1000, // Duración de la animación en milisegundos
        easing: 'easeOutBounce', // Curva de aceleración (ejemplo: 'linear', 'easeInOut')
      },
    },
    title: {
      text: 'Population by Region',
      style: {
        color: 'rgb(255, 255, 255)',
      },
    },
    xAxis: {
      categories: Object.keys(regionData),
      gridLineColor: 'rgba(255, 255, 255, 0.2)',
      title: {
        text: null,
      },
      labels: {
        style: {
          color: 'rgba(255, 255, 255, 0.4)',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Population',
        align: 'high',
    },
    gridLineColor: 'rgba(255, 255, 255, 0.2)',
      labels: {
        style: {
          color: 'rgba(255, 255, 255, 0.4)',
        },
      },
    },
    plotOptions: {
        series: {
          borderWidth: 1,
          borderColor: 'rgb(54, 162, 235)',
          color: 'rgba(97, 219, 251, 0.2)',
        },
      },
      bar: {
        color: 'rgba(97, 219, 251, 0.2)',
      },
    legend: {
      itemStyle: {
        color: 'rgb(255, 255, 255)',
      },
    },
    series: [
      {
        name: 'Population',
        data: Object.values(regionData),
        color: 'rgba(255, 255, 255, 0.4)',
    },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
