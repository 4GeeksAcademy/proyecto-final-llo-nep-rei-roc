import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
    const [locations, setLocations] = useState([]);
    const mapContainerStyle = {
        width: "100%",
        height: "500px",
    };

    const center = { lat: 39.8283, lng: -98.5795 }; // Centro de EE.UU.

    // Obtén los datos del backend
    useEffect(() => {
        fetch("/api/locations")
            .then((response) => response.json())
            .then((data) => setLocations(data));
    }, []);

    return (
        <LoadScript googleMapsApiKey="AIzaSyCY8RgJeHwHxnKmoIM1TQ_1g0WTnSNE2T0">
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={center}>
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={{ lat: location.lat, lng: location.lng }}
                        label={location.name}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
