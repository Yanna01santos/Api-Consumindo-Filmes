import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Erro from './Pages/Erro'
import Favoritos from './Pages/Favoritos'
import Home from './Pages/Home'
import Filmes from './Pages/Filmes'
import Header from './Components/Header'

function RouteApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element= { <Home/> }/>
            <Route path="/filme/:id" element= { <Filmes/> } />
            <Route path='/favoritos' element= { <Favoritos /> } />


            <Route path='*' element= { <Erro/> } />
        </Routes>
        
        </BrowserRouter>
    )
}

export default RouteApp