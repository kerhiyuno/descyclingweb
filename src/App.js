import './App.css';
import  { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import PaginaProductos from './components/PaginaProductos';
import QuienesSomos from './components/QuienesSomos';
import Historia from './components/Historia';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import Barra from './components/layout/Barra';
import Footer from './components/layout/Footer';
import ProductosState from './context/productosState';



function App() {
  return (
      <BrowserRouter>
        <ProductosState>
        <Barra/>
        <Routes>
          <Route exact path="/" element={<Inicio />}/>
          <Route exact path="/Productos" element={<PaginaProductos />}/>
          <Route exact path="/QuienesSomos" element={<QuienesSomos />}/>
          <Route exact path="/Historia" element={<Historia />}/>
          <Route exact path="/Blog" element={<Blog />}/>
          <Route exact path="/Contacto" element={<Contacto />}/>
        </Routes>
        <Footer/>
        </ProductosState>
      </BrowserRouter>
  );
}

export default App;
