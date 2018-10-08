import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/searchActions';
import UserCard from './userCard';


class SearchUsers extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        let mappedUsers = this.props.state.search.users.map(
            (user, index) => <UserCard user={user} key={index} />
        )

        return (
            <div style={{marginTop: '20px'}}>
                <ul>{mappedUsers}</ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => (
    {
        fetchUsers: () => dispatch(fetchUsers())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);