import React, { useContext, useMemo } from 'react';
import { ThemeContext } from '../../app/layouts/App';
import { Container } from 'react-bootstrap';

const Contact = () => {

    const [isDarkMode] = useContext(ThemeContext);
    const theme = useMemo(() => isDarkMode ? "dark" : "light", [isDarkMode])

    const themeClass = `${theme}__secondary`
    const textColor = theme === "dark" ? "text-light" : "text-dark";

    return (
        <div className={`${themeClass} padding__top-12 vh-100`}>
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