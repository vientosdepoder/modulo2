import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Producto from '../Componentes/Producto';
import { getAllProductos } from "../ProductosServicios/ProductosServ"
import firebase from '../Configuracion/firebase';
import Cargando from '../Componentes/Cargando';
import { Row } from 'react-bootstrap'
import App from '../App';



function Home() {

  const [carro, cargarCarro] = useState([])


  const cargar = (id) => {
    if (carro.indexOf(id) !== -1) {
      let id_producto = carro.indexOf(id)
      carro.splice(id_producto, 1)
    } else {
      carro.push(id)
    }
    cargarCarro(carro)
    console.log(carro.length, carro)
    ReactDOM.render(<React.StrictMode>
      <App />
    </React.StrictMode>, document.getElementById('root'))
  }
  /** Los estados que manipula */
  const [productos, colocarProductos] = useState([])
  const [loading, colocarCargando] = useState(true)

  console.log(firebase)

  /** f(v,u) -> v:F, u:[] */
  /*** Disparo del componento */
  useEffect(
    () => {

      /** Define la consulta */
      const request = async () => {
        try {
          /** CONSULTA */
          const response = await getAllProductos()
          /** LOG */
          console.log(response.data);
          /** verifico datos */
          if (response.data.results) {
            /** Cargo datos en 'productos' con la funcion 'cargarProductos' */
            colocarProductos(response.data.results)
            /** Cambio el estado del loading con la funcion 'colocarCargando' */
            colocarCargando(false)
          }
        } catch (e) {
          /** por si falla algo */
          console.log(e)
        }
      }

      /**Ejecuta la consulta */
      request()
    },
    []
  )

  /** Muestro la carga */
  if (loading) {
    return (
      <div>
        <h1>Cargando</h1>
        <Cargando />

      </div>
    );
  } else {

    
    return (

      <Row xs={"auto"} md={"auto"} className="auto">
        {productos.map(producto => <Producto key={producto.id} producto={producto} cargar={cargar} carro={carro} />)}

      </Row>
     

    );
  }

}

export default Home;