import React, {Component} from 'react';
import {weatherApi} from '../../../services/weatherApi';

import './Weather.css';

class Weather extends Component {
    state={
        temperature: "",
        description: ""
    }

    componentDidMount(){

        weatherApi().then(res=>{
            this.setState({
                temperature: parseInt(res.main.temp)-273,
                description: res.weather[0].description
            });
        });

    }


    render(){
        return (
            <div className="box weather-box">
                <div>{this.state.temperature}<sup>o</sup> C</div>
                <div>{this.state.description}</div>
            </div>
        )
    }
}

export default Weather;
