import {useState} from 'react';
import './Formulario.css';
import emailjs from 'emailjs-com';
import { SpinnerCircular } from 'spinners-react';
import ReCAPTCHA from "react-google-recaptcha";

const Formulario = () => {

    const [mensaje, guardarMensaje] = useState({
        from_name:'',
        correo:'',
        message:'',
        to_name: 'Sebastian',

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


    const modificarMensaje = (e) => {
        guardarMensaje({
            ...mensaje,
            [e.target.name] : e.target.value,
        })
        console.log(mensaje)
    }

    const handleSubmit = (e) => {
        guardarExito(false);
        guardarError(false);
        guardarCargando(true);
        e.preventDefault();
        emailjs.send('default_service','template_tab7tfm', mensaje, 'user_KIA3KKcjVJqtsoccAvicG')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
                   guardarExito(true);
                   guardarCargando(false);
		}, (err) => {
				   console.log('FAILED...', err);
                   guardarError(true);
                   guardarCargando(false);
		});
    }
    return(
        <div className='col'> 
            <div className="formulario">
            <form className="col-lg-6 col-md-6" onSubmit={handleSubmit}>
                <div className="col">
                    <div className="row-lg-4 row-md-6">
                        <input
                            name="from_name"
                            className="form-control"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            onChange={modificarMensaje}
                        />
                    </div>
                    <div className="row-lg-4 row-md-6 mt-2">
                        <input
                            name="correo"
                            className="form-control"
                            type="text"
                            placeholder="Ingresa tu correo"
                            onChange={modificarMensaje}
                        />
                    </div>
                    <div className="row-lg-4 row-md-6 mt-2">
                        <textarea name="message"
                            className="form-control"
                            cols="40"
                            rows="5"
                            placeholder="Escribe tu mensaje"
                            onChange={modificarMensaje}/>
                    </div>
                    </div>
                    <div className="row-lg-4 row-md-6 mt-2 justify-content-center">
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                        <input
                            type="submit"
                            className="btn btn-block btn-primary mt-2"
                            value="Enviar"
                        />
                </div>
            </form>
            </div>
            <div className="resultadocontacto">
                {exito ? <p className="alert alert-success" role="alert">El mensaje ha sido enviado correctamente</p> : null}
                {error ? <p className="alert alert-danger" role="alert"> Ha ocurrido un error</p> : null}
                <SpinnerCircular enabled={cargando} />
            </div>
        </div>
      )
    }

export default Formulario;