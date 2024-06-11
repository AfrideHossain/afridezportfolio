import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tech = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-full py-8 px-4 flex flex-col items-center mb-10"
      id="tech"
    >
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <h1 className="font-bold text-3xl text-center my-3 text-white">
          My Tech Arsenal
        </h1>
        <p className="text-center text-white">
          The powerful technologies I wield to create digital wonders.
        </p>
      </div>
      <div className="grid grid-cols-3 w-full md:grid-cols-5 gap-10 mt-10 md:max-w-2xl">
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full rounded-full bg-slate-400"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg"
          />
        </div>
        <div
          className="w-20 rounded-md bg-slate-700 p-4"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img
            className="w-full"
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Tech;
