const ProjectCard = (props) => {
  const { project } = props;
  return (
    <div className="project-card">
      <div className="project-card__img">
        <img src={project.img} alt={project.name} />{" "}
      </div>{" "}
      <div className="project-card__content">
        <h3 className="project-card__title"> {project.name} </h3>{" "}
        <p className="project-card__description"> {project.description} </p>{" "}
      </div>{" "}
    </div>
  );
};

export default ProjectCard;
