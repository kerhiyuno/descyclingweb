
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import './Elementos/Formulario';
import clienteAxios from '../config/axios';

const OlvidePassword = () => {

    const [correo, guardarCorreo] = useState('');
    const [cargando, guardarCargando] = useState(false);
    
    const [exito, guardarExito] = useState(false);
    const [error, guardarError] = useState(false);
    const [mensajeError, guardarMensajeError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        guardarExito();
        guardarError(false);
        guardarCargando(true);
        if (correo === '' || correo.length < 6){
            guardarMensajeError('Todos los campos son obligatorios');
            guardarError(true);
            return;
        }
        try {
            const { data } = await clienteAxios.post('/api/usuarios/olvide-password',{
                correo
            });
            console.log(data);
            guardarExito(true);
            guardarCorreo('');
        } catch (error) {
            console.log(error.response);
            guardarMensajeError('Ha ocurrido un error')
            guardarError(true);
        }
        guardarCargando(false);
    /*    emailjs.send('default_service','template_tab7tfm', mensaje, 'user_KIA3KKcjVJqtsoccAvicG')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
                   guardarExito(true);
                   guardarCargando(false);
		}, (err) => {
				   console.log('FAILED...', err);
                   guardarError(true);
                   guardarCargando(false);
		});*/
    }

    return (
        <div className="container" style={{marginBottom: "13%"}}>
            <div className="mt-5" align="center">
                <div className="formulario">
                <form className="col-lg-4 col-md-6" onSubmit={handleSubmit}>
                    <fieldset className="text-center">
                        <legend>Solicitud de cambio de contraseña</legend>
                    </fieldset>
                    <div className="col">
                        <div className="row-md-4 row-lg-6 mt-2">
                            <input
                                name="correo"
                                className="form-control"
                                type="text"
                                placeholder="Ingresa tu correo"
                                onChange={(e) => guardarCorreo(e.target.value)}
                                value={correo}
                            />
                        </div>
                    </div>
                    <div className="row px-2">
                        <input
                            type="submit"
                            className="btn btn-block btn-primary mt-2"
                            value="Enviar"
                        />
                    </div>
                </form>
                </div>
                <div className="resultadocontacto">
                    {error ? <p className="alert alert-danger" role="alert">{mensajeError}</p> : null}
                    {exito ? <p className="alert alert-success" role="alert">Solicitud enviada correctamente</p> : null}
                    <SpinnerCircular enabled={cargando} />
                </div>
            </div>
        </div>
    )
}

export default OlvidePassword;