import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Outlet } from "react-router-dom";
import { Header, Footer, MenuPanel, BottomNotifier } from "..";

const MainLayout = () => {

  const { isOpen } = useContext(MenuContext)


  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Header />
      <MenuPanel />
      <Outlet />
      <Footer />
      <BottomNotifier />
    </div>
  )
}
export default MainLayout