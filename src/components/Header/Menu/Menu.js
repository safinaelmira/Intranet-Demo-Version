import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.css';

function Menu(props) {
    return (
        <div className={`menu ${props.style}`}>
            <div className="transparent-bg">
                <ul className="list-group">
                    <li className="list-group-item">Опция</li>
                    <li className="list-group-item">Опция</li>
                    <li className="list-group-item">Опция</li>
                    <li className="list-group-item">Опция</li>
                    <li className="list-group-item">Опция</li>
                    <li className="list-group-item">Опция</li>
                    <li className="list-group-item">Опция</li>
                </ul>
                <Link to="/">
                    <button className="btn btn-sm small-blue-btn">Выйти</button>
                </Link>
            </div>
        </div>
    )
}

export default Menu;
