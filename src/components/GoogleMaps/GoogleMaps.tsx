import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./index.module.scss";
import { GoogleMarker } from "../../constants/constants";

const GoogleMaps = () => {
  const GOOGLE_MAPS_API_KEY = "AIzaSyCbdGIQbdbxhixRNB6va2HYRLqBOGW8jlA";
  const mapContainerStyle = {
    minWidth: "100%",
    height: "300px",
  };
  const center = {
    lat: 42.347204,
    lng: -71.082429,
  };
  const mapOptions = {
    disableDefaultUI: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  console.log(GoogleMarker, "marker");

  return (
    <div className={styles.maps}>
      <p>Property on Map</p>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={mapOptions}
      >
        <Marker position={center} icon={GoogleMarker} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
