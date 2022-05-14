import './Producto.css';


const Producto = ({producto}) => {
    
    const {nombre,descripcion,imagen} = producto;
    console.log(imagen);
    return (
        <div className = "col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <div className="card shadow border-0">
                <h3>{nombre}</h3>
                <img src={imagen} className="card-img-top imagen" alt=""/>
                <p>{descripcion}</p>
                <div className="row center botones">
                    <button type="button" className= "botonopciones" >Detalles</button>
                    <button type="button" className= "botonopciones" >Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Producto;