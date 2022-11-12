import ButtonBackTop from "components/ButtonBackTop/index";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Hotline from "components/Hotline/Hotline";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Hotline />
      <ButtonBackTop />
    </>
  );
}

export default Layout;
