import './DescripcionDescycling.css';

const DescripcionDescycling = ({titulo, descripcion, imagen}) => {
    return(
        <div className="col-6 col-sm-4 col-lg-3 bloqueimagendescripcion">
            <img src={imagen} className="imagenparrafo" alt=""/>           
            <h5 className="text-center mt-2">{titulo}</h5>
            <p className="parrafodescriptivo mt-2">{descripcion}</p>
        </div>
      )
    }

export default DescripcionDescycling;