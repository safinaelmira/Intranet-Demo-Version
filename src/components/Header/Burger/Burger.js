import React from 'react';

import './Burger.css';

function Burger(props) {
    return (
        <div className="burger" onClick={(e) => props.burgetToggle(e)}>
            <div className={!props.active ? 'menu-icon' : 'menu-icon clicked'}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default Burger;
