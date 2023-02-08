function popularButton() { 
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=51d81945b1399ec636bf465b376e18c9&language=en-US&page=1')
    .then(response => {
       popularMovie(response.data.results)
    }
    )  
}


function popularMovie (response){
const popularMovieDiv = document.getElementById('popularChoiceDiv');
const popularChoiceDiv = document.createElement('div');
const randomChoice = response[Math.floor(Math.random() * response.length)]
const popularImg = document.createElement('img'); 
popularImg.src = `https://image.tmdb.org/t/p/w300/${randomChoice.poster_path}`; 
popularChoiceDiv.appendChild(popularImg)
popularMovieDiv.appendChild(popularChoiceDiv)    
}

function nowPlayingButton(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=51d81945b1399ec636bf465b376e18c9&language=en-US&page=1')
    .then(response => {
       nowPlayingMovie(response.data.results)
    }
    )  
}

function nowPlayingMovie (response){
    const nowPlayingMovieDiv = document.getElementById('nowPlayingChoiceDiv');
    const nowPlayingChoiceDiv = document.createElement('div');
    const randomChoice = response[Math.floor(Math.random() * response.length)]
    const nowPlayingImg = document.createElement('img'); 
    nowPlayingImg.src = `https://image.tmdb.org/t/p/w300/${randomChoice.poster_path}`; 
    nowPlayingChoiceDiv.appendChild(nowPlayingImg)
    nowPlayingMovieDiv.appendChild(nowPlayingChoiceDiv)    
    }


function topRatedButton(){
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=51d81945b1399ec636bf465b376e18c9&language=en-US&page=1')
    .then(response => {
       topRatedMovie(response.data.results)
    }
    )  

}

function topRatedMovie (response){
    const topRatedMovieDiv = document.getElementById('topRatedChoiceDiv');
    const topRatedChoiceDiv = document.createElement('div');
    const randomChoice = response[Math.floor(Math.random() * response.length)]
    const topRatedImg = document.createElement('img'); 
    topRatedImg.src = `https://image.tmdb.org/t/p/w300/${randomChoice.poster_path}`; 
    topRatedChoiceDiv.appendChild(topRatedImg)
    topRatedMovieDiv.appendChild(topRatedChoiceDiv)    
    }
