import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/searchActions';
import UserCard from './userCard';
import SearchBar from './searchBar';
import Filters from './filters';

class SearchUsers extends Component {


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
                <div className="container">

                    <div className="row">
                        <Filters />
                        <div className="col-sm-8">
                            <div style={{marginTop: '21px', padding: "10px"}}>
                                <ul style={{paddingLeft: "0px"}}>{mappedUsers}</ul>
                            </div>
                        </div>
                    </div>
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