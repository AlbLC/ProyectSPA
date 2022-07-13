
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//Componente funcional -> 


function Historial(props) {
    
    const [user,setUser] = useState(localStorage.getItem("user"));
    const [historial,setHistorial]= useState("")

    useEffect(() => {
        
       const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          {
            user
          }),
      };

    fetch("historial", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setHistorial(response)

      });


       }, []);
   
  
   
        return (
        <div>

        </div>
    )




}

export default Historial;



