import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import ContentLoader from 'react-content-loader';
import { fetchProperties, selectMarker } from '../../../actions/searchActions'
import { Link } from 'react-router-dom';

const Loader = props => (
  <div className="card">
    <ContentLoader 
      height={500}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="400" height="500" />
    </ContentLoader>
  </div>
)

const GOOGLE_API_KEY = "AIzaSyBPsMu2UJW4WKemA-_glrl6Bh5NyS3SIj0";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 32.22, lng: -110.97 }}
    >

    {
      props.properties.length <= 0
      ? null
      : props.properties.map((prop, i) => {
        return (
          <Marker
          position = {{ lat: prop.geometry.location.lat, lng: prop.geometry.location.lng }}
          key = {i}
          onClick={this.selectMarker()}
          >

          {
            i === props.markerIndex
            ? <InfoWindow>
              <div align="center">
                <div>{prop.name}</div><br />
                <div>Rating: {prop.rating}</div><br />
                <Link to={'/PropertyProfile/' + prop.id}>
                  <button className="btn btn-primary">View Property</button>
                </Link>
              </div>
            </InfoWindow>
            : null
          }
          <InfoWindow>
            <div align="center">
              <div>{prop.name}</div><br />
              <div>Rating: {prop.rating}</div><br />
              <Link to={'/PropertyProfile/' + prop.id}>
                <button className="btn btn-primary">View Property</button>
              </Link>
            </div>
          </InfoWindow>
          </Marker>
        );
      })
    }
    </GoogleMap>
))

export class Map extends Component {

  // componentDidMount() {
  //   if(this.props.state.search.properties.length <= 0) {
  //     this.props.fetchProperties(32.22, -110.974);
  //   }
  // }

  render() {
    if(this.props.state.search.isFetching) {
      return <Loader />;
    }

    return (
      <div style={{ marginTop: '21px', padding: "10px" }}>
        <MyMapComponent
          isMarkerShown
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + GOOGLE_API_KEY}
          loadingElement={<Loader />}
          properties={this.props.state.search.properties}
          markerIndex={this.props.state.search.markerIndex}
          containerElement={<div style={{ height: `500px`, marginBottom: `15px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  fetchProperties,
  selectMarker
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
