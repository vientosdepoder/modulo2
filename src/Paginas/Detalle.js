import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import {getByIdProductos} from "../ProductosServicios/ProductosServ"
import Cargando from '../Componentes/Cargando';

function Detalle() {
  const [producto,colocarProducto] = useState({})
  const [loading,colocarCargando] = useState(true)
  const {id} = useParams();
  console.log("id",id)
  useEffect(
    ()=>{
      const prueba = async ()=>{
        try{
          const respuesta = await getByIdProductos(id);
          if(respuesta.data){
            colocarProducto(respuesta.data)
            colocarCargando(false)
          }
        }catch(e){
          
        }
      }
      prueba()
    },
    [id]
  )
  if(loading){
    return (
      <Cargando/>
    );
  }else{
    return (
      <div>
        <p>{producto.title}</p>
        <p>{producto.price}</p>
      <img src={producto.thumbnail} />
        <p><button>Comprar</button></p>
      </div>
    );
  }
  
}

export default Detalle;
