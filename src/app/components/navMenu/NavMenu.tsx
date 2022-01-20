import React, { useMemo } from 'react';
import "./navMenu.scss"
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLink, faMoon, faSquareFull, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface Props {
    handleDarkMode: () => void,
    isDarkMode: boolean
}

const NavMenu: React.FC<Props> = ({ isDarkMode, handleDarkMode }) => {

    const theme = useMemo(() => isDarkMode ? "dark-mode" : "light-mode", [isDarkMode])

    return (
        <Navbar className="dark-mode navbar py-5" expand="lg" fixed='top'>
            <Container className='navbar__container'>

                <Navbar.Toggle className='navbar__toggle ' aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className='menu' id="basic-navbar-nav">
                    <Nav className="menu__list me-auto">
                        <Nav.Link className="menu__item" href="#home">HOME</Nav.Link>
                        <Nav.Link className="menu__item" href="#link">ABOUT</Nav.Link>
                        <Nav.Link className="menu__item" href="#link">EXPERIENCE</Nav.Link>
                        <Nav.Link className="menu__item" href="#link">PROJECTS</Nav.Link>
                        <Nav.Link className="menu__item" href="#link">CONTACTS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <FontAwesomeIcon className='ms-3' color='#fff' icon={faLinkedin} />
                <FontAwesomeIcon className='ms-3' color='#fff' icon={faGithub} />
                <FontAwesomeIcon className='ms-3' color='#fff' icon={faSun} />
            </Container>
        </Navbar>
    );
}

export default NavMenu;