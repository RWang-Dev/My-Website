import ProjectList from "../../components/Projects/ProjectList.js";
import { projectData } from "./ProjectInfo.js";

function ProjectsPage() {
  return (
    <section>
      <h1 style={{ marginTop: 75, marginBottom: 75 }}>My Projects</h1>
      <ProjectList meetups={projectData} />
    </section>
  );
}

export default ProjectsPage;
