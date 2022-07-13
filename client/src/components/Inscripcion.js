// importar React de la biblioteca.
import React from 'react'; 
import { useState,useEffect } from 'react';


const Inscripcion = (props) => {


    const [tarjeta, settarjeta] = useState("");
//LOS DEMAS DATOS NO LOS PONGO PORQUE NO LOS GUARDAMOS EN LA BBDD
   
   
    const pagar = () => {
           
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {
              tarjeta:tarjeta
          }),//no pongo los demás porque no nos interesa guardarlos, aunque si tenerlos en el formulario
        };

        fetch("pagar", requestOptions)
          .then((response) => response.json())
          .then((response) =>setTarjeta(response))  
          
          props.mandarImagen.bind(this, 5)  //ESTO HAY QUE QUITARLO
        } 

return (

  <Form>
    PAGAR INSCRIPCION:
  <Form.Group className="mb-3" controlId="">
  <Form.Label>Número de tarjeta</Form.Label>
  <Form.Control type="text" placeholder="16 dígitos" onChange={(e) => setTarjeta(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
  <Form.Label>Nombre de tarjeta</Form.Label>
  <Form.Control type="text" placeholder="" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
  <Form.Label>Fecha de caducidad</Form.Label>
  <Form.Control type="text" placeholder="09/29" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
  <Form.Label>CVV</Form.Label>
  <Form.Control type="text" placeholder="555" />
  </Form.Group>


  <Button variant="primary"  onClick={() => pagar()}>
        PAGAR
      </Button>


</Form>

    )

}






export default Inscripcion;






{/* <div id='login'>
    PAGAR INSCRIPCION:
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Número de tarjeta</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder ="XXXXXXXXXXXXXXXX" aria-describedby="emailHelp"onChange={(e) => setTarjeta(e.target.value)}/>
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre de tarjeta</label>
    <input type="text" class="form-control"   placeholder ="Nombre y apellidos" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Fecha caducidad</label>
    <input type="text" class="form-control"  placeholder ="07/01" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">CVV</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div> 

 
  <button class="btn btn-dark" onClick={() => pagar()}>PAGAR</button>












  </div>
*/}