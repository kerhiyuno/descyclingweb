import {Fragment, useState} from 'react';
import './Inicio.css';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import DescripcionDescycling from './inicio/DescripcionDescycling';

import baldosas from '../img/baldosas.jpg';
import otros from '../img/Maceteros/otros.jpeg';
import maceteros from '../img/Maceteros/6.jpeg';

import portada from '../img/carrusel/portada.png';
import hacemos from '../img/carrusel/hacemos.png';
import prueba from '../img/carrusel/prueba.png';
import ElementoMenuGrande from './inicio/ElementoMenuGrande';


const Inicio = () => {
    const navigate = useNavigate();
    const [ratio, guardarRatio] = useState(window.screen.width/window.screen.height);

    window.addEventListener("resize", function(event) {
        guardarRatio(window.screen.width/window.screen.height);
        console.log(ratio);
    })

    return(
        <Fragment>
            <Carousel>
                <Carousel.Item interval={2000}>
                    {ratio > 1 ? 
                    <img 
                    className="d-block w-100 mt-4 p-0 imagenhorizontal"
                    src={portada}
                    alt="Second slide"
                    />
                    :
                    <img 
                    className="d-block w-100 mt-4 imagenvertical"
                    src={portada}
                    alt="Second slide"
                    />
                    }
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    {ratio > 1 ? 
                    <img 
                    className="d-block w-100 mt-4 imagenhorizontal"
                    src={hacemos}
                    alt="Second slide"
                    />
                    :
                    <img 
                    className="d-block w-100 mt-4 imagenvertical"
                    src={hacemos}
                    alt="Second slide"
                    />
                    
                    }
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    {ratio > 1 ? 
                    <img 
                    className="d-block w-100 mt-4 imagenhorizontal"
                    src={prueba}
                    alt="Second slide"
                    />
                    :
                    <img 
                    className="d-block w-100 mt-4 imagenvertical"
                    src={prueba}
                    alt="Second slide"
                    />
                    
                    }
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            <div  className="bloquedescripcion mb-5 mt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <DescripcionDescycling titulo = "Vidrio 100% reciclable" 
                                        descripcion = "Nueva forma de gestionar y revalorizar tus residuos de vidrio de forma fácil, personalizada y transparente"
                                        imagen={maceteros}/>
                        <DescripcionDescycling titulo = "Economía circular" 
                                        descripcion = "Buscamos incorporarnos como revalorizadores dentro de la cadena productiva que establece la nueva Ley REP"
                                        imagen={maceteros}/>
                        <DescripcionDescycling titulo = "Composición versátil" 
                                        descripcion = "A partir de la combinación de residuos de vidrio, plástico y caucho Descycling es capaz de crear nuevos ciclos de vida"
                                        imagen={maceteros}/>
                        <DescripcionDescycling titulo = "Romper lo tradicional" 
                                        descripcion = "La incorporación de residuos permite eliminar el uso de arenas y piedras, además de reducir cemento en un 50%"
                                        imagen={maceteros}/>
                        <DescripcionDescycling titulo = "Únicos en Chile" 
                                        descripcion = "Creamos productos únicos con resistencia y personalidad para toda persona que desee dar sentido a sus espacios"
                                        imagen={maceteros}/>
                    </div>
                </div>
            </div>
            <div className="bloqueproductos mt-5 mb-5">
                <h2>INNOVACIÓN CIRCULAR </h2>
                <p>¿Quieres aportar con un granito de arena a reducir la contaminación? Conoce nuestros productos sustentables</p>
                <div className="container-fluid">
                        <div className="row botones">
                            <ElementoMenuGrande imagen={baldosas} categoria='piedra' esProductos={true} ruta={'/Productos'}></ElementoMenuGrande>
                            <ElementoMenuGrande imagen={maceteros} categoria='planeta' esProductos={true} ruta={'/Productos'} ></ElementoMenuGrande>
                            <ElementoMenuGrande imagen={otros} categoria='maceta' esProductos={true} ruta={'/Productos'}></ElementoMenuGrande>
                        </div>
                </div>
            </div>
            <div className="bloquetotal mb-5 mt-5 p-4">
                <h3 className='mb-4'>¿Te has preguntado cuanta riqueza desechas a diario?</h3>
                <p>~ 60% de tus residuos terminan en vertederos</p>
                <p>Transformamos residuos de vidrio, plásticos y caucho en diseño</p>
            </div>
            <div className="bloqueproductos mb-5 mt-5">
                <h3>Nuestros Servicios</h3>
                    <div className="container-fluid">
                        <div className="row botones">
                            <ElementoMenuGrande imagen={baldosas} categoria='Packs y productos individuales' esProductos={false} ruta={'/Productos'}></ElementoMenuGrande>
                            <ElementoMenuGrande imagen={maceteros} categoria='Planes Empresas REP' esProductos={false} ruta={'/Productos'} ></ElementoMenuGrande>
                            <ElementoMenuGrande imagen={otros} categoria='Planes de recolección mensual o única' esProductos={false} ruta={'/Productos'}></ElementoMenuGrande>
                        </div>
                    </div>
            </div>
            <div className="bloqueproductos mt-5 mb-5">
                <div className="mb-5 mt-5">
                    <h2 className='mb-3'>Clientes felices, corazones felices</h2>
                    <p className='m-3'>Descycling es un proyecto que busca vincular a la comunidad con la valoración de los residuos y sensibilizar sobre la importancia de su gestión. Por eso, tu opinión es fundamental.</p>
                    <p>Te invitamos a ser parte del cambio, sensibilízate</p>
                    <h4>Únete a Descycling</h4>
                    <div className="container-fluid">
                        <div className="row botones mt-4">
                            <div className="col bloqueimagenEncuesta">
                                    <div className='row'>
                                        <img src={baldosas} className="imagenEncuesta" alt=""/>
                                        <div className='d-flex justify-content-center mt-1'>
                                            <div className='col'>
                                                <p className='tituloEncuesta'>Casa matriz o de construcción</p>
                                                <p>10/05/2023</p>
                                                <p className='textoEncuesta'>"Me parece una estupenda idea, que si perfeccionan su formula para crear y diseñar distintos productos y formas se debería vender 
                                                    como pan caliente."Me parece una estupenda idea, que si perfeccionan su formula para crear y diseñar distintos productos y formas se
                                                    debería vender como pan caliente."</p>
                                             </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col bloqueimagenEncuesta">
                                    <div className='row'>
                                        <img src={baldosas} className="imagenEncuesta" alt="" />
                                        <div className='d-flex justify-content-center mt-1'>
                                            <div className='col'>
                                                <p className='tituloEncuesta'>Encuestados</p>
                                                <p>10/05/2023</p>
                                                <p className='textoEncuesta'>"Me parece una estupenda idea, que si perfeccionan su formula para crear y diseñar distintos productos y formas se debería vender 
                                                    como pan caliente."Me parece una estupenda idea, que si perfeccionan su formula para crear y diseñar distintos productos y formas se
                                                    debería vender como pan caliente."</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>¿Tienes una empresa/startup que crea eco-cemento?</h3>
                <h4 className="link" onClick={() => navigate('/Contacto')}>Contáctanos</h4>
            </div>
            <div className="bloqueestadisticas">
                    <div className="circulo">
                        <p className="numeros mb-0">1550</p>
                        <p className='letraEstadistica'>botellas</p>
                    </div>
                    <div className="circulo">
                        <p className="numeros mb-0">125</p>
                        <p className='letraEstadistica'>maceteros</p>
                    </div>
                    <div className="circulo">
                        <p className="numeros mb-0">35</p>
                        <p className='letraEstadistica'>toneladas de vidrio</p>
                    </div>
                        <div className="circulo">
                        <p className="numeros mb-0">18</p>
                        <p className='letraEstadistica'>de septiembre</p>
                    </div>
            </div>
        </Fragment>
    )
    }

export default Inicio;