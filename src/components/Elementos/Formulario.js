import React, {useState} from 'react';
import './Formulario.css';
import emailjs from 'emailjs-com';


const Formulario = () => {

    const [mensaje, guardarMensaje] = useState({
        from_name:'',
        correo:'',
        message:'',
        to_name: 'Sebastian',

    })

    const modificarMensaje = (e) => {
        guardarMensaje({
            ...mensaje,
            [e.target.name] : e.target.value,
        })
        console.log(mensaje)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('default_service','template_tab7tfm', mensaje, 'user_KIA3KKcjVJqtsoccAvicG')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
		}, (err) => {
				   console.log('FAILED...', err);
		});
    }
    return(
        <div className="formulario">
        <form className="col-md-6" onSubmit={handleSubmit}>
            <fieldset className="text-center">
                <legend>¿Quieres cotizar un nuevo proyecto?</legend>
            </fieldset>
            <div className="col">
                <div className="row-md-6">
                    <input
                        name="from_name"
                        className="form-control"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        onChange={modificarMensaje}
                    />
                </div>
                <div className="row-md-6 mt-2">
                    <input
                        name="correo"
                        className="form-control"
                        type="text"
                        placeholder="Ingresa tu correo"
                        onChange={modificarMensaje}
                    />
                </div>
                <div className="row-md-6 mt-2">
                    <textarea name="message"
                        className="form-control"
                        cols="40"
                        rows="5"
                        placeholder="Escribe tu mensaje"
                        onChange={modificarMensaje}/>
                </div>
                <div className="row-md-6 mt-2">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary mt-2"
                        value="Enviar"
                    />
                    </div>
            </div>
        </form>
        </div>
      )
    }

export default Formulario;