"use client";

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
})

const position = [40.7124121, -74.005951,];


const Map = () => {
  return (
   <MapContainer center={[40.7124121, -74.005951,]} zoom={10} scrollWheelZoom={false} className="w-[648px] h-[275px] max-sm:w-[282px] max-sm:h-[120px]">
   <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   <Marker position={[40.7124121, -74.005951,]}>
     <Popup>
       A pretty CSS3 popup. <br /> Easily customizable.
     </Popup>
   </Marker>
  </MapContainer>
  )
 }
 
 export default Map