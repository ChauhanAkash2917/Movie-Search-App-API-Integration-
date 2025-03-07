// https://www.omdbapi.com/?s=dhoom&apikey=7de3bb34

const apiKey = "7de3bb34";

const fetchmovie = async (title) => {
  console.log(title);
  const resp = await fetch(
    `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`
  );
  const data = await resp.json();
  console.log(data);
  return data
};
// fetchmovie();   

const searchbtitle = async () => {
  const title = document.querySelector("#moviesearch").value.trim();
  if (!title) {
    alert("Please enter a movie title");
    return;
  }
  displaymovies( await fetchmovie(title))
};

function displaymovies  (data) {
    // console.log(data);
    const movieResult = document.querySelector("#movieResult")
    movieResult.innerHTML = ""
    if(data.Response==="False"){
        movieResult.innerHTML=`<div class="alert alert-denger">No movies Found 😞 </div>`
        return;
    }

    data.Search.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("col-md-3", "mb-4");
      movieDiv.innerHTML = `
        <div class="card movie-card">
          <img src="${movie.Poster}" alt="${movie.Title}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">Year: ${movie.Year}</p>
          </div>
        </div>
      `;
      movieResult.appendChild(movieDiv);
    });
    
}