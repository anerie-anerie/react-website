import "./portfolio.scss"

/*
export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            here are some projects!
            my fav is called Posture Perfect!
            <a href="https://github.com/anerie-anerie" target="_blank" rel="noopener noreferrer">
            </a>
        </div>

    )
}*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return <div>{message}</div>;
};

export default App;
