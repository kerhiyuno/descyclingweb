import React,{Fragment, useState} from 'react';
import './Inicio.css';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

import baldosas from '../img/baldosas.jpg';
import otros from '../img/Maceteros/otros.jpeg';
import maceteros from '../img/Maceteros/6.jpeg';

import portada from '../img/carrusel/portada.png';
import hacemos from '../img/carrusel/hacemos.png';
import prueba from '../img/carrusel/prueba.png';


const Inicio = () => {
    const history = useHistory();
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
                    className="d-block w-100 mt-5 imagenhorizontal"
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
            <div className="bloque">
                <h1>Diseñando con residuos</h1>
                <p>Conoce nuestra diversidad de productos elaborados con reciclaje de vidrio, plástico y neumáticos</p>
                <div class="container-fluid">
                        <div className="row botones">
                            <div className="col bloqueimagenboton">
                                <img src={baldosas} className="imagenSecciones" />
                                <button type="button" className= "botonSecciones"  onClick={() => history.push('/Productos', { state: '1'})}>Baldosas</button>
                            </div>
                            <div className="col bloqueimagenboton">
                                <img src={maceteros} className="imagenSecciones"/>
                                <button type="button" className= "botonSecciones"  onClick={() => history.push('/Productos', { state: '2'})}>Maceteros</button>
                            </div>
                            <div className="col bloqueimagenboton">
                                <img src={otros} className="imagenSecciones"/>
                                <button type="button" className= "botonSecciones"  onClick={() => history.push('/Productos', { state: '3'})}>Otros productos</button>
                            </div>
                        </div>
                        </div>

            </div>
            <div className="bloquetotal">
                <h1>¿Te has preguntado cuanta riqueza desechas a diario?</h1>
                <p>~ 60% de tus residuos terminan en vertederos</p>
                <p>Transformamos residuos de vidrio, plásticos y caucho en diseño</p>
            </div>
            <div className="bloque">
                <h1>¿Te gustaría gestionar tus residuos con nosotros?</h1>
                <p>Sé parte de la comunidad "Descycling" y obtén una gestión a domicilio de tus residuos de vidrio,
                    plástico y caucho, teniendo descuentos en los productos y una atención personalizada de ellos. </p>
                <div className="botones">
                    <button type="button" className= "botonSecciones"  onClick={() => history.push('/Productos')}>Ver planes</button>
                    <button type="button" className= "botonSecciones"  onClick={() => history.push('/Productos')}>Ver recolección única</button>
                    <button type="button" className= "botonSecciones"  onClick={() => history.push('/Contacto')}>Ver contacto</button>
                </div>
            </div>
        </Fragment>
    )
    }

export default Inicio;