
import { Link } from "react-router-dom";
import { Card, Button, Container } from 'react-bootstrap'


const styles = {
  cardContainer: {
    marginBottom: "10px",
    width: '14rem',
    marginTop: "15px",
    height:"auto",

  },
  
}

const Producto = ({ producto, cargar, carro }) => (

  <Card style={styles.cardContainer}>
    <Card.Img variant="top" src={producto.thumbnail} />
     
    <Card.Body className="d-flex align-content-end flex-wrap">
      <Card.Title>{producto.title} </Card.Title>
      <a target='_blank' href={producto.permalink}>LINK MP </a>
      <Card.Text>$
        {producto.price} </Card.Text>
      <Button variant="danger" as={Link} to={"/producto/" + producto.id}>Detalle</Button>

      <Button variant="danger" onClick={() => cargar(producto.id)} >{carro.filter((item) => (item === producto.id)).length > 0 ? 'Sacar' : 'Agregar'}</Button>

    </Card.Body>
    
    
    <Card.Footer>
      <small className="text-muted">{producto.id}</small>

    </Card.Footer>
  </Card>
 
);


export default Producto;