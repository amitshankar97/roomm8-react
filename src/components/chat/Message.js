import React from 'react'

function Message(props) {

    let outgoing = props.username === 'jimmy' ? true : false;

    let content;

    if (outgoing) {
        content = (
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>
                        {props.text}
                    </p>
                    <span className="time_date"> 11:01 AM    |    June 9</span>
                </div>
            </div>
        );
    } else {
        content = (
            <div className="incoming_msg">
                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="user" /> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>
                            {props.text}
                        </p>
                        <span className="time_date"> 11:01 AM    |    June 9</span>
                    </div>
                </div>
            </div>
        );
    }

    return content;
}

export default Message