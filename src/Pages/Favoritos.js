import './Favoritos.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Favoritos = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
      const lista = localStorage.getItem('@megaflix')
      setFilmes(JSON.parse(lista) || [])
    }, [])

    const excluir = (id) => {
       let filtro = filmes.filter((filme) => {
      return(filme.id !== id)

     
       })

       setFilmes(filtro)
       localStorage.setItem('@megaflix', JSON.stringify(filtro))
       
    }



    return(
        <div className='container-favoritos'>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo! :(</span>}
            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <p>{filme.title}</p>
                            <div className='detalhes'>
                                
                              <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                              <i className="bi bi-trash" onClick={() => excluir(filme.id)} ></i>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos