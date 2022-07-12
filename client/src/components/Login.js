// importar React de la biblioteca.
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  /* ESTAS DOS CONSTANTES NO RECUERDO PARA QUE ERAN, entiendo que es para coger los valores de los inputs con usestate 
  Es decir, lo que está más abajo en HTML*/

  const [username, setUsername] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const entrar = () => {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          username: username,
          contrasena: contrasena,
        }),
    };

    fetch("login", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setLogin(response.message)
        console.log(response.message)
        setInterval(() => {
          if (response.message === true) {
            localStorage.setItem('user', JSON.stringify(response.username ));
            
            if (response.empleado === true) {
                navigate("/verificacion")

            } else {
              window.location.assign("/");  //modificar 
            }
          } else {
            setLogin(response.message)
          }
        }
          , 300);
      });

    //props.mandarImagen.bind(this, 5) 
  }

  return (

    <div id='login'>
      LOGIN:
      <div class="nick">
        <label for="exampleInputEmail1" class="form-label">Nickname</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)} />
        <div id="emailHelp" class="form-text"></div>
      </div>
      <div class="contrasena">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setContrasena(e.target.value)} />
      </div>

      <button class="btn btn-dark" onClick={() => entrar()}>ENTRAR</button>
      <p> {login != true ? "Email o contraseña incorrectos" : ""}</p>

    </div>

  )

}

export default Login;



