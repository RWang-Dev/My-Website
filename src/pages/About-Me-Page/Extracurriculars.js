// import { getExtracurriculars } from "../../../api/src/functions/extracurriculars";
import styles from "./AboutMe.module.css";
import info_styles from "./AboutMeInfo.module.css";
import { useState, useEffect } from "react";

function Extracurriculars(props) {
  const [extracurriculars, setExtracurricularsList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchExtracurriculars() {
    try {
      const request = await fetch("/api/getExtracurriculars");

      if (request.ok) {
        const data = await request.json();

        setExtracurricularsList(data);
      } else {
        console.log("Error getting extracurriculars");
      }
    } catch (error) {
      console.error(error);
    }
    return;
  }
  useEffect(() => {
    fetchExtracurriculars();
  }, []);

  useEffect(() => {
    if (extracurriculars.length > 0) {
      setLoading(false);
    }
  }, [extracurriculars]);

  return (
    <div>
      <div className={styles.info}>
        <div className={styles.actions_container}>
          <h3 className={styles.actions}>
            <h2 style={{ color: "lightblue" }}>Extracurriculars</h2>
          </h3>
        </div>
        <p>
          {loading ? (
            <div className={info_styles.centered}>
              Loading Extracurriculars ...
            </div>
          ) : (
            extracurriculars.map((extracurricular) => (
              <div className={info_styles.clear}>
                <p>
                  <h3 className={info_styles.title_color_gradient_v2}>
                    {extracurricular.extracurricular}
                  </h3>
                  <hr className={info_styles.separationLine_v1}></hr>
                  <span className={info_styles.date_item}>
                    {extracurricular.date}
                  </span>
                  <p>{extracurricular.description}</p>

                  <b className={info_styles.title_color_gradient_v2}>
                    Accomplishments
                  </b>
                  <p>
                    {extracurricular.accomplishments.map((description) => (
                      <div>
                        • &nbsp; {description}
                        <br />
                      </div>
                    ))}
                  </p>
                </p>
              </div>
            ))
          )}
        </p>
      </div>
    </div>
  );
}

export default Extracurriculars;
