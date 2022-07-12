import React, {useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom';









const Registro = () => {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [username, setUsername] = useState("");
  const [registro, setRegistro] = useState("");
  

  // useEffect(() => {
  //   if (registro){
  //   //TAL VEZ NO SEA NECESARIO EL USEEFFECT PARA USAR EL NAVIGATION
  //   //TAL VEZ NO SEA NECESARIO EL USEEFFECT PARA USAR EL NAVIGATION


  //   navigate('/perfil'); 
  //   }
  //       },[registro])

  const enviar = () => {


    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        email: email,
        contrasena: contrasena,
        username: username
      })
    };
    fetch("registro", requestOptions)
      .then((response) => response.json())
      //.then((response) => {console.log(response); setRegistro(response)})  
      .then((response) => {
        setInterval(() => {

          window.location.assign("/login");

        }
          , 300);
      });


  };

  return (
   
    <div>
          <label>Nombre</label>
          <input type="text" placeholder="Pon tu nombre" onChange={(e) => setNombre(e.target.value)} />

          <label>Apellido</label>
          <input type="text" placeholder="Pon tu apellido" onChange={(e) => setApellido(e.target.value)} /> 

          <label>Email</label>
          <input type="email" placeholder="Pon tu email" onChange={(e) => setEmail(e.target.value)}/>

          <label>Contraseña</label>
          <input type="password" placeholder="Pon tu contraseña" onChange={(e) => setContrasena(e.target.value)} />

          <label>Username</label>
          <input type="text" placeholder="Pon tu username" onChange={(e) => setUsername(e.target.value)} />
          


          
          <button class="btn btn-dark" onClick={() => enviar()}>Registrarse</button>
    </div>
  );
}

export default Registro;