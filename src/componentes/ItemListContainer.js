import React, {useState, useEffect} from "react";
import Lista from "./ItemList";
import { useParams } from "react-router-dom";

const products = [
    {
    id: 1,
    pName: 'Charmander',
    desc: 'This is the product number 1',
    imgURL: 'https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Pic.png' ,
    tipo: 'fuego'
    },
    {
    id: 2,
    pName: 'Squirtle',
    desc: 'This is the product number 2',
    imgURL: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png' ,
    tipo: 'agua'
    },
    {
    id: 3,
    pName: 'Boulbasour',
    desc: 'This is the product number 3',
    imgURL: 'https://static.wikia.nocookie.net/espokemon/images/4/43/Bulbasaur.png' ,
    tipo: 'planta'
    },
    
]

export const ItemListcontainer = () =>{
    const [data, setData] = useState ([])
    const {tipoId} = useParams();
    useEffect(()=>{
        const getData = new Promise (resolve =>{
            setTimeout(()=>{
                resolve(products)
            }, 1000)
        })
        if (tipoId) {
            getData.then(res => setData(res.filter(product => product.tipo === tipoId)))
        } else {
            getData.then(res => setData(res))
        }

    }, [tipoId])

    return(
        <div className='products'>        
            <Lista data={data}/>

        </div>
    )
}

export default ItemListcontainer