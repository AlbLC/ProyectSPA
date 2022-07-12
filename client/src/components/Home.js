

import React, { useState, useEffect } from "react";

//Componente funcional -> 
function Home() {

    const [tipoPrueba, setTipoPrueba] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [busqueda,setBusqueda]= useState("");


const sendBusqueda = () => {
    console.log("aqui")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipoPrueba, fechaInicio, fechaFin }),
    };
    fetch("busqueda", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setBusqueda(res.anonimo)
        
      });
}


    return (
<div>
    
    <label>Tipo de prueba</label>
          <input type="text" onChange={(e) => setTipoPrueba(e.target.value)} />
          <label>Fecha de inicio</label>
          <input type="date" onChange={(e) => setFechaInicio(e.target.value)} />
          <label>Fecha fin </label>
          <input type="date" onChange={(e) => setFechaFin(e.target.value)} />
          <p></p>
          <button onClick={() => sendBusqueda()}>Buscar</button>

          {busqueda != "" ? <div>
            
          </div> : ""}
        
    
</div>
    );


}
export default Home;



