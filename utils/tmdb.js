const KEY = process.env.TMDB_API_KEY
const BASE = "https://api.themoviedb.org/3"

export async function getPopularMovies(){

let r = await fetch(`${BASE}/movie/popular?api_key=${KEY}&language=pt-BR`)
let j = await r.json()

return j.results

}

export async function searchMovie(q){

let r = await fetch(`${BASE}/search/movie?api_key=${KEY}&query=${q}`)
let j = await r.json()

return j.results

}