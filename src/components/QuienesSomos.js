import './QuienesSomos.css';
import DescripcionDescycling from './inicio/DescripcionDescycling';
import cati from '../img/cati.jpeg';
import coni from '../img/coni.jpeg';
import seba from '../img/seba.jpeg';
import maceteros from '../img/Maceteros/6.jpeg';


const QuienesSomos = () => {
    return(
        <div className="container-fluid ">
            <h1 className="mt-5 p-5">Quienes Somos</h1>
            <div className="row align-items-center justify-content-center mt-4">
                <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                    <div className="card border-0 shadow card2">
                        <img src={cati} alt="" className="card-img-top card-img-top-profile imagenes"/>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0">Catherine Vargas</h5>
                            <div className="card-text text-black-50 letracard">INGENIERA AGRÓNOMA - MAGISTER SUELO Y AGUA - UNIVERSIDAD DE CHILE</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                    <div className="card border-0 shadow card2">
                        <img src={coni} alt="" className="card-img-top card-img-top-profile imagenes"/>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0">Constanza Vargas</h5>
                            <div className="card-text text-black-50 letracard">INGENIERA EN RECURSOS NATURALES RENOVABLES - UNIVERSIDAD DE CHILE</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                    <div className="card border-0 shadow card2">
                        <img src={seba} alt="" className="card-img-top card-img-top-profile imagenes"/>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0">Sebastian Jara</h5>
                            <div className="card-text text-black-50 letracard">INGENIERO CIVIL INFORMÁTICO UNIVERSIDAD TECNICA FEDERICO SANTA MARIA</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center mt-5">
                    <h2 className='col-md-2 col-sm-12 my-auto'>Misión</h2>
                    <DescripcionDescycling titulo = "Vidrio 100% reciclable" 
                        descripcion = "Nueva forma de gestionar y revalorizar tus residuos de vidrio de forma fácil, personalizada y transparente"
                        imagen={maceteros}/>
                    <DescripcionDescycling titulo = "Economía circular" 
                        descripcion = "Buscamos incorporarnos como revalorizadores dentro de la cadena productiva que establece la nueva Ley REP"
                        imagen={maceteros}/>
                    <DescripcionDescycling titulo = "Composición versátil" 
                        descripcion = "A partir de la combinación de residuos de vidrio, plástico y caucho Descycling es capaz de crear nuevos ciclos de vida"
                        imagen={maceteros}/>
                </div>
                <div className="row justify-content-center mt-5">
                    <h2 className='col-md-2 col-sm-12 my-auto'>Visión</h2>
                    <DescripcionDescycling titulo = "Vidrio 100% reciclable" 
                        descripcion = "Nueva forma de gestionar y revalorizar tus residuos de vidrio de forma fácil, personalizada y transparente"
                        imagen={maceteros}/>
                    <DescripcionDescycling titulo = "Economía circular" 
                        descripcion = "Buscamos incorporarnos como revalorizadores dentro de la cadena productiva que establece la nueva Ley REP"
                        imagen={maceteros}/>
                    <DescripcionDescycling titulo = "Composición versátil" 
                        descripcion = "A partir de la combinación de residuos de vidrio, plástico y caucho Descycling es capaz de crear nuevos ciclos de vida"
                        imagen={maceteros}/>
                </div>
                <div className="row justify-content-center mt-5 mb-5">
                    <h2 className='col-md-2 col-sm-12 my-auto'>Metas</h2>
                    <DescripcionDescycling titulo = "Vidrio 100% reciclable" 
                        descripcion = "Nueva forma de gestionar y revalorizar tus residuos de vidrio de forma fácil, personalizada y transparente"
                        imagen={maceteros}/>
                    <DescripcionDescycling titulo = "Economía circular" 
                        descripcion = "Buscamos incorporarnos como revalorizadores dentro de la cadena productiva que establece la nueva Ley REP"
                        imagen={maceteros}/>
                    <DescripcionDescycling titulo = "Composición versátil" 
                        descripcion = "A partir de la combinación de residuos de vidrio, plástico y caucho Descycling es capaz de crear nuevos ciclos de vida"
                        imagen={maceteros}/>
                </div>
            </div>
        </div>
      )
    }

export default QuienesSomos;
