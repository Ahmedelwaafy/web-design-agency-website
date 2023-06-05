import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div className="min-h-hero">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
