import afrede_svg_shape from "../../../assets/images/afrede_svg_shape.png";
import Typewriter from "typewriter-effect";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

const Banner = () => {
  const downloadIcon = useRef();

  const hoverStyle = () => {
    const iconElem = downloadIcon.current;
    iconElem.classList.add("animate-bounce");
  };
  const hoverStyleRemove = () => {
    const iconElem = downloadIcon.current;
    iconElem.classList.remove("animate-bounce");
  };
  return (
    <>
      <div className="hero overflow-hidden">
        <div className="hero-content md:h-screen h-full flex flex-col md:flex-row md:justify-evenly items-center md:gap-0 gap-5">
          <div className="font-bold text-white leading-normal">
            <p className="text-left tracking-[-1px] text-2xl">Hi 👋, I am</p>
            <p className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-4xl md:text-5xl mt-2 w-fit">
              Afrede Hossain
            </p>
            <div className="text-left text-2xl md:text-4xl tracking-[-1px] mt-2 flex gap-2">
              <Typewriter
                options={{ cursor: "!" }}
                onInit={(typewriter) => {
                  typewriter
                    .pasteString("I am a ")
                    .typeString("Full Stack Web Developer")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </div>
            <a
              href="https://drive.google.com/file/d/1vwK9AypnxLMmgwUU4u34rsxoNYPP7_vo/view?usp=drive_link"
              download={true}
              target="_blank"
              rel="noreferrer"
              className="btn bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-white normal-case border-0 mt-5 text-base transition-all"
              onMouseOver={hoverStyle}
              onMouseLeave={hoverStyleRemove}
            >
              Download Resume{" "}
              <CloudArrowDownIcon className="w-6 h-6" ref={downloadIcon} />
            </a>
          </div>
          <div className="md:w-72 w-60">
            <img
              className="w-full"
              src={afrede_svg_shape}
              alt="Afrede Hossain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
