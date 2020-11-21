import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

const style = {
  align:'center',
  position: 'relative',
  border: '2px solid orange',  
  borderRadius:'30px',
  width: '800px',
  height: '600px'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
      google={this.props.google}
          style={style}
          center={{
            lat: 43.071568,
            lng: -70.762245
          }}
          zoom={15}
          onClick={this.onMapClicked}
       >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      {/*<Marker position={{ lat: 43.071568, lng: -70.762245}} />*/}

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAVqbFPXrHXJFdqOMIHDMD-gmlMXQvMcFg",
})(MapContainer)