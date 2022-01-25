import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'




function Login() {
 return (
 
<Form className="formulario">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Correo electrónico</Form.Label>
    <Form.Control type="email" placeholder="Ingrese correo" />
    <Form.Text className="text-muted">
      Nunca compartiremos su correo con nadie!
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Registrarme" />
  </Form.Group>
  <Button variant="danger" type="submit">
    Admitir
  </Button>
</Form>
 );
}
 

export default Login;