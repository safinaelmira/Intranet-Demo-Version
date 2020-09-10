import React from 'react';
import EnterForm from '../EnterForm';
import LogoNTitle from '../../LogoNTitle';

import './AutorizationFormField.css';

function AutorizationFormField() {
    return (
        <div className="autorization-form-field col-xl-5 col-lg-6 col-md-7 col-sm-12 m-auto">
            <LogoNTitle/>
            <EnterForm/>
        </div>
    )
}

export default AutorizationFormField;
