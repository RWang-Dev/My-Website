import AboutMeList from "../../components/About-Me/AboutMeList";
import { myInfo } from "./AboutMeInfo";
// import SkillsChart from "./SkillsChart";
// import { Bar } from "react-chartjs-2";
import classes from "./AboutMe.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"


// Implemented Chart JS for future reference when adding graphs to website
// Needed all of the following imports to actually function
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

const aboutMeData = myInfo;

function AboutMePage() {
  return (
    <section>
      {/* Title section and the AboutMeList, containing all of the AboutMeInfo formatted correctly */}
      {/* <h1 style={{ marginTop: 75, marginBottom: 75 }}>About Me</h1> */}
      <AboutMeList meetups={aboutMeData} />
      <div className={classes.footer}>
        Coded with React and deployed to Azure 
        <hr className={classes.footer_line}></hr>
        <Link to="/contact-me">
          <FontAwesomeIcon className={classes.icons} icon={faEnvelope}></FontAwesomeIcon>
        </Link>
        <Link to="/contact-me">
          <FontAwesomeIcon className={classes.icons} icon={faGithub} />
        </Link>
        <Link to="/contact-me">
          <FontAwesomeIcon className={classes.icons} icon={faLinkedin} />
        </Link>
        <Link to="/contact-me">
          <FontAwesomeIcon className={classes.icons} icon={faFile} />
        </Link>
        
        

      </div>
    </section>
  );
}

export default AboutMePage;
