import './Partner.css';

const Partner = ({imagen}) => {
    return(
        <div className='d-flex col justify-content-center'>
            <img 
                className="imagenpartner img-fluid"
                src={imagen}
                alt="logo1"
            />
         </div>
    )
}

export default Partner;