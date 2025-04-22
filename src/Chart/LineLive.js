import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title);

const LineLive = () => {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=true"
      );
      const data = await response.json();
      console.log("API Response:", data);

      // Extract timestamps for X-axis labels (assuming same time intervals)
      const labels = data[0]?.sparkline_in_7d.price.map((_, index) => `Day ${index + 1}`||[]);

      // Prepare datasets
      const datasets = data.map((coin) => ({
        label: coin.name,
        data: coin.sparkline_in_7d.price.slice(0, labels.length),
        borderColor: getRandomColor(),
        borderWidth: 2,
      }));

      setChartData({ labels, datasets });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); 
    return () => clearInterval(interval);
  }, []);

  // Generate random colors for the dataset
  const getRandomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

  return (
    <>
      {chartData ? <Line data={chartData} /> : <p>Loading...</p>}
    </>
  );
};

export default LineLive;
