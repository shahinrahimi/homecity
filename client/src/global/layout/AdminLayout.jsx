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
      <div className="bg-white w-screen min-h-screen">
        <div className="container w-full mx-auto relative top-20">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminLayout