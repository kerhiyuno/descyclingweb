import './Producto.css';
import { useNavigate } from 'react-router-dom';

const TarjetaProducto = ({producto}) => {
    const navigate = useNavigate();
    const {id,nombre,descripcion,imagen} = producto;
    console.log(imagen, nombre);
    return (
        <div className = "col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card shadow border-0">
                <h3>{nombre}</h3>
                <img src={imagen} className="card-img-top imagen" alt=""/>
                <p className='parrafodescriptivo p-2'>{descripcion}</p>
             {/*   <div className="row center botonesproducto mb-1 mt-1">
                    <button type="button" className= "botonopciones" onClick={() => (navigate(`/Productos/${id}`))}>Detalles</button>
                    <button type="button" className= "botonopciones" >Comprar</button>
    </div> */}
            </div>
        </div>
    )
}

export default TarjetaProducto;