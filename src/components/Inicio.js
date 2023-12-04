import {Fragment, useState} from 'react';
import './Inicio.css';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import DescripcionDescycling from './inicio/DescripcionDescycling';
import Partner from './inicio/Partner';

import baldosas from '../img/baldosas.jpg';
import decoracion from '../img/decoracion.jpg';
import decoracion_p from '../img/decoracion_p.jpeg';
import maceteros from '../img/Maceteros/6.jpeg';

import prueba from '../img/carrusel/Carrusel_1.jpg';
import hacemos from '../img/carrusel/Carrusel_2.jpg';
import portada from '../img/carrusel/Carrusel_3.jpg';
import ElementoMenuGrande from './inicio/ElementoMenuGrande';

import icono1 from '../img/inicio/Inicio_icono1.png';
import icono2 from '../img/inicio/Inicio_icono2.png';
import icono3 from '../img/inicio/Inicio_icono3.png';
import icono4 from '../img/inicio/Inicio_icono4.png';
import icono5 from '../img/inicio/Inicio_icono5.png';

import logo1 from '../img/inicio/Logo_1.png';
import logo2 from '../img/inicio/Logo_2.png';
import logo3 from '../img/inicio/Logo_3.png';
import logo4 from '../img/inicio/Logo_4.png';
import logo5 from '../img/inicio/Logo_5.png';

import problema1 from '../img/inicio/problema1.png';
import problema_m from '../img/inicio/problema_m.png';
import problema2 from '../img/inicio/problema_2.jpg';
import problema2_m from '../img/inicio/problema_2_m.jpg';

import recoleccion from '../img/servicios/recoleccion.jpg';
import persona from '../img/inicio/persona.jpg';
import asesoria from '../img/inicio/Asesoria.jpg';


const Inicio = () => {
    const navigate = useNavigate();
    const [ratio, guardarRatio] = useState(window.screen.width/window.screen.height);

    window.addEventListener("resize", function(event) {
        guardarRatio(window.screen.width/window.screen.height);
        console.log(ratio);
    })

    return(
        <Fragment>
            <div className='carrusel'>
            <Carousel>
                <Carousel.Item interval={5000}>
                    {ratio > 1 ? 
                    <img 
                    className="d-block w-100 mt-4 p-0 imagenhorizontal"
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
                    <h3>¿Sabes donde termina tu "basura"?</h3>
                    <p className='m-0'>Una sola persona puede generar 1,19 kg de residuos a diario,</p>
                    <p className='m-0'>reciclando solo el 1%</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
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
                    <h3>Economía circular</h3>
                    <p className='m-0'>Le damos una nueva vida a los residuos</p>
                    <p className='m-0'>para crear espacios con sentido</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    {ratio > 1 ? 
                    <img 
                    className="d-block w-100 mt-4 imagenhorizontal"
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
                    <h3>Únanse a nosotros</h3>
                    <p className='m-0'>Para crear un impacto positivo en las comunidades y medioambiente</p>
                    <p className='m-0'>únete a Descycling</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                {ratio > 1 ? 
                        <img className='problema' src={problema1} alt="Problema 1"/>
                        :
                        <img className='problema' src={problema_m} alt="Problema 1 movil"/>
                        }
            </div>
            <div  className="bloquedescripcion mb-5 mt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <DescripcionDescycling titulo = "Vidrio 100% reciclable" 
                                        descripcion = "Nueva forma de gestionar y revalorizar tus residuos de vidrio de forma fácil, personalizada y transparente"
                                        imagen={icono1}/>
                        <DescripcionDescycling titulo = "Economía circular" 
                                        descripcion = "Buscamos incorporarnos como revalorizadores dentro de la cadena productiva que establece la nueva Ley REP"
                                        imagen={icono2}/>
                        <DescripcionDescycling titulo = "Composición versátil" 
                                        descripcion = "A partir de la combinación de residuos de vidrio, plástico y caucho Descycling es capaz de crear nuevos ciclos de vida"
                                        imagen={icono3}/>
                        <DescripcionDescycling titulo = "Romper lo tradicional" 
                                        descripcion = "La incorporación de residuos permite eliminar el uso de arenas y piedras, además de reducir cemento en un 50%"
                                        imagen={icono4}/>
                        <DescripcionDescycling titulo = "Únicos en Chile" 
                                        descripcion = "Creamos productos únicos con resistencia y personalidad para toda persona que desee dar sentido a sus espacios"
                                        imagen={icono5}/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                {ratio > 1 ? 
                        <img className='problema2' src={problema2} alt="Problema 2"/>
                        :
                        <img className='problema2' src={problema2_m} alt="Problema 2 movil"/>
                        }
            </div>
            <div className="bloqueproductos mt-5 mb-5">
                <h2>INNOVACIÓN CIRCULAR</h2>
                <p>¿Quieres disfrutar de tus espacios con productos resistentes, hechos a partir de vidrio recuperado, con diseños versátiles y un mensaje a favor del reciclaje?</p>
                <div className="container-fluid">
                        <div className="row botones">
                            <ElementoMenuGrande imagen={baldosas} categoria='Placas' esProductos={true} ruta={'/Productos'} rutaExterna={false}></ElementoMenuGrande>
                            <ElementoMenuGrande imagen={maceteros} categoria='Macetas' esProductos={true} ruta={'/Productos'} rutaExterna={false}></ElementoMenuGrande>
                            <ElementoMenuGrande imagen={decoracion} categoria='Decoración' esProductos={true} ruta={'/Productos'} rutaExterna={false}></ElementoMenuGrande>
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
                            <ElementoMenuGrande imagen={asesoria} categoria='Asesorias' esProductos={false} ruta={'/Contacto'}></ElementoMenuGrande>
                            <ElementoMenuGrande imagen={recoleccion} categoria='Planes de recolección' esProductos={false} ruta={'https://docs.google.com/forms/d/e/1FAIpQLSc9RpDZbRv4ME9hXrpekIspYBUkvZjwaOCLOG2_gFlKiRN86Q/viewform?usp=sf_link'} rutaExterna={true} ></ElementoMenuGrande>
                            <ElementoMenuGrande imagen={decoracion_p} categoria='Proyectos' esProductos={false} ruta={'/Contacto'}></ElementoMenuGrande>
                        </div>
                    </div>
            </div>
            <div className="bloqueproductos mt-5 mb-5">
                <div className="mb-5 mt-3">
                    <h2 className='mb-3'>Clientes felices, corazones felices</h2>
                    <p className='m-2'>Buscamos vincular a la comunidad con la valoración de los residuos y sensibilizar sobre la importancia de su gestión.</p>
                    <p className='m-2'>Por eso, tu opinión es fundamental.</p>
                    <h4 className='mt-4'>Únete a Descycling</h4>
                    <div className="container-fluid">
                        <div className="row botones mt-4">
                            <div className="col bloqueimagenEncuesta">
                                    <div className='row'>
                                        <img src={persona} className="imagenEncuesta" alt=""/>
                                        <div className='d-flex justify-content-center mt-1'>
                                            <div className='col'>
                                                <p className='tituloEncuesta'>Encuestados</p>
                                                <p>04/06/2021</p>
                                                <p className='textoEncuesta'>"Me parece una idea interesante. Las iniciativas que permitan dar un uso prolonga a los residuos plásticos tienen un gran valor."</p>
                                             </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col bloqueimagenEncuesta">
                                    <div className='row'>
                                        <img src={persona} className="imagenEncuesta" alt="" />
                                        <div className='d-flex justify-content-center mt-1'>
                                            <div className='col'>
                                                <p className='tituloEncuesta'>Encuestados</p>
                                                <p>04/06/2021</p>
                                                <p className='textoEncuesta'>"Buena propuesta para tratar de manejar un problema de fondo mucho mayor, como el manejo de residuos"</p>
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
                        <p className="numeros mb-0">22</p>
                        <p className='letraEstadistica mb-0'>kg/m2</p>
                        <p className='letraEstadistica'>revalorizados</p>
                    </div>
                    <div className="circulo">
                        <p className="numeros mb-0">200</p>
                        <p className='letraEstadistica'>ton de CO2 ahorradas</p>
                    </div>
                    <div className="circulo">
                        <p className="numeros mb-0">700</p>
                        <p className='letraEstadistica mb-0'>botellas</p>
                        <p className='letraEstadistica'>gestionadas</p>

                    </div>
                        <div className="circulo">
                        <p className="numeros mb-0">20</p>
                        <p className='letraEstadistica'>clientes con planes de recolección</p>
                    </div>
            </div>
            <div className="bloquepartner row">
                <Partner imagen={logo1}></Partner>
                <Partner imagen={logo2}></Partner>
                <Partner imagen={logo3}></Partner>
                <Partner imagen={logo4}></Partner>
                <Partner imagen={logo5}></Partner>
            </div>
        </Fragment>
    )
    }

export default Inicio;