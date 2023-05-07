import { useNavigate } from 'react-router-dom';


const Blog = () => {

    const navigate = useNavigate();

    return(
        <div className="p-5 mt-5 mb-5">
            <h1 className="p-5 mt-5 mb-5">Blog de Reciclaje</h1>
            <h3 className="p-5 mt-5">¿Tienes una empresa/startup que crea eco-cemento?</h3>
            <h4 className="link mb-5 mt-5" onClick={() => navigate('/Contacto')}>Contáctanos</h4>
        </div>
      )
    }

export default Blog;