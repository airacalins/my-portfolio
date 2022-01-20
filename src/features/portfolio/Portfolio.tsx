import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./portfolio.scss"

interface Props {
    isDarkMode: boolean
}

const Portfolio: React.FC<Props> = ({ isDarkMode }) => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "POS Mobile Application",
            description: "A POS where business can track their products and stocks.",
            image: "https://cdn.pixabay.com/photo/2015/02/04/15/23/nokia-623939_1280.jpg",
            gitHubLink: "",
            link: ""
        },
        {
            id: 2,
            title: "Referral Application",
            description: "A POS where business can track their products and stocks.",
            image: "https://cdn.pixabay.com/photo/2015/02/04/15/23/nokia-623939_1280.jpg",
            gitHubLink: "",
            link: ""
        }
    ])

    return (
        <div className='portfolio '>
            <Container className="portfolio__container px-0">
                <h1 className='portfolio__title'>Featured Projects</h1>

                <Row className="portfolio__card">
                    {
                        projects.map(({ id, title, description, image, gitHubLink, link }) =>
                            <>
                                {/* <Col className="portfolio__card__list m-5" key={id} >
                                    <Card className="portfolio__card__item">
                                        <Card.Img className="portfolio__card__img" src={image} alt="Card image" />
                                        <Card.ImgOverlay className="portfolio__card__overlays">
                                            <Card.Title className="portfolio__card__title p-2 rounded">{title}</Card.Title>
                                            <Card.Text className="portfolio__card__desc">{description}</Card.Text>
                                            <Card.Text>{gitHubLink} - {link}</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col> */}

                                <Col className="portfolio__card__list m-5" key={id} >
                                    <div className="portfolio__card__item">
                                        <img className="portfolio__card__img" src={image} alt="Card image" />
                                        <div className="portfolio__card__overlay">
                                            <Card.Title className="portfolio__card__title p-2 rounded">{title}</Card.Title>
                                            <Card.Text className="portfolio__card__desc">{description}</Card.Text>
                                            <Card.Text>{gitHubLink} - {link}</Card.Text>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    }

                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;