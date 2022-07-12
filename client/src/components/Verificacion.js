// importar React de la biblioteca.
import React from 'react'; 
import { useState, useEffect} from 'react';


const Verificacion = (props) => {
/* ESTAS DOS CONSTANTES NO RECUERDO PARA QUE ERAN, entiendo que es para coger los valores de los inputs con usestate 
Es decir, lo que está más abajo en HTML*/

    const [id_usuario_pruebas, setId_usuario_pruebas] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [prueba, setPrueba] =  useState("");
    const [dorsal, setDorsal] =  useState("");
    
   
   //OJO, ESTO VIENE DE LA TABLA DE LA RELACION USUSARIO-PRUEBAS
    const verificar = () => {
           
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {
                id_usuario_pruebas:id_usuario_pruebas,
                tarjeta:tarjeta
          }),
        };

        fetch("verificacion", requestOptions)
          .then((response) => response.json())
          .then((response) =>{
            setDorsal(response.dorsal)
            setPrueba(response.prueba)
            console.log(response.prueba)
          })  
          //resultados saldrán en la consola
        } 

return (

<div id='login'>
    
  <div class="nick">
    <label for="exampleInputEmail1" class="form-label">Introduce el código de inscripción</label>
    <input type="text" class="form-control" onChange={(e) => setId_usuario_pruebas(e.target.value)}/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="contrasena">
    <label for="exampleInputPassword1" class="form-label">Introduce tu número de tarjeta</label>
    <input type="password" class="form-control" onChange={(e) => setTarjeta(e.target.value)}/>
  </div>
 
  <button class="btn btn-dark" onClick={() => verificar()}>COMPROBAR</button>
{dorsal==="" ? "": <div>
<p>Verificación correcta, le corresponde el dorsal numero{dorsal}</p>
<p>Datos de la prueba</p>
<p>nombre: {prueba.nombreprueba}</p>  
<p>tipo: {prueba.tipo}</p>
<p>Fecha de inicio: {prueba.fechainicio}</p>
<p>Fecha fin: {prueba.fechafin}</p>
<p>Precio: {prueba.precio}</p>
<p>Descripcion: {prueba.descripcion}</p>
  </div>}


  </div>

    )

}






export default Verificacion;