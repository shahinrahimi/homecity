import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Outlet } from "react-router-dom";
import { Header, Footer, MenuPanel, BottomNotifier } from "..";
import { Banner } from "../../components";

const MainLayout = () => {

  const { isOpen } = useContext(MenuContext)


  return (
    <>
      <Header />
      <MenuPanel />
      <Outlet />
      <Banner />
      <Footer />
    </>

  )
}
export default MainLayout