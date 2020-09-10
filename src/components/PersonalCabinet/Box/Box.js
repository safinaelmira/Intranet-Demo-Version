import React from 'react';
import {Link} from 'react-router-dom';

function Box(props) {
    return (
        <Link to={props.path}>
            <div className="box">
                {props.text}
            </div>
        </Link>
    )
}

export default Box;
