import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BorderedCard from '../../app/components/card/BorderedCard';

interface Props {
    theme: string,
    textColor: string,
}

const Certificate: React.FC<Props> = ({ theme, textColor }) => {

    const certificates = [
        { id: 5, name: "600-hours Internship Completion", author: "Nutricoach", description: "2021 Mar 15", imageSource: "/images/20210315-Nutricoach.png" },
        { id: 1, name: "React", author: "Zuitt", description: "2021 Sep 11", imageSource: "/images/20200919-Zuit-React.png" },
        { id: 5, name: "Java", author: "Zuitt", description: "2021 Sep 18", imageSource: "/images/20200911-Zuitt-Java.png" },
        { id: 3, name: "Achievement Award - 3rd Top Performer", author: "Zuitt", description: "2020 Sep 03", imageSource: "/images/20200903-Zuitt-Top3.png" },
        { id: 2, name: "Full-stack Web Development Training", author: "Zuitt", description: "2020 Sep 03", imageSource: "/images/20200903-Zuitt.png" },
        { id: 4, name: "SQL", author: "Code with Mosh", description: "2020 Jun 21", imageSource: "/images/20200621-SQL.png" },
        { id: 5, name: "Javascript Basics", author: "Usemy", description: "2018 Oct 01", imageSource: "/images/20181001-JavascriptBasics.png" },
        { id: 5, name: "Javascript Essentials", author: "Udemy", description: "2018 Sep 01", imageSource: "/images/20180901-JavascriptEssentials.png" },
    ]

    const themeClass = `${theme}__secondary`

    return (
        <div className={`${themeClass} padding__top-8 padding__bottom-8`}>
            <Container>
                <div className="mb-5">
                    <p className={`title__huge ${textColor}`}>Certificates</p>
                </div>

                <Row className="align-items-end">
                    {
                        certificates.map(c =>
                            <Col lg={4}>
                                <BorderedCard theme={theme} textColor={textColor} title={c.name} subtitle={c.author} description={c.description} link={c.imageSource} />
                            </Col>
                        )
                    }
                </Row>

            </Container>
        </div>
    );
}

export default Certificate;