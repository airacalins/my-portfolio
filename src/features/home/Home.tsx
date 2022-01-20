import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./home.scss"

interface Props {
    theme: string,
    textColor: string,
}

const Home: React.FC<Props> = ({ theme, textColor }) => {

    return (
        <div className={`${theme} home vh-100 w-100 d-flex align-items-center flex-row`}>
            <Container className="home__container">
                <p className={`home__subtitle ${textColor} m-0`}>Hello there! I am</p>
                <p className={`home__title ${textColor} m-0`}>Aira Calingasan.</p>
                <p className={`home__subtitle ${textColor}`}>I am an entry-level software engineer based in Pasig CIty, Philippines.</p>
                <Button className='mt-5' variant="outline-light">RESUME</Button>
            </Container>
        </div>

    );
}

export default Home;