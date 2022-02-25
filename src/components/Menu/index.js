import './menu.css';
import { BsYoutube, BsInstagram, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a target="_blank" className='social' href='https://github.com/programador-curioso/Encurtador-de-Link' >
                <BsGithub size={24} color="#FFF" />
            </a> 
            
            <a target="_blank" className='social' href='https://www.instagram.com/_thebill/' >
                <BsInstagram size={24} color="#FFF" />
            </a>    

            <a target="_blank" className='social' href='https://www.youtube.com/channel/UCA-_7AwGg-EjPweCKABjYsA?app=desktop' >
                <BsYoutube size={24} color="#FFF" />
            </a>

            <Link className='menu-item' to="/links">
                Meus Links
            </Link>
               
        </div>
    )
}

