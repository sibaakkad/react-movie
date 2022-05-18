import './App.css';
import MovieNavbar from './components/navbar';
import TopRatedMovies from './components/topRatedMovies';
import Slider from './components/slider';
import PopularMovies from './components/popularMovies';
import PopularTvShows from './components/popularTvShows';
import TopRatedTvShows from './components/topRatedTvShows';
import { Routes, Route } from "react-router-dom";
import MoviesList from './components/moviesList';
import TVShowsList from './components/tvShowsList';

function App() {

  return (
    <div className="App">
      <MovieNavbar />
      <Routes>
      <Route path="/" element={
      <div> 
      <Slider />
      <PopularMovies />
      <TopRatedMovies />
      <PopularTvShows />
      <TopRatedTvShows />
      </div>} />
        <Route path="movies/popular" element={<MoviesList url="https://api.themoviedb.org/3/movie/popular?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1" />} />
        <Route path="movies/nowPlaying" element={<MoviesList url="https://api.themoviedb.org/3/movie/now_playing?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1" />} />
        <Route path="movies/upcoming" element={<MoviesList url="https://api.themoviedb.org/3/movie/upcoming?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1" />} />
        <Route path="movies/topRated" element={<MoviesList url="https://api.themoviedb.org/3/movie/top_rated?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1" />} />
        <Route path="tvShows/popular" element={<TVShowsList url="https://api.themoviedb.org/3/tv/popular?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1" />} />
        <Route path="tvShows/airingToday" element={<TVShowsList url="https://api.themoviedb.org/3/tv/airing_today?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1" />} />
        <Route path="tvShows/onTV" element={<TVShowsList url="https://api.themoviedb.org/3/tv/on_the_air?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1" />} />
        <Route path="tvShows/topRated" element={<TVShowsList url="https://api.themoviedb.org/3/tv/top_rated?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1" />} />
      </Routes>
    </div>
  );
}

export default App;
