import React from "react";
import SkillsChart from "./SkillsChart";

export const myInfo = [
  {
    id: "m1",
    title: <h2>Hello there!</h2>,
    image: "https://pngimg.com/uploads/welcome/welcome_PNG18.png",
    description: (
      <div>
        <p>
          My name is Robert, and I am currently a second year computer science
          student at the University of Minnesota. What you're seeing here is my
          website where I post many thing about me, like the projects that I've
          worked on and my contact informaton.
        </p>
      </div>
    ),
  },
  {
    id: "m2",
    title: <h2>My education</h2>,
    image: null,
    description: (
      <div>
        <div>
          <p>
            <h3>University of Minnesota Twin Cities</h3> (September 2021 -
            Current)
            <hr></hr>
            Currently pursuing a BS in Computer Science
            <br />
            <b>Tech GPA:</b> 4.0
            <hr></hr>
            <h4>
              <i>Relevant coursework:</i>
            </h4>
            <p>
              <b>CSCI 1133</b> (Introduction to Python)
            </p>
            <p>
              <b>CSCI 1913</b> (Introduction to Algorithms and Data Structures
              (Python and Java))
            </p>
            <p>
              <b>CSCI 2011</b> (Discrete Mathematics)
            </p>
            <p>
              <b>CSCI 2021</b> (Machine Architecture and Organization)
            </p>
            <p>
              <b>CSCI 2033</b> (Elementary Linear Algebra)
            </p>
            <p>
              <b>CSCI 2041</b> (Advanced Programming Principles)
            </p>
          </p>
        </div>

        <br></br>

        <div>
          <p>
            <h3>Minnetonka High School</h3> (September 2017 - June 2021)
            <hr></hr>
            High School Diploma and various college AP and IB credits earned
            through my years studying here.
            <br />
            <b>Overall GPA:</b> 4.4
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "m4",
    title: <h2>Relevant skills</h2>,
    image: null,
    description: (
      <div>
        <b>Programming Languages: </b> Python, Java, HTML, CSS, C, OCaml, C#,
        Javascript
        <br />
        <b>Software & Tools: </b> Visual Studio Code, ReactJS, Unity, Blender,
        Terminal, GitHub, Git, Flask, Visual Studio
      </div>
    ),
  },
  {
    id: "m3",
    title: <h2>Work and extracurriculars</h2>,
    image: null,
    description: (
      <div>
        <div>
          <p>
            <h3>Mu2e experiment engineer</h3> (January 2022 - December 2022)
            <hr></hr>
            I worked as part of the Muon-to-Electron Conversion experiment,
            which is a physics experiment at Fermilab in the US. The University
            of Minnesota, tasked with producing the particle "camera" detector,
            employed students to construct this crucial part of the experiment.
            <br />
            <hr></hr>
            <b>Particular duties included:</b>
            <p>
              - Working with micro-scale equipment and materials to construct
              detailed mechanical parts. <br /> - Using highly precise
              measurement tools to record and manage data. <br /> - Organized
              Excel data to optimize the runtime of the scripts use to manage
              the database. <br /> - Teamwork oriented tasks at every step, in
              order to coordinate very specific actions. <br /> - Mastered a
              production method and led the training for that process.
            </p>
          </p>
        </div>
        <br />
        <div>
          <p>
            <h3>Science Olympiad</h3> (January 2017 - March 2021)
            <hr></hr>
            In my time in high school, I took part during all four years in my
            school's Science Olympiad team. Science Olympiad is an American team
            competition in which students compete in 23 events pertaining to
            various STEM fields, including earth science, biology, chemistry,
            physics, and engineering.
            <br />
            <hr></hr>
            <b>Notable accomplishments and builds:</b>
            <p>
              - Won 3rd at a state competition by built a completely mechanical
              "gravity vehicle", which would use gravity from a set ramp height,
              along with a braking mechanism to stop at a variable distance.
              <br /> - Programed an TI-Innovator hub to detect minute changes in
              fluid temperature <br /> - Worked my way up to become an integral
              part of the build team <br />
            </p>
          </p>
        </div>
        <br />
        <div>
          <p>
            <h3>Varsity Tennis Player</h3> (March 2017 - June 2022)
            <hr></hr>
            Participated in the tennis team at Minnetonka High School, one of
            the best teams in the region.
            <br />
            <hr></hr>
            <b>My journey on the team:</b>
            <p>
              - Went undefeated on my first year on the JV team, and played the
              top spot for my team.
              <br /> - Drastically improved my teamwork skills as I followed and
              led peers to improve the team's game as a whole <br />- followed a
              rigorous schedule in order to get to be one of the top in the
              varsity team.
            </p>
          </p>
        </div>
        <br />
      </div>
    ),
  },
];
