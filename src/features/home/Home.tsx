import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./home.scss"

interface Props {
    theme: string,
    textColor: string,
}

const Home: React.FC<Props> = ({ theme, textColor }) => {

    const themeClass = `${theme}-home`;

    return (
        <div className={`${themeClass} home vh-100 w-100 d-flex align-items-center flex-row`}>
            <Container>
                <p className="home__subtitle text-light m-0">Hello there! I am</p>
                <p className="home__title text-light m-0 w-100">Aira Calingasan.</p>
                <p className="home__subtitle text-light">I am an entry-level software engineer based in Pasig CIty, Philippines.</p>
                <Button className='mt-5 py-2' variant="outline-light">Download CV</Button>
            </Container>
        </div>
    );
}

export default Home;