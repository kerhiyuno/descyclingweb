import './Carrito.css';

const Carrito = () => {

    return(
        <main className="container">
           <h1 className='mt-5'>Carrito de compras</h1>
           <div className="contenido">
                <div className='carrito'>
                    <h2>Artículos</h2>
                </div>
                <aside className="resumen">
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar:</p>
                </aside>
           </div>
        </main>
    )

}

export default Carrito;