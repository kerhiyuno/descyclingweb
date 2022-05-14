import {useReducer} from 'react';
import ProductosContext from './productosContext';
import ProductosReducer from './productosReducer';

import {CAMBIO_CATEGORIA,QUITAR_CATEGORIA} from '../types';


const ProductosState = (props) => {

    const initialState = {
        categorias: ["todos"]
    }

    const [state,dispatch] = useReducer(ProductosReducer,initialState);

    const obtenerCategorias = () => {
        console.log(state.categorias)
        return state.categorias
    }


    const cambioCategoria = (categoria) => {
        dispatch({
            type: CAMBIO_CATEGORIA,
            payload: categoria
        }
        );
    }
    const quitarCategoria = (categoria) => {
        dispatch({
            type: QUITAR_CATEGORIA,
            payload: categoria
        }
        );
    }
    return(
        <ProductosContext.Provider
            value={{
                obtenerCategorias,
                cambioCategoria,
                quitarCategoria,
                categorias: state.categorias
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductosState;