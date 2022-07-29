import {useReducer, useEffect} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';

import {USUARIO_AUTENTICADO,LOGIN_EXITOSO,LOGIN_PREVIO,LIMPIAR_DATOS_SESION} from '../../types';

const AuthState = ({children}) => {

    useEffect(() => {
        let correo = localStorage.getItem('correo');
        let nombre = localStorage.getItem('nombre');
        let token = localStorage.getItem('token');
        let google = localStorage.getItem('google');
        if (correo &&  nombre ){
            datosDesdeLocalStorage(nombre,correo,token,google);
        }
    }, [])
    

    const initialState = {
        token: '',
        autenticado: null,
        correo: null,
        nombre: null,
        google: false
    }

    const [state,dispatch] = useReducer(AuthReducer,initialState);

    const usuarioAutenticado = (nombre) => {
        dispatch({
            type: USUARIO_AUTENTICADO,
            payload: nombre
        }
        );
    }

    const guardarDatosLogin = (correo,nombre,google) => {
        dispatch({
            type: LOGIN_EXITOSO,
            payload: {correo,nombre,google}
        }
        );
    }

    const datosDesdeLocalStorage = async (nombre,correo,token,google) => {

        try {
            const headers = {
                'x-token': token
              }
            const respuesta = await clienteAxios.get('/api/auth/',{headers});
            console.log(respuesta);
            localStorage.setItem('token', respuesta.data.token);
        } catch (error) {
            console.log(error.response)
        }
        dispatch({
            type: LOGIN_PREVIO,
            payload: {nombre,correo,google}
        }
        );
    }

    const limpiarDatosSesion = () => {
        dispatch({
            type: LIMPIAR_DATOS_SESION,
        }
        );
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                correo: state.correo,
                mensaje: state.mensaje,
                google: state.google,
                usuarioAutenticado,
                guardarDatosLogin,
                datosDesdeLocalStorage,
                limpiarDatosSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;