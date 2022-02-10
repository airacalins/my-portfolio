import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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
      <HashRouter>
        <Routes>
          <Route path="/" element={<FullPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>

      <Footer />
    </ThemeContext.Provider >
  );
}

export default App;