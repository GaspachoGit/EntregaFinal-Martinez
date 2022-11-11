import React from "react";
import './detalle.css'

export const ItemDetail = ({data}) =>{
    return(

        <div className="contenedor">
            <div className="detalle">

                    <img className="imgDetalle" src={data.imgURL} alt=''/>
                    <div className="contenido">
                        <h1>{data.pName}</h1>
                        <p className="descripcion">{data.det}</p>
                    </div>

            </div>
        </div>
    
    );
}

export default ItemDetail