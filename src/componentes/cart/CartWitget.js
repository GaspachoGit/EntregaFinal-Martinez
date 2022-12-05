import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../itemCart/itemCart'
import './cart.css'



const Cart = ()=>{
    const {cart, precioTotal, clearCart} = useCartContext()
    if (cart.length === 0) {
        return(
            <div className='sinProd'>
                <h2>No hay productos en el carrito</h2>
                <button className='boton'><Link to='/'>Realizar una compra</Link></button>
            </div>
        )
    }

    return(
        <div className='contenedorPadre'>
            <div className='cartContenedor'>
                {cart.map(product => <ItemCart key={product.id} product={product}/>)}
                <p>Precio total: ${precioTotal()}</p>
                <button onClick={()=> clearCart()} className='boton'>Vaciar carrito</button>
                <button onClick={()=> clearCart()} className='boton'>Finalizar compra</button>
                
            </div>
        </div>
    )

}

export default Cart