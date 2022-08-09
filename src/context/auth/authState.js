import {useReducer, useEffect} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';

import {USUARIO_AUTENTICADO,LOGIN_EXITOSO,LOGIN_PREVIO,LIMPIAR_DATOS_SESION} from '../../types';

const AuthState = ({children}) => {

    useEffect(() => {
        let correo = localStorage.getItem('correo');
        let nombre = localStorage.getItem('nombre');
        let accessToken = localStorage.getItem('accessToken');
        let google = localStorage.getItem('google');
        if (correo &&  nombre ){
            datosDesdeLocalStorage(nombre,correo,accessToken,(google === 'true'));
        }
    }, [])
    

    const initialState = {
        accessToken: '',
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

    const datosDesdeLocalStorage = async (nombre,correo,accessToken,google) => {

        try {
            const headers = {
                'x-token': accessToken
              }
            const respuesta = await clienteAxios.post('/api/auth/refresh-token',{headers});
            console.log(respuesta);
            localStorage.setItem('accessToken', respuesta.data.accessToken);
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
                accessToken: state.accessToken,
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