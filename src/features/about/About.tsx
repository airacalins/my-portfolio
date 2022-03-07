import React, { useContext, useMemo } from 'react';
import { ThemeContext } from '../../app/layouts/App';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3Alt, faFigma, faGit, faHtml5, faJira, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';

const About = () => {

    const [isDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

    const socialLinks = [
        { id: 3, name: "GitHub", link: "https://github.com/airacalins" },
        { id: 4, name: "LinkedIn", link: "https://www.linkedin.com/in/aira-calingasan-b40852233/" }
    ]

    const techStacks = [
        { id: 1, name: "REACT-NATIVE", icon: faReact },
        { id: 2, name: "REACT", icon: faReact },
        { id: 3, name: "JAVASCRIPT", icon: faJs },
        { id: 4, name: "TYPESCRIPT" },
        { id: 5, name: "GIT", icon: faGit },
        { id: 6, name: "FIGMA", icon: faFigma },
        { id: 7, name: "JIRA", icon: faJira },
        { id: 8, name: "BOOTSTRAP", icon: faBootstrap },
        { id: 9, name: "SEMANTIC UI" },
        { id: 10, name: "SASS", icon: faSass },
        { id: 11, name: "HTML", icon: faHtml5 },
        { id: 11, name: "CSS", icon: faCss3Alt },
    ]

    const textColor = theme === "dark" ? "text-light" : "text-dark";

    const renderSocialLinks = (name: string, link: string) => {
        return (
            <a href={link} target="_blank" className='text__no-decoration d-flex align-items-center py-2'>
                <FontAwesomeIcon className={textColor} icon={faExternalLinkAlt} />
                <h5 className={`${textColor} m-0 ms-2`}>{name}</h5>
            </a>
        )
    }

    const renderTechStack = (icon: IconProp, name: string) => {
        return (
            <Col className="my-2" lg={3} md>
                <div className={`align-items-center d-flex w-100 border p-2 rounded ${theme === "light" ? "border-dark" : ""}`}>
                    <FontAwesomeIcon className={`${textColor} me-2`} icon={icon} />
                    <p className={`${textColor} m-0`}>{name}</p>
                </div>
            </Col>
        )
    }

    const themeClass = `${theme}__primary`;

    return (
        <div className={`${themeClass} padding__top-3  min-vh-100`}>
            <Container>
                <div className="mb-5">
                    <p className={`title__huge ${textColor}`}>About</p>
                    <h2 className={textColor}>I am an entry-level software engineer based in Pasig, Philippines. I make mobile applications during my free time and I enjoy building web applications using React. </h2>
                </div>

                <Row className="py-5">
                    <Col className="mb-5" lg={5}>
                        <h1 className={`${textColor} my-3`}>Social Links</h1>
                        {socialLinks.map(s => renderSocialLinks(s.name, s.link))}
                    </Col>

                    <Col className="mb-5" lg={7}>
                        <h1 className={`${textColor} my-3`}>Technology Stack</h1>
                        <Row>{techStacks.map(t => renderTechStack(t.icon as IconProp, t.name))}</Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;