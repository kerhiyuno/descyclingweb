import {CAMBIO_CATEGORIA,QUITAR_CATEGORIA} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) =>{
    switch (action.type){
        case CAMBIO_CATEGORIA:
            if (action.payload === "todos"){
                return {
                    ...state,
                    categorias: ["todos"]
                }
              }
              else{
                if (state.categorias.includes(action.payload)){
                  if (state.categorias.length === 1) {
                    return {
                        ...state,
                        categorias: ["todos"]
                    }
                  }
                  else {
                    return {
                        ...state,
                        categorias: state.categorias.filter(categoria => categoria !== action.payload)
                    }
                  }
                }
                else if (state.categorias[0]==="todos"){
                    return {
                        ...state,
                        categorias: [action.payload]
                    }
                }
                else{
                  console.log([...state.categorias,action.payload]);
                  return {
                    ...state,
                    categorias: [...state.categorias,action.payload]
                    }
                }
              } 
        case QUITAR_CATEGORIA:
            return{
                ...state,
            }
        default:
            return state;
    }
}