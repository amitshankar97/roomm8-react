import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchProperties } from '../../actions/searchActions';
import UserCard from './userCard';
import SearchBar from './searchBar';
import Filters from './filters';
import Map from './map';
import { Facebook } from 'react-content-loader'

const Loader = () => <div style={{marginTop: '21px'}}>
                        <Facebook /><br /><br /><br />
                        <Facebook /><br /><br /><br />
                        <Facebook /><br /><br /><br />
                        <Facebook />
                    </div>;


class SearchUsers extends Component {


    componentDidMount() {
        if(this.props.state.search.users.length <= 0) {
            this.props.fetchUsers();
        }
        if(this.props.state.search.properties.length <= 0) {
            this.props.fetchProperties(32.22, -110.974);
        }
    }

    render() {
        let mappedUsers = this.props.state.search.users.map(
            (user, index) => <UserCard user={user} key={index} />
        )

        return (
            <div>

                <SearchBar /><br /><hr width="90%" />
                <div className="container search-pane">

                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="list-tab" data-toggle="tab" href="#list" role="tab" aria-controls="list" aria-selected="true">List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="map-tab" data-toggle="tab" href="#map" role="tab" aria-controls="map" aria-selected="false">Map</a>
                        </li>
                    </ul>
                    <div className="row">
                        <Filters />
                        <div className="tab-content col-md-8" id="myTabContent">
                            <div className="tab-pane fade show active" id="list" role="tabpanel" aria-labelledby="list-tab">
                                {
                                    this.props.state.search.isFetching
                                    ? <Loader />
                                    : <div>
                                        <div style={{ marginTop: '21px', padding: "10px" }}>
                                            <ul style={{ paddingLeft: "0px" }}>{mappedUsers}</ul>
                                        </div>
                                     </div>
                                }
                            </div>
                            <div className="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">
                                <Map />
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
        fetchUsers: () => dispatch(fetchUsers()),
        fetchProperties: (lat, lon) => dispatch(fetchProperties(lat, lon))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);