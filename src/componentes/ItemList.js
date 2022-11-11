import React from "react";
import Card from "./Card";

export const Lista = ({data=[]}) =>{
    return(
        data.map(pokemon=> <Card key={pokemon.id} info={pokemon}/>)
    )
}

export default Lista