import GoogleMapReact from "google-map-react";



const AnyReactComponent = ({ text}) => <div>{text}</div>;

export default function GoogleMap({ lawFirms}) {


 
  let defaultProps = {
    center: {
      lat: 44.9477002,
      lng: -93.23347439999999,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "40vh", width: "46%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ENTER_YOUR_KEY_HERE }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={lawFirms.lat} lng={lawFirms.lng} text="📍" />
      </GoogleMapReact>
    </div>
  );
}
