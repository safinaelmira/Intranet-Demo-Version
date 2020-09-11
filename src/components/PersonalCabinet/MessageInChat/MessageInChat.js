import React, { Component } from 'react';

import './MessageInChat.css';

class MessageInChat extends Component {

    state = {
        users: [
            {
                id: 1,
                name: "Максим",
                photo: "https://p7.hiclipart.com/preview/172/868/872/school-uniform-student-pre-school-child-kids.jpg",
                msg: "Привет, скажите а кто смог сделать домашку по русскому? У меня не получается 3 упражнение"
            },
            {
                id: 2,
                name: "Милана",
                photo: "https://www.aussiedeafkids.org.au/user-assets/iStock_000005792999XSmall.jpg",
                msg: "Привет всем! Дочка завтра не сможет прийти, у нее температура, Феруза Рашидовна, отправляю справку вам в чат!"
            }
        ]
    }

    render(){
        const msg = (user) => <div className="msg-block" key={user.id}>
                                <figure>
                                    <img src={user.photo} alt="child" className="child-photo"/>
                                    <figcaption>{user.name}</figcaption>
                                </figure>
                                <div className="msg-in-chat">{user.msg}</div>
                            </div>

        const allMsgs = this.state.users.map(user => msg(user));
        return (
            <>
                {allMsgs}
            </>
        )
    }
}

export default MessageInChat;

