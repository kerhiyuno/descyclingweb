import './Producto.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Producto = ({producto}) => {
    const navigate = useNavigate();
    const {id,nombre,descripcion,imagen} = producto;
    console.log(imagen, nombre);
    return (
        <div className = "col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card shadow border-0">
                <h3>{nombre}</h3>
                <img src={imagen} className="card-img-top imagen" alt=""/>
                <p>{descripcion}</p>
                <div className="row center botonesproducto">
                    <button type="button" className= "botonopciones" >Detalles</button>
                    <button type="button" className= "botonopciones" onClick={() => (navigate(`/Productos/${id}`))} >Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Producto;