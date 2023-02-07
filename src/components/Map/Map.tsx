import React, {useContext, useEffect} from "react";
import './Map.css'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import '../../utils/fix-map-icon';
import {SearchContext} from "../../contexts/search.contexts";

export const Map = () => {
    const {search} = useContext(SearchContext)

    useEffect(()=> {
        console.log('Make request to search for,',search);
    },[search]);


    return(
        <div className="map">
            <h1>Search for:{search}</h1>
            <MapContainer center={[52.4026128,16.9073222]} zoom={20}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"

                />
                   <Marker position={[52.4026128,16.9073222]}>
                        <Popup>
                            <h2>Poznań International Fair</h2>
                            <p>The heart of my city, Poznań!</p>
                        </Popup>
                   </Marker>
            </MapContainer>

        </div>
    )
}