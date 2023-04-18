import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';
import './DetalleProducto.css';
import baldosas from '../../img/baldosas.jpg';

const DetalleProducto = () => {

    const { id } = useParams();
    const [nombre, guardarNombre ] = useState('');
    const [descripcion, guardarDescripcion ] = useState('');
    const [stock, guardarStock ] = useState(0);
    const [precio, guardarPrecio ] = useState(0);
    const [cantidad, guardarCantidad] = useState(0);

    const obtenerProducto= async () => {
        try {
            const respuesta = await clienteAxios.get(`/api/productos/${id}`);
            console.log(respuesta.data);
            guardarNombre(respuesta.data.nombre);
            guardarDescripcion(respuesta.data.descripcion);
            guardarStock(respuesta.data.stock);
            guardarPrecio(respuesta.data.precio);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        if (cantidad < 1){
            console.log("Debe seleccionar una cantidad");
            return;
        }
        console.log("paso");
        const productoSeleccionado = {
            id,
            cantidad,
            nombre,
            precio
        }
        console.log(productoSeleccionado);
    }
    useEffect(()=>{
        obtenerProducto();
		// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='container'>
            <div className="d-flex bloque-item justify-content-center">
                <img 
                        className="rounded img-fluid w-100 max-width-img"
                        src={baldosas}
                        alt="Second slide"
                        />
                <div className='contenido-item mx-auto'>
                    <div className='d-flex flex-wrap letra-item w-100 justify-content-between mt-4'>
                            <p className='titulo'>{nombre}</p>
                            <p className='precio'>${precio} CLP el m2</p>
                    </div>
                    <div className='d-flex flex-row letra-item w-100 justify-content-between mt-3'>
                        <p className='descripcionProducto'>{descripcion}</p>
                    </div>
                    <div className='d-flex flex-row letra-item w-100 justify-content-between'>
                        <p className='titulo-item'>Stock: {stock}</p>
                    </div>
                    <div className='d-flex flex-wrap letra-item w-100 justify-content-center mt-1'>
                        <div className='d-flex flex-column justify-content-center'>
                            <p className='tituloOpcionesProducto'>Diseño</p>
                            <div className="row center botonesDetallesProducto mb-1">
                                <button type="button" className= "botonesDetallesOpciones" >Color Sólido</button>
                                <button type="button" className= "botonesDetallesOpciones" >Terrazo</button>
                                <button type="button" className= "botonesDetallesOpciones" >Marmoleado</button>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                            <p className='tituloOpcionesProducto'>Colores</p>
                            <div className="row center botonesDetallesProducto mb-1">
                                <button type="button" className= "botonesDetallesOpciones" >Rojo</button>
                                <button type="button" className= "botonesDetallesOpciones" >Azul</button>
                                <button type="button" className= "botonesDetallesOpciones" >Verde</button>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center '>
                            <p className='tituloOpcionesProducto'>Tamaño</p>
                            <div className="row center botonesDetallesProducto mb-1">
                                <button type="button" className= "botonesDetallesOpciones" >Rectangular</button>
                                <button type="button" className= "botonesDetallesOpciones" >Cuadrado</button>
                                <button type="button" className= "botonesDetallesOpciones" >Hexagonal</button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <form className="formulario-item" onSubmit={handleSubmit}>
                            <label htmlFor='cantidad'>Cantidad</label>
                            <select id="cantidad" value={cantidad} onChange={e => guardarCantidad(parseInt(e.target.value))}>
                                <option className='formulario-item-option'>--Seleccione--</option>
                                {[...Array(stock + 1)].map((e, i) => {
                                    if (i!==0){
                                        return <option className='formulario-item-option' value={i} key={i}>{i}</option>
                                    }
                                })}
                            </select>
                            <input
                                type="submit"
                                value="Añadir al Carrito"
                            />
                        </form>
            </div>
                </div>
            </div>
        </div>
    )
}

export default DetalleProducto;