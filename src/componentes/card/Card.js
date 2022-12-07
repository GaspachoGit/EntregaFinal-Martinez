import React from "react";
import { Link } from "react-router-dom";
const Card = ({info})=>{
 
    return(
        <div className="card">
            <Link to = {`/detalle/${info.id}`}>
            <h3>{info.pName}</h3>
            <img src = {info.imgURL} className="prodImg"/>
            <p>{info.desc}</p> 
            </Link>
        </div>
    )
}

export default Card;