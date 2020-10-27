import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const LocalStore = ({ text }) => <div>{text}</div>;
 
class App extends Component {
  static defaultProps = {
    center: {
      lat: 43.0599,
      lng: 70.7262
    },
    zoom: 6
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAVqbFPXrHXJFdqOMIHDMD-gmlMXQvMcFg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocalStore
            lat={43.0599}
            lng={70.7262}
            text="Local Store 1"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default App;