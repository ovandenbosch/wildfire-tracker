import GoogleMapReact from "google-map-react";
import LocationMarker from './LocationMarker'

export default function Map({ center, zoom, eventData }) {
  const markers = eventData.map(ev => {
    if (ev.categories[0].id === 8) {
        retu
    }
    return null
  })
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCf-rCehYaK2-sOsR6OsK7wF3vPhsZBAPg" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng}/>
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },

  zoom: 6,
};
