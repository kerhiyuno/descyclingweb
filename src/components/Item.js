import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clienteAxios from '../config/axios';
import './Item.css';
import baldosas from '../img/baldosas.jpg';

const Item = () => {

    const { item } = useParams();
    const [nombre, guardarNombre ] = useState('');
    const [descripcion, guardarDescripcion ] = useState('');
    const [stock, guardarStock ] = useState(0);
    const [precio, guardarPrecio ] = useState(0);
    const [cantidad, guardarCantidad] = useState(0);

    const obtenerProducto= async () => {
        try {
            const respuesta = await clienteAxios.get(`/api/productos/${item}`);
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
            id: item,
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
            <div className="d-flex bloque-item justify-content-between">
                <img 
                        className="rounded img-fluid"
                        src={baldosas}
                        alt="Second slide"
                        />
                <div className='contenido-item mx-auto'>
                    <div className='d-flex flex-row letra-item w-100 justify-content-between'>
                        <p className='titulo-item'>Nombre:</p>
                        <p>{nombre}</p>
                    </div>
                    <div className='d-flex flex-row letra-item w-100 justify-content-between'>
                        <p className='titulo-item'>Descripcion:</p>
                        <p>{descripcion}</p>
                    </div>
                    <div className='d-flex flex-row letra-item w-100 justify-content-between'>
                        <p className='titulo-item'>Stock:</p>
                        <p>{stock}</p>
                    </div>
                    <div className='d-flex flex-row letra-item w-100 justify-content-between'>
                        <p className='titulo-item'>Precio:</p>
                        <p>{precio}</p>
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
                                value="Agregar al Carrito"
                            />
                        </form>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Item;