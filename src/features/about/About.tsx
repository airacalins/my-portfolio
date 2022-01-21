import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3Alt, faFigma, faGit, faHtml5, faJira, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import "./about.scss"

interface Props {
    theme: string,
    textColor: string,
}

const About: React.FC<Props> = ({ theme, textColor }) => {

    const [socialLinks, setSociallLinks] = useState([
        { id: 1, name: "Instagram", link: "" },
        { id: 2, name: "Facebook", link: "" },
        { id: 3, name: "GitHub", link: "" },
        { id: 4, name: "LinkedIn", link: "" }
    ])

    const [techStacks, setTechStacks] = useState([
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
    ])

    const renderSocialLinks = (name: string, link: string) => {
        return (
            <div className='d-flex align-items-center py-2'>
                <FontAwesomeIcon color='#fff' icon={faExternalLinkAlt} />
                <h5 className={`${textColor} m-0 ms-2`}>{name}</h5>
            </div>
        )
    }

    const renderTechStack = (icon: IconProp, name: string) => {
        return (
            <Col className="my-2" lg={3} md>
                <Button className="w-100" variant={theme === "dark" ? "outline-light" : "outline-dark"}>
                    <FontAwesomeIcon className={`${textColor} me-3`} icon={icon} />{name}
                </Button >
            </Col>
        )
    }

    const themeClass = `${theme}-about`;

    return (
        <div className={`${themeClass} about`}>
            <Container>
                <div className="mb-5">
                    <p className={`about__title ${textColor}`}>About</p>
                    <p className={`about__description ${textColor}`}>I am an entry-level software engineer based in Pasig, Philippines. I make mobile applications during my free time and I enjoy building web applications using React. </p>
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
        </div >
    );
}

export default About;