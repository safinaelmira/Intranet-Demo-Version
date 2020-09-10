import React from 'react';
import AutorizationFormField from '../AutorizationFormField';

import './AutorizationPage.css';

function AutorizationPage() {
    return (
        <div className="autorization-page">
            <div className="container">
                <div className="sticky-logo">Школа</div>
                <AutorizationFormField/>
            </div>
        </div>
    )
}

export default AutorizationPage;
