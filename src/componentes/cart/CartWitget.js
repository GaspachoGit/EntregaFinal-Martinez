import React, {useState} from 'react'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../itemCart/itemCart'
import './cart.css'
import {getFirestore, collection, addDoc} from 'firebase/firestore'



const Cart = ()=>{
    const {cart, precioTotal, clearCart} = useCartContext()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')

    const order = {
        buyer: {
            name: name,
            eMial: email,
            adress: adress
        },
        items: cart.map(product => ({id: product.id, product: product.pName, price: product.precio, quantity: product.quantity})),
        totalPrice: precioTotal(),
    }
    if (cart.length === 0) {
        return(
            <div className='sinProd'>
                <h2>No hay productos en el carrito</h2>
                <button className='boton'><Link to='/'>Realizar una compra</Link></button>
            </div>
        )
    }

    const handleClick = () =>{
        console.log(order)
        const db = getFirestore()
        const orderColections = collection(db, 'orders')
        addDoc(orderColections, order)
            .then(({ id })=>console.log(id)) 
        clearCart()
    }
    return(
        <div className='contenedorPadre'>
            <div className='cartContenedor'>
                {cart.map(product => <ItemCart key={product.id} product={product}/>)}
                <p>Precio total: ${precioTotal()}</p>
                <button onClick={()=> clearCart()} className='boton'>Vaciar carrito</button>
                <div className="formData">
                    <label htmlFor="name">Nombre</label>
                    <input type='text' id="name" onChange={(ev) => setName(ev.target.value)}/>
                    <label htmlFor="email">Correo electronico</label>
                    <input type='email' id="email" onChange={(ev) => setEmail(ev.target.value)}/>
                    <label htmlFor="adress">Dirección</label>
                    <input type='text' id="adress" onChange={(ev) => setAdress(ev.target.value)}/>
                    <button onClick={handleClick} className='boton'>Finalizar compra</button>
                </div>
            </div>
        </div>
    )

}

export default Cart