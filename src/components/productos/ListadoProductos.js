import Producto from './Producto';

const ListadoProductos = ({productos}) => {
    console.log(productos);
    return(
        <div className="row justify-content-center">
          {productos.map(producto => (
            <Producto 
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      )
    }

export default ListadoProductos;