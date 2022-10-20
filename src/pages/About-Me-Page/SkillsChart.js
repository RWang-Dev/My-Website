import { Bar } from "react-chartjs-2";

//Bar Chart reference/template
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Python",
    "VSCode",
    "Java",
    "HTML",
    "CSS",
    "C",
    " ReactJS",
    "JavaScript",
    "Flask",
  ],
  datasets: [
    {
      label: "Proficiency and Experience / 10",
      data: [9, 8, 6, 6, 5, 5, 5, 4, 3],
      backgroundColor: "green",
    },
  ],
};

const options = {
  indexAxis: "y",
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 20,
        },
      },
    },
    x: {
      ticks: {
        display: false,
      },
    },
  },
};
function SkillsChart() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: 750, height: 700 }}>
        <Bar type="bar" options={options} data={data} />
      </div>
    </div>
  );
}

export default SkillsChart;
