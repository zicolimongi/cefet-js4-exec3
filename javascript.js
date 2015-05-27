// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/api/films/:id
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

function requestEpisode(episode_id){
  var getEpisode = new XMLHttpRequest();
  getEpisode.onreadystatechange = callbackGetAllFilms;
  getEpisode.open('GET', 'https://swapi.co/api/films/'+episode_id, true);
  getEpisode.send(null);
}


function callbackGetAllFilms(){
  if(this.readyState === 4) {
     if(this.status === 200) {
      changeOpeningCrawl(JSON.parse(this.response).opening_crawl)
    } else {
      console.log('Erro ao curtir post. Código ' +
        'da resposta HTTP: ' + this.status);
    }
  }
}


function changeOpeningCrawl(newCrawl){
  var p = document.querySelector(".flow p");
  newCrawl = newCrawl.replace(/(?:\r\n|\r|\n)/g, '<br />');
  p.innerHTML = newCrawl;
}


document.getElementById('movies').addEventListener('click',function(e){
  var episodeClicked = e.target.dataset.episode;
  requestEpisode(episodeClicked)
});

