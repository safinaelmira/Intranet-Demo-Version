import React, {Component} from 'react';
import MessageInChat from '../MessageInChat';

import './Chat.css';

class Chat extends Component {
    
    state={
        show: false,
        msg: "",
        li: []
    }

    componentDidMount(){

    }

    saveMsg(e){
        let msg = e.target.value;

        this.setState(state => {
            return({msg});
        });
    }

    sendMsg(e){
        e.preventDefault();        

        this.setState(state => {
            return({
                show: true, 
                msg: "",
                li: [...this.state.li, this.state.msg]
            });
        });

        console.log(this.state);
    }


    render(){

        const mymsg = this.state.li.map((msg,index) => <div className="msg-block" key={`msg#${index}`}>
                                                            <div className="chat-field-msg">{msg}</div>
                                                            <figure>
                                                                <img src={this.props.iamuser.photo} alt="child" className="child-photo"/>
                                                                <figcaption>{this.props.iamuser.name}</figcaption>
                                                            </figure>
                                                        </div>);

        return (
            <div className="box big-box chat-box">
                <form onSubmit={(e) => this.sendMsg(e)}>
                    <fieldset className="chat-box-fieldset">
                        <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            placeholder="Написать в чат" 
                            name="msg" 
                            autoComplete="off"
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
                <MessageInChat/>
                <div className="chat-field list-group">
                    {this.state.show && mymsg}
                </div>
            </div>
        )
    }
}

export default Chat;

