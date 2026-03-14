import { getPopularMovies } from "../utils/tmdb.js"
import { rankMovies } from "../utils/ranking.js"

export default async function handler(req,res){

let movies = await getPopularMovies()

let ranked = rankMovies(movies)

res.status(200).json(ranked.slice(0,6))

}