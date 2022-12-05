import React from "react";
import './style.css'
import { useCartContext } from "../../context/cartContext";

export const ItemCart = ({product}) =>{

const {removerDelCart} = useCartContext();

    return(
        <div className="itemCart">
            <img src={product.imgURL} alt={product.pName}/>
            <div>
                <p>Titulo: {product.pName}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio individual: {product.precio}</p>
                <p>Sub Total: ${product.quantity * product.precio} </p>
                <button onClick={() => removerDelCart(product.id)} className='boton'>Eliminar</button>
                
            </div>
        </div>
    )
}

export default ItemCart