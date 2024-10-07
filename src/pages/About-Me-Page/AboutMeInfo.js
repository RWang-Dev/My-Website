// import React, { cloneElement } from "react";
import classes from "./AboutMeInfo.module.css";
// import SkillsChart from "./SkillsChart";

// exports an array constant containing all of my info in this separate file
export const myInfo = [
  {
    id: "m0",
    title: null,
    image: "Opener.jpg",
    description: (
      <div>
        <h1 className={classes.intro_name}>Robert Wang</h1>
        <h3 className={classes.intro_desc}>[Computer Science Student]</h3>
        <p className={classes.intro_keywords}>
          Full-Stack Dev • Applications • Algorithms • AI/ML
        </p>
      </div>
    ),
  },
  {
    id: "m1",
    title: null,
    image: null,
    description: (
      <div style={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
        <h2 style={{ color: "lightblue" }}>H e l l o</h2>
        <p>
          <b>
            My name is Robert, and I am currently a senior at the University of
            Minnesota Twin Cities majoring in computer science and minoring in
            mathematics. I am currently open to any work opportunities, so
            please feel free to contact me anytime regarding such opportunities.
            This website is where I post many things about me, like the projects
            that I've worked on, past experiences, and updated links to my
            GitHub code. Please take a look around!
          </b>
        </p>
      </div>
    ),
  },
  {
    id: "m2",
    title: (
      <div>
        <h2 style={{ color: "lightblue" }}>My Education</h2>
      </div>
    ),
    image: null,
    description: (
      <div>
        <div className={classes.blue}>
          <p>
            <h3 className={classes.title_color_gradient_v2}>
              University of Minnesota Twin Cities
            </h3>
            <hr className={classes.separationLine_v1}></hr>
            <span className={classes.date_item}>September 2021 - Current</span>
            <div>
              Currently pursuing a BS in Computer Science and minor in
              Mathematics
            </div>
            <b>Overall GPA: </b> 3.95
            <br></br>
            <b>Tech GPA:</b> 4.0
            <h4>
              <i className={classes.title_color_gradient_v2}>
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

        <div className={classes.blue}>
          <p>
            <h3 className={classes.title_color_gradient_v2}>
              Minnetonka High School
            </h3>
            <hr className={classes.separationLine_v1}></hr>
            <span className={classes.date_item}>
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
              <b className={classes.title_color_gradient_v2}>Awards</b>
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
      </div>
    ),
  },
  {
    id: "m3",
    title: <h2 style={{ color: "lightblue" }}>Relevant skills</h2>,
    image: null,
    description: (
      <div className={classes.white}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <div className={classes.skills_table}>
            <b
              className={classes.title_color_gradient_v2}
              style={{ marginBottom: 7 }}
            >
              Programming Languages:{" "}
            </b>{" "}
            <br />
            <span className={classes.skills_item}>Python</span>
            <span className={classes.skills_item}>Java</span>
            <span className={classes.skills_item}>HTML</span>
            <span className={classes.skills_item}>CSS</span>
            <span className={classes.skills_item}>C/C++</span>
            <span className={classes.skills_item}>JavaScript</span>
            <span className={classes.skills_item}>SQL</span>
            <span className={classes.skills_item}>OCaml</span>
            <span className={classes.skills_item}>R</span>
            <span className={classes.skills_item}>X86-64 Assembly</span>
          </div>
          <div className={classes.skills_table}>
            <b
              className={classes.title_color_gradient_v2}
              style={{ marginBottom: 7 }}
            >
              Software & Tools:{" "}
            </b>{" "}
            <br />
            <span className={classes.skills_item}>Visual Studio Code</span>
            <span className={classes.skills_item}>IntelliJ IDEA</span>
            <span className={classes.skills_item}>Visual Studio</span>
            <span className={classes.skills_item}>ReactJS</span>
            <span className={classes.skills_item}>ExpressJS</span>
            <span className={classes.skills_item}>Flask</span>
            <span className={classes.skills_item}>QT/QML</span>
            <span className={classes.skills_item}>PostgreSQL</span>
            <span className={classes.skills_item}>MongoDB</span>
            <span className={classes.skills_item}>MySQL</span>
            <span className={classes.skills_item}>Microsoft Azure</span>
            <span className={classes.skills_item}>GitHub</span>
            <span className={classes.skills_item}>Git</span>
            <span className={classes.skills_item}>Doxygen</span>
          </div>
          {/* <br/>
        <br /> */}

          {/* <br/>
        <br/> */}
        </div>
        <div className={classes.wakatime}>
          <img
            className={classes.wakatime_stats}
            src="https://github-readme-stats.vercel.app/api/wakatime?username=RWang&theme=radical&layout=compact"
            alt=""
          />
        </div>
      </div>
    ),
  },
  {
    id: "m4",
    title: <h2 style={{ color: "lightblue" }}>Work Experience</h2>,
    image: null,
    description: (
      <div>
        <div className={classes.blue}>
          <img
            className={classes.company_logos}
            style={{
              height: "3rem",
              marginBottom: "1vh",
            }}
            src="Danfoss_logo.png"
          ></img>
          <p>
            <h3 className={classes.title_color_gradient_v2}>
              Software Engineer Intern
            </h3>
            <hr className={classes.separationLine_v1}></hr>
            <span className={classes.date_item}>May - August 2024</span>

            <p>
              Interned as part of the Danfoss Autonomy team in Danfoss Power
              Solutions during the summer of 2024. Worked on an application
              built to improve customers' interface for viewing data and
              controlling traversal on an autonomous vehicle. Implemented
              features to detect objects, record vehicle traversals, log and
              manipulate previously saved paths, and view paths on a map-based
              interface.
            </p>

            <b className={classes.title_color_gradient_v2}>
              Particular duties included
            </b>
            <p>
              • &nbsp; Developed a full-stack interface and control system
              application for Danfoss autonomous vehicles
              <br /> • &nbsp; Established detailed software requirements and
              crafted a scalable and organized user interface using QML & JS
              <br /> • &nbsp; Implemented efficient C++ algorithms for AV path
              tracking and data manipulation in complex backend systems
              <br /> • &nbsp; Collaborated and implemented solutions with a
              diverse, global team using Agile development methodologies
            </p>
          </p>
        </div>
        <div className={classes.blue}>
          <img
            className={classes.company_logos}
            style={{
              height: "5rem",
              marginBottom: "-1vh",
            }}
            src="tech_academy_logo.png"
          ></img>
          <p>
            <h3 className={classes.title_color_gradient_v2}>
              Tech Academy Instructor
            </h3>
            <hr className={classes.separationLine_v1}></hr>
            <span className={classes.date_item}>May - August 2023</span>

            <p>
              Working as a teacher at Tech Academy MN during the summer of 2023
              to teach students from 4-10th grade on STEM subjects such as
              robotics programming, Python/Java coding, and game development.
              Additionally, I am tasked with training with new mechanical
              equipment, designing builds, and implementing comprehensive
              curriculum for more hands-on engineering activities including 3D
              printing, Lego robotics, renewable energy system design, and video
              production.
            </p>

            <b className={classes.title_color_gradient_v2}>
              Duties and subjects taught
            </b>
            <p>
              • &nbsp; Taught STEM subjects like coding, software development,
              and engineering
              <br /> • &nbsp; Provided a quality classroom experience for
              students over the summer.
              <br /> • &nbsp; Organized my own unique curriculum and had hands
              on experience engineering models.
            </p>
          </p>
        </div>
        <div className={classes.blue}>
          <img
            className={classes.company_logos}
            style={{
              height: "3rem",
              marginBottom: "1vh",
            }}
            src="UMN_logo.png"
          ></img>
          <p>
            <h3 className={classes.title_color_gradient_v2}>
              Mu2e experiment engineer
            </h3>
            <hr className={classes.separationLine_v1}></hr>
            <span className={classes.date_item}>January 2022 - March 2023</span>

            <p>
              The Muon-To-Electron Experiment (Mu2e) is a national physics
              experiment centered at Fermilab aiming to discover physics beyond
              the standard model. I worked for the UMN Physics Department at the
              Physics and Nanotechnology building to build an electron detector
              that plays a crucial part in the whole experiment at Fermilab. To
              efficiently build such intricate and fragile parts for an electron
              detector, I had to learn how to use many custom-made tools and
              software to provide detailed data on each part that I produced.
            </p>

            <b className={classes.title_color_gradient_v2}>
              Particular duties included
            </b>
            <p>
              • &nbsp; Working with micro-scale equipment and materials to
              construct detailed mechanical parts.
              <br /> • &nbsp; Using highly precise measurement tools to record
              and manage data.
              <br /> • &nbsp; Organized CSV data to optimize the runtime of the
              scripts used to manage the database.
              <br /> • &nbsp; Teamwork oriented tasks at every step, in order to
              coordinate very specific actions.
              <br /> • &nbsp; Mastered a production method and led the training
              for that process.
            </p>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "m5",
    title: <h2 style={{ color: "lightblue" }}>Extracurriculars</h2>,
    image: null,
    description: (
      <div>
        <div className={classes.clear}>
          <p>
            <h3 className={classes.title_color_gradient_v2}>
              Science Olympiad
            </h3>
            <hr className={classes.separationLine_v1}></hr>
            <span className={classes.date_item}>January 2017 - March 2021</span>
            <p>
              In high school, I took part during all four years in my school's
              Science Olympiad team. Science Olympiad is an American team
              competition in which students compete in 23 events pertaining to
              various STEM fields, including earth science, biology, chemistry,
              physics, and engineering.
            </p>

            <b className={classes.title_color_gradient_v2}>
              Notable accomplishments and builds
            </b>
            <p>
              • &nbsp; Won 3rd at a state competition by built a completely
              mechanical "gravity vehicle", which would use gravity from a set
              ramp height, along with a braking mechanism to stop at a variable
              distance.
              <br /> • &nbsp; Programed an TI-Innovator hub to detect minute
              changes in fluid temperature
              <br /> • &nbsp; Worked my way up to become an integral part of the
              build team <br />
            </p>
          </p>
        </div>

        <div className={classes.clear}>
          <p>
            <h3 className={classes.title_color_gradient_v2}>
              Tutor and tennis coach
            </h3>
            <hr className={classes.separationLine_v1}></hr>
            <span className={classes.date_item}>
              June 2017 - September 2020
            </span>

            <p>
              I assisted in the operation of this large-scale summer school and
              specialized in teaching various subjects of math and science, as
              well as formulating hands on projects. The tennis program at this
              camp was also my responsibility, which included advertising on
              social media about the program and devising optimal training
              methods.
            </p>

            <b className={classes.title_color_gradient_v2}>
              Duties and subjects taught
            </b>
            <p>
              • &nbsp; Dedicated over 200 hours volunteering and working at this
              camp tutoring students of all ages in STEM subjects and worked to
              advertise and manage the tennis program
              <br /> • &nbsp; Connected with other businesses and professional
              individuals to support the camp
              <br /> • &nbsp; Earned the Gold President's volunteer service
              award in my sophomore year for over 100 hours of volunteering{" "}
              <br />
            </p>
          </p>
        </div>
        {/* <hr className={classes.hr_work}/> */}
        <div className={classes.clear}>
          <p>
            <h3 className={classes.title_color_gradient_v2}>
              Varsity Tennis Player
            </h3>
            <hr className={classes.separationLine_v1}></hr>
            <span className={classes.date_item}>March 2017 - June 2022</span>

            <p>
              Participated in the tennis team at Minnetonka High School, one of
              the best teams in the region.
            </p>

            <b className={classes.title_color_gradient_v2}>
              My journey on the team
            </b>
            <p>
              • &nbsp; Went undefeated on my first year on the JV team, and
              played the top spot for my team.
              <br /> • &nbsp; Drastically improved my teamwork skills as I
              followed and led peers to improve the team's game as a whole
              <br />• &nbsp; followed a rigorous schedule in order to get to be
              one of the top in the varsity team.
            </p>
          </p>
        </div>
        <br />
      </div>
    ),
  },
];
