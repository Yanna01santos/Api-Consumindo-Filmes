import { Link } from 'react-router-dom'
import './Home.css'

function Erro(){
    return(
        <div className='erro'>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to='/'>Veja todos os filmes aqui!</Link>
        </div>
    )
}

export default Erro