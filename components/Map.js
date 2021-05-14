import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

export default function Map({ center, zoom, eventData }) {
  const [locationInfo, setLocationInfo] = useState(null)

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCf-rCehYaK2-sOsR6OsK7wF3vPhsZBAPg" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {eventData.map((ev) => {
          if (ev.categories[0].id === 8) {
            return (
              <LocationMarker
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title})}
              />
            );
          }
          return null;
        })}
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
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
