import React, { useMemo } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./navMenu.scss"

interface Props {
    handleDarkMode: () => void,
    isDarkMode: boolean,
}

const NavMenu: React.FC<Props> = ({ isDarkMode, handleDarkMode }) => {

    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])
    const textColor = useMemo(() => isDarkMode ? "text-light" : "text-dark", [isDarkMode])

    const themeClass = `${theme}-navbar`;

    return (
        <Navbar className={`${themeClass} navbar py-5`} expand="lg" fixed='top'>
            <Container>

                < Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navbar__text text-light pe-3" href="#home">HOME</Nav.Link>
                        <Nav.Link className="navbar__text text-light pe-3" href="#link">ABOUT</Nav.Link>
                        <Nav.Link className="navbar__text text-light pe-3" href="#link">EXPERIENCE</Nav.Link>
                        <Nav.Link className="navbar__text text-light pe-3" href="#link">PROJECTS</Nav.Link>
                        <Nav.Link className="navbar__text text-light pe-3" href="#link">CONTACTS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div>
                    <FontAwesomeIcon className="text-light ms-3" icon={faLinkedin} />
                    <FontAwesomeIcon className="text-light ms-3" icon={faGithub} />
                    <FontAwesomeIcon onClick={handleDarkMode} className="text-light ms-3" icon={isDarkMode ? faSun : faMoon} />
                </div>
            </Container >
        </Navbar >
    );
}

export default NavMenu;