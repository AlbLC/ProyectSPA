import React, {useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom';









const Registro = () => {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [username, setUsername] = useState("");
  const [registro1, setRegistro1] = useState("");
  
  useEffect(() => {
   if (registro1 != ""&&registro1!="El usuario existe") {
     navigate('/login')
   }
  }, [registro1]);



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
     
      .then((response) => {

        setRegistro1(response.message)
       

      });


  };

  return (
   
    <div>
          <label>Nombre</label>
          <input id="nombre" type="text" placeholder="Pon tu nombre" onChange={(e) => setNombre(e.target.value)} />

          <label>Apellido</label>
          <input id="apellido" type="text" placeholder="Pon tu apellido" onChange={(e) => setApellido(e.target.value)} /> 

          <label>Email</label>
          <input id="email" type="email" placeholder="Pon tu email" onChange={(e) => setEmail(e.target.value)}/>

          <label>Contraseña</label>
          <input id="contrasena" type="password" placeholder="Pon tu contraseña" onChange={(e) => setContrasena(e.target.value)} />

          <label>Username</label>
          <input id="username" type="text" placeholder="Pon tu username" onChange={(e) => setUsername(e.target.value)} />
          <p>{ registro1!="El usuario existe" ?"":"El username ya existe"}</p>


          
          <button id="boton" class="btn btn-dark" onClick={() => enviar()}>Registrarse</button>
    </div>
  );
}

export default Registro;