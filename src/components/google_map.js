import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 9,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }

  render() {
    // this.refs.map
    return (
      <div ref="map" />
    );
  }
}

export default GoogleMap;
