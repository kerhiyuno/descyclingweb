import {useState,useEffect,useContext} from 'react';
import ListadoProductos from './productos/ListadoProductos';
import ProductosContext from '../context/productos/productosContext';
import './PaginaProductos.css';
import clienteAxios from '../config/axios';


const PaginaProductos = (props) => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    const {categorias, cambioCategoria} = useContext(ProductosContext)

    const [ListaProductos, guardarListaProductos] = useState([])
    const [listaCategorias, guardarListaCategorias] = useState([]);
    const [listaBotones, guardarListaBotones] = useState([])

    const [listaMostrar, guardarListaMostrar] = useState([])


    const obtenerCategorias= async () => {
        try {
        	const respuesta = await clienteAxios.get('/api/categorias/');
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
            const respuesta = await clienteAxios.get('/api/productos/');
            console.log(respuesta.data);
            guardarListaProductos(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    }

    const cambiosListaBotones = () => {
    	guardarListaBotones(listaCategorias.map(categoria =>{ return (
    	<button key={categoria} className={`botoncategorias m-1 ${categorias.includes(categoria) ? "pulsado" : "nopulsado"}`} onClick={()=>{cambioCategoria(categoria)}}>
    		{categoria}
    	</button>)}))
    }

    useEffect(()=>{
      obtenerProductos();
      obtenerCategorias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        if (listaCategorias.length){
            if (categorias[0]==="todos"){
                guardarListaMostrar(ListaProductos);
            } else {
                let nuevoListado = [];
                categorias.forEach(categoria => nuevoListado.push(ListaProductos.filter(producto => producto.categoria.nombre === categoria)));
                console.log("nuevo listado", nuevoListado.flat());
                guardarListaMostrar(nuevoListado.flat());
            }
        } else {
                guardarListaMostrar(ListaProductos);
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [categorias,ListaProductos]);

    useEffect(() => {
        if (listaCategorias.length){
            cambiosListaBotones();
          }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias,listaCategorias])

    return(
      <div className="col-12 p-5 mt-5">
        <h1>Nuestros productos</h1>
            <div className="d-flex flex-wrap justify-content-center mb-5 mt-4">
              <button className={`botoncategorias m-1 ${categorias.includes("todos") ? "pulsado" : "nopulsado"}`} onClick={()=>{cambioCategoria("todos")}}>Todos los productos</button>
              {listaBotones}
            </div>
            <ListadoProductos productos={listaMostrar}/>
        </div>
      )
    }

export default PaginaProductos;