import styles from "./AboutMe.module.css";
import info_styles from "./AboutMeInfo.module.css";

function Experience(props) {
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
            <div className={info_styles.blue}>
              <img
                className={info_styles.company_logos}
                style={{
                  height: "3rem",
                  marginBottom: "1vh",
                }}
                src="Danfoss_logo.png"
              ></img>
              <p>
                <h3 className={info_styles.title_color_gradient_v2}>
                  Danfoss | Software Engineer Intern
                </h3>
                <hr className={info_styles.separationLine_v1}></hr>
                <span className={info_styles.date_item}>May - August 2024</span>

                <p>
                  Interned as part of the Danfoss Autonomy team in Danfoss Power
                  Solutions during the summer of 2024. Worked on an application
                  built to improve customers' interface for viewing data and
                  controlling traversal on an autonomous vehicle. Implemented
                  features to detect objects, record vehicle traversals, log and
                  manipulate previously saved paths, and view paths on a
                  map-based interface.
                </p>

                <b className={info_styles.title_color_gradient_v2}>
                  Tasks included
                </b>
                <p>
                  • &nbsp; Developed a full-stack interface and control system
                  application for Danfoss autonomous vehicles
                  <br /> • &nbsp; Established detailed software requirements and
                  crafted a scalable and organized user interface using QML & JS
                  <br /> • &nbsp; Implemented efficient C++ algorithms for AV
                  path tracking and data manipulation in complex backend systems
                  <br /> • &nbsp; Collaborated and implemented solutions with a
                  diverse, global team using Agile development methodologies
                </p>
              </p>
            </div>
            <div className={info_styles.blue}>
              <img
                className={info_styles.company_logos}
                style={{
                  height: "5rem",
                  marginBottom: "-1vh",
                }}
                src="tech_academy_logo.png"
              ></img>
              <p>
                <h3 className={info_styles.title_color_gradient_v2}>
                  Tech Academy | STEM Instructor
                </h3>
                <hr className={info_styles.separationLine_v1}></hr>
                <span className={info_styles.date_item}>May - August 2023</span>

                <p>
                  Working as a teacher at Tech Academy MN during the summer of
                  2023 to teach students from 4-10th grade on STEM subjects such
                  as robotics programming, Python/Java coding, and game
                  development. Additionally, I am tasked with training with new
                  mechanical equipment, designing builds, and implementing
                  comprehensive curriculum for more hands-on engineering
                  activities including 3D printing, Lego robotics, renewable
                  energy system design, and video production.
                </p>

                <b className={info_styles.title_color_gradient_v2}>
                  Tasks included
                </b>
                <p>
                  • &nbsp; Taught STEM subjects like coding, software
                  development, and engineering
                  <br /> • &nbsp; Provided a quality classroom experience for
                  students over the summer.
                  <br /> • &nbsp; Organized my own unique curriculum and had
                  hands on experience engineering models.
                </p>
              </p>
            </div>
            <div className={info_styles.blue}>
              <img
                className={info_styles.company_logos}
                style={{
                  height: "3rem",
                  marginBottom: "1vh",
                }}
                src="UMN_logo.png"
              ></img>
              <p>
                <h3 className={info_styles.title_color_gradient_v2}>
                  University of Minnesota | Mu2e experiment engineer
                </h3>
                <hr className={info_styles.separationLine_v1}></hr>
                <span className={info_styles.date_item}>
                  January 2022 - March 2023
                </span>

                <p>
                  The Muon-To-Electron Experiment (Mu2e) is a national physics
                  experiment centered at Fermilab aiming to discover physics
                  beyond the standard model. I worked for the UMN Physics
                  Department at the Physics and Nanotechnology building to build
                  an electron detector that plays a crucial part in the whole
                  experiment at Fermilab. To efficiently build such intricate
                  and fragile parts for an electron detector, I had to learn how
                  to use many custom-made tools and software to provide detailed
                  data on each part that I produced.
                </p>

                <b className={info_styles.title_color_gradient_v2}>
                  Tasks included
                </b>
                <p>
                  • &nbsp; Working with micro-scale equipment and materials to
                  construct detailed mechanical parts.
                  <br /> • &nbsp; Using highly precise measurement tools to
                  record and manage data.
                  <br /> • &nbsp; Organized CSV data to optimize the runtime of
                  the scripts used to manage the database.
                  <br /> • &nbsp; Teamwork oriented tasks at every step, in
                  order to coordinate very specific actions.
                  <br /> • &nbsp; Mastered a production method and led the
                  training for that process.
                </p>
              </p>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Experience;
