import './App.css';
import  { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Inicio from './components/Inicio';
import PaginaProductos from './components/PaginaProductos';
import QuienesSomos from './components/QuienesSomos';
import Prensa from './components/Prensa';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import Registro from './components/Registro';
import InicioSesion from './components/InicioSesion';
import MiCuenta from './components/MiCuenta';
import NuevaPassword from './components/NuevaPassword';
import OlvidePassword from './components/OlvidePassword';
import ConfirmarCuenta from './components/ConfirmarCuenta';
import DetalleProducto from './components/productos/DetalleProducto';
import Barra from './components/layout/Barra';
import Footer from './components/layout/Footer';
import Carrito from './components/Carrito';

import ProductosState from './context/productos/productosState';
import AuthState from './context/auth/authState';

import "@fontsource/poppins";

function App() {
  return (
      <BrowserRouter>
        <AuthState>
        <ProductosState>
        <Container fluid className="p-0">
            <Barra/>
            <Routes>
              <Route exact path="/Productos" element={<PaginaProductos />}/>
              <Route exact path="/Productos/:id" element={<DetalleProducto />}/>
              <Route exact path="/QuienesSomos" element={<QuienesSomos />}/>
              <Route exact path="/Prensa" element={<Prensa />}/>
              <Route exact path="/Blog" element={<Blog />}/>
              <Route exact path="/Contacto" element={<Contacto />}/>
              <Route exact path="/Registro" element={<Registro />}/>
              <Route exact path="/MiCuenta" element={<MiCuenta />}/>
              <Route exact path="/olvide-password/" element={<OlvidePassword/>}/>
              <Route exact path="/nueva-password/:token" element={<NuevaPassword/>}/>
              <Route exact path="/confirmar/:token" element={<ConfirmarCuenta />}/>
              <Route exact path="/IniciarSesion" element={<InicioSesion />}/>
              <Route exact path="/Carrito" element={<Carrito />}/>
              <Route exact path="/" element={<Inicio />}/>
            </Routes>
            <Footer/>
        </Container>
        </ProductosState>
        </AuthState>
      </BrowserRouter>
  );
}

export default App;
