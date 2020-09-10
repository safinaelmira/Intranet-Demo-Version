import React, { Component } from 'react';

import './HelloBox.css';



class HelloBox extends Component{

    state = {
        day: ["Воскресение", 'Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        date: new Date()
    }


    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState((state) => {
                return({
                    date: new Date()
                });
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }


    render(){

        let hours = this.state.date.getHours();
        let minutes = () => {
            if(this.state.date.getMinutes() < 10){
                return( `0${this.state.date.getMinutes()}`);
            } else {
                return this.state.date.getMinutes();
            }
        };
        let day = this.state.day[this.state.date.getDay()];

        
        return (
            <div className="box logo-box big-box hello-box">
                <div>
                    <span>{day}</span>, 
                    <span>{hours}:{minutes()}</span>
                </div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}

export default HelloBox
