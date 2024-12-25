import ProjectList from "../../components/Projects/ProjectList.js";
import { projectData } from "./ProjectInfo.js";
import classes from "./Projects.module.css";
import Card from "../../components/ui/Card.js";
import { useState, useEffect } from "react";

import Q from "q";
import { useAppContext } from "../../AppContext.js";

function ProjectsPage() {
  const { userData, updateUserData } = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userData.projects) {
      setLoading(false);
    } else {
      fetchProjects();
    }
  }, []);

  useEffect(() => {
    if (userData.projects) {
      setLoading(false);
    }
  }, [userData.projects]);

  const fetchProjects = async () => {
    try {
      const request = await fetch("/api/getProjects");
      if (request.ok) {
        const data = await request.json();
        updateUserData("projects", data);
        setLoading(false);
        console.log("Successfully loaded projects");
      }
    } catch (error) {
      console.error(error);
    }
    return;
  };

  return (
    <section>
      <h1 className={classes.project_header}>My Projects</h1>
      {/* <ProjectList meetups={projectData} /> */}
      <ul className={classes.list}>
        {loading ? (
          <div className={classes.centered}>Loading Projects ...</div>
        ) : (
          userData.projects.map((project) => (
            <li className={classes.item}>
              <Card className={classes.card}>
                <div className={classes.image}>
                  <img src={project.imageUrl} />
                </div>
                <div className={classes.content}>
                  <h3>
                    <div className={classes.project_title}>
                      {project.project}
                    </div>
                  </h3>
                  <address>
                    <div>
                      {project.skills.map((skill) => (
                        <span className={classes.used_item}>{skill}</span>
                      ))}
                    </div>
                  </address>
                </div>
                <div className={classes.description}>
                  <p>{project.description}</p>
                </div>

                <div className={classes.actions}>
                  <div>
                    <a
                      href={project.links[0]}
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button style={{ marginBottom: 15 }}>View Project</button>
                    </a>
                  </div>
                </div>
              </Card>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default ProjectsPage;
