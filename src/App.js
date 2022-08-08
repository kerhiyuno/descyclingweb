import './App.css';
import  { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Inicio from './components/Inicio';
import PaginaProductos from './components/PaginaProductos';
import QuienesSomos from './components/QuienesSomos';
import Historia from './components/Historia';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import Registro from './components/Registro';
import MiCuenta from './components/MiCuenta';
import Barra from './components/layout/Barra';
import Footer from './components/layout/Footer';

import ProductosState from './context/productos/productosState';
import AuthState from './context/auth/authState';


function App() {
  return (
      <BrowserRouter>
        <AuthState>
        <ProductosState>
        <Container fluid className="p-0">
            <Barra/>
            <Routes>
              <Route exact path="/" element={<Inicio />}/>
              <Route exact path="/Productos" element={<PaginaProductos />}/>
              <Route exact path="/QuienesSomos" element={<QuienesSomos />}/>
              <Route exact path="/Historia" element={<Historia />}/>
              <Route exact path="/Blog" element={<Blog />}/>
              <Route exact path="/Contacto" element={<Contacto />}/>
              <Route exact path="/Registro" element={<Registro />}/>
              <Route exact path="/MiCuenta" element={<MiCuenta />}/>
            </Routes>
            <Footer/>
        </Container>
        </ProductosState>
        </AuthState>
      </BrowserRouter>
  );
}

export default App;
