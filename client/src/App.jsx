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
  Home as AdminHome,
  Franchise,
  Realestate,
  Blog
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
            {/* not found handler */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* private */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path='blog' element={<Blog />} />
            <Route path='franchise' element={<Franchise />} />
            <Route path='realestate' element={<Realestate />} />
          </Route>

        </Routes>
      </Router>
    </Providers>
  )
}

export default App
