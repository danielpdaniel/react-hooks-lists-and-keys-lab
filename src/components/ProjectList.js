import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectList = projects.map(project => {
    return <ProjectItem key={project.id} name={project.name} technologies={project.technologies} about={project.about}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
