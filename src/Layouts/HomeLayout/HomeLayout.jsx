import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <header className="relative">
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
