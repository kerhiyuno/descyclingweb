import './App.css';
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import PaginaProductos from './components/PaginaProductos';
import QuienesSomos from './components/QuienesSomos';
import Historia from './components/Historia';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import Barra from './components/layout/Barra';



function App() {
  return (
      <Router>
        <Barra/>
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/Productos" component={PaginaProductos}/>
          <Route exact path="/QuienesSomos" component={QuienesSomos}/>
          <Route exact path="/Historia" component={Historia}/>
          <Route exact path="/Blog" component={Blog}/>
          <Route exact path="/Contacto" component={Contacto}/>
        </Switch>
      </Router>
  );
}

export default App;
