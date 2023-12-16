import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header"
import Menu from "../menu/Menu"
import Footer from "../footer/Footer"
import { Banner } from "../components";
import BotomMenu from "../menu/BotomMenu";
import SocialMenu from "../menu/SocialMenu";
import { LanguageContext } from "../../context/LanguageContext";
const MainLayout = () => {

  const { dir, lang } = React.useContext(LanguageContext)

  return (
    <div className={`scroll-smooth ${lang === "fa" || lang === "ar" ? "vazir" : ""}`} >
      {/* for scrolling to top */}
      <div id="index"></div>
      <Header />
      <Menu />
      <div dir={dir}>
        <Outlet  />
      </div>
      <Banner />
      <Footer />
      <BotomMenu />
      <SocialMenu />
    </div>

  )
}
export default MainLayout