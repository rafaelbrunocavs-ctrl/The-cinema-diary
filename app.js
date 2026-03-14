const API = "/api"

function saveWatchlist(movie){
let list = JSON.parse(localStorage.getItem("watchlist") || "[]")
list.push(movie)
localStorage.setItem("watchlist", JSON.stringify(list))
renderWatchlist()
}

function renderWatchlist(){
let list = JSON.parse(localStorage.getItem("watchlist") || "[]")
let container = document.getElementById("watchlist")
container.innerHTML = ""

list.forEach(m=>{
let div=document.createElement("div")
div.className="card"
div.innerHTML=`
<img src="https://image.tmdb.org/t/p/w342${m.poster_path}">
<p>${m.title}</p>
`
container.appendChild(div)
})
}

async function loadRecommendations(){
let res = await fetch(API+"/recommend")
let movies = await res.json()

let container = document.getElementById("recommendations")
container.innerHTML=""

movies.forEach(m=>{
let div=document.createElement("div")
div.className="card"
div.innerHTML=`
<img src="https://image.tmdb.org/t/p/w342${m.poster_path}">
<p>${m.title}</p>
<button onclick='saveWatchlist(${JSON.stringify(m)})'>Salvar</button>
`
container.appendChild(div)
})
}

async function searchMovie(){
let q=document.getElementById("search").value
let res=await fetch(API+"/movie?q="+q)
let movies=await res.json()

let container=document.getElementById("recommendations")
container.innerHTML=""

movies.forEach(m=>{
let div=document.createElement("div")
div.className="card"
div.innerHTML=`
<img src="https://image.tmdb.org/t/p/w342${m.poster_path}">
<p>${m.title}</p>
<button onclick='saveWatchlist(${JSON.stringify(m)})'>Salvar</button>
`
container.appendChild(div)
})
}

function createFestival(){
let list = JSON.parse(localStorage.getItem("watchlist") || "[]")

list.sort((a,b)=>a.runtime-b.runtime)

let container=document.getElementById("festival")
container.innerHTML=""

list.forEach(m=>{
let div=document.createElement("div")
div.className="card"
div.innerHTML=`<p>${m.title}</p>`
container.appendChild(div)
})
}

renderWatchlist()
loadRecommendations()