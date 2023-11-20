import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header"
import Menu from "../menu/Menu"
import Footer from "../footer/Footer"

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="container mx-auto w-screen h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default AdminLayout