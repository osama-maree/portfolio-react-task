import React from "react";
import NavBar from "./NavBar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import '../style/footer.css'
const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Layout;
