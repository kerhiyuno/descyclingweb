import { useEffect } from "react";
import axios from 'axios';
import './GoogleLoginBoton.css';

const GoogleLoginBoton = () => {
    useEffect(() => {
        window.customCallback = handleCredentialResponse;
    }, [])
    
    async function  handleCredentialResponse(response) {
        console.log('id token', response);
        try {
            const respuesta = await axios.post('http://localhost:4000/api/auth/google',{id_token:response.credential});
            console.log(respuesta);
            console.log(respuesta.data.usuario.correo);
            localStorage.setItem('correo', respuesta.data.usuario.correo);
            localStorage.setItem('token', respuesta.data.token);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
     }

    const logoutGoogle = (google) => {
        google.accounts.id.disableAutoSelect();
        google.accounts.id.revoke(localStorage.getItem('correo'), listo => {
            localStorage.clear();
            window.location.reload();
        });
    }

    return(
        <div className="justify-content-center">
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div id="g_id_onload"
                data-client_id="422132072025-ren9u59hegr1c58jdtln8qus8fr0nv5f.apps.googleusercontent.com"
                data-callback="customCallback"
                data-auto_prompt="false">
            </div>
            <div class="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>
            <script ></script>
            <button className="logoutGoogle mt-2" id="google_signout" onClick={() => {logoutGoogle(window.google)} }>
                Cerrar Sesión
            </button>
        </div>
      )
    }

export default GoogleLoginBoton;