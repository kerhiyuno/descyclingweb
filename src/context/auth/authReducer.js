import {USUARIO_AUTENTICADO,LOGIN_EXITOSO,LOGIN_PREVIO,LIMPIAR_DATOS_SESION} from '../../types';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) =>{
    switch (action.type){
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload
            }
        case LOGIN_EXITOSO:
        case LOGIN_PREVIO:
            return {
                ...state,
                correo: action.payload.correo,
                nombre: action.payload.nombre,
                google: action.payload.google,
                autenticado: true
            }
        case LIMPIAR_DATOS_SESION:
            return {
                ...state,
                correo: null,
                nombre: null,
                google: false,
                autenticado: false
            }
        default:
            return state;
    }
}