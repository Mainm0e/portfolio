import "./style.css";
import React from "react";
import ProjectCard from "./ProjectCard/project-card.js";

const ProjectList = () => {
  const exampleProjects = [
    {
      id: 1,
      name: "Project 1",
      description: "This is project 1",
      img: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is project 2",
      img: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is project 3",
      img: "https://picsum.photos/200",
    },
    {
      id: 4,
      name: "Project 4",
      description: "This is project 4",
      img: "https://picsum.photos/200",
    },
    {
      id: 5,
      name: "Project 5",
      description: "This is project 5",
      img: "https://picsum.photos/200",
    },
  ];

  return (
    <div className="project-list" >
      <div className="slide-container">
        {" "}
        {exampleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>{" "}
      <div className="slide-container">
        {" "}
        {exampleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>{" "}
    </div>
  );
};

export default ProjectList;
