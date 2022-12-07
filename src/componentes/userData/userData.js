import React from "react";
import './style.css'

export const UserForm = ({setName, setEmail, setAdress}) =>{
/*     const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('') */
/*     const user = {
        name: name,
        email: email,
        adress: adress
    } */
    const submit = () =>{
        console.log('hola')
    }
    return(
        <div className="formData">
            <label htmlFor="name">Nombre</label>
            <input type='text' id="name" onChange={(ev) => setName(ev.target.value)}/>
            <label htmlFor="email">Correo electronico</label>
            <input type='email' id="email" onChange={(ev) => setEmail(ev.target.value)}/>
            <label htmlFor="adress">Dirección</label>
            <input type='text' id="adress" onChange={(ev) => setAdress(ev.target.value)}/>
            <button onClick={submit}>Finalizar compra</button>
        </div>
    )
}

export default UserForm