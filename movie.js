import { searchMovie } from "../utils/tmdb.js"

export default async function handler(req,res){

let { q } = req.query

let movies = await searchMovie(q)

res.status(200).json(movies)

}