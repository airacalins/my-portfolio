import React from 'react';
import { Button, Container } from 'react-bootstrap';

interface Props {
    theme: string,
}

const Home: React.FC<Props> = ({ theme }) => {

    const themeClass = `home__${theme}`;

    return (
        <div className={`${themeClass} image__background-full vh-100 w-100 d-flex align-items-center flex-row`}>
            <Container>
                <p className=" letter-spacing__2 text-light m-0">Hello there! I am</p>
                <p className="title__huge letter-spacing__5 text-light m-0 w-100">Aira Galias.</p>
                <p className=" letter-spacing__2 text-light">I am an entry-level software engineer based in Pasig CIty, Philippines.</p>
                <a href="/AiraGalias-Resume.pdf" download>
                    <Button className='button__outline-light mt-5 py-2' variant="outline-light">
                        Download
                    </Button>
                </a>
            </Container>
        </div>
    );
}

export default Home;