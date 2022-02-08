import React, { useMemo, useState } from 'react';
import About from '../../features/about/About';
import Contact from '../../features/contact/Contact';
import Experience from '../../features/experience/Experience';
import Home from '../../features/home/Home';
import Project from '../../features/projects/Project';
import Footer from '../components/footer/Footer';
import NavMenu from '../components/navMenu/NavMenu';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])
  const textColor = useMemo(() => isDarkMode ? "text-light" : "", [isDarkMode])

  return (
    <div >
      <NavMenu isDarkMode={isDarkMode} handleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Home theme={theme} />
      <About theme={theme} />
      <Experience theme={theme} />
      <Project theme={theme} />
      <Contact theme={theme} />
      <Footer />
    </div>
  );
}

export default App;

{/* <>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} /> */}
{/* <Route path="/experience" element={<Experience />} />
<Route path="/project" element={<Project />} />
<Route path="/contact" element={<Contact />} /> */}
// </>