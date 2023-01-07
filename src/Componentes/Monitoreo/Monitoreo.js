import { useNavigate, } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import img9 from '../../img/images.png';
import './Monitoreo.css';
import Datmon from "../Datmon/Datmon";
import NavBarExample from "../NavBar";

function Monitoreo() {       

    const [planta,setPlanta] = useState([])

    useEffect(()=>{
        const getPlanta = () =>{
    fetch('http://192.168.0.46:3002/api/planta')
    .then(res => res.json())
    .then(res => setPlanta(res))
        }
        getPlanta()
    },[])
  return (
    <div>
                   <div>
 <NavBarExample/>
        </div> 
        <div className="tarjetaMoni" >
          <br/>
          <h1>Monitoreo</h1>
          <img src={img9} className="plantimg"></img>
        <Datmon {...planta[planta.length-1]}/>
        </div>


</div>
  );


}


export default Monitoreo;