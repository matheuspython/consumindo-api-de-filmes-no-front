async function getFilm(){
  try{
    const response = await fetch('https://api-filmes.herokuapp.com/')
    const data = await response.json()
    show(data)
    console.log(data)
  }catch(err){
    alert('erro na requisição do filme')
  }
}
getFilm()

function show(films){
  let output;
 
 films.map(film =>{
  output += `
  <article class="box">
        <img src="${film.img}" alt="${film.filme}">
        <h2>${film.filme}</h2>
        <p>${film.descricao}</p>
    </article>
  `
 })

  document.querySelector('.main .container').innerHTML = output
}