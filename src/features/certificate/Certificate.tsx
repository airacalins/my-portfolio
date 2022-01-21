import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import BorderedCard from '../../app/components/card/BorderedCard';
import "./certificate.scss"

interface Props {
    theme: string,
    textColor: string,
}

const certificates = [
    { id: 1, name: "", author: "", description: "", imageSource: "" }
]

const Certificate: React.FC<Props> = ({ theme, textColor }) => {

    const [certificate, setCertificates] = useState(
        { id: 1, title: "React", description: "Mosh Hamedani", links: "" }
    )

    const themeClass = `${theme}-certificate`

    return (
        <div className={`${themeClass} pb-5`}>
            <Container>
                <div className="mb-5">
                    <p className={`certificate__title ${textColor}`}>Certificates</p>
                </div>

                <Row>
                    <Col lg={6}>
                        <BorderedCard theme={theme} textColor={textColor} title="React Native" subtitle="by Mosh Hamedani" description="bla bla" link="a" />
                    </Col>

                    <Col lg={6}>
                        <BorderedCard theme={theme} textColor={textColor} title="React Native" subtitle="by Mosh Hamedani" description="bla bla" link="a" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Certificate;