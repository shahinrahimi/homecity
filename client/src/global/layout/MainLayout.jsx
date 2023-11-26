import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header"
import Menu from "../menu/Menu"
import Footer from "../footer/Footer"
import { Banner } from "../components";
import BotomMenu from "../menu/BotomMenu";
import SocialMenu from "../menu/SocialMenu";
const MainLayout = () => {

  return (
    <div className="scroll-smooth">
      {/* for scrolling to top */}
      <div id="index"></div>
      <Header />
      <Menu />
      <Outlet />
      <Banner />
      <Footer />
      <BotomMenu />
      <SocialMenu />
    </div>

  )
}
export default MainLayout