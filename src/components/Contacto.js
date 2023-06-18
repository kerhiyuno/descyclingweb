import Formulario from './Elementos/Formulario';
import './Contacto.css';
import portada from '../img/contacto/Contacto_portada.jpg';


const Contacto = () => {
    return(
        <div className='p-5 mt-5'>
            <h1>¿Quieres contactarnos?</h1>
            <div className="container mb-5">
                <div className="row" align="center">
                    <div className='col'>
                        <img 
                        className="col w-100 mt-4 p-0"
                        src={portada}
                        alt="Contacto"
                        />
                    </div>
                    <Formulario />
                </div>
                
            </div>
        </div>
      )
    }

export default Contacto;