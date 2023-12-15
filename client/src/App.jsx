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
  MessageList,

  BlogList,
  BlogPreview,
  EditBlog,
  NewBlog,

  ProjectList,
  ProjectPreview,
  EditProject,
  NewProject,

  FranchiseList,
  FranchisePreview,
  EditFranchise,
  NewFranchise,

  
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
          {/* fetch projects and blogs */}
          <Route element={<Prefetch />}>
            {/* public */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />

              {/* projects */}
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

              {/* liveprice */}
              <Route path="liveprice" element={<></>} />

              {/* contact */}
              <Route path="contactus" element={<ContactUs />} />

              {/* about */}
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />} >
              <Route index element={<LoginPage/>} />
              <Route path="register" element={<RegisterPage />} />
            { /* private */}
              <Route element={<RequiredAuth />}>
                
                <Route path="dash" element={<Dashabord />} />
                {/* tags */}
                <Route path="tag" element={<TagList />} />
                {/* facilities */}
                <Route path="facility" element={<FacilitiesList />} />
                {/* messages */}
                <Route path="message" element={<MessageList />} />

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
                <Route path="franchise">
                  <Route index element={<FranchiseList />} />
                  <Route path="new" element={<NewFranchise />} />
                  <Route path=":id" element={<FranchisePreview />} />
                  <Route path="edit/:id" element={<EditFranchise />} />
                </Route>

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
