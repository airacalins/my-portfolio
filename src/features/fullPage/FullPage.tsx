import React, { useContext, useMemo, useState } from 'react';
import Footer from '../../app/components/footer/Footer';
import NavMenu from '../../app/components/navMenu/NavMenu';
import { ThemeContext } from '../../app/layouts/App';
import About from '../about/About';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';
import Home from '../home/Home';
import Project from '../projects/Project';

const FullPage = ({ }) => {

    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

    return (
        <div>
            {/* <NavMenu isDarkMode={isDarkMode} handleDarkMode={() => setIsDarkMode(!isDarkMode)} /> */}
            <Home />
            <About />
            <Experience />
            <Project />
            <Contact />
            {/* <Footer /> */}
        </div>
    );
}

export default FullPage;