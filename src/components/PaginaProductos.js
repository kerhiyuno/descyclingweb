import React, {useState,useEffect} from 'react';
import ListadoProductos from './productos/ListadoProductos';
import './PaginaProductos.css';

import uno from '../img/Maceteros/1.jpeg';
import dos from '../img/Maceteros/2.jpeg';
import tres from '../img/Maceteros/3.jpeg';
import cuatro from '../img/Maceteros/4.jpeg';
import cinco from '../img/Maceteros/5.jpeg';
import seis from '../img/Maceteros/6.jpeg';

const PaginaProductos = (props) => {

    const  [ListaProductos, guardarListaProductos] = useState([{id: 1,nombre: "Macetero 1", descripcion: "muy bueno", imagen: uno, categoria:"1"},
                                                                {id: 2,nombre: "Macetero 2", descripcion: "muy dos", imagen: dos, categoria:"1"},
                                                                {id: 3,nombre: "Macetero 3", descripcion: "muy tres", imagen: tres, categoria:"2"},
                                                                {id: 4,nombre: "Macetero 4", descripcion: "muy cuatro", imagen: cuatro, categoria:"2"},
                                                                {id: 5,nombre: "Macetero 5", descripcion: "muy cinco", imagen: cinco, categoria:"3"},
                                                                {id: 6,nombre: "Macetero 6", descripcion: "muy seis", imagen: seis, categoria:"3"}])
    const [categorias,guardarCategorias] = useState(["todos"]);
    const [primeraCarga, guardarPrimeraCarga] = useState(true);
    const [listaCategorias, guardarListaCategorias] = useState(["1","2","3"]);
    const [listaBotones, guardarListaBotones] = useState([])

    const [listaMostrar, guardarListaMostrar] = useState([{id: 1,nombre: "Macetero 1", descripcion: "muy bueno", imagen: uno},
    {id: 2,nombre: "Macetero 2", descripcion: "muy dos", imagen: dos},
    {id: 3,nombre: "Macetero 3", descripcion: "muy tres", imagen: tres},
    {id: 4,nombre: "Macetero 4", descripcion: "muy cuatro", imagen: cuatro},
    {id: 5,nombre: "Macetero 5", descripcion: "muy cinco", imagen: cinco},
    {id: 6,nombre: "Macetero 6", descripcion: "muy seis", imagen: seis}])


    useEffect(() => {
      if (primeraCarga){
        if (props.location.state !== undefined){
          guardarCategorias([props.location.state.state]);
        }
        guardarPrimeraCarga(false);
      }
      if (categorias[0]==="todos"){
        guardarListaMostrar(ListaProductos);
      }
      else {
        let nuevoListado = [];
        categorias.forEach(categoria => nuevoListado.push(ListaProductos.filter(producto => producto.categoria === categoria)));
        console.log("nuevo listado", nuevoListado.flat());
        guardarListaMostrar(nuevoListado.flat());
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias,ListaProductos]);

    useEffect(() => {
      cambiosListaBotones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias])




    const cambioCategorias = (cambio) => {
      if (cambio === "todos"){
        guardarCategorias(["todos"]);
      }
      else{
        if (categorias.includes(cambio)){
          if (categorias.length === 1) {
            guardarCategorias(["todos"]);
          }
          else {
            guardarCategorias(categorias.filter(categoria => categoria !== cambio));
          }
        }
        else if (categorias[0]==="todos"){
          guardarCategorias([cambio]);
        }
        else{
          console.log([...categorias,cambio]);
          guardarCategorias([...categorias,cambio])
        }
      }   
    }

    const cambiosListaBotones = () => {
      guardarListaBotones(listaCategorias.map(categoria =>{return (<button key={categoria} className={`botoncategorias ${categorias.includes(categoria)===true?"pulsado":"nopulsado"}`} onClick={()=>{cambioCategorias(categoria)}}>{categoria}</button>)}))
    }

    return(
      <div className="col-12 p-5 mt-5">
        <h1>Nuestros productos</h1>
          <div className="">
            <div className="col mb-5">
            <button className={`botoncategorias ${categorias.includes("todos")===true?"pulsado":"nopulsado"}`} onClick={()=>{cambioCategorias("todos")}}>Todos los productos</button>
            {listaBotones}
            </div>
            <ListadoProductos productos={listaMostrar}/>
          </div>
        </div>
      )
    }

export default PaginaProductos;