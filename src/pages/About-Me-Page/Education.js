import styles from "./AboutMe.module.css";
import info_styles from "./AboutMeInfo.module.css";
import { useState, useEffect } from "react";
import { useAppContext } from "../../AppContext";

function Education(props) {
  const { userData, updateUserData } = useAppContext();
  const [loading, setLoading] = useState(true);

  async function getEducationList() {
    try {
      const request = await fetch("/api/getEducationList");

      if (request.ok) {
        const data = await request.json();
        console.log(data);
        updateUserData("educationList", data);
      } else {
        console.error("Error getting education list");
      }
    } catch (error) {
      console.error(error);
    }

    return;
  }

  useEffect(() => {
    if (userData.educationList) {
      setLoading(false);
    } else {
      getEducationList();
    }
  }, []);

  useEffect(() => {
    if (userData.educationList) {
      setLoading(false);
    }
  }, [userData.educationList]);

  return (
    <div className={styles.info}>
      <div className={styles.actions_container}>
        <h3 className={styles.actions}>
          <div>
            <h2 style={{ color: "lightblue" }}>My Education</h2>
          </div>
        </h3>
      </div>
      <p>
        {loading ? (
          <div className={info_styles.centered}>Loading Education ...</div>
        ) : (
          userData.educationList.map((education) => (
            <div className={info_styles.blue}>
              <p>
                <h3 className={info_styles.title_color_gradient_v2}>
                  {education.institution}
                </h3>
                <hr className={info_styles.separationLine_v1}></hr>
                <span className={info_styles.date_item}>{education.date}</span>
                <div>{education.description}</div>
                <b>Overall GPA: </b> {education.gpa}
                <h4>
                  <i className={info_styles.title_color_gradient_v2}>
                    {education.additional_section}
                  </i>
                </h4>
                <div style={{ marginLeft: 20 }}>
                  {education.section_list.map((section_item) => (
                    <p>{section_item}</p>
                  ))}
                </div>
              </p>
            </div>
          ))
        )}
      </p>
      ;
    </div>
  );
}

export default Education;
