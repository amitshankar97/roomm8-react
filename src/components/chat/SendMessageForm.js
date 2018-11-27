import React, { Component } from 'react';
import { connect } from 'react-redux';

class SendMessageForm extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <div className="type_msg">
                <div className="input_msg_write">
                    <form
                        onSubmit={this.handleSubmit}
                        // className="send-message-form"
                    >
                        <input
                            type="text"
                            className="write_msg"
                            placeholder="Type a message"
                            disabled={this.props.disabled}
                            onChange={this.handleChange}
                            value={this.state.message}
                        />
                        <button className="msg_send_btn" type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>

            // <form
            //     onSubmit={this.handleSubmit}
            //     className="send-message-form">
            //     <input
            //         disabled={this.props.disabled}
            //         onChange={this.handleChange}
            //         value={this.state.message}
            //         placeholder="Enter Message"
            //         type="text" />
            // </form>
        )
    }
}

export default SendMessageForm;