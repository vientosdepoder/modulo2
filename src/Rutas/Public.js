import Home from '../Paginas/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Registro from '../Paginas/Registro';
import Login from '../Paginas/Login';
import Menu from '../Componentes/Menu';
import Detalle from '../Paginas/Detalle';
import Container from "react-bootstrap/Container"
function Public() {
  return (
    
      <Router>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/alta" element={<Registro />}/>
            <Route path="/ingresar" element={<Login />}/>
            <Route path="/producto/:id" element={<Detalle />}/>
          </Routes>
        </Container>
      </Router>

  );
}

export default Public;