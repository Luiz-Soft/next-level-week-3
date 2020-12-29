import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import { MapContainer as MapContainer} from "react-leaflet"
import { TileLayer} from 'react-leaflet';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

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
<MapContainer center={[-8.034469447273263, -34.903220659279675]}zoom={15} style={{width:'100%', height:'100%'}}>
    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </MapContainer>
        <div></div>
        <Link to="" className="create-orphanage"> </Link>
        <FiPlus size={32} color="FFF"></FiPlus>
    </div>
)

}

export default OrphanagesMap;