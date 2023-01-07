import "./Datos.css";
import React, {useState, useEffect} from "react";
import NavBarExample from "../NavBar";


const Datos=() =>{
    
const [planta,setPlanta] = useState([])

useEffect(()=>{
    const getPlanta = () =>{
fetch('http://localhost:3002/api/planta')
.then(res => res.json())
.then(res => setPlanta(res))
    }
    getPlanta()
},[])

    return(
        <div>
             <div className="contains-nav">
 <NavBarExample/>
        </div>
           <div className="datos">
            
           </div>
           <h2 className="h2dts"> Historial</h2> <br/>
            <table className="tabledts">
                <thead >
                        <tr>
                                <th scope="col">Id</th>
                                <th scope="col">humedad</th>
                                <th scope="col">temperatura</th>
                                <th scope="col">capacidadTanque</th>
                                <th scope="col">humSuelo</th>
                                <th scope="col">statusBomba</th>
                                <th scope="col">fecha</th>
                        </tr>
                </thead>
                <tbody>
                    {planta.map(planta => (
                    <tr key={planta.idPlanta}>
                    <th scope="row">{planta.idPlanta}</th>
                    <th>{planta.humedad}</th>
                    <th>{planta.temperatura}</th>
                    <th>{planta.capacidadTanque}</th>
                    <th>{planta.humSuelo}</th>
                    <th>{planta.statusBomba}</th>
                    <th>{planta.fecha}</th>
                    </tr>
                    ))}
                </tbody>

            </table>
            
        </div>
    );
};

export default Datos;