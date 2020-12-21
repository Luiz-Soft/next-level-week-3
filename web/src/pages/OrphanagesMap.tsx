import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'

import '../styles/pages/orphanages-map.css';


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

        <div></div>
        <Link to="" className="create-orphanage"> </Link>
        <FiPlus size={32} color="FFF"></FiPlus>
    </div>
)

}

export default OrphanagesMap;