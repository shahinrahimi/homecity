import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Outlet } from "react-router-dom";
import { Header, Footer, MenuPanel, BottomNotifier } from "..";
import { Banner, LivePrice } from "../../components";
import io from "socket.io-client"

const MainLayout = () => {

  const { isOpen } = useContext(MenuContext)

  const socket = io()

    socket.on('connect', () => {
      console.log('Connected to Socket.io');
    });

    socket.on('live prices signal', (msg) => {
      console.log(msg)
    });



  return (
    <div className="scroll-smooth">
      <Header />
      <MenuPanel />
      <Outlet />
      <Banner />
      <Footer />
      <LivePrice />
    </div>

  )
}
export default MainLayout