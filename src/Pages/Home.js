import { useEffect, useState }from 'react'
import api from '../Services/api'
import { Link } from 'react-router-dom'
import './Home.css'

function Home(){

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function loadFilmes(){
           const response = await api.get('movie/popular', {
               params:{
                   api_key: 'b1c42e57ee37da89669938aa302b62cb',
                   language: 'pt-BR',
                   page: 1,

               }
           })
           setFilmes(response.data.results)
           setLoading(false)
        }

        loadFilmes()

      
    })


    if(loading){
        return(
            <section>
            <div className='loading'>
                 <div></div><div></div><div></div>
            </div>
            </section>
        )
    }

    return(
       <div className='container'>
           <div className='lista-filmes'>
             {filmes.map((filme)=>{
               return(
                   <article key={filme.id}>
                      <Link to={`filme/${filme.id}`}> <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} /> </Link>
                      <Link to={`filme/${filme.id}`} className='button'>{filme.title}</Link>
                   </article>
               )
              })}
           </div>
       </div>
    )
}

export default Home