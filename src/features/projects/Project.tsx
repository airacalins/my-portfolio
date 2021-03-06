import React, { useContext, useMemo } from 'react';
import { ThemeContext } from '../../app/layouts/App';
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";
import projectImage from "./project-1.png"

const Project = () => {

    const [isDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

    const themeClass = `${theme}__primary`
    const textColor = theme === "dark" ? "text-light" : "text-dark";

    return (
        <div className={`${themeClass} padding__y-3`}>
            <Container>
                <div className="mb-5">
                    <p className={`title__huge ${textColor}`}>Featured Projects</p>
                </div>

                <NavLink href='https://fast-badlands-66183.herokuapp.com/login' target="_blank">
                    <Row>
                        <Col lg={6} >
                            <Card className="bordered rounded w-100" bg="dark" >
                                <Card.Img variant="top" src={projectImage} />
                                <Card.Body className="card__container">
                                    <Card.Title className="text-light">
                                        Rental Management App
                                    </Card.Title>

                                    <Card.Text className="text-light">
                                        A system with mobile application used to pay by the leesee and posted in web application for approval.
                                    </Card.Text>

                                    <Card.Text className="text-light">
                                        React, Typescript, React-Native, Redux, Bootstrap, SASS, and .NET Core API
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </NavLink>

            </Container>
        </div>
    )
}

export default Project;
