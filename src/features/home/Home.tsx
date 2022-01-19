import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./home.scss"
import { faCoffee, faMoon } from '@fortawesome/free-solid-svg-icons'


interface Props {
    isDarkMode: boolean
}

const Home: React.FC<Props> = ({ isDarkMode }) => {

    const theme = useMemo(() => isDarkMode ? "dark-mode" : "light-mode", [isDarkMode])

    return (
        <>
            <Row className={`home ${theme} align-items-center`} >
                <Col className="w-50">
                    <Container className="home__container m-0 w-50">
                        <p className='home__desc'>Hello there! I am</p>

                        <h1 className='home__title pb-3'>Aira Calingasan.</h1>

                        <p className='home__desc'>An entry-level software engineer based in Pasig, Philippines.
                            I make mobile applications during my free time and I enjoy building web
                            applications using React.
                        </p>

                        <div className='home__button my-5'>
                            <Button variant="secondary">Get in touch</Button>
                            <Button className="mx-3 home__button__resume" variant="warning">Resume</Button>
                        </div>
                    </Container>
                </Col>
            </Row>;
        </>

    );
}

export default Home;