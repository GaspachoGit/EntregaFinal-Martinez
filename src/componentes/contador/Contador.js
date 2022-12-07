import React, {useState} from "react";

const Contador = ({ texto, initial, stock, onAdd})=>{
    const [count, setCount] = useState(initial)
    const suma = () =>{
        setCount(previousCount=> previousCount + 1)
    }
    const resta = () =>{
        setCount (previousCount=> previousCount - 1)
    }
    return(
        <div>
            <button disabled={count <= 0} onClick={resta} className='incButton'>-</button>
            <span className="contadorText">{count}</span>
            <button disabled={count >= stock} onClick={suma} className='incButton'>+</button>
            <div className="botonAnadir">
                <button disabled={count <= 0} onClick={() => onAdd(count)} className='button-primary'>{texto}</button>
            </div>
        </div>
    )
}
export default Contador