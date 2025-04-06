import { useAppContext } from "../../AppContext";
import styles from "./AboutMe.module.css";
import info_styles from "./AboutMeInfo.module.css";
import { useState, useEffect } from "react";

function Experience(props) {
  const { userData, updateUserData } = useAppContext();
  const [loading, setLoading] = useState(true);

  async function getExperience() {
    try {
      const request = await fetch("/api/getExperiences");

      if (request.ok) {
        const data = await request.json();
        console.log("Experience data: ", data);
        data.sort((a, b) => a.sortValue - b.sortValue);

        updateUserData("experiences", data);
        setLoading(false);
      } else {
        console.log("Error getting result");
      }
    } catch (error) {
      console.error(error);
    }
    return;
  }

  useEffect(() => {
    if (userData.experiences) {
      setLoading(false);
    } else {
      getExperience();
    }
  }, []);

  useEffect(() => {
    if (userData.experiences) {
      setLoading(false);
    }
  }, [userData.experiences]);

  // useEffect(() => {
  //   if (experienceList.length > 0) {
  //     console.log("experienceList has been updated:", experienceList);
  //     setLoading(false);
  //   }
  // }, [experienceList]); // Dependency array: only runs when `experienceList` changes

  return (
    <div>
      <div className={styles.info}>
        <div className={styles.actions_container}>
          <h3 className={styles.actions}>
            <h2 style={{ color: "lightblue" }}>Work Experience</h2>
          </h3>
        </div>

        <p>
          <div>
            {loading ? (
              <div className={info_styles.centered}>Loading Experience ...</div>
            ) : (
              userData.experiences.map((experience) => (
                <div className={info_styles.blue}>
                  {experience.imageUrl ? (
                    <img
                      className={info_styles.company_logos}
                      style={{
                        height: "3rem",
                        marginBottom: "1vh",
                      }}
                      src={experience.imageUrl}
                    ></img>
                  ) : null}

                  <p>
                    <h3 className={info_styles.title_color_gradient_v2}>
                      {experience["company"]} | {experience["title"]}
                    </h3>
                    <hr className={info_styles.separationLine_v1}></hr>
                    <span className={info_styles.date_item}>
                      {experience["date"]}
                    </span>

                    <p>{experience["description"]}</p>

                    <b className={info_styles.title_color_gradient_v2}>
                      Tasks included
                    </b>
                    <p>
                      {experience["tasks"].map((task) => (
                        <div>
                          • &nbsp; {task}
                          <br />
                        </div>
                      ))}
                      {/* • &nbsp; Established detailed software requirements and
                  crafted a scalable and organized user interface using QML & JS
                  <br /> • &nbsp; Implemented efficient C++ algorithms for AV
                  path tracking and data manipulation in complex backend systems
                  <br /> • &nbsp; Collaborated and implemented solutions with a
                  diverse, global team using Agile development methodologies */}
                    </p>
                  </p>
                </div>
              ))
            )}
          </div>
        </p>
      </div>
    </div>
  );
}

export default Experience;
