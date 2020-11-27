import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from './button.js'
import "./index.css";
import MapContainer from './map.js';


const LocalStore = ({ text }) => <div>{text}</div>;

//const PageTitle = <h1 style={{ color: 'white' }}>"Torch Draft Design Page"</h1>
const PageTitle = ()=> {
    return (
      "Torch Draft Design Page"
    );
}
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
    

export default function App (){ 
    return (

      <div className="App">
        <div className="container">
          <PageTitle></PageTitle>
          <LoginButton></LoginButton>
          </div>
        <div className="container">
          <div className="field" />
          <div className="container"><Button></Button></div>
        </div>
        <div className="container">
          <MapContainer></MapContainer>  
        </div>
        
      </div>
    );
  
}
        {/* <GoogleMapReact
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
          */}

// class App extends Component {
//   static defaultProps = {
//     center: {
//       lat: 43.071568,
//       lng: -70.762245
//     },
//     zoom: 6
//   };
 
//   render() {
    
//     return (
//       // Important! Always set the container height explicitly

//       <div style= {divStyle}>
        
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyAVqbFPXrHXJFdqOMIHDMD-gmlMXQvMcFg" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <LocalStore
//             lat={43.071568}
//             lng={-70.762245}
//             text="Local Store 1"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default App;