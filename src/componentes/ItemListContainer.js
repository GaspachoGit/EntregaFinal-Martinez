import React from "react";
import Card from "./Card";

const ListContainer = ({saludo})=>{
    return(
        <div className="titulo">
            <h1>{saludo}</h1>
        </div>
    )
}

export default ListContainer