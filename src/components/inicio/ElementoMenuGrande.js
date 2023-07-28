import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductosContext from '../../context/productos/productosContext';

const ElementoMenuGrande = ({imagen, categoria, esProductos, ruta, rutaExterna}) => {
    const navigate = useNavigate();
    const {cambioCategoria} = useContext(ProductosContext)
    console.log(rutaExterna);
    const onClick = (esProductos) => {
        if (esProductos) {
            console.log("hola");
            cambioCategoria(categoria);
        }
        if (rutaExterna){
            window.location.replace(ruta);
        } else {
            navigate(ruta);
        }
    }

    return (
        <div className="col bloqueimagenboton">
                <div className='row'>
                    <img src={imagen} className="imagenSecciones" alt="" onClick={() =>{onClick(esProductos)}}/>
                    <div className='d-flex justify-content-center mt-1'>
                            {rutaExterna ? <a className= "botonSecciones" href={ruta}>{categoria}</a> : 
                            <button type="button" className= "botonSecciones"  onClick={() =>{onClick(esProductos)}}>{categoria}</button>}
                        </div>
            </div>
        </div>
    )
}

export default ElementoMenuGrande;