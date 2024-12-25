import { useAppContext } from "../../AppContext";
import styles from "./AboutMe.module.css";
import info_styles from "./AboutMeInfo.module.css";
import { useState, useEffect } from "react";

function Skills(props) {
  const { userData, updateUserData } = useAppContext();
  const [loading, setLoading] = useState(true);

  async function getSkills() {
    try {
      const response = await fetch("/api/getSkills");
      if (response.ok) {
        const data = await response.json();
        updateUserData("skills", data);
        console.log("User DAATDATDTADTATDAT: ", userData.data);
        console.log("Got skills");
        console.log("Parsing skills");
        // parseSkills(data);
      } else {
        console.log("Error getting data");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function parseSkills(data) {
    let progSkills = [];
    let softSkills = [];

    console.log("DATATATATATAATATATATA: ", data);
    for (const skill of data) {
      if (skill["skill_type"] == "Programming Languages") {
        progSkills.push([skill["relevance"], skill["skill_name"]]);
      } else {
        softSkills.push([skill["relevance"], skill["skill_name"]]);
      }
    }

    progSkills.sort((a, b) => b[0] - a[0]); // Sort descending based on relevance
    softSkills.sort((a, b) => b[0] - a[0]); // Sort descending based on relevance

    updateUserData("programmingSkills", progSkills);
    updateUserData("softwareSkills", softSkills);

    return;
  }

  useEffect(() => {
    if (userData.skills) {
      parseSkills(userData.skills);
      setLoading(false);
    }
  }, [userData.skills]);

  useEffect(() => {
    if (userData.skills) {
      setLoading(false);
    } else {
      getSkills();
    }
  }, []);

  return (
    <div>
      <div className={styles.info}>
        <div className={styles.actions_container}>
          <h3 className={styles.actions}>
            <h2 style={{ color: "lightblue" }}>Relevant skills</h2>
          </h3>
        </div>
        <p>
          <div className={info_styles.white}>
            <div style={{ textAlign: "center", width: "100%" }}>
              <div className={info_styles.skills_table}>
                <b
                  className={info_styles.title_color_gradient_v2}
                  style={{ marginBottom: 7 }}
                >
                  Programming Languages:{" "}
                </b>{" "}
                <br />
                {loading ? (
                  <div className={info_styles.centered}>Loading Skills ...</div>
                ) : (
                  userData.programmingSkills.map((skill) => (
                    <span className={info_styles.skills_item}>{skill[1]}</span>
                  ))
                )}
              </div>
              <div className={info_styles.skills_table}>
                <b
                  className={info_styles.title_color_gradient_v2}
                  style={{ marginBottom: 7 }}
                >
                  Software & Tools:{" "}
                </b>{" "}
                <br />
                {loading ? (
                  <div className={info_styles.centered}>Loading Skills ...</div>
                ) : (
                  userData.softwareSkills.map((skill) => (
                    <span className={info_styles.skills_item}>{skill[1]}</span>
                  ))
                )}
              </div>
              {/* <br/>
        <br /> */}

              {/* <br/>
        <br/> */}
            </div>
            <div className={info_styles.wakatime}>
              <img
                className={info_styles.wakatime_stats}
                src="https://github-readme-stats.vercel.app/api/wakatime?username=RWang&theme=radical&layout=compact"
                alt=""
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Skills;
