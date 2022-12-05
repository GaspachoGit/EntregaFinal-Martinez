import React, {useState, useContext}from "react";
const CartContext = React.createContext ([]);
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProduct = (item, quantity) => {
        if (estaEnCart(item.id)) {
            setCart(cart.map(product =>{
                return product.id === item.id? {...product, quantity: product.quantity + quantity} : product
            }))
        } else {
            setCart ([...cart, {...item, quantity}])
        }
        
    }
    const precioTotal = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

/*     const totalDeProductos = () =>{
        return cart.reduce ((acum, actual)=> acum + actual.quantity, 0)
    } */

    const clearCart = () => setCart([])

    const estaEnCart = (id) => cart.find (product => product.id === id)? true : false

    const removerDelCart = (id) => setCart(cart.filter (product => product.id !== id))



    return(
        <CartContext.Provider value={{clearCart, estaEnCart, removerDelCart, addProduct, precioTotal, cart}}>
            {children}
        </CartContext.Provider>
        )
}

export default CartProvider