import React, { useContext, useMemo } from 'react';
import { ThemeContext } from '../../app/layouts/App';
import { Container } from "react-bootstrap";

import Certificate from '../certificate/Certificate';
import BorderedCard from '../../app/components/card/BorderedCard';

interface Props { }

const Experience: React.FC<Props> = ({ }) => {

    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

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
                { id: 1, title: "Internship", companyName: "Nutricoach Inc.", description: "Test application features and check if it follows the applications functionality stated in the task tracking system.", link: "/images/20210315-Nutricoach.png" },
            ]
        },
        {
            id: 3,
            year: 2019,
            works: [
                { id: 1, title: "Bootcamp", companyName: "Zuitt Bootcamp", description: "A short course covering the implementation of continuous integration, delivery and deployment for applications using Gitlab and Heroku.", link: "/images/20200903-Zuitt.png" },
            ]
        },
    ]

    const themeClass = `${theme}__secondary`
    const textColor = theme === "dark" ? "text-light" : "text-dark";

    return (
        <div className={`${themeClass} padding__top-8`}>
            <div>
                <Container>
                    <div className="mb-5">
                        <p className={`title__huge ${textColor}`}>Experience</p>
                    </div>

                    {experiences.map(e =>
                        <div className="d-flex justify-content-center pb-5">
                            <div className="w-50">
                                <h1 className="text__grey title__huge">{e.year}</h1>
                                {e.works.map(w =>
                                    <BorderedCard
                                        theme={theme}
                                        textColor={textColor}
                                        title={w.title}
                                        subtitle={w.companyName}
                                        description={w.description}
                                        link={w.link}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </Container>
            </div >

            <Certificate theme={theme} textColor={textColor} />
        </div>

    );
}

export default Experience;
