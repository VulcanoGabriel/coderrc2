/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import './ItemListContainer.css';
import { contenedorServicios } from "./database/baseDatos";
// import { ItemCount } from "../ItemCount/ItemCount"
import { ItemList } from "../components/ItemList";
import { useParams } from "react-router-dom";
import  "./styles/ItemListContainer.css"

export const ItemListContainer = ()=>{
    const {tipoProducto} = useParams();

    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(contenedorServicios);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])

    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}