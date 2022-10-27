import React from "react";
import Button from "./Button";

const Card = ({id, pName, desc, imgURL})=>{
    const añadir = () => {
        console.log("clickeado")
    } 
    return(
        <div key = {id} className="card">
            <h3>{pName}</h3>
            <img src = {imgURL} className="prodImg"/>
            <p>{desc}</p>
            <Button pulsado={añadir} texto='Añadir al carrito'></Button>
        </div>
    )
}

export default Card;