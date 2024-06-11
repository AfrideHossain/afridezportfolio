import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import afredeLogo from "../../assets/logo/AfredeLogo.png";

const Navbar = () => {
  const [navtoggle, setNavtoggle] = useState(false);
  const navToggler = () => {
    if (navtoggle) {
      setNavtoggle(false);
    } else {
      setNavtoggle(true);
    }
  };
  return (
    <nav className="sticky top-0 container py-4 md:max-h-20 h-fit flex md:flex-row flex-col md:items-center justify-between p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <img src={afredeLogo} className="w-12" />
          <h1 className="bg-clip-text text-2xl font-extrabold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
            Afrede
            <br />
            Hossain
          </h1>
        </div>
        <div className="md:hidden" onClick={navToggler}>
          {navtoggle ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </div>
      </div>
      <div
        className={`${
          navtoggle ? "flex" : "hidden"
        } md:flex md:flex-row flex-col md:h-auto h-screen justify-center md:justify-between items-center md:gap-10 gap-5`}
      >
        <ul className="list-none h-auto flex md:flex-row flex-col gap-8 text-white font-medium md:text-left text-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                const ancor = document.createElement("a");
                ancor.href = "#about";
                ancor.click();
              }}
            >
              About
            </NavLink>
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
        <ul className="list-none flex gap-8 text-3xl text-white">
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
    </nav>
  );
};

export default Navbar;
