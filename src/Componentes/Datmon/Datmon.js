import React from "react";

const Datmon = ({ idPlanta='', statusBomba='', fecha='', temperatura='', humedad='', capacidadTanque='', humSuelo='' }) => {
    return (
    <div>
        <div className="grids">
            <div>
            <p> <b>Humedad: </b> {humedad}50%</p>
            <p><b>Temperatura:</b> {temperatura}22°C</p>
            </div>
            <div>
            <p><b>Capacidad del tanque:</b>: {capacidadTanque}80%</p>
            <p><b>humedad del suelo:{humSuelo}</b>90%</p>
            </div>



        </div>
        <p><b>Estado de la bomba:</b>{statusBomba}apagada <br/>
            <b>fecha y hora:</b> {fecha}07/01/2023</p>
        </div>
    )
}

export default Datmon;