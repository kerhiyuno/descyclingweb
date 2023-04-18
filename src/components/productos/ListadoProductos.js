import TarjetaProducto from './TarjetaProducto';

const ListadoProductos = ({productos}) => {
    console.log(productos);
    return(
        <div className="row justify-content-center">
          { productos.length > 0 ? (          
              productos.map(producto => (
                <TarjetaProducto 
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