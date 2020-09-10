import React, { Component } from 'react';
import Checkbox from '../../Checkbox';
import {Link} from 'react-router-dom';

import './EnterForm.css';

export default class EnterForm extends Component{

   constructor(props){
       super(props);
       this.state = {
            user: {
                login: "", 
                password: ""
            },
            checked: false
        }
       this.userSave = this.userSave.bind(this);
   }

    componentDidMount(){
        if(localStorage.getItem('school-user')){
            
            let user = JSON.parse(localStorage.getItem('school-user'));

            this.setState(state => {
                let a = this.state.checked;

                return({
                    user: {
                        login: user.login,
                        password: user.password
                    },
                    checked: !a
                });
            });
        }
    }

    userLoginSave(e){
        let target = e.target.value;
        let a = this.state.user;

        this.setState((state) => {
            return({
                user: {...a, login: target}
            });
        });
    }

    userPasswordSave(e){
        let target = e.target.value;
        let a = this.state.user;

        this.setState((state) => {
            return({
                user: {...a, password: target}
            });
        });
    }

    entertoPC(e){
        e.preventDefault();
        console.log(this.state.user);
    }

    userSave(e){
        let user = JSON.stringify(this.state.user);
        if(e.target.checked){
            localStorage.setItem('school-user', user);
            this.setState({
                checked: !this.state.checked
            })
        } else{
            localStorage.clear();
            this.setState({
                checked: !this.state.checked
            })
        }
    }

    render(){
        return(
            <form className="enter-form" onSubmit={(e) => this.entertoPC(e)}>
                <fieldset>
                    <legend>Введите имя и пароль</legend>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Имя" 
                        name="login" 
                        autoComplete="none" 
                        required
                        onChange={(e)=>this.userLoginSave(e)}
                        value={this.state.user.login}
                    />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Пароль" 
                        name="password" 
                        autoComplete="none" 
                        required
                        onChange={(e)=>this.userPasswordSave(e)}
                        value={this.state.user.password}
                    />
                </fieldset>
                <fieldset>
                    <Checkbox 
                        name={'save-user'}
                        userSave={this.userSave}
                        checked={this.state.checked}
                    />
                    <a href="google.com">Мы забыли свой пароль</a>
                </fieldset>
                {this.state.user.login === "" || this.state.user.password === "" 
                
                ? <button 
                        type="submit" 
                        className="btn blue-btn"
                    >Войти</button> 

                : <Link to="/personal-cabinet">
                    <button 
                        type="submit" 
                        className="btn blue-btn"
                    >Войти</button>
                </Link>}
            </form>
        )
    }
}