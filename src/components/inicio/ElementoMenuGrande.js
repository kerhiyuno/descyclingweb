import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductosContext from '../../context/productos/productosContext';

const ElementoMenuGrande = ({imagen, categoria, esProductos, ruta}) => {
    const navigate = useNavigate();
    const {cambioCategoria} = useContext(ProductosContext)

    const onClick = (esProductos) => {
        if (esProductos) {
            console.log("hola");
            cambioCategoria(categoria);
        }
        navigate(ruta);
    }

    return (
        <div className="col bloqueimagenboton">
                <div className='row'>
                    <img src={imagen} className="imagenSecciones" alt="" onClick={() =>{onClick(esProductos)}}/>
                        <div className='d-flex justify-content-center mt-1'>
                            <button type="button" className= "botonSecciones"  onClick={() =>{onClick(esProductos)}}>{categoria}</button>
                        </div>
            </div>
        </div>
    )
}

export default ElementoMenuGrande;