import { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import './Partner.css';

const Partner = ({imagen}) => {

    const { limpiarDatosSesion } = useContext(AuthContext);

    
    const cerrarSesion = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('nombre');
        localStorage.removeItem('correo');
        localStorage.removeItem('google');
        limpiarDatosSesion();
    }
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