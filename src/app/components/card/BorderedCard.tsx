import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from "react-bootstrap";
import "./borderedCard.scss"


import React from 'react';

interface Props {
    theme: string,
    textColor: string,
    title: string,
    subtitle: string,
    description: string,
    link: string
}

const BorderedCard: React.FC<Props> = ({ theme, textColor, title, subtitle, description, link }) => {

    const themeClass = `${theme}-card`

    return (
        <Card className={`${themeClass} card mb-3`} >
            <Card.Body className="py-4">
                <Card.Title className={textColor}>{title}</Card.Title>
                <Card.Text className={textColor}>{subtitle}</Card.Text>
                <Card.Text className={textColor}>{description}</Card.Text>
                {
                    link ? <Card.Text className={textColor}>
                        <FontAwesomeIcon className="me-3" icon={faExternalLinkAlt} />
                        View Certificate
                    </Card.Text> : <></>
                }
            </Card.Body>
        </Card>
    )
}

export default BorderedCard;