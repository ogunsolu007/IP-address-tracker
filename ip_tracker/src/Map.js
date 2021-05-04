import React from 'react';
import {
  MapContainer, TileLayer, Marker,Popup
} from "react-leaflet"

import { Icon } from "leaflet";
import Pin from './images/icon-location.svg'



const myIcon = new Icon({
  iconUrl: Pin,
  iconSize: [20, 35],
  iconAnchor: [23, 55],
  popupAnchor: [-3, -76],
});


function MapComponent({ center, error }) {

  return (
<MapContainer  style={{width:"100%",  height:"100%"}}center={center} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center} icon={myIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>
  )

}

export default MapComponent;