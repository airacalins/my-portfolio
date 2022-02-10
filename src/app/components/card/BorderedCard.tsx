import React, { useContext } from 'react';
import { ThemeContext } from '../../layouts/App';
import { Card, Nav } from "react-bootstrap";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./borderedCard.scss"

interface Props {
    title: string,
    subtitle: string,
    description: string,
    link: string,
}

const BorderedCard: React.FC<Props> = ({ title, subtitle, description, link }) => {

    const [isDarkMode] = useContext(ThemeContext);
    const textColor = isDarkMode ? "text-light" : "text-dark"

    return (
        <Card className={`${isDarkMode ? "bg__secondary" : "bg__white"} mb-3 rounded border border-white`} >
            <Card.Body className="py-4">
                <Card.Title className={textColor}>{title}</Card.Title>
                <Card.Text className={textColor}>{subtitle}</Card.Text>
                <Card.Text className={textColor}>{description}</Card.Text>
                {
                    link ? <Card.Text className="text-dark">
                        <Nav.Link className="d-flex align-items-center p-0" href={link} target="_blank" >
                            <FontAwesomeIcon className={`${textColor} me-3`} icon={faExternalLinkAlt} />
                            <p className={`${textColor} m-0`} >View Certificate</p>
                        </Nav.Link>
                    </Card.Text> : <></>
                }
            </Card.Body>
        </Card >
    )
}

export default BorderedCard;