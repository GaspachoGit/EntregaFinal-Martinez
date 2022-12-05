import React,{useEffect, useState} from "react";
import ItemDetail from "../intemDetail/detalle";
import { useParams } from "react-router-dom";

const products = [
    {
    id: 1,
    pName: 'Charmander',
    desc: 'This is the product number 1',
    det: 'Charmander es un pequeño lagarto bípedo. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola con la punta envuelta en llamas. Charmander, como sus evoluciones Charmeleon y Charizard, tiene una pequeña llama en la punta de su cola. La intensidad con la que esta arde es un indicador del estado físico y emocional de este Pokémon. Cuando la intensidad de la llama está baja, su salud puede estar en riesgo. Cuando arde con normalidad, Charmander está saludable y alegre. Cuando la llama de su cola arde con más intensidad, es porque está enfadado, y si la llama de su cola se vuelve azul es porque encontró un rival fuerte y digno de él. Si la llama desaparece o se apaga, moriría.',
    imgURL: 'https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Pic.png' ,
    tipo: 'fuego',
    precio: 1000
    },
    {
    id: 2,
    pName: 'Squirtle',
    desc: 'This is the product number 2',
    det:'Squirtle es una de las especies más difíciles de encontrar. Habita tanto aguas dulces como marinas, preferiblemente zonas bastante profundas. Son pequeñas tortugas color celeste con caparazones color café; o rojas en algunos casos, con una cola enrollada que los distingue. Poco después de nacer, sus caparazones se endurecen y se hacen más resistentes a los ataques; muchos objetos rebotarán en ella. La forma redonda de su caparazón y las figuras en su superficie hacen que Squirtle tenga una muy buena forma hidrodinámica, lo que le da mayor velocidad al nadar. Cuando se siente atacado, Squirtle esconde completamente su cuerpo en el interior de su caparazón, lo que hace que resulte imposible atacarle',
    imgURL: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png' ,
    tipo: 'agua',
    precio: 1200
    },
    {
    id: 3,  
    pName: 'Boulbasour',
    desc: 'This is the product number 3',
    det:'Bulbasaur es un Pokémon cuadrúpedo de color verde y manchas más oscuras de formas geométricas. Su cabeza representa cerca de un tercio de su cuerpo. En su frente se ubican tres manchas que pueden cambiar dependiendo del ejemplar. Tiene orejas pequeñas y puntiagudas. Sus ojos son grandes y de color rojo. Las patas son cortas con tres garras cada una. Este Pokémon tiene plantado un bulbo en el lomo desde que nace. Esta semilla crece y se desarrolla a lo largo del ciclo de vida de Bulbasaur a medida que suceden sus evoluciones. El bulbo absorbe y almacena la energía solar que Bulbasaur necesita para crecer. Dicen que cuanta más luz consuma la semilla, más olor producirá cuando se abra. Por otro lado, gracias a los nutrientes que el bulbo almacena, puede pasar varios días sin comer.',
    imgURL: 'https://static.wikia.nocookie.net/espokemon/images/4/43/Bulbasaur.png' ,
    tipo: 'planta',
    precio: 1500
    },
    
]

export const ItemDetailContainer = () =>{
    const [data, setData] = useState ([])
    const{detalleId} = useParams()
    useEffect(()=>{
        const getData = new Promise (resolve =>{
            setTimeout(()=>{
                resolve(products)
            }, 200)
        })
        getData.then (res => setData(res.find(pokemon => pokemon.id === parseInt(detalleId))))
    },[])
    return(
        <ItemDetail data = {data}/>
    );
}

export default ItemDetailContainer