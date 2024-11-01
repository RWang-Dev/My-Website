import styles from "./AboutMe.module.css";
import info_styles from "./AboutMeInfo.module.css";

function Education(props) {
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
        <div className={info_styles.blue}>
          <p>
            <h3 className={info_styles.title_color_gradient_v2}>
              University of Minnesota Twin Cities
            </h3>
            <hr className={info_styles.separationLine_v1}></hr>
            <span className={info_styles.date_item}>
              September 2021 - Current
            </span>
            <div>
              Currently pursuing a BS in Computer Science and minor in
              Mathematics
            </div>
            <b>Overall GPA: </b> 3.95
            <br></br>
            <b>Tech GPA:</b> 4.0
            <h4>
              <i className={info_styles.title_color_gradient_v2}>
                Relevant coursework
              </i>
            </h4>
            <div style={{ marginLeft: 20 }}>
              <p>
                <b>CSCI 5117</b> Developing the Interactive Web
              </p>
              <p>
                <b>CSCI 4131</b> Internet Programming
              </p>
              <p>
                <b>CSCI 3081W</b> Program Design and Development
              </p>
              <p>
                <b>CSCI 5801</b> Software Engineering
              </p>
              <p>
                <b>CSCI 4511W</b> Intro: Artificial Intelligence
              </p>
              <p>
                <b>CSCI 5521</b> Machine Learning Fundamentals
              </p>
              <p>
                <b>STAT 3022</b> Data Analysis
              </p>
              <p>
                <b>MATH 3022</b> Multivariable Calculus
              </p>
              <p>
                <b>CSCI 4061</b> Operating Systems
              </p>
              <p>
                <b>CSCI 4041</b> Alogrithms and Data Structures
              </p>
              <p>
                <b>CSCI 2021</b> Machine Architecture and Organization
              </p>
            </div>
          </p>
        </div>

        <div className={info_styles.blue}>
          <p>
            <h3 className={info_styles.title_color_gradient_v2}>
              Minnetonka High School
            </h3>
            <hr className={info_styles.separationLine_v1}></hr>
            <span className={info_styles.date_item}>
              September 2017 - June 2021
            </span>
            <br />
            High School Diploma and various college AP and IB credits earned
            through my years studying here.
            <br />
            <b>Overall GPA:</b> 4.4
            <br />
            <br />
            <p>
              <b className={info_styles.title_color_gradient_v2}>Awards</b>
            </p>
            <div style={{ marginLeft: 20 }}>
              <p>Summa Cum Laude</p>
              <p>AP Scholar with Distinction</p>
              <p>Varsity Tennis MVP</p>
              <p>Gold President's Volunteer Service award</p>
            </div>
            <br></br>
          </p>
        </div>
      </p>
    </div>
  );
}

export default Education;
