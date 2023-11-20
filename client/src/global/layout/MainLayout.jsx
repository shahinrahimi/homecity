import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header"
import Menu from "../menu/Menu"
import Footer from "../footer/Footer"
import { Banner, LivePrice } from "../components";

const MainLayout = () => {

  return (
    <div className="scroll-smooth">
      <Header />
      <Menu />
      <Outlet />
      <Banner />
      <Footer />
      <LivePrice />
    </div>

  )
}
export default MainLayout