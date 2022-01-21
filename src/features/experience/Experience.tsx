import React from 'react';
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./experience.scss"

import Certificate from '../certificate/Certificate';
import BorderedCard from '../../app/components/card/BorderedCard';

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

    // const renderCard = (title: string, subtitle: string, description: string, link: string) => {
    //     return (
    //         <Card className={`${themeCardClass} card mb-3 border`} >
    //             <Card.Body className="py-4">
    //                 <Card.Title className={textColor}>{title}</Card.Title>
    //                 <Card.Text className={textColor}>{subtitle}</Card.Text>
    //                 <Card.Text className={textColor}>{description}</Card.Text>
    //                 {
    //                     link ? <Card.Text className="text-light">
    //                         <FontAwesomeIcon className="me-3" color='#fff' icon={faExternalLinkAlt} />
    //                         View Certificate
    //                     </Card.Text> : <></>
    //                 }
    //             </Card.Body>
    //         </Card>
    //     )
    // }

    const themeClass = `${theme}-experience`

    return (
        <>
            <div className={`${themeClass} experience m-0`}>
                <Container>
                    <div className="mb-5">
                        <p className={`experience__title ${textColor}`}>Experience</p>
                    </div>

                    {experiences.map(e =>
                        <div className="d-flex justify-content-center pb-5">
                            <div className="w-50">
                                <h1 className={`${themeClass}__card-title`}>{e.year}</h1>
                                {e.works.map(w => <BorderedCard theme={theme} textColor={textColor} title={w.title} subtitle={w.companyName} description={w.description} link={w.link} />)}
                            </div>
                        </div>
                    )}
                </Container>
            </div >

            <Certificate theme={theme} textColor={textColor} />
        </>

    );
}

export default Experience;
