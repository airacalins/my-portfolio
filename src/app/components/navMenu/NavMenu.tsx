import React, { useContext, useEffect, useMemo } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../../layouts/App';
import { useLocation } from 'react-router-dom';

const NavMenu = () => {

    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location])

    const themeClass = `navbar__${theme}`;

    return (
        <Navbar className={`${themeClass} py-4`} expand="lg">
            <Container>

                < Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={`text-light pe-4 ${location.pathname === "/" ? "text__bold" : ""}`} href="/my-portfolio/#">HOME</Nav.Link>
                        <Nav.Link className={`text-light pe-4 ${location.pathname === "/about" ? "text__bold" : ""}`} href="/my-portfolio/#/about">ABOUT</Nav.Link>
                        <Nav.Link className={`text-light pe-4 ${location.pathname === "/experience" ? "text__bold" : ""}`} href="/my-portfolio/#/experience">EXPERIENCE</Nav.Link>
                        <Nav.Link className={`text-light pe-4 ${location.pathname === "/project" ? "text__bold" : ""}`} href="/my-portfolio/#/project">PROJECTS</Nav.Link>
                        <Nav.Link className={`text-light pe-4 ${location.pathname === "/contact" ? "text__bold" : ""}`} href="/my-portfolio/#/contact">CONTACTS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div className='d-flex align-items-center'>
                    <Nav.Link className='p-0 me-3' href="https://github.com/airacalins" target="_blank">
                        <FontAwesomeIcon className="text-light" icon={faGithub} />
                    </Nav.Link>

                    <Nav.Link className='p-0 me-3' href="https://www.linkedin.com/in/aira-galias-4264481a8/" target="_blank">
                        <FontAwesomeIcon className="text-light" icon={faLinkedin} />
                    </Nav.Link>

                    <FontAwesomeIcon onClick={() => setIsDarkMode(!isDarkMode)} className="text-light" icon={isDarkMode ? faSun : faMoon} />
                </div>
            </Container >
        </Navbar >
    );
}

export default NavMenu;