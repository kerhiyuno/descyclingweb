import './DescripcionDescycling.css';

const DescripcionDescycling = ({titulo, descripcion, imagen}) => {
    return(
        <div className="col-sm-12 col-lg-3 col-md-3 bloqueimagendescripcion">
            <img src={imagen} className="imagenparrafo" alt=""/>           
            <h5 className="text-center mt-2">{titulo}</h5>
            <p className="parrafodescriptivo mt-2">{descripcion}</p>
        </div>
      )
    }

export default DescripcionDescycling;