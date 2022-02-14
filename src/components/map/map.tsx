import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { MapType } from "../../types/map-type";

const Map = ({ lat, lng }: MapType) => {
  if (!lat && !lng) {
    lat = 35.689198;
    lng = 51.388973;
  }

  const ourMap = () => {
    return <GoogleMap defaultZoom={14} defaultCenter={{ lat, lng }} />;
  };

  const WrappedMap = withScriptjs(withGoogleMap(ourMap));

  return (
    <>
      <div style={{ width: "25vw", height: "25vh" }}>
        <WrappedMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDl8oTaOMJffOLd3YcJt1KK2z3pRED2kZs&callback=initMap"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </>
  );
};

export default Map;
