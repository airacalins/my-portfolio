import React, { useMemo, useState } from 'react';
import "./navMenu.scss"
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface Props {
    handleDarkMode: () => void,
    isDarkMode: boolean
}

const NavMenu: React.FC<Props> = ({ isDarkMode, handleDarkMode }) => {

    const theme = useMemo(() => isDarkMode ? "dark__mode" : "light__mode", [isDarkMode])

    return (
        <Navbar className={`nav-menu ${theme} p-0 py-5`} expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-menu__list">
                    <Nav.Link className="nav-menu__item" href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-menu__item" href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="nav-menu__item" href="#skills">Skills</Nav.Link>
                    <Nav.Link className="nav-menu__item" href="#experience">Experience</Nav.Link>
                    <Nav.Link className="nav-menu__item" href="#contact">Contact</Nav.Link>
                    <Nav.Link className="nav-menu__icon" href="#contact" onClick={handleDarkMode}>
                        {isDarkMode ? <FontAwesomeIcon className='nav-menu__icon' icon={faSun} /> : <FontAwesomeIcon className='nav-menu__icon' icon={faMoon} />}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavMenu;