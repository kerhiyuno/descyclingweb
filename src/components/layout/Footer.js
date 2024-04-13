import {useContext} from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import ProductosContext from '../../context/productos/productosContext';


const Footer = (props) => {

   const navigate = useNavigate();
   const {cambioCategoria} = useContext(ProductosContext)

  return (
    <footer className="text-center text-white footerestilos" >
        <div className="container p-4 pb-0">
        <section className="">
            <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-2">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                Descycling
                </h6>
                <p className="text-right">
                Diseñando con residuos
                </p>
            </div>
            <hr className="w-100 d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-2">
                <h6 className="text-uppercase mb-4 font-weight-bold">Productos</h6>
                <p>
                <button className="text-white links" onClick={() => {cambioCategoria("Placas"); navigate('/Productos')}} >Placas de fachada</button>
                </p>
                <p>
                <button className="text-white links" onClick={() => {cambioCategoria("Macetas"); navigate('/Productos')}}>Macetas</button>
                </p>
                <p>
                <button className="text-white links"  onClick={() => {cambioCategoria("Decoración"); navigate('/Productos')}}>Decoración</button>
                </p>
            </div>
            <hr className="w-100 d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-2">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                Información
                </h6>
                <p>
                <a className="text-white links" href="/QuienesSomos">Quienes Somos</a>
                </p>
                <p>
                <a className="text-white links" href="/QuienesSomos">Historia</a>
                </p>
            </div>
            <hr className="w-100  d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                <p><i className="fa fa-home mr-3"></i> Providencia #1017 Of. 41, Chile</p>
                <p><i className="fa fa-envelope mr-3"></i> descycling@gmail.com</p>
                <p><i className="fa fa-phone mr-3"></i> +56 9 90869462</p>
            </div>
            </div>
        </section>

        <hr className="my-3"/>

        <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                </div>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
                href="https://www.facebook.com/descycling"
                ><i className="fa fa-facebook"></i
                ></a>
                <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
                href="https://www.instagram.com/descycling/"
                ><i className="fa fa-instagram"></i
                ></a>
                <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
                href="https://www.linkedin.com/company/descycling-chile/"
                ><i className="fa fa-linkedin"></i
                ></a>
            </div>
            </div>
        </section>
        </div>
    </footer>
  );
}

export default Footer;