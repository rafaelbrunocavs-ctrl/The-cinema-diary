export function rankMovies(movies){

return movies.sort((a,b)=>{

let scoreA = a.vote_average * 0.7 + a.popularity * 0.3
let scoreB = b.vote_average * 0.7 + b.popularity * 0.3

return scoreB - scoreA

})

}