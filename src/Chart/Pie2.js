import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  });

  // Fetch data from live API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make API request (replace with your live API URL)
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();

        // Assuming jsonData structure is something like:
        // [{ "category": "Red", "value": 300 }, { "category": "Blue", "value": 150 }, { "category": "Yellow", "value": 200 }]
        
        const labels = jsonData.map(item => item.category);
        const data = jsonData.map(item => item.value);
        const backgroundColor = jsonData.map(item => item.color || 'gray'); // Use a default color if not provided

        setChartData({
          labels,
          datasets: [
            {
              data,
              backgroundColor,
              hoverOffset: 4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this will run only once on mount

  // Chart.js options (customize as needed)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <h2>Live Data Pie Chart</h2>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
