import React, {Component} from 'react';

import './Chat.css';

class Chat extends Component {
    
    state={
        msg: "",
        li: [""]
    }

    componentDidMount(){

    }

    saveMsg(e){
        let msg = e.target.value;

        this.setState(state => {
            return({msg});
        })
    }

    sendMsg(e){
        e.preventDefault();        

        this.setState({
            msg: "",
            li: this.state.msg
        });
    }


    render(){

        return (
            <div className="box big-box chat-box">
                <form onSubmit={(e) => this.sendMsg(e)}>
                    <fieldset className="chat-box-fieldset">
                        <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            placeholder="Написать в чат" 
                            name="msg" 
                            autoComplete="none" 
                            value={this.state.msg}
                            onChange={(e) => this.saveMsg(e)}
                            required
                        />
                        <button 
                            type="submit" 
                            className="send-msg"
                        ><i className="far fa-envelope"></i></button>
                    </fieldset>
                </form>
                <ul className="chat-field list-group mt-5">
                    {this.state.li[0] !== "" && <li className="chat-field-msg">{this.state.li}</li>}
                </ul>
            </div>
        )
    }
}

export default Chat;
