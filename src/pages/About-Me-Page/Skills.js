import styles from "./AboutMe.module.css";
import info_styles from "./AboutMeInfo.module.css";

function Skills(props) {
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
                <span className={info_styles.skills_item}>Python</span>
                <span className={info_styles.skills_item}>Java</span>
                <span className={info_styles.skills_item}>HTML</span>
                <span className={info_styles.skills_item}>CSS</span>
                <span className={info_styles.skills_item}>C/C++</span>
                <span className={info_styles.skills_item}>JavaScript</span>
                <span className={info_styles.skills_item}>SQL</span>
                <span className={info_styles.skills_item}>OCaml</span>
                <span className={info_styles.skills_item}>R</span>
                <span className={info_styles.skills_item}>X86-64 Assembly</span>
              </div>
              <div className={info_styles.skills_table}>
                <b
                  className={info_styles.title_color_gradient_v2}
                  style={{ marginBottom: 7 }}
                >
                  Software & Tools:{" "}
                </b>{" "}
                <br />
                <span className={info_styles.skills_item}>
                  Visual Studio Code
                </span>
                <span className={info_styles.skills_item}>IntelliJ IDEA</span>
                <span className={info_styles.skills_item}>Visual Studio</span>
                <span className={info_styles.skills_item}>ReactJS</span>
                <span className={info_styles.skills_item}>ExpressJS</span>
                <span className={info_styles.skills_item}>Flask</span>
                <span className={info_styles.skills_item}>QT/QML</span>
                <span className={info_styles.skills_item}>PostgreSQL</span>
                <span className={info_styles.skills_item}>MongoDB</span>
                <span className={info_styles.skills_item}>MySQL</span>
                <span className={info_styles.skills_item}>Microsoft Azure</span>
                <span className={info_styles.skills_item}>GitHub</span>
                <span className={info_styles.skills_item}>Git</span>
                <span className={info_styles.skills_item}>Doxygen</span>
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
