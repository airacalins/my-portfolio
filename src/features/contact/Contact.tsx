import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {
    theme: string,
}

const Contact: React.FC<Props> = ({ theme }) => {

    const themeClass = `${theme}__secondary`
    const textColor = theme === "dark" ? "text-light" : "text-dark";

    return (
        <div className={`${themeClass} padding__top-8 vh-100`}>
            <Container>
                <div className="mb-5">
                    <p className={`title__huge ${textColor}`}>Contact</p>
                    <div className='my-5'>
                        <h1 className={`${textColor}`}>Get in touch, let's talk!</h1>
                        <h4 className={`${textColor}`}>Feel free to send me a message</h4>
                        <h5 className={`${textColor} mt-5`}>airacalins@gmail.com</h5>
                        <h5 className={`${textColor}`}>(+63) 927-696-0322</h5>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;