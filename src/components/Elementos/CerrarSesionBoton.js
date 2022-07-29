import { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import './GoogleLoginBoton.css';

const CerrarSesionBoton = () => {

    const { limpiarDatosSesion } = useContext(AuthContext);

    
    const cerrarSesion = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('nombre');
        localStorage.removeItem('correo');
        localStorage.removeItem('google');
        limpiarDatosSesion();
    }
    return(
        <div>
            <button className="logoutGoogle mt-2" id="google_signout" onClick={() => {cerrarSesion()} }>Cerrar Sesión no google</button>
        </div>
      )
}

export default CerrarSesionBoton;