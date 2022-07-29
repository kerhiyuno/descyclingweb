import {Fragment, useState, useContext} from 'react';
import './Inicio.css';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import ProductosContext from '../context/productos/productosContext';
import ReactPlayer from 'react-player';

import baldosas from '../img/baldosas.jpg';
import otros from '../img/Maceteros/otros.jpeg';
import maceteros from '../img/Maceteros/6.jpeg';

import portada from '../img/carrusel/portada.png';
import hacemos from '../img/carrusel/hacemos.png';
import prueba from '../img/carrusel/prueba.png';


const Inicio = () => {
    const navigate = useNavigate();
    const [ratio, guardarRatio] = useState(window.screen.width/window.screen.height);
    const {cambioCategoria} = useContext(ProductosContext)

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
                    className="d-block w-100 mt-5 p-0 imagenhorizontal"
                    src={portada}
                    alt="Second slide"
                    />
                    :
                    <img 
                    className="d-block w-100 mt-5 imagenvertical"
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
                    className="d-block w-100 mt-5 imagenhorizontal"
                    src={hacemos}
                    alt="Second slide"
                    />
                    :
                    <img 
                    className="d-block w-100 mt-5 imagenvertical"
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
                    className="d-block w-100 mt-5 imagenhorizontal"
                    src={prueba}
                    alt="Second slide"
                    />
                    :
                    <img 
                    className="d-block w-100 mt-5 imagenvertical"
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
            <div className="bloqueproductos mt-5 mb-5">
                <h1>INNOVACIÓN CIRCULAR </h1>
                <p>¿Quieres aportar con un granito de arena a reducir la contaminación? Conoce nuestros productos sustentables</p>
                <div className="container-fluid">
                        <div className="row botones">
                            <div className="col bloqueimagenboton">
                                <div className='col'>
                                    <div className='row'>
                                        <img src={baldosas} className="imagenSecciones" alt="" onClick={() =>{cambioCategoria("baldosa");navigate('/Productos')}}/>
                                    </div>
                                    <div className='row mt-1'>
                                        <button type="button" className= "botonSecciones"  onClick={() =>{cambioCategoria("baldosa");navigate('/Productos')}}>Baldosas</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col bloqueimagenboton">
                                <div className='col'>
                                        <div className='row'>
                                            <img src={maceteros} className="imagenSecciones" alt="" onClick={() =>{cambioCategoria("baldosa");navigate('/Productos')}}/>
                                        </div>
                                        <div className='row mt-1'>
                                            <button type="button" className= "botonSecciones"  onClick={() =>{cambioCategoria("macetero");navigate('/Productos')}}>Maceteros</button>
                                        </div>
                                    </div>
                                </div>
                            <div className="col bloqueimagenboton">
                                <div className='col'>
                                        <div className='row'>
                                            <img src={otros} className="imagenSecciones" alt="" onClick={() =>{cambioCategoria("baldosa");navigate('/Productos')}}/>
                                        </div>
                                        <div className='row mt-1'>
                                            <button type="button" className= "botonSecciones"  onClick={() =>{cambioCategoria("otro");navigate('/Productos')}}>Otros</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
            <div className="reproductor mb-5 mt-5">
            {ratio > 1 ? 
                <ReactPlayer url='https://youtu.be/MvNby-4ByXw' width="1280px" height="616px" playing={true} loop={true} />
            :    <ReactPlayer url='https://youtu.be/MvNby-4ByXw' width="400px" height="180px" playing={true} loop={true} />
            }
            </div>
            <div className="bloquetotal mb-5 mt-5">
                <h1 className="font-playlist-script">¿Te has preguntado cuanta riqueza desechas a diario?</h1>
                <p>~ 60% de tus residuos terminan en vertederos</p>
                <p>Transformamos residuos de vidrio, plásticos y caucho en diseño</p>
            </div>
            <div  className="bloquedescripcion mb-5 mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col bloqueimagendescripcion">
                            <h2 className="text-center">¡Reciclamos 300g de residuos en productos!</h2>
                            <img src={maceteros} className="imagenparrafo" alt=""/>           
                            <p className="parrafodescriptivo mt-2">Siguiendo el modelo de economía circular, transformamos lo que para tí es basura en insumos claves dentro de nuestra composición de
                                            50% vidrio triturado, cemento y agregados de caucho y plástico
                            </p>
                        </div>
                        <div className="col bloqueimagendescripcion">
                            <h2 className="text-center">¿Por qué elegir descycling?</h2>
                            <img src={maceteros} className="imagenparrafo" alt=""/>
                            <p className="parrafodescriptivo mt-2">Descycling es la nueva forma de gestionar y revalorizar tus residuos de forma fácil, personalizada y transparente
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bloqueestadisticas">
                <div className="row w-100">
                    <div className="col text-center">
                    <p className="numeros mb-0">1550</p>
                    <p>botellas</p>
                    </div>
                    <div className="col text-center">
                    <p className="numeros mb-0">125</p>
                    <p>maceteros</p>
                    </div>
                    <div className="col text-center">
                    <p className="numeros mb-0">35</p>
                    <p>toneladas de vidrio</p>
                    </div>
                    <div className="col text-center">
                    <p className="numeros mb-0">18</p>
                    <p>de septiembre</p>
                    </div>
                </div>
            </div>
            <div className="bloqueproductos mb-5 mt-5">
                <h1 className="font-playlist-script">Gestiona tus residuos con nosotros</h1>
                <p>Sé parte de la comunidad "Descycling" y obtén una gestión a domicilio de tus residuos de vidrio,
                    plástico y caucho, teniendo descuentos en los productos y una atención personalizada de ellos. </p>

                    <div className="container-fluid">
                        <div className="row botones">
                            <div className="col bloqueimagenboton">
                                <div className='col'>
                                    <div className='row'>
                                        <img src={baldosas} className="imagenSecciones" alt=""/>
                                    </div>
                                    <div className='row mt-1'>
                                        <button type="button" className= "botonSecciones"  onClick={() =>{cambioCategoria("baldosa");navigate('/Productos')}}>Planes</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col bloqueimagenboton">
                                <div className='col'>
                                        <div className='row'>
                                            <img src={maceteros} className="imagenSecciones" alt=""/>
                                        </div>
                                        <div className='row mt-1'>
                                            <button type="button" className= "botonSecciones"  onClick={() =>{cambioCategoria("macetero");navigate('/Productos')}}>Recolección única</button>
                                        </div>
                                    </div>
                                </div>
                            <div className="col bloqueimagenboton">
                                <div className='col'>
                                        <div className='row'>
                                            <img src={otros} className="imagenSecciones" alt=""/>
                                        </div>
                                        <div className='row mt-1'>
                                            <button type="button" className= "botonSecciones"  onClick={() =>{cambioCategoria("otro");navigate('/Productos')}}>Contacto</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
    }

export default Inicio;