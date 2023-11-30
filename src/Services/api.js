
// base da url https://api.themoviedb.org/3/
// url da api https://api.themoviedb.org/3/movie/popular?api_key=b1c42e57ee37da89669938aa302b62cb&language=pt-BR

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api