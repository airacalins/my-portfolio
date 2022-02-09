import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../../features/about/About';
import Contact from '../../features/contact/Contact';
import Experience from '../../features/experience/Experience';

import FullPage from '../../features/fullPage/FullPage';
import Project from '../../features/projects/Project';
import Footer from '../components/footer/Footer';
import NavMenu from '../components/navMenu/NavMenu';
import './variables.scss'

export const ThemeContext = React.createContext({} as any);

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <NavMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/my-portfolio" element={<FullPage />} />
          <Route path="/my-portfolio/about" element={<About />} />
          <Route path="/my-portfolio/experience" element={<Experience />} />
          <Route path="/my-portfolio/project" element={<Project />} />
          <Route path="/my-portfolio/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </ThemeContext.Provider >
  );
}

export default App;