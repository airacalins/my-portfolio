import "./experience.scss"

import React, { useState } from 'react';
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
    theme: string,
    textColor: string,
}

const Experience: React.FC<Props> = ({ theme, textColor }) => {

    const experiences = [
        {
            id: 1,
            year: 2022,
            works: [
                { id: 1, title: "Graduation", companyName: "AMA University", description: "Bachelor's Degree in Information Technology", link: "" },
            ]
        },
        {
            id: 2,
            year: 2020,
            works: [
                { id: 1, title: "Internship", companyName: "Nutricoach Inc.", description: "Test application features and check if it follows the applications functionality stated in the task tracking system.", link: "a" },
            ]
        },
        {
            id: 3,
            year: 2019,
            works: [
                { id: 1, title: "Bootcamp", companyName: "Zuitt Bootcamp", description: "A short course covering the implementation of continuous integration, delivery and deployment for applications using Gitlab and Heroku.", link: "a" },
            ]
        },
    ]

    return (
        <>
            <div className={`experience experience${theme} pb-5`}>
                <Container className='experience__container'>

                    <div className="mb-5">
                        <p className={`experience__title ${textColor}`}>Experience</p>
                    </div>

                    {
                        experiences.map(e =>
                            <div className="work d-flex justify-content-center mb-5">
                                <div className="w-50">
                                    <h1 className="work__year m-0">{e.year}</h1>

                                    {
                                        e.works.map(w =>
                                            <Card className="work__container card mb-3 border" >
                                                <Card.Body className="py-4">
                                                    <Card.Title className={textColor}>{w.title}</Card.Title>
                                                    <Card.Text className={textColor}>{w.companyName}</Card.Text>
                                                    <Card.Text className={textColor}>{w.description}</Card.Text>
                                                    {
                                                        w.link ? <Card.Text className="text-light">
                                                            <FontAwesomeIcon className="me-3" color='#fff' icon={faExternalLinkAlt} />
                                                            View Certificate
                                                        </Card.Text> : <></>
                                                    }
                                                </Card.Body>
                                            </Card>)
                                    }

                                </div>
                            </div>
                        )
                    }

                </Container>
            </div >


        </>

    );
}

export default Experience;
