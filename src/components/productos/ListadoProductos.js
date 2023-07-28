import TarjetaProducto from './TarjetaProducto';

const ListadoProductos = ({productos}) => {
    console.log(productos);
    return(
        <div className="row justify-content-center mb-5">
          { productos.length > 0 ? (          
              productos.map(producto => (
                <TarjetaProducto 
                  key={producto.id}
                  producto={producto}
                />
              ))
            ) 
            :
            <div className='mb-5 p-5'>
              <p className='mb-5 p-5'>No hay productos disponibles en esta categoria</p>
            </div>
        }
        </div>
      )
    }

export default ListadoProductos;