import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import MoviesCardInfo from './moviesCardInfo'
import { useState, useEffect } from 'react';

export default function MoviesList(props) {

  const [movies, setMovies] = useState([]);
  var counter = 0;

  const getMovieRequest = async (url) => {

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
    console.log(responseJson.results)
  };
  useEffect(() => {
    getMovieRequest(props.url);
  }, []);

  return (
    <div>
      <Row xs={1} md={5} className="g-4">
        {Array.from({ length: 20 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movies[idx]?.poster_path}`} alt='movie' />
              <Card.Body>
                <Card.Title>{movies[idx]?.title}</Card.Title>
                <Card.Text>
                  <p><span>Release Date:</span> {movies[idx]?.release_date}</p>
                  <p><span >Rating:</span> {movies[idx]?.vote_average} </p>
                </Card.Text>
                <MoviesCardInfo MovieId={movies[idx]?.id} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row></div>
  )
}
