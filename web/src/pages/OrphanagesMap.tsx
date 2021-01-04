import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Map} from "react-leaflet"
import Leaflet from 'leaflet';
import { TileLayer, Marker, Popup} from 'react-leaflet';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
    iconUrl:mapMarkerImg,
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

function OrphanagesMap(){
    
return(
    
    <div id="page-map">
        <aside>
<img src={mapMarkerImg} alt="Happy" />
<h2>Escolha um orfanato no mapa</h2>
<p>Muitas crianças estão
esperando a sua visita</p> 
       
       <footer>
           <strong>Recife</strong>
           <span>Pernambuco</span>
       </footer>
       
        </aside>
<Map center={[-8.034469447273263, -34.903220659279675]}zoom={15} style={{width:'100%', height:'100%'}}>
    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    

   <Marker icon={mapIcon} position={[-8.034469447273263, -34.903220659279675]}>
    
   <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
   Lar das meninas
   <Link to="orphanages/1">
<FiArrowRight size={20} color="FFF"/>
   </Link>
</Popup> 
   </Marker> 
    </Map>
        <div></div>
        <Link to="/orphanages/create" className="create-orphanage"> </Link>
        <FiPlus size={32} color="FFF"></FiPlus>
    </div>
)

}

export default OrphanagesMap;