import styles from "./AboutMe.module.css";
import info_styles from "./AboutMeInfo.module.css";

function Extracurriculars(props) {
  return (
    <div>
      <div className={styles.info}>
        <div className={styles.actions_container}>
          <h3 className={styles.actions}>
            <h2 style={{ color: "lightblue" }}>Extracurriculars</h2>
          </h3>
        </div>
        <p>
          <div>
            <div className={info_styles.clear}>
              <p>
                <h3 className={info_styles.title_color_gradient_v2}>
                  Science Olympiad
                </h3>
                <hr className={info_styles.separationLine_v1}></hr>
                <span className={info_styles.date_item}>
                  January 2017 - March 2021
                </span>
                <p>
                  In high school, I took part during all four years in my
                  school's Science Olympiad team. Science Olympiad is an
                  American team competition in which students compete in 23
                  events pertaining to various STEM fields, including earth
                  science, biology, chemistry, physics, and engineering.
                </p>

                <b className={info_styles.title_color_gradient_v2}>
                  Notable accomplishments and builds
                </b>
                <p>
                  • &nbsp; Won 3rd at a state competition by built a completely
                  mechanical "gravity vehicle", which would use gravity from a
                  set ramp height, along with a braking mechanism to stop at a
                  variable distance.
                  <br /> • &nbsp; Programed an TI-Innovator hub to detect minute
                  changes in fluid temperature
                  <br /> • &nbsp; Worked my way up to become an integral part of
                  the build team <br />
                </p>
              </p>
            </div>

            <div className={info_styles.clear}>
              <p>
                <h3 className={info_styles.title_color_gradient_v2}>
                  Tutor and tennis coach
                </h3>
                <hr className={info_styles.separationLine_v1}></hr>
                <span className={info_styles.date_item}>
                  June 2017 - September 2020
                </span>

                <p>
                  I assisted in the operation of this large-scale summer school
                  and specialized in teaching various subjects of math and
                  science, as well as formulating hands on projects. The tennis
                  program at this camp was also my responsibility, which
                  included advertising on social media about the program and
                  devising optimal training methods.
                </p>

                <b className={info_styles.title_color_gradient_v2}>
                  Duties and subjects taught
                </b>
                <p>
                  • &nbsp; Dedicated over 200 hours volunteering and working at
                  this camp tutoring students of all ages in STEM subjects and
                  worked to advertise and manage the tennis program
                  <br /> • &nbsp; Connected with other businesses and
                  professional individuals to support the camp
                  <br /> • &nbsp; Earned the Gold President's volunteer service
                  award in my sophomore year for over 100 hours of volunteering{" "}
                  <br />
                </p>
              </p>
            </div>
            {/* <hr className={info_styles.hr_work}/> */}
            <div className={info_styles.clear}>
              <p>
                <h3 className={info_styles.title_color_gradient_v2}>
                  Varsity Tennis Player
                </h3>
                <hr className={info_styles.separationLine_v1}></hr>
                <span className={info_styles.date_item}>
                  March 2017 - June 2022
                </span>

                <p>
                  Participated in the tennis team at Minnetonka High School, one
                  of the best teams in the region.
                </p>

                <b className={info_styles.title_color_gradient_v2}>
                  My journey on the team
                </b>
                <p>
                  • &nbsp; Went undefeated on my first year on the JV team, and
                  played the top spot for my team.
                  <br /> • &nbsp; Drastically improved my teamwork skills as I
                  followed and led peers to improve the team's game as a whole
                  <br />• &nbsp; followed a rigorous schedule in order to get to
                  be one of the top in the varsity team.
                </p>
              </p>
            </div>
            <br />
          </div>
        </p>
      </div>
    </div>
  );
}

export default Extracurriculars;
