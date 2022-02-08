import React, { useMemo } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface Props {
    handleDarkMode: () => void,
    isDarkMode: boolean,
}

const NavMenu: React.FC<Props> = ({ isDarkMode, handleDarkMode }) => {

    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])
    const themeClass = `navbar__${theme}`;

    return (
        <Navbar className={`${themeClass} py-4`} expand="lg" fixed='top'>
            <Container>

                < Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-light pe-3" href="/">HOME</Nav.Link>
                        <Nav.Link className="text-light pe-3" href="/link">ABOUT</Nav.Link>
                        <Nav.Link className="text-light pe-3" href="/link">EXPERIENCE</Nav.Link>
                        <Nav.Link className="text-light pe-3" href="/link">PROJECTS</Nav.Link>
                        <Nav.Link className="text-light pe-3" href="/link">CONTACTS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div className='d-flex align-items-center'>
                    <Nav.Link className='p-0 me-3' href="https://github.com/airacalins" target="_blank">
                        <FontAwesomeIcon className="text-light" icon={faGithub} />
                    </Nav.Link>

                    <Nav.Link className='p-0 me-3' href="https://www.linkedin.com/in/aira-galias-4264481a8/" target="_blank">
                        <FontAwesomeIcon className="text-light" icon={faLinkedin} />
                    </Nav.Link>

                    <FontAwesomeIcon onClick={handleDarkMode} className="text-light" icon={isDarkMode ? faSun : faMoon} />
                </div>
            </Container >
        </Navbar >
    );
}

export default NavMenu;