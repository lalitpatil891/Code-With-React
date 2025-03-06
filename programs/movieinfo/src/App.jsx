import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "7572a7ba"; // Your OMDB API key

  // Fetch multiple movies based on search
  const fetchMovies = async () => {
    if (!movieName) {
      setError("Please enter a movie name");
      return;
    }

    try {
      setError(null);
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setSelectedMovie(null); // Reset selected movie
      } else {
        setError("Movie not found");
        setMovies([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setMovies([]);
    }
  };

  // Fetch detailed info for selected movie
  const fetchMovieDetails = async (title) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setSelectedMovie(data);
      } else {
        setError("Could not fetch movie details");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  // Clear results when input is empty
  useEffect(() => {
    if (!movieName.trim()) {
      setMovies([]);
      setSelectedMovie(null);
      setError(null);
    }
  }, [movieName]);

  return (
    <>    <div><h2><span role="img" aria-label="popcorn">🍿</span> CineSearch</h2></div>
      <div className="movie-search-container">
        <img className="search-icon" src="/images/movie-2-line.png" alt="icon" />
        <input className="input-box"
          id="movieInput"
          type="text"
          placeholder="Enter movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button onClick={fetchMovies}>Search</button>


      </div>


      <div className="main-container">

        <div className="error-line">{error && <p style={{ color: "red" }}>{error}</p>}</div>
        <img className="background-glow" src="/images/3-shadow.png" alt="" />
        <img className="background-glow-roll" src="/images/fillroll.png" alt="" />



        {/* Show list of movies */}
        {movies.length > 0 && !selectedMovie && (
          <div className="movie-result-container">
            <h3>Search Results</h3>
            <div className="movie-result-sub-container">


              {movies.map((movie) => (
                <div className="movie-result-flex">
                  <div className="movie-flex-box" key={movie.imdbID} onClick={() => fetchMovieDetails(movie.Title)} style={{ cursor: "pointer" }}>

                    <div><img src={movie.Poster} alt={movie.Title} width="250" /></div>
                    <p>{movie.Title} ({movie.Year}) {movie.genre}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        )}

        {/* Show selected movie details */}
        {selectedMovie && (
          <div className="movie-result-container">

            <div className="movie-details-flex">

              <div className="poster-side">
                <img src={selectedMovie.Poster} alt={selectedMovie.Title} width="250" />
              </div>
              <div className="vertical-line"> </div>
              <div className="text-details">
                <h1>{selectedMovie.Title}</h1>
                <p>Year : &nbsp; {selectedMovie.Year}</p>
                <p>Genre : &nbsp;  {selectedMovie.Genre}</p>
                <p>Director : &nbsp;  {selectedMovie.Director}</p>
              </div>
            </div>
            <br />
            <div className="back-btn"><button onClick={() => setSelectedMovie(null)}>Back to List</button></div>

          </div>
        )}


        <footer>
          A simple project by <a href="https://github.com/lalitpatil891" target="_blank">Lalit Patil </a> – Keep Exploring Movies! <span role="img" aria-label="popcorn">🍿</span>&#10084;
        </footer>
      </div>

    </>
  );
}

export default App;
