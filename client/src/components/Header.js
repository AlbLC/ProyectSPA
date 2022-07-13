
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

//Componente funcional -> 


function Header(props) {
    const navigate = useNavigate()
    const sendDesconectar = () => {
       localStorage.clear()
       window.location.assign("/");
       
    };

    console.log(props.pagina1)
   
        return (
        <div className="headerNav" class="headerNav">
            
                <div class="navbar-sing"> 
                
        
                {props.pagina=="home" ? "":props.pagina3=="verificacion"?"":<Button variant="light" size="lg" className="buttonHome"><Link to={"/"} className="buttonHome">Home</Link></Button>}

                    {props.pagina1=="login" ? "":props.pagina3=="verificacion"?"":<Button variant="light" size="lg" className="buttonHome"><Link to={"/login"}className="buttonHome">Login</Link></Button>}

                    {props.pagina2=="registro" ? "":props.pagina3=="verificacion"?"":<Button variant="light" size="lg" className="buttonHome"><Link to={"/registro"} className="buttonHome">Registro</Link></Button>}

                    {props.pagina=="home" ? "": props.pagina1=="login" ? "":props.pagina2=="registro" ? "":<Button variant="dark"  onClick={() => sendDesconectar()}>desconectar</Button>}


                   {props.pagina=="home" ? "": props.pagina1=="login" ? "":props.pagina2=="registro" ? "":props.pagina3=="verificacion"?"":<Button variant="light" size="lg" className="buttonHome"><Link to={"/editarPerfil"} className="buttonHome">Editar perfil</Link></Button>}


                   
                   
                   {props.pagina1=="login" ? "":props.pagina2=="registro" ? "":<Button variant="light" size="lg" className="buttonHome"><Link to={"/historial"} className="buttonHome">Historial</Link></Button>}

                </div>
                
           
        
        </div>
    )




}

export default Header;



