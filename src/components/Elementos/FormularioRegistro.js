import {useState} from 'react';
import './Formulario.css';
import { SpinnerCircular } from 'spinners-react';
import axios from 'axios';

const FormularioRegistro = () => {

    const [formulario, guardarFormulario] = useState({
        nombre:'',
        apellido:'',
        correo:'',
        password:'',
        confirmar:''
    })

    const [exito, guardarExito] = useState(false);
    const [error, guardarError] = useState(false);
    const [cargando, guardarCargando] = useState(false);


    const onChange = async (value) => {
        console.log("Captcha value:", value);
     //   const respuesta = await axios.post('https://www.google.com/recaptcha/api/siteverify',
     //       {headers: {'secret': "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe", 'response': value}});
     //   console.log(respuesta);
      }



    const modificarFormulario = (e) => {
        guardarFormulario({
            ...formulario,
            [e.target.name] : e.target.value,
        })
        console.log(formulario)
    }

    const handleSubmit = async (e) => {
        guardarExito(false);
        guardarError(false);
        guardarCargando(true);
        e.preventDefault();
        try {
            const respuesta = await axios.post('http://localhost:4000/api/usuarios/',{
                nombre: formulario.nombre,
                apellido: formulario.apellido,
                correo: formulario.correo,
                password: formulario.password,
                rol: "admin"
            });
            console.log(respuesta);
            guardarExito(true);
            guardarFormulario({
                nombre:'',
                apellido:'',
                correo:'',
                password:'',
                confirmar:''
            });
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
    return(
        <div className="col"> 
            <div className="formulario">
            <form className="col-md-4" onSubmit={handleSubmit}>
                <fieldset className="text-center">
                    <legend>Crear Cuenta</legend>
                </fieldset>
                <div className="col">
                    <div className="row-md-4">
                        <input
                            name="nombre"
                            className="form-control"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            onChange={modificarFormulario}
                        />
                    </div>
                    <div className="row-md-4 mt-2">
                        <input
                            name="apellido"
                            className="form-control"
                            type="text"
                            placeholder="Ingresa tu apellido"
                            onChange={modificarFormulario}
                        />
                    </div>
                    <div className="row-md-4 mt-2">
                        <input
                            name="correo"
                            className="form-control"
                            type="text"
                            placeholder="Ingresa tu correo"
                            onChange={modificarFormulario}
                        />
                    </div>
                    <div className="row-md-4 mt-2">
                        <input
                            name="password"
                            className="form-control"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            onChange={modificarFormulario}
                        />
                    </div>
                    <div className="row-md-4 mt-2">
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
                <div className="row mt-2" >
                    <a href="/IniciarSesion" >Iniciar Sesión</a>
                </div>
            </form>
            </div>
            <div className="resultadocontacto">
                {error ? <p className="alert alert-danger" role="alert">Ha ocurrido un error</p> : null}
                {exito ? <p className="alert alert-success" role="alert">El usuario ha sido registrado correctamente</p> : null}
                <SpinnerCircular enabled={cargando} />
            </div>
        </div>
      )
    }

export default FormularioRegistro;