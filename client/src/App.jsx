import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { 
  Home, 
  NotFound, 
  Franchises, 
  Projects, 
  ContactUs, 
  About 
} from "./pages"

import {
  Dashabord,
  Franchise,
  Realestate,
  Blog,
  LoginPage,
  RegisterPage,
  RequiredAuth
} from "./pages/admin"

// Providers and Helmet CEO
import Providers from './provider/Providers'
// layout
import { MainLayout, AdminLayout } from './global'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

function App() {

  React.useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  return (
    <Providers>
      <Router>
        <Routes>
          {/* public */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="franchises" element={<Franchises />} />
            <Route path="contacts" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          
          <Route path="/admin" element={<AdminLayout />} >
            <Route index element={<LoginPage/>} />
            <Route path="register" element={<RegisterPage />} />
            {/* private */}
            <Route element={<RequiredAuth />}>
              <Route path="dash" element={<Dashabord />} />
              <Route path='blog' element={<Blog />} />
              <Route path='franchise' element={<Franchise />} />
              <Route path='realestate' element={<Realestate />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* <Route element={<RequiredAuth />}>
            <Route path='/admin' element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="login" element={<LoginPage/>} />
              <Route path="register" element={<RegisterPage />} />
              <Route path='blog' element={<Blog />} />
              <Route path='franchise' element={<Franchise />} />
              <Route path='realestate' element={<Realestate />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route> */}

        </Routes>
      </Router>
    </Providers>
  )
}

export default App
