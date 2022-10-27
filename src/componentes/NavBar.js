import React from 'react'
import Cart from './CartWitget'

const NavBar = ({logo})=>{
    return(
        <nav className='navBar'>
            <a><img src={logo} className='logo'/></a>
            <ul>
                
                <li>
                    <a>Proyecto</a>
                </li>
                <li>
                    <a>Serie</a>
                </li>
                <li>
                    <a>Juego</a>
                </li>
                <li className='cart'>
                        <Cart img='https://cdn-icons-png.flaticon.com/512/107/107831.png'/>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar     
