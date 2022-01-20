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
        { id: 1, name: "REACT-NATIVE", logo: faReact },
        { id: 2, name: "REACT", logo: faReact },
        { id: 3, name: "JAVASCRIPT", logo: faJs },
        { id: 4, name: "TYPESCRIPT" },
        { id: 5, name: "GIT", logo: faGit },
        { id: 6, name: "FIGMA", logo: faFigma },
        { id: 7, name: "JIRA", logo: faJira },
        { id: 8, name: "BOOTSTRAP", logo: faBootstrap },
        { id: 9, name: "SEMANTIC UI" },
        { id: 10, name: "SASS", logo: faSass },
        { id: 11, name: "HTML", logo: faHtml5 },
        { id: 11, name: "CSS", logo: faCss3Alt },
    ])

    return (
        <div className={`about about${theme}  vh-100`}>
            <Container>
                <div className="mb-5">
                    <p className={`about__title ${textColor}`}>About</p>
                    <p className={`about__description ${textColor}`}>I am an entry-level software engineer based in Pasig, Philippines. I make mobile applications during my free time and I enjoy building web applications using React. </p>
                </div>

                <Row className="py-5">
                    <Col lg={5}>
                        <div>
                            <h1 className={`${textColor} my-3`}>Social Links</h1>
                            {
                                socialLinks.map(s =>
                                    <div className='d-flex align-items-center py-2'>
                                        <FontAwesomeIcon color='#fff' icon={faExternalLinkAlt} />
                                        <h5 className={`${textColor} m-0 ms-2`}>{s.name}</h5>
                                    </div>
                                )
                            }
                        </div>
                    </Col>

                    <Col lg={7}>
                        <div>
                            <h1 className={`${textColor} my-3`}>Technology Stack</h1>
                            <Row>
                                {
                                    techStacks.map(t =>
                                        <Col className="my-2" lg={3} md>
                                            <Button className="w-100" variant="outline-light">
                                                <FontAwesomeIcon className='me-3' color='#fff' icon={t.logo as IconProp} />{t.name}
                                            </Button>
                                        </Col>
                                    )
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div >
    );
}

export default About;