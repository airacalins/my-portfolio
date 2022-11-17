import React, { useContext, useMemo } from 'react';
import { ThemeContext } from '../../app/layouts/App'; import { Col, Container, Row } from 'react-bootstrap';
import BorderedCard from '../../app/components/card/BorderedCard';

const Certificate = () => {
    const [isDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

    const certificates = [
        { id: 1, name: "Javascript Essentials", author: "Udemy", description: "2018 Sep 01", imageSource: "/my-portfolio/images/20180901-JavascriptEssentials.png" },
        { id: 2, name: "Javascript Basics", author: "Udemy", description: "2018 Oct 01", imageSource: "/my-portfolio/images/20181001-JavascriptBasics.png" },
        { id: 3, name: "SQL", author: "Code with Mosh", description: "2020 Jun 21", imageSource: "/my-portfolio/images/20200621-SQL.png" },
        { id: 4, name: "Full-stack Web Development Training", author: "Zuitt", description: "2020 Sep 03", imageSource: "/my-portfolio/images/20200903-Zuitt.png" },
        { id: 5, name: "Achievement Award - 3rd Top Performer", author: "Zuitt", description: "2020 Sep 03", imageSource: "/my-portfolio/images/20200903-Zuitt-Top3.png" },
        { id: 6, name: "Java", author: "Zuitt", description: "2021 Sep 18", imageSource: "/my-portfolio/images/20200911-Zuitt-Java.png" },
        { id: 7, name: "React", author: "Zuitt", description: "2021 Sep 11", imageSource: "/my-portfolio/images/20200919-Zuit-React.png" },
        { id: 8, name: "600-hours Internship Completion", author: "Nutricoach", description: "2021 Mar 15", imageSource: "/my-portfolio/images/20210315-Nutricoach.png" },
        { id: 9, name: "Flutter Training Course", author: "FFUF Manila Inc", description: "2022 Apr 18", imageSource: "/my-portfolio/images/20220418-Flutter.png" },
    ]

    const themeClass = `${theme}__secondary`

    return (
        <div className={`${themeClass} padding__top-3 padding__bottom-8`}>
            <Container>
                <div className="mb-5">
                    <p className={`title__huge ${isDarkMode ? "text-light" : "text-dark"}`}>Certificates</p>
                </div>

                <Row className="align-items-end">
                    {
                        certificates.map(c =>
                            <Col lg={4}>
                                <BorderedCard title={c.name} subtitle={c.author} description={c.description} link={c.imageSource} />
                            </Col>
                        )
                    }
                </Row>

            </Container>
        </div>
    );
}

export default Certificate;