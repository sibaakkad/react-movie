import './App.css';
import MovieNavbar from './components/navbar';
import TopRatedMovies from './components/topRatedMovies';
import Slider from './components/slider';
import PopularMovies from './components/popularMovies';
import PopularTvShows from './components/popularTvShows';
import TopRatedTvShows from './components/topRatedTvShows';
function getData() {
 
  // fetch(' https://api.themoviedb.org/3/genre/movie/list?api_key=api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US').then(
  //   response => response.json()
  // ).then(responseJosn => {
  //   //Yaşa göre filtreleme
  //    console.log(responseJosn.posters)
  // });
}
function App() {
  getData()
  return (
    <div className="App">
      <MovieNavbar/>
      <Slider/>
      <PopularMovies/>
      <TopRatedMovies/>
      <PopularTvShows/>
      <TopRatedTvShows/>
    </div>
  );
}

export default App;
