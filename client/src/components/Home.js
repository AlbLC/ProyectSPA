
import { Card, Button } from 'react-bootstrap'
import React, { useState, useEffect } from "react";

//Componente funcional -> 
function Home() {

    const [tipoPrueba, setTipoPrueba] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [busqueda,setBusqueda]= useState("");


const sendBusqueda = () => {
    //console.log("aqui")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipoPrueba, fechaInicio, fechaFin }),
    };

    
    fetch("busqueda", requestOptions)
      .then((response) => response.json())
      .then((response) => {console.log(response.prueba);
        setBusqueda(response.prueba)
        
      });
}


    return (
<div>
    
          <label>Tipo de prueba</label>
         
          <select name="cars" id="cars" onChange={(e) => setTipoPrueba(e.target.value)}>
          <option value="running">running</option>
          <option value="natación">natación</option>
           <option value="triatlón">triatlón</option>
           
          </select>


          <label>Fecha de inicio</label>
          <input type="date" onChange={(e) => setFechaInicio(e.target.value)} />
          <label>Fecha fin </label>
          <input type="date" onChange={(e) => setFechaFin(e.target.value)} />
          <p></p>
          <button onClick={() => sendBusqueda()}>Buscar</button>

          

          {busqueda ? busqueda.map((busqued, i) => {
          return (
            <Card style={{ width: '18rem' }} key={i}>
              

              <Card.Body>
                <Card.Title>{busqued.nombreprueba}</Card.Title>
                <Card.Text>{busqued.tipo}</Card.Text>
                <Card.Text>{busqued.precio} €</Card.Text>
                <Card.Text>{busqued.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          )
        }) : <div>
            
        </div>}
        
    
</div>
    );


}
export default Home;



