import React from "react";
import Card from "./Card";

export const Lista = ({data=[]}) =>{
    console.log(data)
    return(
        data.map(pokemon=> <Card key={pokemon.id} info={pokemon}/>)
    )
}

export default Lista