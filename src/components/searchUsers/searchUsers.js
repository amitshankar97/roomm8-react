import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/searchActions';
import UserCard from './userCard';
import SearchBar from './searchBar';
import Filters from './filters';

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
            <div>
                
                <SearchBar />
                <Filters />
                
                <div style={{marginTop: '20px', padding: "10px"}}>
                    <ul style={{paddingLeft: "0px"}}>{mappedUsers}</ul>
                </div>
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