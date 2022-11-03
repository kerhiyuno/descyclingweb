import { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import clienteAxios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import './ConfirmarCuenta.css';


const ConfirmarCuenta = () => {

    const { token } = useParams();
    const navigate = useNavigate();
    const [ error, guardarError ] = useState(false); 
    const [ cargando, guardarCargando ] = useState(false); 

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                guardarError(false);
                guardarCargando(true);
                const respuesta = await clienteAxios.get(`/api/usuarios/confirmar/${token}`);
                console.log(respuesta);
            } catch (error) {
                guardarError(true);
            }
            guardarCargando(false);
        }
        confirmarCuenta();
    }, [])
    

    return (
        <div className='alertaresultado mt-5'>
        {error && !cargando && <p className="alert alert-danger" role="alert">El token no es válido</p>}
        {!error && !cargando && (
        <div>
            <p className="alert alert-success" role="alert">Usuario validado correctamente</p>
            <button type="button" className= "btn btn-success"  onClick={() =>{navigate('/MiCuenta')}}>Iniciar Sesion</button>
        </div>)}
        </div>
    )
}

export default ConfirmarCuenta;