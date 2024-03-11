import projects from "../data/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "> */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 ">
        {projects.map((project, i) => (
          <Project
            key={i}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
