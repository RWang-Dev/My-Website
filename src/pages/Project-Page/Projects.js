import ProjectList from "../../components/Projects/ProjectList.js";

const projectData = [
  {
    id: "p1",
    title: "Personal website",
    image:
      "https://www.michalsons.com/wp-content/uploads/2010/03/website-design-e1564662874285.jpg",
    address: "Created with: HTML, CSS, Javascript, ReactJS",
    description:
      "If you are looking at this text right now, this is my personal website! It is my humble attempt to integrate my programming knowledge into a web based application. This website will continue to be updated as I progress with my career.",
    link: "https://github.com/RWang-Dev/Personal-Website",
  },
  {
    id: "p2",
    title: "Task list with login",
    image:
      "https://www.marketing91.com/wp-content/uploads/2020/03/To-do-List-scaled.jpg",
    address: "Created with: HTML, CSS, Javascript, Python, Flask",
    description:
      "Created as a short self project during winter break. This web application features a user login functionaily using a simple backend supported by the Flask framework. Once logged in, users can see their own private notes.",
    link: "https://github.com/RWang-Dev/Python-Web-Task-List",
  },
  {
    id: "p3",
    title: "Unity first person shooter game",
    image: "Game.png",
    address: "Created with: Unity, C#, Visual Studio, Blender",
    description:
      "My first fully functional level in an FPS style game, along with a main menu screen, created using the Unity game engine.",
    link: "https://github.com/RWang-Dev/Unity-First-Person-Shooter-Horror-Game",
  },
  {
    id: "p4",
    title: "English word generator (Gibberisher)",
    image:
      "https://thumbs.dreamstime.com/b/vector-seamless-pattern-letters-alphabet-random-order-white-background-suitable-web-backgrounds-textiles-85272981.jpg",
    address: "Created with: Java, VSCode Compiler",
    description:
      "The Gibberisher program is built and run directly in Visual Studio Code. The program takes a full dictionary of any English like/alphabet present languages, sorts through the data, trains an AI on the grammar rules, and returns gibberish words that perfectly follows said phonetic rules of that language",
    link: "https://github.com/RWang03/Random-Word-Generator",
  },
  {
    id: "p5",
    title: "Python turtle spaceship game",
    image: "Rocket.png",
    address: "Created with: Python, Turtle, VSCode Compiler",
    description:
      "This project was created as a final project in my freshman computer science class. Built directly in Visual Studio Code, the program features a simple pixilated game using Python Turtle graphics as a base, where the user has to control the spacecraft to avoid various asteroids.",
    link: "https://github.com/RWang03/Python-rocket-game",
  },
];

function ProjectsPage() {
  return (
    <section>
      <h1 style={{ marginTop: 75, marginBottom: 75 }}>My Projects</h1>
      <ProjectList meetups={projectData} />
    </section>
  );
}

export default ProjectsPage;
