
import { Card, Button, Form } from 'react-bootstrap'
import React, { useState, useEffect } from "react";

//Componente funcional -> 
function Home() {
  var usuario = localStorage.getItem("user")
    const [tipoPrueba, setTipoPrueba] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [busqueda,setBusqueda] = useState("");
    const [descripcion,setDescripcion] = useState("")
    const [info,setInfo] = useState("");
    const [user,setUser] = useState(usuario);
    const [tarjeta,setTarjeta] = useState("");
    const [yainscrito,setYainscrito] = useState("");

 
   
 


  const verinfo = (id) => {
    setInfo(true)
      setDescripcion(busqueda[id])




      // const requestOptions = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ id }),
      // };
      // fetch("verinfo", requestOptions)
      // .then((response) => response.json())
      // .then((response) => {console.log(response.prueba);
      //   setBusqueda(response.prueba)
        
      // });
      
      
  }




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

const inscribir = (idprueba) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idprueba, user, tarjeta }),
  };

  
  fetch("inscribirse", requestOptions)
    .then((response) => response.json())
    .then((response) => {
     setYainscrito(response)
      
      
    });

}



    return (
<div className='tarjetasbusquedas'>

  <div id="homeprueba" >
  
  <Form>
         
          
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Selecciona tu prueba</Form.Label>
            <Form.Control as="select" onChange={(e) => setTipoPrueba(e.target.value)}>
            <option>Tipo de prueba</option>
              <option value="running">running</option>
              <option value="natación">natación</option>
              <option value="triatlón">triatlón</option>
            </Form.Control>
          </Form.Group>


 
 
   <Form.Group className="mb-3" controlId="">
     <Form.Label>Fecha de Inicio</Form.Label>
     <Form.Control type="date" onChange={(e) => setFechaInicio(e.target.value)}/>
     
   </Form.Group>

   <Form.Group className="mb-3" controlId="">
     <Form.Label>Fecha de Fin</Form.Label>
     <Form.Control type="date" onChange={(e) => setFechaFin(e.target.value)} />
   </Form.Group>
   <Button variant="primary" onClick={() => sendBusqueda()}>Buscar</Button> 
   </Form>
   
  
   </div>

          {busqueda ? busqueda.map((busqued, i) => {
          return (
            <Card style={{ width: '18rem' }} key={i}>
              

              <Card.Body>
                <Card.Title>{busqued.nombreprueba}</Card.Title>
                <Card.Text>{busqued.tipo}</Card.Text>
                <Card.Text>{busqued.precio} €</Card.Text>
                
                <Button onClick={() => verinfo(i)} variant="info">Info</Button>
              </Card.Body>
            </Card>
          )
        }) : <div>
           

        </div>}
        
    {info===true ? <div>
      <Card style={{ width: '18rem' }} key={descripcion.id_prueba}>
              

              <Card.Body>
                <Card.Title>{descripcion.nombreprueba}</Card.Title>
                <Card.Text>{descripcion.tipo}</Card.Text>
                <Card.Text>{descripcion.precio} €</Card.Text>
                <Card.Text>{descripcion.fechainicio} </Card.Text>
                <Card.Text>{descripcion.fechafin} </Card.Text>
                <Card.Text>{descripcion.descripcion} </Card.Text>
                <Card.Text>Plazas disponibles: {descripcion.participantes_max} </Card.Text>
                {usuario==null?"":<Card.Text>Para inscribirte introduce tu numero de tarjeta </Card.Text>}
                {usuario==null?"":<input type="text" onChange={(e) => setTarjeta(e.target.value)}/>}
                  { tarjeta===""?"":<Button onClick={() => inscribir(descripcion.id_prueba)} variant="info">Inscribete</Button>  } 
              </Card.Body>
            </Card>
    </div>:""}

    {yainscrito===true?<Card style={{ width: '12rem' }}>         

              <Card.Body>
                <Card.Title>ENHORABUENA</Card.Title>
                <Card.Text>Te has inscrito correctamente</Card.Text>         
              </Card.Body>
            </Card>:yainscrito===false?<Card style={{ width: '12rem' }}>         

            <Card.Body>
              <Card.Title>YA ESTÁS INSCRITO</Card.Title>
              <Card.Text>Ya te inscribiste a la prueba</Card.Text>         
            </Card.Body>
            </Card>:<p></p>}


    
</div>

    );


}
export default Home;


