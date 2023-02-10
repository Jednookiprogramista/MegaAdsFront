import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';
import {SimpleAdEntity} from 'types';
import {apiUrl} from "../../config/api";
import { SingleAd } from './SingleAd';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import {SearchContext} from "../../contexts/search.contexts";
export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);
    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/ad/search/${search}`);
            const data = await res.json();
            setAds(data);
        })();
    }, [search]);
    return (
        <div className="map">
            <MapContainer center={[52.4026128,16.9073222]} zoom={20}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    );
};
// center={[52.4026128,16.9073222]} zoom={20}



// <Marker position={[52.4026128,16.9073222]}>
//     <Popup>
//         <h2>Poznań International Fair</h2>
//         <p>The heart of my city, Poznań!</p>
//     </Popup>
// </Marker>
// <Marker position={[52.4084217,16.9249732]}>
//     <Popup>
//         <h2>Plac wolnosći</h2>
//         <p>Nice place next to the main square</p>
//     </Popup>
// </Marker>
// <Marker position={[52.4011751,16.9280301]}>
//     <Popup>
//         <h2>Stary Browar </h2>
//         <p>Shopping center in the middle of the city</p>
//     </Popup>
// </Marker>