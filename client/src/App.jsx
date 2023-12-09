import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { 
  Home,
  FranchisesPage,
  FranchisePage,
  ProjectsListPage,
  ProjectPage,
  BlogsPage,
  BlogPage,
  NotFound, 
  ContactUs, 
  About
} from "./pages"

import {
  Dashabord,
  LoginPage,
  RegisterPage,
  RequiredAuth,
  TagList,
  FacilitiesList,

  BlogList,
  BlogPreview,
  EditBlog,
  NewBlog,

  ProjectList,
  ProjectPreview,
  EditProject,
  NewProject,

  Franchise,
  
  
} from "./pages/admin"

// const Home = React.lazy(() => import ('./pages/home/Home'))

// Providers and Helmet CEO
import Providers from './provider/Providers'
// layout
import { MainLayout, AdminLayout, Prefetch } from './global'

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
          
          {/* prefetch */}
          <Route element={<Prefetch />}>
            {/* public */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />

              {/* realestates */}
              <Route path="projects">
                <Route index element={<ProjectsListPage />} />
                <Route path=":id" element={<ProjectPage />} />
              </Route>

              {/* franchises */}
              <Route path="franchises" >
                <Route index element={<FranchisesPage />} />
                <Route path=":id" element={<FranchisePage />} />
              </Route>
              
              {/* blogs */}
              <Route path="blogs" >
                <Route index element={<BlogsPage />} />
                <Route path=":id" element={<BlogPage />} />
              </Route>
              {/* etc */}
              <Route path="contactus" element={<ContactUs />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />} >
              <Route index element={<LoginPage/>} />
              <Route path="register" element={<RegisterPage />} />
            { /* private */}
              <Route element={<RequiredAuth />}>
                
                <Route path="dash" element={<Dashabord />} />
                {/* tag */}
                <Route path="tag" element={<TagList />} />
                <Route path="facility" element={<FacilitiesList />} />
                
                {/* blog */}
                <Route path="blog">
                  <Route index element={<BlogList />} />
                  <Route path="new" element={<NewBlog />} />
                  <Route path=":id" element={<BlogPreview />} />
                  <Route path="edit/:id" element={<EditBlog />} />
                </Route>

                {/* project */}
                <Route path="project">
                  <Route index element={<ProjectList />} />
                  <Route path="new" element={<NewProject />} />
                  <Route path=":id" element={<ProjectPreview />} />
                  <Route path="edit/:id" element={<EditProject />} />
                </Route>

                {/* franchise */}
                <Route path="franchise" element={<Franchise />} />
                {/* realestate */}
              </Route>
              
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />

          

        </Routes>
      </Router>
    </Providers>
  )
}

export default App
