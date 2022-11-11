import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({logo})=>{
    return(
        <nav className='navBar'>
            <NavLink to='/'><img src={logo} className='logo'/></NavLink>
            <ul>

                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/tipo/fuego'>fuego</NavLink>
                </li>
                <li>
                    <NavLink to='/tipo/planta'>planta</NavLink>
                </li>
                <li>
                    <NavLink to='/tipo/agua'>agua</NavLink>
                </li>
                <NavLink to ='/carrito'>
                    <li className='cart'>
                            <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png'/>
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}
export default NavBar     
