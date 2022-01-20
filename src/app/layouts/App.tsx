import React, { useMemo, useState } from 'react';
import About from '../../features/about/About';
import Experience from '../../features/experience/Experience';
import Home from '../../features/home/Home';
import Portfolio from '../../features/portfolio/Portfolio';
import NavMenu from '../components/navMenu/NavMenu';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = useMemo(() => isDarkMode ? "__dark" : "__light", [isDarkMode])
  const textColor = useMemo(() => isDarkMode ? "text-light" : "", [isDarkMode])

  return (
    <div className="vh-100 w-100" >
      <NavMenu isDarkMode={isDarkMode} handleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Home theme={theme} textColor={textColor} />
      <About theme={theme} textColor={textColor} />
      <Experience theme={theme} textColor={textColor} />
      {/* <Portfolio isDarkMode={isDarkMode} /> */}
    </div>
  );
}

export default App;