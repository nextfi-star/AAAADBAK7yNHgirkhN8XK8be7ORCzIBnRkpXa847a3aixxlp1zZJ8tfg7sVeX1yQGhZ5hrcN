"use client";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./chart.scss";
import { useThemeStore } from "../../store";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const ChartBlock = () => {
  const [chartData, setChartData] = useState({
    labels: ["23", "24", "25", "26", "27", "28", "29"],
    datasets: [
      {
        label: "Data",
        data: [1520, 9630, 1140, 3540, 7880, 5670, 68420],
        borderColor: "#007bff",
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  const updateData = newData => {
    setChartData(prevData => ({
      ...prevData,
      datasets: [{ ...prevData.datasets[0], data: newData }],
    }));
  };
  const { theme } = useThemeStore();
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: {
                min: -80000,
                max: 80000,

                grid: {
                  color: "#444444", // Цвет горизонтальных линий сетки
                  lineWidth: 1,
                },
                ticks: {
                  color: theme === "dark" ? " #cccccc " : "#000", 
                },
              },
              x: {
                grid: {
                  color: "#444444", 
                  lineWidth: 1,
                },
                ticks: {
                  color: theme === "dark" ? " #cccccc " : "#000", 
                },
              },
            },
          }}
        />
      </div>
      {/* <div className={styles.buttons}>
        <button onClick={() => updateData([10000, 20000, 30000, 40000, 50000, 60000, 70000])}>Update Data</button>
        <button onClick={() => updateData([0, 0, 0, 0, 0, 0, 0])}>Reset Data</button>
      </div> */}
    </div>
  );
};
