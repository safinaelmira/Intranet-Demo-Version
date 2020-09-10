import React from 'react';
import {Link} from 'react-router-dom';

import './LogoBox.css';

function LogoBox(props) {
    return (
        <Link to={`/personal-cabinet/${props.path}`}>
            <div className="box logo-box">
                <i className={`fas ${props.icon}`}/>
                <div>{props.text}</div>
            </div>
        </Link>
    )
}

export default LogoBox;
