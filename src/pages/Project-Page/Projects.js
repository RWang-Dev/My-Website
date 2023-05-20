import ProjectList from "../../components/Projects/ProjectList.js";
import { projectData } from "./ProjectInfo.js";
import classes from "./Projects.module.css";

function ProjectsPage() {
  return (
    <section>
      <h1 className={classes.projectTitle} >My Projects</h1>
      <ProjectList meetups={projectData} />
    </section>
  );
}

export default ProjectsPage;
