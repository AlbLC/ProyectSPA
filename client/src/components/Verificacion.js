// importar React de la biblioteca.
import React from 'react'; 
import { useState,useEffect } from 'react';


const Verificacion = (props) => {
/* ESTAS DOS CONSTANTES NO RECUERDO PARA QUE ERAN, entiendo que es para coger los valores de los inputs con usestate 
Es decir, lo que está más abajo en HTML*/

    const [id_usuario_pruebas, setId_usuario_pruebas] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [verificacion, setVerificacion] =  useState("");
   
   //OJO, ESTO VIENE DE LA TABLA DE LA RELACION USUSARIO-PRUEBAS
    const verificar = () => {
           
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {
                id_usuario_pruebas:id_usuario_pruebas,
              tarjeta:tarjeta,
          }),
        };

        fetch("login", requestOptions)
          .then((response) => response.json())
          .then((response) =>setVerificacion(response))  
          
          props.mandarImagen.bind(this, 5) //QUITAR DE AQUI????????????????
        } 

return (

<div id='login'>
    VER SI EL EVENTO SIGUE DISPONIBLE :
  <div class="nick">
    <label for="exampleInputEmail1" class="form-label">Introduce el código de inscripción</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e) => setId_usuario_pruebas(e.target.value)}/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="contrasena">
    <label for="exampleInputPassword1" class="form-label">Introduce tu número de tarjeta</label>
    <input type="password" class="form-control" id="exampleInputPassword1"onChange={(e) => setTarjeta(e.target.value)}/>
  </div>
 
  <button class="btn btn-dark" onClick={() => entrar()}>COMPROBAR</button>



  </div>

    )

}






export default Verificacion;