import React from "react";
import classes from "./AboutMeInfo.module.css";
import SkillsChart from "./SkillsChart";

// exports an array constant containing all of my info in this separate file
export const myInfo = [
  {
    id: "m0",
    title: null,
    image: "Opener.jpg",
    description: (
      <div></div>
    ),
  },
  {
    id: "m1",
    title: null,
    image: null,
    description: (
      <div style={{paddingLeft:200, paddingRight:200}} >
        <p><b>
          My name is Robert, and I am currently a rising junior at the University of Minnesota Twin Cities
          studying computer science. I am currently open to any work opportunities,
          so please feel free to find my contact information in the contact me tab up above. This website is 
          where I post many things about me, like the projects that I've worked on, past experiences, and updated links to my GitHub code. Please take a look around.
        </b></p>
      </div>
    ),
  },
  {
    id: "m2",
    title: <h2 className={classes.blue}>My Education</h2>,
    image: null,
    description: (
      <div >
        <div className={classes.blue}>
          <p>
            <h3>University of Minnesota Twin Cities</h3> (September 2021 -
            Current)
            
            <div>Currently pursuing a BS in Computer Science</div>
            <b>Tech GPA:</b> 4.0

            <h4>
              <i>Relevant coursework</i>
            </h4>
            <div style={{marginLeft: 40}}>
            <p>
              <b>CSCI 5801</b> (Software Engineering)
            </p>
            <p>
              <b>CSCI 4041</b> (Alogirhtms and Data Structures)
            </p>
            <p>
              <b>CSCI 2021</b> (Machine Architecture and Organization)
            </p>
            <p>
              <b>CSCI 3081W</b> (Program Design and Development)
            </p>
            <p>
              <b>CSCI 1133</b> (Introduction to Python)
            </p>
            <p>
              <b>CSCI 2011</b> (Discrete Mathematics)
            </p>
            <p>
              <b>CSCI 2033</b> (Elementary Linear Algebra)
            </p>
            <p>
              <b>CSCI 2041</b> (Advanced Programming Principles)
            </p>
            <p>
              <b>CSCI 5302</b> (Analysis of Numerical Algorithms)
            </p>
            </div>
            
          </p>
        </div>

        

        <div className= {classes.blue}>
          <p>
            <h3>Minnetonka High School</h3> (September 2017 - June 2021)
            
            High School Diploma and various college AP and IB credits earned
            through my years studying here.
            <br />
            
            <b>Overall GPA:</b> 4.4
            <br/>
            <br/>
            <p><b>
                  Awards</b>
              </p>

            <div style={{ marginLeft: 40}}>
              
              <p>
                Summa Cum Laude
              </p>
              <p>
                AP Scholar with Distinction
              </p>
              <p>
                Varsity MVP
              </p>
              <p>
                Gold President's Volunteer Service award
              </p>
            </div>
            

            
            <br></br>
            
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "m4",
    title: <h2 className={classes.white}>Relevant skills</h2>,
    image: null,
    description: (
      <div className = {classes.white}>
      <div >
        <b>Programming Languages: </b> Python, Java, HTML, CSS, C#, C/C++, JavaScript, OCaml, x86-64 Assembly
        <br/>
        <br />
        <b>Software & Tools: </b> Visual Studio Code, IntelliJ IDEA, Visual Studio, ReactJS, GitHub, Git, Docker, Doxygen, Azure, Unity Engine, Linux, Blender 3D,
        Terminal, Flask
        <br/>
        <br/>
      </div>
      <div className={classes.wakatime}>
        <img className={classes.wakatime_stats} src="https://github-readme-stats.vercel.app/api/wakatime?username=RWang&theme=radical&layout=compact" alt=""/>
      </div>
      
      </div>
    ),
  },
  {
    id: "m3",
    title: <h2 className={classes.blue}>Work and Extracurriculars</h2>,
    image: null,
    description: (
      <div>
        <div className = {classes.blue}>
          <p>
            <h3>Mu2e experiment engineer</h3> (January 2022 - December 2022)
            <p>
            The Muon-To-Electron Experiment (Mu2e) is a national physics experiment centered at Fermilab aiming to discover physics beyond the standard model. 
            I worked for the UMN Physics Department at the Physics and Nanotechnology building to build an electron detector that plays a crucial part in the whole experiment at Fermilab. 
            To efficiently build such intricate and fragile parts for an electron detector, I had to learn how to use many custom-made tools and software to provide detailed data on each part that I produced.
            </p>
            
            <b>Particular duties included</b>
            <p style = {{marginLeft: 40}}>
               • Working with micro-scale equipment and materials to construct
              detailed mechanical parts. 
              <br /> 	• Using highly precise
              measurement tools to record and manage data. 
              <br /> 	• Organized
              Excel data to optimize the runtime of the scripts use to manage
              the database. 
              <br /> 	• Teamwork oriented tasks at every step, in
              order to coordinate very specific actions. 
              <br /> 	• Mastered a
              production method and led the training for that process.
            </p>
          </p>
        </div>
        
        <div className = {classes.blue}>
          <p>
            <h3>Science Olympiad</h3> (January 2017 - March 2021)
            <p>
            In my time in high school, I took part during all four years in my
            school's Science Olympiad team. Science Olympiad is an American team
            competition in which students compete in 23 events pertaining to
            various STEM fields, including earth science, biology, chemistry,
            physics, and engineering.
            </p>
            
            <b>Notable accomplishments and builds</b>
            <p style = {{marginLeft: 40}}>
            • Won 3rd at a state competition by built a completely mechanical
              "gravity vehicle", which would use gravity from a set ramp height,
              along with a braking mechanism to stop at a variable distance.
              <br /> • Programed an TI-Innovator hub to detect minute changes in
              fluid temperature
              <br /> • Worked my way up to become an integral
              part of the build team <br />
            </p>
          </p>
        </div>
        
        <div className= {classes.blue}>
          <p>
            <h3>Tutor and tennis coach</h3> (June 2017 - September 2020)
            <p>
            I assisted in the operation of this large-scale summer school and specialized in teaching various subjects of math and science, as well as formulating hands on projects. 
            The tennis program at this camp was also my responsibility, which included advertising on social media about the program and devising optimal training methods.
            </p>
            
            <b>Duties and subjects taught</b>
            <p style = {{marginLeft: 40}}>
            • Dedicated over 200 hours volunteering and working at this camp tutoring students of all ages in STEM subjects and worked to advertise and manage the tennis program
              <br /> • Connected with other businesses and professional individuals to support the camp 
              <br /> • Earned the Gold President's volunteer service award in my sophomore year <br />
            </p>
          </p>
        </div>
        <div className= {classes.blue}>
          <p>
            <h3>VANTAGE Global Business</h3> (March 2019 - June 2020)
            <p>
            Participated in my high school's VANTAGE program to work with local businesses on real world issues that are affecting business activities
            </p>
            <b>Tasks my team faced</b>
            <p style = {{marginLeft: 40}}>
            • Had to design a new product that solved previously problematic features
              <br /> • Maintained communication with the owners of these local businesses and had regular in person meetings
              <br />• Collected data on customers and presented new found data which helped these businesses during quarantine times.
            </p>
          </p>
        </div>
        {/* <hr className={classes.hr_work}/> */}
        <div className= {classes.blue}>
          <p>
            <h3>Varsity Tennis Player</h3> (March 2017 - June 2022)
            <p>
            Participated in the tennis team at Minnetonka High School, one of
            the best teams in the region.
            </p>
            
            <b>My journey on the team</b>
            <p style = {{marginLeft: 40}}>
            • Went undefeated on my first year on the JV team, and played the
              top spot for my team.
              <br /> • Drastically improved my teamwork skills as I followed and
              led peers to improve the team's game as a whole 
              <br />• followed a
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
