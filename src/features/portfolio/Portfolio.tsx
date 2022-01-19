import React from 'react';

interface Props {
    isDarkMode: boolean
}

const Portfolio: React.FC<Props> = ({ isDarkMode }) => {
    return (
        <h1>Featured Projects</h1>
    );
}

export default Portfolio;