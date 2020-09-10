import React from 'react';
import ErrorBoundry from '../../errors/ErrorBoundry';
import AutorizationPage from '../Authorization/AutorizationPage';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import PersonalCabinetPage from '../PersonalCabinet/PersonalCabinetPage';


function App() {
    return (
        <ErrorBoundry>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <AutorizationPage/>
                    </Route>
                    <Route path="/personal-cabinet/:id?">
                        <PersonalCabinetPage name={'Фаррух'}/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </Router>
            <div className="demo">Дэмо версия</div>
        </ErrorBoundry>
    )
}

export default App
