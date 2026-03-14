export function orderFestival(movies){

return movies.sort((a,b)=>{

if(a.runtime && b.runtime){
return a.runtime - b.runtime
}

return a.release_date.localeCompare(b.release_date)

})

}