import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({data})=>{

    const mapStyles = {
        height: "50vh",
        width: "100%",
    }
    const defaultCenter = {
        lat: data.latitude, lng: data.longitude
    }

    return(
        <LoadScript googleMapsApiKey="AIzaSyD9rkz0uzMG4eEud2B6zvHMcmi5ha9hZxI">
            <GoogleMap
                mapContainerStyle = {mapStyles}
                zoom = {17}
                center = {defaultCenter}
            >
                   <Marker position = {defaultCenter}/> 
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;