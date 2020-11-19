import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const LocalStore = ({ text }) => <div>{text}</div>;
const divStyle = {
    display:'flex',
    alignitems:'right',
    height: '100vh', 
    width: '100vh'
};

class App extends Component {
  static defaultProps = {
    center: {
      lat: 43.071568,
      lng: -70.762245
    },
    zoom: 6
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style= {divStyle}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAVqbFPXrHXJFdqOMIHDMD-gmlMXQvMcFg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocalStore
            lat={43.071568}
            lng={-70.762245}
            text="Local Store 1"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default App;