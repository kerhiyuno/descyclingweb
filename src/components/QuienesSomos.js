import React from 'react';
import './QuienesSomos.css';
import cati from '../img/cati.jpeg';
import coni from '../img/coni.jpeg';
import seba from '../img/seba.jpeg';


const QuienesSomos = () => {
    return(
      <div className="container-fluid">
            <h1>Quienes Somos</h1>
            <div className="row align-items-center justify-content-center mt-4">
              <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                <div className="card border-0 shadow card2">
                <img src={cati} alt="" className="card-img-top card-img-top-profile imagenes"/>
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Catherine Vargas</h5>
                    <div className="card-text text-black-50 letracard">INGENIERA AGRÓNOMA MAGISTER SUELO Y AGUA DEPARTAMENTO AGUA AGROSPACE S.A.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                <div className="card border-0 shadow card2">
                <img src={coni} alt="" className="card-img-top card-img-top-profile imagenes"/>
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Constanza Vargas</h5>
                    <div className="card-text text-black-50 letracard">ESTUDIANTE 5TO AÑO INGENIERÍA EN RECURSOS NATURALES RENOVABLES UNIVERSIDAD DE CHILE</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                <div className="card border-0 shadow card2">
                <img src={seba} alt="" className="card-img-top card-img-top-profile imagenes"/>
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Sebastian Jara</h5>
                    <div className="card-text text-black-50 letracard">INGENIERO CIVIL INFORMÁTICA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARÍA</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 bloqueQuienesSomos">
                <h1>Misión</h1>
                <p>Gestionar tus residuos, transformandolos y revalorizandolos creando un producto bacán</p>
              </div>
              <div className="col-3 bloqueQuienesSomos">
                <h1>Nosotros</h1>
                <p>El equipo de "Descycling" consta de un equipo gestor compuesto por: Catherine Vargas Castro, 
                  Sebastián Jara Castro y Constanza Vargas Castro. Y como podrás notar, exactamente... somos familia! </p>
              </div>
              <div className="col-3 bloqueQuienesSomos">
                <h1>Visión</h1>
                <p>Aminorar la contaminación de residuos mediante la concientización, </p>
              </div>
            </div>
      </div>
      )
    }

export default QuienesSomos;


/*<img src={cati} alt="" className="imagen1"/>
          <img src={coni} alt="" className="imagen2"/>
          <img src={seba} alt="" className="imagen3"/>*/