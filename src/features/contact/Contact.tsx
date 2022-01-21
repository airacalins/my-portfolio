import React from 'react';
import { Container } from 'react-bootstrap';
import "./contact.scss"

interface Props {
    theme: string,
    textColor: string,
}


const Contact: React.FC<Props> = ({ theme, textColor }) => {

    const themeClass = `${theme}-contact`

    return (
        <div className={`${themeClass} m-0 vh-100`}>
            <Container className='contact__container'>
                <div className="mb-5">
                    <p className={`contact__title ${textColor}`}>Contact</p>
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