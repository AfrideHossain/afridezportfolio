import { useEffect, useState } from "react";
import Project from "./Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div
      className="w-full mt-16"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      id="projects"
    >
      <h1 className="font-bold text-3xl text-center my-3 text-white">
        Adventures in Code
      </h1>
      <p className="text-center text-white">
        A journey through my most exciting web development projects
      </p>
      {/* <div className="w-fit mt-10 mx-auto p-4 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
        <Project />
      </div> */}
      <div className="grid gap-5 mt-10 w-full p-4">
        {projects &&
          projects.map((projectInfo) => (
            <Project key={projectInfo.id} projectInfo={projectInfo} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
