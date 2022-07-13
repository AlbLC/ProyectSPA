
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

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
        
                {props.pagina=="home" ? "":props.pagina3=="verificacion"?"":<button className="buttonHome"><Link to={"/"} className="buttonHome">Home</Link></button>}

                    {props.pagina1=="login" ? "":props.pagina3=="verificacion"?"":<button className="buttonHome"><Link to={"/login"}className="buttonHome">Login</Link></button>}

                    {props.pagina2=="registro" ? "":props.pagina3=="verificacion"?"":<button className="buttonHome"><Link to={"/registro"} className="buttonHome">Registro</Link></button>}

                    {props.pagina=="home" ? "": props.pagina1=="login" ? "":props.pagina2=="registro" ? "":<button onClick={() => sendDesconectar()}>desconectar</button>}

                   {props.pagina=="home" ? "": props.pagina1=="login" ? "":props.pagina2=="registro" ? "":props.pagina3=="verificacion"?"":<button className="buttonHome"><Link to={"/editarPerfil"} className="buttonHome">Editar perfil</Link></button>}

                </div>
                
           
        
        </div>
    )




}

export default Header;



