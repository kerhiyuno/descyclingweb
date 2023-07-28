import { useNavigate } from 'react-router-dom';


const Blog = () => {

    const navigate = useNavigate();

    return(
        <div className="p-5 mt-5 mb-5 col">
            <h1 className="p-5 mt-5 mb-5">Blog de Reciclaje</h1>
            <h3 className=" mt-5 center mb-5">¿Quieres publicar contenido sobre el reciclaje, revalorización o gestión de residuos y que se publique en nuestra página web?</h3>
            <h1 className='m-5 p-4'> </h1>
            <h4 className="link mb-5 mt-5" onClick={() => navigate('/Contacto')}>Contáctanos</h4>
        </div>
      )
    }

export default Blog;