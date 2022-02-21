import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Logo from '../../assets/img/logo.png';
import Menu from '../../components/Menu';
import LinkItemModal from '../../components/LinkItemModal';
import api from '../../services/api';
import { getLinksSaved, saveLinkAtLocalStorage } from '../../services/storeLinks';


export default function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false);

async function handleShortLink() {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLinkAtLocalStorage('@encurtarlink', response.data)

      setLink('');
    }catch{
      alert('ops, parece que algo deu errado')
      setLink('');
    }
  }


    return(
      <div className="container-home">
        
        <div className="logo">
            <img src={Logo} alt="Billink logo img"/>
            <h1>Billink</h1>
            <span>Cole seu link para encurtar! 👇 </span>
        </div>


        <div className="area-input">
            <div>
                <FiLink size={24} color="#FFF" />
                <input 
                    placeholder='Cole seu link aqui...'
                    value={link}  
                    onChange={ (e) => setLink(e.target.value)}
                />
            </div>
            <button onClick={handleShortLink}> Encurtar Link </button>
        </div>
          <Menu/>

          { showModal && (
            <LinkItemModal 
            
            closeModal={ () => setShowModal(false)}
            content={data}

            /> 
          )}
      </div>

    )
  }