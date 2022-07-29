import Formulario from './Elementos/Formulario';
import './Contacto.css';

const Contacto = () => {
    return(
        <div className='p-5 mt-3'>
            <h1>Contacto</h1>
            <div className="container mb-5">
                <div className="row" align="center">
                    <Formulario />
                </div>
            </div>
        </div>
      )
    }

export default Contacto;