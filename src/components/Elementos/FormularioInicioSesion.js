import {useState, useEffect, useContext} from 'react';
import './Formulario.css';
import { SpinnerCircular } from 'spinners-react';
import GoogleLoginBoton from './GoogleLoginBoton';
import AuthContext from '../../context/auth/authContext';
import clienteAxios from '../../config/axios';

const FormularioInicioSesion = () => {

    const { guardarDatosLogin } = useContext(AuthContext);

    const [formulario, guardarFormulario] = useState({
        correo:'',
        password:'',
    })

    const [exito, guardarExito] = useState(false);
    const [error, guardarError] = useState(false);
    const [cargando, guardarCargando] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, [])
    

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
            const respuesta = await clienteAxios.post('/api/auth/login',{
                correo: formulario.correo,
                password: formulario.password,
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
            let accessToken = respuesta.data.accessToken;
            let refreshToken = respuesta.data.refreshToken;
            let correo = respuesta.data.usuario.correo;
            let nombre = respuesta.data.usuario.nombre;
            let google = respuesta.data.usuario.google;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('correo', correo);
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('google', google);
            guardarDatosLogin(correo,nombre,google);
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
        <div > 
            <div className="formulario">
                <form className="col-lg-4 col-md-6" onSubmit={handleSubmit}>
                    <fieldset className="text-center">
                        <legend>Iniciar Sesión</legend>
                    </fieldset>
                    <div className="col">
                        <div className="row-md-4 row-lg-6">
                            <input
                                name="correo"
                                className="form-control"
                                type="text"
                                placeholder="Ingresa tu correo"
                                onChange={modificarFormulario}
                            />
                        </div>
                        <div className="row-md-4 row-lg-6 mt-2">
                            <input
                                name="password"
                                className="form-control"
                                type="password"
                                placeholder="Ingresa tu contraseña"
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
                        <a href="/Registro" >Registrarse</a>
                    </div>
                </form>
            </div>
            <div className="resultadocontacto">
                {error ? <p className="alert alert-danger" role="alert"> Ha ocurrido un error</p> : null}
                {exito ? <p className="alert alert-success" role="alert">El usuario ha iniciado sesión correctamente</p> : null}
                <SpinnerCircular enabled={cargando} />
            </div>
            <div className='col-md-2'>
                <GoogleLoginBoton></GoogleLoginBoton>
            </div>
        </div>
      )
    }

export default FormularioInicioSesion;