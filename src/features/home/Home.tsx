import React, { useContext, useMemo } from 'react';
import { Button, Container } from 'react-bootstrap';
import { ThemeContext } from '../../app/layouts/App';

const Home = () => {

    const [isDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

    const themeClass = `home__${theme}`;

    return (
        <div className={`${themeClass} image__background-full vh-100 w-100 d-flex align-items-center flex-row`}>
            <Container>
                <p className=" letter-spacing__2 text-light m-0">Hello there! I am</p>
                <p className="title__huge letter-spacing__5 text-light m-0 w-100">Aira Calingasan.</p>
                <p className=" letter-spacing__2 text-light">I am an entry-level software engineer based in Pasig CIty, Philippines.</p>
                <a href="/my-portfolio/AiraGalias-Resume.pdf" download>
                    <Button className='button__outline-light mt-5 py-2' variant="outline-light">
                        Download CV
                    </Button>
                </a>
            </Container>
        </div>
    );
}

export default Home;