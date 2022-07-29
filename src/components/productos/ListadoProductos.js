import Producto from './Producto';

const ListadoProductos = ({productos}) => {
    console.log(productos);
    return(
        <div className="row justify-content-center">
          { productos.length > 0 ? (          
              productos.map(producto => (
                <Producto 
                  key={producto.id}
                  producto={producto}
                />
              ))
            ) 
            :
            <p>No hay productos disponibles en esta categoria</p>
        }
        </div>
      )
    }

export default ListadoProductos;