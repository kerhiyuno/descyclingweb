import { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import InicioSesion from './InicioSesion';
import Perfil from './Perfil';

const MiCuenta = () => {
    const { autenticado } = useContext(AuthContext);
    return(
        <div>
            { autenticado ? <Perfil/> : <InicioSesion/>}
        </div>
      )
    }

export default MiCuenta;