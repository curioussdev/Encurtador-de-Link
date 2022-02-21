import { useState, useEffect } from 'react';
import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getLinksSaved } from '../../services/storeLinks';

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({})

  const [showModal, setShowModal] = useState(false)

  useEffect( () => {
    async function getLinks(){
      const result = await getLinksSaved("@encurtarlink")

      console.log(result)

    }

    getLinks();
  }, [])

    return(
      <div className="links-container">
        
        <div className='links-header'>
          <Link to="/">
          <FiArrowLeft size={38} color="#FFF" />
          </Link>
          
          <h1>Meus Links</h1>
        </div>

      <div className='links-item'>
        <button className='link'>
        <FiLink size={18} color="#FFF" />
        https://www.youtube.com/watch?v=vVbHZyHgt7o&t=1653s
        </button>
      
        <button className='link-delete'>
          <FiTrash size={24} color="#FF5454" />
        </button>
      </div>

      

      </div>
    )
  }