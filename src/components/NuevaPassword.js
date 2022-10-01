import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import clienteAxios from '../config/axios';

const NuevaPassword = () => {
    const [formulario, guardarFormulario] = useState({
        password:'',
        confirmar:''
    })
    const [cargando, guardarCargando] = useState(false);
    
    const [exito, guardarExito] = useState(false);
    const [error, guardarError] = useState(false);
    const [mensajeError, guardarMensajeError] = useState('');

        
    const modificarFormulario = (e) => {
        guardarFormulario({
            ...formulario,
            [e.target.name] : e.target.value,
        })
        console.log(formulario)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        guardarExito(false);
        guardarError(false);
        if(Object.values(formulario).includes('')){
            guardarMensajeError('Todos los campos son obligatorios');
            return;
        }
        if(formulario.confirmar != formulario.password){
            guardarMensajeError('Las contraseñas deben ser iguales');
            guardarError(true);
            return;
        }
        guardarCargando(true);
        try {
            const respuesta = await clienteAxios.post('/api/usuarios/',{
                password: formulario.password
            });
            console.log(respuesta);
            guardarExito(true);
            guardarFormulario({
                password:'',
                confirmar:''
            });
            guardarMensajeError('');
        } catch (error) {
            console.log(error);
            console.log(error.response);
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
                        <legend>Escribe tu nueva contraseña</legend>
                    </fieldset>
                    <div className="col">
                        <div className="row-md-4 row-lg-6 mt-2">
                            <input
                                name="password"
                                className="form-control"
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                onChange={modificarFormulario}
                            />
                        </div>
                        <div className="row-md-4 row-lg-6 mt-2">
                            <input
                                name="confirmar"
                                className="form-control"
                                type="password"
                                placeholder="Confirmar contraseña"
                                onChange={modificarFormulario}
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
                    {error && <p className="alert alert-danger" role="alert">{mensajeError}</p>}
                    {exito && <p className="alert alert-success" role="alert">Contraseña cambiada correctamente</p>}
                    <SpinnerCircular enabled={cargando} />
                </div>
            </div>
        </div>
    )
}

export default NuevaPassword;