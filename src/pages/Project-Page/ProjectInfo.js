import classes from "./Projects.module.css";

export const projectData = [
  {
    id: "p1",
    title: <div className={classes.project_title}>Personal website</div>,
    image:
      "https://www.michalsons.com/wp-content/uploads/2010/03/website-design-e1564662874285.jpg",
    address: (
      <div>
        <span className={classes.used_item}>HTML</span>
        <span className={classes.used_item}>CSS</span>
        <span className={classes.used_item}>JavaScript</span>
        <span className={classes.used_item}>ReactJS</span>
        <span className={classes.used_item}>VS Code</span>
        <span className={classes.used_item}>Azure</span>
      </div>
    ),
    description:
      "This is my personal website. Built using various modern web technologies into a responsive web based application and deployed to Microsoft Azure. This website will continue to be updated as I progress with my career. Visit anytime at https://www.rwang.us",
    link: "https://github.com/RWang-Dev/My-Website",
  },
  {
    id: "p2",
    title: <div className={classes.project_title}>SafeRoute</div>,
    image: "SafeRoutePic.png",
    address: (
      <div>
        <span className={classes.used_item}>React</span>
        <span className={classes.used_item}>JSX</span>
        <span className={classes.used_item}>MongoDB</span>
        <span className={classes.used_item}>Microsoft Azure</span>
        <span className={classes.used_item}>CSS</span>
      </div>
    ),
    description:
      "SafeRoute is an application designed for use by students and people who live around the University of Minnesota Twin Cities. This app is designed to help users identify the dangerous areas around campus through a Google Maps API, and also allows them to receive push notifications when a crime occurs near them or a saved location.",
    link: "https://calm-glacier-0c8e2970f.5.azurestaticapps.net/",
  },
  {
    id: "p3",
    title: (
      <div className={classes.project_title}>Community Housing Webapp</div>
    ),
    image: "Community-housing-app.png",
    address: (
      <div>
        <span className={classes.used_item}>Flask</span>
        <span className={classes.used_item}>JavaScript</span>
        <span className={classes.used_item}>Python</span>
        <span className={classes.used_item}>HTML</span>
        <span className={classes.used_item}>CSS</span>
        <span className={classes.used_item}>PostgreSQL</span>
      </div>
    ),
    description:
      "Created as a web application to help users organize different housing groups and dedicate tasks to other users. Users can create their own accounts, join housing groups, and create their own houses with friends.",
    link: "https://github.com/RWang-Dev/Community-Housing-App",
  },

  {
    id: "p4",
    title: <div className={classes.project_title}>Microblogging Website</div>,
    image: "4131-Project.png",
    address: (
      <div>
        <span className={classes.used_item}>Express</span>
        <span className={classes.used_item}>Pug</span>
        <span className={classes.used_item}>JavaScript</span>
        <span className={classes.used_item}>SQL</span>
        <span className={classes.used_item}>CSS</span>
      </div>
    ),
    description:
      "Utilized the Express framework to manage various server endpoints, ensuring efficient RESTful API Interactions. Mantained an SQL database, leveraging AJAX for seamless data manipulation, enhancing efficiency and control. Crafted an engaging UI using dynamic Pug templating, and implemented user accounts to provide a more secure and individualized user experience",
    link: "https://github.com/RWang-Dev/Microblogging-Webapp",
  },
  {
    id: "p5",
    title: (
      <div className={classes.project_title}>
        Hire Equity (Analytics for Good Institute (AGI) Hackathon 2024)
      </div>
    ),
    image: "hire-equity.png",
    address: (
      <div>
        <span className={classes.used_item}>Flask</span>
        <span className={classes.used_item}>Python</span>
        <span className={classes.used_item}>HTML</span>
        <span className={classes.used_item}>CSS</span>
        <span className={classes.used_item}>Scikit Learn</span>
        <span className={classes.used_item}>GPT</span>
      </div>
    ),
    description: `Winning project at the Analytics for Good Hackathon:
    Analyzed over 6 million data points to determine the effect of India’s expanded maternity leave on women’s application to IT careers. Utilized machine learning models and statistical analysis to present findings to a panel of business analytics and data science experts.`,
    link: "https://github.com/Crustacean-Hacks/HireEquity",
  },
  {
    id: "p6",
    title: <div className={classes.project_title}>Drone Pickup Service</div>,
    image: "Drone-pickup-service.png",
    address: (
      <div>
        <span className={classes.used_item}>C++</span>
        <span className={classes.used_item}>HTML</span>
        <span className={classes.used_item}>JavaScript</span>
        <span className={classes.used_item}>Doxygen</span>
        <span className={classes.used_item}>Docker</span>
        <span className={classes.used_item}>VS Code</span>
      </div>
    ),
    description: `Final project for my program design class where my team created an uber style drone pickup service with a 3d frontend map of the University of MN campus, with a trip planning UI.\n 
        Extended front end UI and backend for more features like data collection and energy consumption via batteries`,
    link: "https://github.com/RWang-Dev/Drone-Pickup-Service",
  },
  {
    id: "p7",
    title: (
      <div className={classes.project_title}>Election Voting Processor</div>
    ),
    image: "Vote_img.png",
    address: (
      <div>
        <span className={classes.used_item}>Java</span>
        <span className={classes.used_item}>Junit</span>
        <span className={classes.used_item}>Javadoc</span>
        <span className={classes.used_item}>IntelliJ IDEA</span>
      </div>
    ),
    description: `Final project for my software development class where my team created an election processing program to count votes and find the election
        winners for instant runoff, closed party listing, and popularity only elections. The program will be able to take in many ballots for processing
        an election, and will output both a table to the terminal as well as an audit file to store the current election processes and winner.`,
    link: "https://github.com/RWang-Dev/Election-Voting-Processor",
  },

  {
    id: "p8",
    title: <div className={classes.project_title}>Just Change</div>,
    image: "Just_Change_icon.ico",
    address: (
      <div>
        <span className={classes.used_item}>React</span>
        <span className={classes.used_item}>HTML</span>
        <span className={classes.used_item}>CSS</span>
        <span className={classes.used_item}>JavaScript</span>
      </div>
    ),
    description: `First Hackathon project, in which my team was tasked with developing an application to promote civil participation. 
        Inspired by three popular apps, Tinder, Spotify, and Acorns, 
        JustChange was developed with a simple UI in mind where the user would swipe left or right to select which charity to donate their spare change money to. 
        At the end of the year, all the money pledged will be tabulated into a succinct "wrapped" page.`,
    link: "https://github.com/Minnehack-2023-JustChange",
  },
  {
    id: "p9",
    title: (
      <div className={classes.project_title}>
        Farmsight (Analytics for Good Institute (AGI) Hackathon 2023)
      </div>
    ),
    image: "the_good_acre.jpg",
    address: (
      <div>
        <span className={classes.used_item}>Flask</span>
        <span className={classes.used_item}>Python</span>
        <span className={classes.used_item}>HTML</span>
        <span className={classes.used_item}>CSS</span>
        <span className={classes.used_item}>Numpy</span>
        <span className={classes.used_item}>Pandas</span>
      </div>
    ),
    description: `Farmsight is a web application build for analyzing trends within input data. 
        The user can easily upload CSV files to Farmsight and receive information regarding the sets of data. 
        In particular, this project is targeting The Good Acre, an organization of farmers and cooks, so that they can tabulate and analyze data 
        regarding their crop yields and track supply and shipments throughout the year.`,
    link: "https://github.com/UMN-AGI-Hackathon-2023-FarmSight",
  },
  {
    id: "p10",
    title: (
      <div className={classes.project_title}>Unity First Person 3D Game</div>
    ),
    image: "Game.png",
    address: (
      <div>
        <span className={classes.used_item}>Unity</span>
        <span className={classes.used_item}>C#</span>
        <span className={classes.used_item}>Visual Studio</span>
        <span className={classes.used_item}>Blender</span>
      </div>
    ),
    description:
      "My first fully functional level in first person action style game, along with a main menu screen, created using the Unity game engine. All 3d models on the scene was made by me using the Blender modeling software",
    link: "https://github.com/RWang-Dev/Unity-First-Person-Shooter-Horror-Game",
  },
  {
    id: "p11",
    title: <div className={classes.project_title}>English Word Generator</div>,
    image: "Gibberisher_example.png",
    address: (
      <div>
        <span className={classes.used_item}>Java</span>
        <span className={classes.used_item}>VS Code</span>
      </div>
    ),
    description:
      "The Gibberisher program is built and run directly in Visual Studio Code. The program takes a full dictionary of any English like/alphabet present languages, sorts through the data, trains an AI on the grammar rules, and returns gibberish words that perfectly follows said phonetic rules of that language",
    link: "https://github.com/RWang03/Random-Word-Generator",
  },
];
