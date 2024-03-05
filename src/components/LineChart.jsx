import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';


const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Dato',
        color: 'white'
      },
      ticks: {
        color: 'white'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Temperatur',
        color: 'white'
      },
      ticks: {
        color: 'white'
      }
    }
  }
}

const chartBackgroundPlugin = {
  id: 'chartBackgroundPlugin',
  beforeDatasetsDraw(chart, args, plugins) {
    const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
    ctx.save();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(left, top, width, height);
  }
}

function LineChart({chartData}) {
  return (
    <Line data={chartData} options={options} plugins={[chartBackgroundPlugin]}/>
  )
}

export default LineChart