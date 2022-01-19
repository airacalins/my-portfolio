import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Home from '../../features/home/Home';
import Portfolio from '../../features/portfolio/Portfolio';
import NavMenu from '../components/navMenu/NavMenu';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={isDarkMode ? "dark__mode" : "light__mode"}>
      <Container>
        <NavMenu isDarkMode={isDarkMode} handleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        {/* <Home isDarkMode={isDarkMode} /> */}
        <Portfolio isDarkMode={isDarkMode} />
      </Container>
    </div>
  );
}

export default App;