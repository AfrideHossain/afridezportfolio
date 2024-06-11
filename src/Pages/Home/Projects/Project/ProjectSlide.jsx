/* eslint-disable react/prop-types */

import { useRef, useState } from "react";

const ProjectSlide = ({ project }) => {
  const [showHover, setShowHover] = useState(false);
  const projectRef = useRef(null);
  const handleMouseOver = (e) => {
    setShowHover(true);
    projectRef.current.style.animation = "fadein 0.5s ease-in";
    console.log(projectRef.current);
  };
  const handleMouseLeave = (e) => {
    setShowHover(false);
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <div
        ref={projectRef}
        className={`${
          showHover ? "flex" : "hidden"
        }w-full h-full absolute top-0 bg-black opacity-30 transition-all duration-500`}
      >
        <p>{project.name}</p>
      </div>
      <h1 className="text-white">
        <img src={project.image} alt={project.name} />
      </h1>
    </div>
  );
};

export default ProjectSlide;
