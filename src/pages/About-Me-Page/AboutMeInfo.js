import React from "react";
import SkillsChart from "./SkillsChart";

// exports an array constant containing all of my info in this separate file
export const myInfo = [
  {
    id: "m1",
    title: <h2>Hello there!</h2>,
    image: "https://pngimg.com/uploads/welcome/welcome_PNG18.png",
    description: (
      <div>
        <p>
          My name is Robert, and I am currently a sophomore at the University of Minnesota Twin Cities
          studying computer science. I am currently open to any work opportunities,
          so please feel free to find my contact information in the contact me tab up above. This website is 
          where I post many things about me, like the projects that I've worked on, past experiences, and updated links to my GitHub code. Please take a look around.
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
        Javascript, X86-64 assembly
        <br />
        <b>Software & Tools: </b> Visual Studio Code, ReactJS, Unity Engine, Blender 3D,
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
            The Muon-To-Electron Experiment (Mu2e) is a national physics experiment centered at Fermilab aiming to discover physics beyond the standard model. 
            I worked for the UMN Physics Department at the Physics and Nanotechnology building to build an electron detector that plays a crucial part in the whole experiment at Fermilab. 
            To efficiently build such intricate and fragile parts for an electron detector, I had to learn how to use many custom-made tools and software to provide detailed data on each part that I produced.
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
            <h3>Tutor and tennis coach</h3> (June 2017 - September 2020)
            <hr></hr>
            I assisted in the operation of this large-scale summer school and specialized in teaching various subjects of math and science, as well as formulating hands on projects. 
            The tennis program at this camp was also my responsibility, which included advertising on social media about the program and devising optimal training methods.
            <br />
            <hr></hr>
            <b>Duties and subjects taught:</b>
            <p>
              - Dedicated over 200 hours volunteering and working at this camp tutoring students of all ages in STEM subjects and worked to advertise and manage the tennis program
              <br /> - Connected with other businesses and professional individuals to support the camp <br /> - Earned the Gold President's volunteer service award in my sophomore year <br />
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
