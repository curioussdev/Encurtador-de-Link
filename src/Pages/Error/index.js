import './error.css';
import { Link } from 'react-router-dom'
import notFoundImg from '../../assets/img/notfound.png';

export default function Error(){
    return(
        <div className='container-error'>
            <img src={notFoundImg} alt="pagina nao encotrada" />
            <h1>Página não encontrada</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    )
}