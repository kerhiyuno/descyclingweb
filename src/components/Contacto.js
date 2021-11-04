import React from 'react';
import Formulario from './Elementos/Formulario';
import './Contacto.css';

const Contacto = () => {
    return(
        <div>
            <h1>Contacto</h1>
            <div className="container">
                <div className="row">
                    <Formulario />
                </div>
            </div>
        </div>
      )
    }

export default Contacto;