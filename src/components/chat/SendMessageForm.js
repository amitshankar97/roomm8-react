import React, { Component } from 'react';

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
        )
    }
}

export default SendMessageForm;