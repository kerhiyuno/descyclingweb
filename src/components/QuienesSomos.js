import './QuienesSomos.css';
import DescripcionDescycling from './inicio/DescripcionDescycling';
import cati from '../img/cati.jpeg';
import coni from '../img/coni.jpeg';
import seba from '../img/seba.jpeg';
import maceteros from '../img/Maceteros/6.jpeg';
import logo from '../img/logo_2.png';
import historia1 from '../img/historia/Historia_origen_1.jpg';
import historia2 from '../img/historia/Historia_origen_2.jpg';
import mision from '../img/nosotros/mision.jpg';
import meta from '../img/nosotros/meta.jpg';
import vision from '../img/nosotros/vision.jpg';


const QuienesSomos = () => {
    return(
        <div className="container-fluid contenedor-q">
            <img className = 'mt-5 p-5 imgLogoTitulo' src={logo} alt="" width="500"/>
            <div className='bloqueNosotros'>
                <h1>Un impacto real</h1>
                <h5>A partir de la gestión de vidrio, externalización de caucho y plástico con revalorizadores emergentes o recicladores base,
                    junto a la creación de productos a partir de residuos, buscamos ofrecer un servicio integral, reemplazar la construcción tradicional
                    y abordar la sensibilización de un consumo y vida sostentible en pro del cuidado del medioambiente y, por consiguiente,
                    a la calidad de vida de las personas.</h5>
                <h5>Debemos hacer un cambio ya, te invitamos a ser parte. Sensibilízate.</h5>
                <h5 className="link mt-4">Únete a Descycling</h5>
                <h5 className="link">#descycling</h5>
                <h5 className="link">#diseñayrecicla</h5>
            </div>
            <div className="container-fluid mt-5">
¡                <div className="row justify-content-center mt-5">
                    <h2 className='col-md-2 col-sm-12 my-auto'>Misión</h2>
                    <DescripcionDescycling titulo = "Servicios" 
                        descripcion = "Otorgar a las comunidades servicios de asesoría ambiental y creación de proyectos con productos hechos 
                        con residuos para crear espacios con sentido, reduciendo el CO2 y el uso de materiales de construcción tradicionales"
                        imagen={mision}/>
                </div>
                <div className="row justify-content-center mt-5">
                    <h2 className='col-md-2 col-sm-12 my-auto'>Visión</h2>
                    <DescripcionDescycling titulo = "Triple impacto" 
                        descripcion = "Queremos ser pioneros en entregar servicios de triple impacto involucrando a las comunidades y entregando soluciones 
                        para la gestión de residuos mediante la innovación"
                        imagen={vision}/>
                </div>
                <div className="row justify-content-center mt-5 mb-5">
                    <h2 className='col-md-2 col-sm-12 my-auto'>Metas</h2>
                    <DescripcionDescycling titulo = "Innovación sustentable" 
                        descripcion = "Lograr ser una empresa líder y cooperativa con el ecosistema de innovación sustentable, 
                        para reducir las cifras de contaminación a nivel nacional"
                        imagen={meta}/>
                </div>
            </div>
            <h1 className="mt-5 p-5">El equipo</h1>
            <div className="row align-items-center justify-content-center mt-3 mb-5 bloqueFotos">
                <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                    <div className="card border-0 shadow card2">
                        <img src={cati} alt="" className="card-img-top card-img-top-profile imagenes"/>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-1">Catherine Vargas</h5>
                            <div className="card-text text-black-50 letracard">INGENIERA AGRÓNOMA - MAGISTER SUELO Y AGUA - UNIVERSIDAD DE CHILE</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                    <div className="card border-0 shadow card2">
                        <img src={coni} alt="" className="card-img-top card-img-top-profile imagenes"/>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-1">Constanza Vargas</h5>
                            <div className="card-text text-black-50 letracard">INGENIERA EN RECURSOS NATURALES RENOVABLES - UNIVERSIDAD DE CHILE</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4 mr-5 d-flex justify-content-center">
                    <div className="card border-0 shadow card2">
                        <img src={seba} alt="" className="card-img-top card-img-top-profile imagenes"/>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-1">Sebastian Jara</h5>
                            <div className="card-text text-black-50 letracard">INGENIERO CIVIL INFORMÁTICO UNIVERSIDAD TECNICA FEDERICO SANTA MARIA</div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contenedor">
                <div className="item-1">
                    <p>La idea inicial de Descycling nace en la región de Antofagasta en el año 2016 al detectar una alta concentración de materiales contaminantes 
                        en vertederos municipales y sectores urbanos de la ciudad. Ante esto, Luis Vargas toma la decisión de crear el primer proyecto y prototipo 
                        validado en que se plasman las primeras baldosas ecológicas de fachada a partir de residuos de vidrio (dejándo en abierta la aplicación con 
                        caucho y plástico), levantando el primer feedback del usuario y las consideraciones técnicas a seguir en la instalación, todo a partir de una 
                        composición única e ideada en Chile..</p>
                </div>
                <img src={historia1} alt="" className="img-1"/>
                <div className="item-2">
                    <p>Es a partir de esta idea que se dio inicio al gran proyecto Descycling en mayo de 2021, donde Catherine, Constanza y Sebastián quisieron continuar 
                        con la idea, llevándola a las nuevas tendencias, dandose cuenta del gran problema que existía respecto a la contaminación por residuos dada la 
                        insuficiente gestión, desconexión, poca transparencia y facilidades para las comunidades, además de existir un mercado emergente y nuevas normativas 
                        sustentables, pero con pocas industrias o soluciones destinadas a la confección de productos hechos con residuos. </p>
                    <p>Por esto, descubrimos que la composición al ser versátil, era capaz de crear diferentes productos funcionales, como placas de cemento (idea inicial),
                        mesas de terrazo, macetas y decoración, ofreciendo así una solución a la gestión y mercado de la sustentabilidad, al reducir un 50% el uso de cemento y 
                        eliminación de arenas y piedras comunmente usadas por la construcción tradicional, siendo además personalizables dada la versatilidad, pudiendo el 
                        cliente seleccionar distintos diseños (marmoleado, terrazo, color sólido, etc.) y con la gran ventaja de ser accesibles al usuario en la región 
                        Metropolitana de Santiago, Chile. Otorgando una solución a la contaminación y creación de espacios con sentido.</p>
                </div>
                <img src={historia2} alt="" className="img-2"/>
        </section>
        </div>
      )
    }

export default QuienesSomos;
