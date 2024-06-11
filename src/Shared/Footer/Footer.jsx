import afredeLogo from "../../assets/logo/AfredeLogo.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full md:divide-y border-t md:border-t-0 mt-6 py-6">
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-center py-4 px-4">
        <div className="flex gap-5 items-center justify-center">
          <img src={afredeLogo} className="w-12" />
          <h1 className="w-fit bg-clip-text text-2xl font-bold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
            Afrede
            <br />
            Hossain
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:gap-12 gap-6 md:items-center md:ms-auto">
          <div className="flex flex-col text-center md:text-left md:flex-row text-white font-medium md:gap-8 mt-2 md:mt-0">
            <p>+880 17047 60805</p>
            <p>afredehossain@gmail.com</p>
          </div>

          <ul className="list-none flex justify-center md:justify-start gap-8 text-3xl text-white">
            <li className="icon">
              <Link
                to="https://github.com/AfrideHossain/"
                target="_blank"
                className="bx bxl-github"
              ></Link>
            </li>
            <li className="icon">
              <Link
                to="https://www.linkedin.com/in/afridehossain/"
                target="_blank"
                className="bx bxl-linkedin"
              ></Link>
            </li>
            <li className="icon">
              <Link
                to="https://www.facebook.com/afrede.hossain1/"
                target="_blank"
                className="bx bxl-facebook-circle"
              ></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex flex-col md:gap-0 gap-5 md:flex-row justify-between md:items-center md:py-8 px-4">
        <ul className="list-none hidden md:flex md:flex-row flex-col md:gap-8 gap-4 text-white font-medium">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                const ancor = document.createElement("a");
                ancor.href = "#tech";
                ancor.click();
              }}
            >
              Tech Stack
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                const ancor = document.createElement("a");
                ancor.href = "#projects";
                ancor.click();
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
        <p className="text-white font-medium text-center">
          Crafted with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] from-[-60%] to-[#E70FAA]">
            Love <span className="text-white font-medium"> & </span> Caffeine{" "}
            <span className="text-white font-medium"> by </span>
            Afrede Hossain.
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
