import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../src/Services/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Filmes.css'


function Filmes(){
   
  const { id } = useParams()
  const navigation = useNavigate()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

   useEffect(() => {
      async function loadFilme(){
         await api.get(`/movie/${id}`,{
           params:{
            api_key: 'b1c42e57ee37da89669938aa302b62cb',
            language: 'pt-BR',
           }
         })
         .then((response) => {
             setFilme(response.data)
             setLoading(false)
         })

         .catch(() =>{
           navigation('/', { replace: true })
           return;
         })
      }

      loadFilme()
      
      return () => {
       
      }
   }, [navigation, id])

   const salvarFilme = ( ) => {
     const lista = localStorage.getItem('@megaflix')

     let filmesSalvos = JSON.parse(lista) || []

     let filmesJaSalvos = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

     if(filmesJaSalvos){
      alert('Esse filme já está salvo!')
       return
     }

     filmesSalvos.push(filme)
     localStorage.setItem('@megaflix', JSON.stringify(filmesSalvos))
     alert('Filme salvo com sucesso!');
   }


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
     <div className='container2'>
     
       <h1>{filme.title}</h1>
       <div className='img'> <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} /> </div>
        <div className='text'>
          <h2>Sinopse</h2>
          <p>{filme.overview}</p>
        </div>
        <strong>Avaliação: {Math.floor(filme.vote_average)} / 10</strong>
       
        <div className='btns'>
          <button onClick= {salvarFilme}>Salvar</button>
        
            <a target='_blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
          
        </div>



        <span>ㅤ</span>
    </div>)
}

export default Filmes