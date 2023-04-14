import { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import GoogleLoginBoton from "./Elementos/GoogleLoginBoton";
import CerrarSesionBoton from "./Elementos/CerrarSesionBoton";

const Perfil = () => {
    const { google, nombre } = useContext(AuthContext);
    console.log(google);
    return(
        <div className="container" style={{marginBottom: "20%"}}>
            <h1 className="mb-5 mt-5">Mi cuenta</h1>
            <div className="col-xs-1" align="center">
                <div className="col"> 
                    <div className='col-md-2'>
                        <p>Nombre: {nombre}</p>
                        { google ? (<GoogleLoginBoton></GoogleLoginBoton>) : 
                            <CerrarSesionBoton></CerrarSesionBoton>
                        }
                    </div>
                </div>
            </div>
        </div>
      )
    }

export default Perfil;