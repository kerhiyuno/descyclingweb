import prensa1 from '../img/prensa/prensa1.jpg';
import prensa2 from '../img/prensa/prensa2.jpg';
import prensa3 from '../img/prensa/prensa3.jpg';
import open from '../img/prensa/open.jpg';


import './Prensa.css';

const Prensa = () => {
    return(
        <div className="p-2 mt-5 mb-5">
            <h1 className="p-2 mt-5 mb-4">Prensa</h1>
            <h3 className="p-3 mt-5 mb-1">OpenBeauchef</h3>
            <h5 className="mb-2">La primera nota de prensa hecha para Descycling desde OpenBeauchef <a href='https://openbeauchef.cl/descycling-la-nueva-apuesta-para-revalorizar-los-residuos-de-vidrio-plastico-y-caucho/'>LEER</a></h5>
            <div className='d-flex justify-content-center'>
                <img 
                    className="noticia"
                    src={open}
                    alt="prensa1"
                /> 
            </div>
            <h3 className="p-5 mt-5">Hitos</h3>
            <div className='row justify-content-center'>
                <img 
                    className="col-lg-3 colprensa"
                    src={prensa1}
                    alt="prensa1"
                />
                <img 
                    className="col-lg-3 colprensa"
                    src={prensa2}
                    alt="prensa1"
                />
                <img 
                    className="col-lg-3 colprensa"
                    src={prensa3}
                    alt="prensa1"
                />
            </div>
        </div>
    )
}

export default Prensa;