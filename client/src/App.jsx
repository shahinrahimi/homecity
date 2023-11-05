import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, NotFound, Franchises, Projects, ContactUs, About, HomeSnap } from "./pages"

// Providers and Helmet CEO
import Providers from './provider/Providers'
// layout
import { MainLayout } from './global'

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

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="snap" element={<HomeSnap />} />
            <Route path="projects" element={<Projects />} />
            <Route path="franchises" element={<Franchises />} />
            <Route path="contacts" element={<ContactUs />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Providers>
  )
}

export default App
