import React from 'react';
import {Link} from 'react-router-dom';

import './BigBox.css';

function BigBox(props) {
    return (
        <Link to={`/personal-cabinet/${props.path}`}>
            <div className="box logo-box big-box">
                <i className={`fas ${props.icon}`}/>
                <div>{props.text}</div>
            </div>
        </Link>
    )
}

export default BigBox;
