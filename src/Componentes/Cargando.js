import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

//preloader

function Cargando() {
  return (
   <Spinner animation="border" variant="danger">
     <Spinner animation="grow" size="sm" />
   </Spinner>
   

  );

}
export default Cargando;
