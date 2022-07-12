
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


//Componente funcional -> 


function Header(props) {
    
   
        return (
        <div className="headerNav" class="headerNav">
            
                <div class="navbar-sing"> 
        
                <button className="buttonHome"><Link to={"/"} className="buttonHome">Home</Link></button>
                    <button className="buttonHome"><Link to={"/login"}className="buttonHome">Login</Link></button>
                    <button className="buttonHome"><Link to={"/registro"} className="buttonHome">Registro</Link></button>
                   
                </div>
                
           
        
        </div>
    )




}

export default Header;



