import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer border-top bg-dark py-3'>
            <Container className='footer__container d-flex justify-content-between align-items-center'>
                <p className='text-light m-0'>Aira Galias</p>
                <div className='d-flex'>
                    <Nav.Link className='p-0 me-3' href="https://github.com/airacalins" target="_blank">
                        <FontAwesomeIcon className="text-light" icon={faGithub} />
                    </Nav.Link>

                    <Nav.Link className='p-0 me-3' href="https://www.linkedin.com/in/aira-galias-4264481a8/" target="_blank">
                        <FontAwesomeIcon className="text-light" icon={faLinkedin} />
                    </Nav.Link>
                </div>
            </Container >
        </div>

    );
}

export default Footer;