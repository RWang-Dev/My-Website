import classes from "./Projects.module.css"


export const projectData = [
  
    {
      id: "p1",
      title: <div className={classes.project_title}>Personal website</div>,
      image:
        "https://www.michalsons.com/wp-content/uploads/2010/03/website-design-e1564662874285.jpg",
      address: <div>
      <span className={classes.used_item}>HTML</span> 
      <span className={classes.used_item}>CSS</span>
      <span className={classes.used_item}>JavaScript</span>  
      <span className={classes.used_item}>ReactJS</span>  
      <span className={classes.used_item}>VS Code</span>  
      <span className={classes.used_item}>Azure</span> 
      </div>,
      description:
        "This is my personal website. It is my attempt to integrate my programming knowledge into a responsive web based application. Built using ReactJS and deployed to Microsoft Azure This website will continue to be updated as I progress with my career. Visit anytime at https://www.rwang.us",
      link: "https://github.com/RWang-Dev/My-Website",
    },
    {
      id: "p2",
      title: <div className={classes.project_title}>Task List</div>,
      image:
        "taskList.png",
      address: <div>
      <span className={classes.used_item}>HTML</span> 
      <span className={classes.used_item}>CSS</span>
      <span className={classes.used_item}>JavaScript</span> 
      <span className={classes.used_item}>Python</span> 
      <span className={classes.used_item}>Flask</span>
      <span className={classes.used_item}>VS Code</span>  
        </div>,
      description:
        "Created as a short self project during winter break. This web application features a user login functionaily using a simple backend supported by the Flask framework. Once logged in, users can see their own private notes.",
      link: "https://github.com/RWang-Dev/Python-Web-Task-List",
    },
    {
      id: "p3",
      title: <div className={classes.project_title}>Drone Pickup Service</div>,
      image:
        "Drone-pickup-service.png",
      address: <div>
      <span className={classes.used_item}>C++</span> 
      <span className={classes.used_item}>HTML</span>
      <span className={classes.used_item}>JavaScript</span>  
      <span className={classes.used_item}>Doxygen</span> 
      <span className={classes.used_item}>Docker</span>
      <span className={classes.used_item}>VS Code</span>  
      
        </div>,
      description:
        `Final project for my program design class where my team created an uber style drone pickup service with a 3d frontend map of the University of MN campus, with a trip planning UI.\n 
        Extended front end UI and backend for more features like data collection and energy consumption via batteries`,
      link: "https://github.com/RWang-Dev/Drone-Pickup-Service",
    },
    {
      id: "p4",
      title: <div className={classes.project_title}>Election Voting Processor</div>,
      image:
        "Vote_img.png",
      address: <div>
      <span className={classes.used_item}>Java</span> 
      <span className={classes.used_item}>Junit</span>
      <span className={classes.used_item}>Javadoc</span>  
      <span className={classes.used_item}>IntelliJ IDEA</span> 
      </div>,
      description:
        `Final project for my software development class where my team created an election processing program to count votes and find the election
        winners for instant runoff, closed party listing, and popularity only elections. The program will be able to take in many ballots for processing
        an election, and will output both a table to the terminal as well as an audit file to store the current election processes and winner.`,
      link: "https://github.com/RWang-Dev/Election-Voting-Processor",
    },
    {
      id: "p5",
      title: <div className={classes.project_title}>
      Farmsight (Analytics for Good Institute (AGI) Hackathon 2023)</div>,
      image:
        "The-Good-Acre.jpg",
      address: <div>
      <span className={classes.used_item}>Flask</span> 
      <span className={classes.used_item}>Python</span>
      <span className={classes.used_item}>HTML</span>  
      <span className={classes.used_item}>CSS</span> 
      <span className={classes.used_item}>Numpy</span> 
      <span className={classes.used_item}>Pandas</span> 

      </div>,
      description:
        `Farmsight is a web application build for analyzing trends within input data. 
        The user can easily upload CSV files to Farmsight and receive information regarding the sets of data. 
        In particular, this project is targeting The Good Acre, an organization of farmers and cooks, so that they can tabulate and analyze data 
        regarding their crop yields and track supply and shipments throughout the year.`,
      link: "https://github.com/UMN-AGI-Hackathon-2023-FarmSight",
    },
    {
      id: "p6",
      title: <div className={classes.project_title}>Just Change</div>,
      image:
        "Just_Change_icon.ico",
      address: <div>
      <span className={classes.used_item}>React</span> 
      <span className={classes.used_item}>HTML</span>
      <span className={classes.used_item}>CSS</span>  
      <span className={classes.used_item}>JavaScript</span> 
      </div>,
      description:
        `First Hackathon project, in which my team was tasked with developing an application to promote civil participation. 
        Inspired by three popular apps, Tinder, Spotify, and Acorns, 
        JustChange was developed with a simple UI in mind where the user would swipe left or right to select which charity to donate their spare change money to. 
        At the end of the year, all the money pledged will be tabulated into a succinct "wrapped" page.`,
      link: "https://github.com/Minnehack-2023-JustChange",
    },
    {
      id: "p7",
      title: <div className={classes.project_title}>Unity First Person 3D Game</div>,
      image: "Game.png",
      address: <div>
      <span className={classes.used_item}>Unity</span> 
      <span className={classes.used_item}>C#</span>
      <span className={classes.used_item}>Visual Studio</span>  
      <span className={classes.used_item}>Blender</span> 
      
      </div>,
      description:
        "My first fully functional level in first person action style game, along with a main menu screen, created using the Unity game engine. All 3d models on the scene was made by me using the Blender modeling software",
      link: "https://github.com/RWang-Dev/Unity-First-Person-Shooter-Horror-Game",
    },
    {
      id: "p8",
      title: <div className={classes.project_title}>English Word Generator</div>,
      image:
        "Gibberisher_example.png",
      address:<div>
      <span className={classes.used_item}>Java</span> 
      <span className={classes.used_item}>VS Code</span>
      
      </div>,
      description:
        "The Gibberisher program is built and run directly in Visual Studio Code. The program takes a full dictionary of any English like/alphabet present languages, sorts through the data, trains an AI on the grammar rules, and returns gibberish words that perfectly follows said phonetic rules of that language",
      link: "https://github.com/RWang03/Random-Word-Generator",
    },
    {
      id: "p9",
      title: <div className={classes.project_title}>Python Turtle Spaceship Game</div>,
      image: "Rocket.png",
      address: <div>
        <span className={classes.used_item}>Python</span> 
      <span className={classes.used_item}>Turtle</span>
      <span className={classes.used_item}>VS Code</span>  
      
      </div>,
      description:
        "This project was created as a final project in my freshman computer science class. Built directly in Visual Studio Code, the program features a simple pixilated game using Python Turtle graphics as a base, where the user has to control the spacecraft to avoid various asteroids.",
      link: "https://github.com/RWang03/Python-rocket-game",
    },
  ];
  