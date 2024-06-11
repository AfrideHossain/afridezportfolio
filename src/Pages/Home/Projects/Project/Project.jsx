import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* eslint-disable react/prop-types */
const Project = ({ projectInfo }) => {
  const { name, detail, client_side, server_side, live, image, tech_stack } =
    projectInfo;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="relative max-w-full rounded-xl shadow-2xl bg-slate-800 flex flex-col md:flex-row h-fit gap-2"
      data-aos="flip-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      <img
        className="w-full md:w-96 min-h-full object-cover object-center rounded-t-xl md:rounded-l-xl md:rounded-r-none"
        src={image}
        alt=""
      />
      <div className="w-full p-4 min-h-full flex flex-col">
        <h1 className="font-semibold text-2xl mb-2">{name}</h1>
        <p className="text-gray-400 text-lg font-light mb-2">{detail}</p>
        <div className="mt-2 font-light mb-4">
          <span className="font-normal min-w-fit">Tech stacks:</span>{" "}
          <div className="flex flex-wrap gap-2 w-full md:w-3/4 px-4 mt-3">
            {tech_stack &&
              tech_stack.map((tech) => (
                <p
                  className="badge badge-primary font-semibold text-base p-3"
                  key={tech}
                >
                  {tech}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-2 mt-5 text-base flex-grow">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center normal-case btn btn-info text-base hover:btn-ghost"
          >
            <i className="bx bx-link text-2xl"></i>
            <span> Live Preview</span>
          </a>
          <div className="md:join md:flex-row md:gap-0 flex flex-col gap-2">
            <a
              href={client_side}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center join-item normal-case btn btn-accent text-base"
            >
              <i className="bx bx-code-alt text-2xl"></i>
              <span> Source code (frontend)</span>
            </a>
            <a
              href={server_side}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center join-item normal-case btn btn-primary text-base"
            >
              <i className="bx bx-server text-2xl"></i>
              <span> Source code (backend)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
