'use client';

import { Bar, Pie, Line, PolarArea, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
} from 'chart.js';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale
);

export default function ChartsPage() {
  const [chartData] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Pink'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 28, 9, 5, 15, 10],
        backgroundColor: [
          'rgba(255, 99, 139, 0.4)',
          'rgba(128, 0, 0, 0.4)',
          'rgba(205, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
        ],
        borderColor: [
          'rgba(255, 99, 139, 1)',
          'rgba(128, 0, 0, 1)',
          'rgba(205, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Dataset 2',
        data: [2, 18, 19, 15, 35, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const chartDataSingleDataset = {
    labels: chartData.labels,
    datasets: [chartData.datasets[0]],
  };

  return (
    <div className='flex'>
      <div className='flex-1 p-6'>
        <h1 className='text-2xl font-bold mb-6'>Charts Dashboard</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-4 shadow rounded-xl'>
            <h2 className='text-lg font-semibold mb-2 '>Pie Chart</h2>
            <Pie data={chartDataSingleDataset} />
          </div>
          <div className='bg-white p-4 shadow rounded-xl'>
            <h2 className='text-lg font-semibold mb-2'>Bar Chart</h2>
            <Bar data={chartData} />
          </div>
          <div className='bg-white p-4 shadow rounded-xl'>
            <h2 className='text-lg font-semibold mb-2'>Floating Bar Chart</h2>
            <Bar
              data={{
                labels: ['A', 'B', 'C', 'D'],
                datasets: [
                  {
                    label: 'Floating Bar',
                    data: [
                      { x: 'A', y: [6, 12] },
                      { x: 'B', y: [2, 8] },
                      { x: 'C', y: [4, 10] },
                      { x: 'D', y: [6, 12] },
                    ],
                    backgroundColor: 'rgba(74, 102, 19, 0.8)',
                  },
                ],
              }}
              options={{
                scales: { x: { stacked: true }, y: { stacked: true } },
              }}
            />
          </div>
          <div className='bg-white p-4 shadow rounded-xl'>
            <h2 className='text-lg font-semibold mb-2'>Line Chart</h2>
            <Line data={chartData} />
          </div>
          <div className='bg-white p-4 shadow rounded-xl'>
            <h2 className='text-lg font-semibold mb-2'>Polar Area Chart</h2>
            <PolarArea data={chartDataSingleDataset} />
          </div>
          <div className='bg-white p-4 shadow rounded-xl'>
            <h2 className='text-lg font-semibold mb-2'>Radar Chart</h2>
            <Radar data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
