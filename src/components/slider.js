import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react';


export default function Slider() {
  const [movies, setMovies] = useState([]);
  var counter = 0;
  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1`

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results)

  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  return (

    <div >
      <Carousel variant="dark">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Carousel.Item>
            <img style={{ height: "100vh", width: "100%", objectFit: "fill" }}
              className="d-block "
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movies[idx]?.poster_path}`} alt='poster' />
            <div style={{ display: 'none' }}>{counter++}</div>
          </Carousel.Item>

        ))}
      </Carousel>
    </div>
  )
}
