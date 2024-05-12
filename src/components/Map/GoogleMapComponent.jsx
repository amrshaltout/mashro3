import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MyGoogleMap = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "353px",
  };

  const [currentPosition, setCurrentPosition] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);
  //   const [infoWindowPosition, setInfoWindowPosition] = useState(null);

  // Handler for the map click event
  const handleMapClick = (e) => {
    const latLng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setClickedLocation(latLng);
    // setInfoWindowPosition(latLng);

    // props.onMapClick(latLng);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  //   const center = {
  //     lat: 31.2565102,
  //     lng: 30.0087259,
  //   };

  return (
    <div className="text-slate font-bold font-xl rounded-[10px] overflow-hidden">
      <LoadScript googleMapsApiKey="AIzaSyAhcXdT801aTtpJAzoP1eBM3fVt3mtyQ-8">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          //   center={center}
          center={currentPosition || { lat: 31.2565102, lng: 30.0087259 }} // Use current position if available, otherwise fallback to a default position
          zoom={15}
          onClick={handleMapClick}
        >
          {/* <Marker position={center} */}
          {/* {currentPosition && <Marker position={currentPosition} />} */}
          {clickedLocation && (
            <Marker
              position={clickedLocation}
              //   onMouseOver={() => setInfoWindowPosition(clickedLocation)}
            />
          )}
          {/* {infoWindowPosition && (
            <InfoWindow position={infoWindowPosition}>
              <div>
                <Marker position={clickedLocation} />
                <h4>Latitude: {infoWindowPosition.lat}</h4>
                <h4>Longitude: {infoWindowPosition.lng}</h4>
              </div>
            </InfoWindow>
          )} */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

// Handle the clicked location data here

export default MyGoogleMap;

// ------------------------------------
// import React, { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const MapTharwat = ({ onMapClick }) => {
//   const mapContainerStyle = {
//     width: "100%",
//     height: "353px",
//   };

//   const center = {
//     lat: 31.2565102,
//     lng: 30.0087259,s
//   };

//   // Handler for the map click event
//   const handleMapClick = (e) => {
//     const clickedLocation = {
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng(),
//     };
//     onMapClick(clickedLocation); // Call the parent function with the clicked location
//   };

//   return (
//     <div className="text-slate font-bold font-xl rounded-[10px] overflow-hidden">
//       <LoadScript googleMapsApiKey="AIzaSyAhcXdT801aTtpJAzoP1eBM3fVt3mtyQ-8">
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           center={center}
//           zoom={15}
//           onClick={handleMapClick} // Attach the click event handler
//         ></GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default MapTharwat;
