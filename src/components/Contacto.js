import Formulario from './Elementos/Formulario';
import './Contacto.css';

const Contacto = () => {
    return(
        <div className='p-5 mt-5'>
            <h1>¿Quieres contactarnos?</h1>
            <div className="container mb-5">
                <div className="row" align="center">
                    <Formulario />
                </div>
            </div>
        </div>
      )
    }

export default Contacto;