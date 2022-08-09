import { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import GoogleLoginBoton from "./Elementos/GoogleLoginBoton";
import CerrarSesionBoton from "./Elementos/CerrarSesionBoton";

const Perfil = () => {
    const { google } = useContext(AuthContext);
    console.log(google);
    return(
        <div className="container" style={{marginBottom: "13%"}}>
            <div className="col-xs-1" align="center">
                <div className="col"> 
                    <div className='col-md-2'>
                        dsadasdas a {typeof(google)}
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