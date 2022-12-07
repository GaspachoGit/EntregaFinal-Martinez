import React, {useState} from "react";
import './detalle.css'
import Contador from "../contador/Contador";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

export const ItemDetail = ({data}) =>{
    const [goCart, setGoCart] = useState(false);
    const {addProduct} = useCartContext()

    const onAdd = (cantidad) => {
        setGoCart(true)
        addProduct(data, cantidad)
        
    }
    
    return(
        <div className="contenedor">
            <div className="detalle">
                    <img className="imgDetalle" src={data.imgURL} alt='sad'/>
                    <div className="contenido">
                        <h1>{data.pName}</h1>
                        <p className="descripcion">{data.det}</p> 
                        
                        {
                            goCart
                                ? <div><button className="boton"><Link to={'/carrito'}>ir al carrito</Link></button><button className="boton"><Link to={'/'}>Seguir comprando</Link></button> </div> 
                                :<Contador initial={0} stock={5000} onAdd={onAdd} texto='Añadir al carrito'></Contador>
                        } 
                    
                    </div>
            </div>
        </div>
    
    );
}

export default ItemDetail