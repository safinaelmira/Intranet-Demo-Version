import React from 'react';

import './Alert.css';

function Alert(props) {
    return (
        <div className="birthday-box box">
            <div>Сегодня Именинники:</div>
            <ul className="list-group mt-2">
                {props.children}
            </ul>
        </div>
    )
}

export default Alert
