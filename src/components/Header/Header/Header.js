import React, { Component } from 'react';
import Menu from '../Menu';
import Burger from '../Burger';

import './Header.css';

class Header extends Component {

    state = {
        active: false
    }

    burgetToggle = (e) => {
        if(e.target.classList.contains('menu-icon') || e.target.classList.contains('dot')){
            let active = this.state.active;
            this.setState({
                active: !active
            });
        }
    }

    render(){
        return (
            <div className="header">
                <Burger active={this.state.active} burgetToggle={this.burgetToggle}/>
                <Menu style={this.state.active ? 'active' : ""}/>
            </div>
        )
    }
}

export default Header
