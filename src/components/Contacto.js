import Formulario from './Elementos/Formulario';
import './Contacto.css';
import portada from '../img/contacto/Contacto_portada.jpg';


const Contacto = () => {
    return(
        <div className='p-5 mt-5'>
            <h1>¿Quieres contactarnos?</h1>
            <div className="container mb-5">
                <div className="row" align="center">
                    <div className='col-md-6'>
                        <img 
                        className="col w-100 mt-4 p-0 imagenContacto"
                        src={portada}
                        alt="Contacto"
                        />
                    </div>
                    {/*<Formulario />*/ }
                    <div className='col-md-6 d-flex align-items-center justify-content-center mt-3'>
                        <div className='row justify-content-center'>
                            <h4 >Escribanos a descycling@gmail.com o en este fomulario</h4>
                            <a className= "botonSecciones botonFormulario mt-3" href={'https://docs.google.com/forms/d/e/1FAIpQLSfcwcxFOfaZLor9GIYz5ofaQ5UGlXqiXXP9QXD8XrVyYXIAEQ/viewform?usp=sf_link'}>FORMULARIO</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      )
    }

export default Contacto;