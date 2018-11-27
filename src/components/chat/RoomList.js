import React, { Component } from 'react';

class RoomList extends Component {
    render () {
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id > b.id)
        return (
            <div>
                    {orderedRooms.map(room => {
                        const active = room.id === this.props.roomId ? 'active_chat' : '';
                        return (
                            <div key={room.id} className={"chat_list " + active} onClick={() => this.props.subscribeToRoom(room.id)}>
                                <div className="chat_people">
                                    <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="chat_ib">
                                        <h5>{room.name} <span className="chat_date">Dec 25</span></h5>
                                        <p>Test, which is a new approach to have all solutions
                                            astrology under one roof.
								                </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
}


export default RoomList;