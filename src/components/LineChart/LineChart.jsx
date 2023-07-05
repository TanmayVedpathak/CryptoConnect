import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZro: true,
        },
      },
    },
  };

  return (
    <div>
      <div className="chartInfo">
        <h1>{coinName} Price Chart</h1>
        <p>
          {coinHistory?.data?.change}% Current {coinName} Price: ${" "}
          {currentPrice}{" "}
        </p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
