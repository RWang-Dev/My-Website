import AboutMeList from "../../components/About-Me/AboutMeList";
import main_styles from "./AboutMe.module.css";
import sub_styles from "./AboutMeInfo.module.css";
import { myInfo } from "./AboutMeInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Extracurriculars from "./Extracurriculars";
import { useState, useEffect } from "react";

const aboutMeData = myInfo;

function AboutMePage(props) {
  const [introContent, setIntro] = useState();

  async function getIntro() {
    try {
      const request = await fetch("/api/getIntro");

      if (request.ok) {
        const data = await request.json();
        setIntro(data.content);
      } else {
        console.error("Error getting the intro");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    getIntro();
  }, []);

  return (
    <section>
      {/* Title section and the AboutMeList, containing all of the AboutMeInfo formatted correctly */}
      {/* <h1 style={{ marginTop: 75, marginBottom: 75 }}>About Me</h1> */}
      {/* <AboutMeList edit_mode={props.edit_mode} meetups={aboutMeData} /> */}
      <div className={main_styles.image_opener}>
        <div className={main_styles.intro_page}>
          <div>
            <h1 className={sub_styles.intro_name}>Robert Wang</h1>
            <h3 className={sub_styles.intro_desc}>
              [Computer Science Student]
            </h3>
            <p className={sub_styles.intro_keywords}>
              Full-Stack Dev • Applications • Algorithms • AI/ML
            </p>
          </div>
        </div>
      </div>
      <div className={main_styles.info}>
        <div style={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
          <h2 style={{ color: "lightblue" }}>H e l l o</h2>
          <p>
            <b>{introContent}</b>
          </p>
        </div>
      </div>

      <Education />
      <Skills />
      <Experience />
      <Extracurriculars />
    </section>
  );
}

export default AboutMePage;
