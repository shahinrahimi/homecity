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
  BlogList,
  BlogPreview,
  EditBlog,
  NewBlog,
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
              {/* blog */}
              <Route path="blog">
                <Route index element={<BlogList />} />
                <Route path="new" element={<NewBlog />} />
                <Route path=":id" element={<BlogPreview />} />
                <Route path="edit/:id" element={<EditBlog />} />
              </Route>
              {/* franchise */}
              <Route path="franchise" element={<Franchise />} />
              {/* realestate */}
              <Route path="realestate" element={<Realestate />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </Router>
    </Providers>
  )
}

export default App
