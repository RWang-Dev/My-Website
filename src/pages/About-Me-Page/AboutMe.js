import AboutMeList from "../../components/About-Me/AboutMeList";
import { myInfo } from "./AboutMeInfo";
import SkillsChart from "./SkillsChart";
import { Bar } from "react-chartjs-2";

// Implemented Chart JS for future reference when adding graphs to website
// Needed all of the following imports to actually function
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

const aboutMeData = myInfo;

function AboutMePage() {
  return (
    <section>
      {/* Title section and the AboutMeList, containing all of the AboutMeInfo formatted correctly */}
      <h1 style={{ marginTop: 75, marginBottom: 75 }}>About Me</h1>
      <AboutMeList meetups={aboutMeData} />
    </section>
  );
}

export default AboutMePage;
