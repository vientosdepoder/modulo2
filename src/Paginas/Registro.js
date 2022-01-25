import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Componentes/FormularioGen';
import Button from 'react-bootstrap/Button'


function Registro() {
    const { register, handleSubmit } = useForm();
    

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <FormGroup label="NOMBRE" register={{...register("name")}} placeholder="ingrese nombre" textoAyuda="este campo es obligatorio"/> 
          <FormGroup label="APELLIDO" register={{...register("lastname")}} placeholder="ingrese apellido" textoAyuda="este campo es obligatorio"/>
          <FormGroup label="TELEFONO" register={{...register("telefono")}} placeholder="ingrese telefono" textoAyuda="código país+código de área+número sin el 15"/>
          <FormGroup label="EMAIL" type="email" register={{...register("email")}} placeholder="ingrese mail" textoAyuda="este campo es obligatorio"/>
          <FormGroup label="CONTRASEÑA" type="password" register={{...register("password")}} placeholder="ingrese contraseña" textoAyuda="debe contener mayúsculas y números"/>
          <FormGroup label="CONFIRMAR CONTRASEÑA" type="password" register={{...register("confirmarpassword")}} placeholder="confirmar contraseña"/>
          <Button variant="danger" type="submit">Registrarme</Button>
          
        </form>
  
      </div>
    );
  
  
}

export default Registro;
