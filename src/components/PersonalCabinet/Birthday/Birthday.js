import React from 'react';
import './Birthday.css';

function Birthday(props) {
    return (
        <li className="birthday-item">{props.name}</li>
    )
}

export default Birthday
