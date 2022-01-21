import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import "./project.scss"
import projectImage from "./project-1.jpg"

interface Props {
    theme: string,
    textColor: string,
}

const Project: React.FC<Props> = ({ theme, textColor }) => {

    const themeClass = `${theme}-project`

    return (
        <div className={`${themeClass} m-0`}>
            <Container className='project'>
                <div className="mb-5">
                    <p className={`project__title ${textColor}`}>Featured Projects</p>
                </div>

                <Row>
                    <Col lg={6} >
                        <Card className="bordered rounded w-100" bg="dark" >
                            <Card.Img variant="top" src={projectImage} />
                            <Card.Body className="card__body">
                                <Card.Title className="text-light">POS Mobile</Card.Title>
                                <Card.Text className="text-light">Point of Sale mobile application which helps business owners to track their products as well as their business finances.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Project;
