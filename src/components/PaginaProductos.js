import {useState,useEffect,useContext} from 'react';
import ListadoProductos from './productos/ListadoProductos';
import ProductosContext from '../context/productos/productosContext';
import './PaginaProductos.css';
//import clienteAxios from '../config/axios';

import producto1 from '../img/productos/placa_cuadrada.jpg';
import producto2 from '../img/productos/placa_hexagonal.jpg';
import producto3 from '../img/productos/placas_listeles.jpg';
import producto4 from '../img/productos/maceta_cuadrada.jpg';
import producto5 from '../img/productos/maceta_octagonal.jpg';
import producto6 from '../img/productos/porta_velas.jpg';

const PaginaProductos = (props) => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    const {categorias, cambioCategoria} = useContext(ProductosContext)

    const [ListaProductos, guardarListaProductos] = useState([])
    const [listaCategorias, guardarListaCategorias] = useState([]);
    const [listaBotones, guardarListaBotones] = useState([])
    const [listaMostrar, guardarListaMostrar] = useState([])


    const obtenerCategorias= async () => {
        try {
        	//const respuesta = await clienteAxios.get('/api/categorias/');
        	//let listadecategorias = []
            //respuesta.data.map(categoria => (listadecategorias.push(categoria.nombre)));
            //console.log(listadecategorias);
            let listadecategorias = ['Placas','Macetas','Decoración'];
            guardarListaCategorias(listadecategorias);
        } catch (error) {
            console.log(error);
        }
    }
    const obtenerProductos= async () => {
        try {
            //const respuesta = await clienteAxios.get('/api/productos/');
            //console.log(respuesta.data);
            //let listaProductos = respuesta.data;
            let listaProductos = [
                {
                    "id": 1,
                    "nombre": "Placa cuadrada",
                    "descripcion": "Placas de cemento para usos en piso o fachadas, útil para decorar espacios vacíos y otorgar una pizca de color, amor y sentido.",
                    "stock": 1,
                    "precio": 100,
                    "imagen": producto1,
                    "categoriaId": 1,
                    "estado": false,
                    "categoria": {
                        "nombre": "Placas"
                    }
                },
                {
                    "id": 2,
                    "nombre": "Placa hexagonal",
                    "descripcion": "Placas de cemento para usos en piso o fachadas, útil para decorar espacios vacíos y otorgar una pizca de color, amor y sentido.",
                    "stock": 1,
                    "precio": 1000,
                    "imagen": producto2,
                    "categoriaId": 4,
                    "estado": true,
                    "categoria": {
                        "nombre": "Placas"
                    }
                },
                {
                    "id": 3,
                    "nombre": "Placa estilo listeles",
                    "descripcion": "Placas de cemento para usos en piso o fachadas, útil para decorar espacios vacíos y otorgar una pizca de color, amor y sentido.",
                    "stock": 1,
                    "precio": 1000,
                    "imagen": producto3,
                    "categoriaId": 6,
                    "estado": true,
                    "categoria": {
                        "nombre": "Placas"
                    }
                },
                {
                    "id": 4,
                    "nombre": "Maceta cuadrada",
                    "descripcion": "Macetas perfectas para suculentas y plantas con bajo crecimiento de raíces. Impermeabilizada y con salida para evacuación de exceso de agua.",
                    "stock": 1,
                    "precio": 1000,
                    "imagen": producto4,
                    "categoriaId": 2,
                    "estado": true,
                    "categoria": {
                        "nombre": "Macetas"
                    }
                },
                {
                    "id": 5,
                    "nombre": "Maceta octagonal",
                    "descripcion": "Macetas perfectas para suculentas y plantas con bajo crecimiento de raíces. Impermeabilizada y con salida para evacuación de exceso de agua.",
                    "stock": 1,
                    "precio": 1000,
                    "imagen": producto5,
                    "categoriaId": 2,
                    "estado": true,
                    "categoria": {
                        "nombre": "Macetas"
                    }
                },
                {
                    "id": 6,
                    "nombre": "Portavelas",
                    "descripcion": "Decoración para crear espacios únicos y novedosos.",
                    "stock": 1,
                    "precio": 1000,
                    "imagen": producto6,
                    "categoriaId": 2,
                    "estado": true,
                    "categoria": {
                        "nombre": "Decoración"
                    }
                }
            ];
            guardarListaProductos(listaProductos);
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