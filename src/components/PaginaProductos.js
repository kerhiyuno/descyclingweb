import {useState,useEffect,useContext} from 'react';
import ListadoProductos from './productos/ListadoProductos';
import ProductosContext from '../context/productosContext';
import './PaginaProductos.css';
import axios from 'axios';


const PaginaProductos = (props) => {

     const {categorias, cambioCategoria} = useContext(ProductosContext)

    const  [ListaProductos, guardarListaProductos] = useState([])
    const [listaCategorias, guardarListaCategorias] = useState([]);
    const [listaBotones, guardarListaBotones] = useState([])

    const [listaMostrar, guardarListaMostrar] = useState([])


    const obtenerCategorias= async () => {
      try {
          const respuesta = await axios.get('http://localhost:4000/api/categorias/');
          let listadecategorias = []
          respuesta.data.map(categoria => (listadecategorias.push(categoria.nombre)));
          console.log(listadecategorias);
          guardarListaCategorias(listadecategorias);
      } catch (error) {
          console.log(error);
      }
  }
  const obtenerProductos= async () => {
    try {
        const respuesta = await axios.get('http://localhost:4000/api/productos/');
        console.log(respuesta.data);
        guardarListaProductos(respuesta.data);
    } catch (error) {
        console.log(error);
    }
}
    useEffect(()=>{
      obtenerProductos();
      obtenerCategorias();
    },[])

    useEffect(() => {
      if (categorias[0]==="todos"){
        guardarListaMostrar(ListaProductos);
      }
      else {
        let nuevoListado = [];
        categorias.forEach(categoria => nuevoListado.push(ListaProductos.filter(producto => producto.categoria.nombre === categoria)));
        console.log("nuevo listado", nuevoListado.flat());
        guardarListaMostrar(nuevoListado.flat());
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias,ListaProductos]);

    useEffect(() => {
      cambiosListaBotones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias,listaCategorias])



    const cambiosListaBotones = () => {
      guardarListaBotones(listaCategorias.map(categoria =>{return (<button key={categoria} className={`botoncategorias ${categorias.includes(categoria)===true?"pulsado":"nopulsado"}`} onClick={()=>{cambioCategoria(categoria)}}>{categoria}</button>)}))
    }

    return(
      <div className="col-12 p-5 mt-3">
        <h1>Nuestros productos</h1>
          <div className="">
            <div className="col mb-5">
            <button className={`botoncategorias ${categorias.includes("todos")===true?"pulsado":"nopulsado"}`} onClick={()=>{cambioCategoria("todos")}}>Todos los productos</button>
            {listaBotones}
            </div>
            <ListadoProductos productos={listaMostrar}/>
          </div>
        </div>
      )
    }

export default PaginaProductos;