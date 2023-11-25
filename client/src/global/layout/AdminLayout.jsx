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
      <div className="bg-white w-screen min-h-screen pt-32 pb-20">
        <div className="container w-full mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminLayout