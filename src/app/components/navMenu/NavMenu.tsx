import React, { useContext, useMemo } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../../layouts/App';

const NavMenu = ({ }) => {

    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

    const themeClass = `navbar__${theme}`;

    return (
        <Navbar className={`${themeClass} py-4`} expand="lg" fixed='top'>
            <Container>

                < Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-light pe-3" href="/">HOME</Nav.Link>
                        <Nav.Link className="text-light pe-3" href="/about">ABOUT</Nav.Link>
                        <Nav.Link className="text-light pe-3" href="/experience">EXPERIENCE</Nav.Link>
                        <Nav.Link className="text-light pe-3" href="/project">PROJECTS</Nav.Link>
                        <Nav.Link className="text-light pe-3" href="/contact">CONTACTS</Nav.Link>
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