import React from "react";
import Contador from "./Contador";
import { Link } from "react-router-dom";
const Card = ({info})=>{
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    } 
    return(
        
        <div /* key = {info.id} */ className="card">
            <Link to = {`/detalle/${info.id}`}>
            <h3>{info.pName}</h3>
            <img src = {info.imgURL} className="prodImg"/>
            <p>{info.desc}</p> 
            </Link>
            <Contador initial={0} stock={5} onAdd={onAdd} texto='Añadir al carrito'></Contador>
        </div>

    )
}

export default Card;