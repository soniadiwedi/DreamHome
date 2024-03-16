import React from 'react'
import "./map.scss"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

const Map = ({data}) => {
    const position = [51.505, -0.09]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     {data.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
   
  </MapContainer>
  )
}

export default Map