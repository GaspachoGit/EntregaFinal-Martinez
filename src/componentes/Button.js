import React from "react";

const Button = ({pulsado, texto})=>{
    return(
        <button onClick={pulsado} className='button-primary'>{texto}</button>
    )
}
export default Button