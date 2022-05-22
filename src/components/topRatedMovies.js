import React from 'react'
import { Card, Row, Col, Button, Carousel,Badge } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import MoviesCardInfo from './moviesCardInfo';
export default function TopRatedMovies () {

  const [movies, setMovies] = useState([]);
  var counter = 0;

  // const rowsLength = () => {
  //   var x = [];
  //   var count = Math.floor(movies.length / 6);
  //   if (movies.length % 6 == 0) {
  //     for (let i = 0; i > count; i++) {
  //       x.push(count)
  //     }
  //   }
  //   else {
  //     for (let i = 0; i > count; i++) {
  //       x.push(count)
  //     } 
  //     x.push(movies.length % 6)
  //   }
  //   return x;
  // }


  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
       <h1>
      <Badge bg="secondary"> Top Rated Movies</Badge>
      </h1>
      
      <Carousel variant="dark">
        {Array.from({ length: Math.ceil(movies.length / 6) }).map((_, idx) => (
          <Carousel.Item>
            <Row xs={1} md={5} className="g-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movies[counter].poster_path}`} alt='movie' />
                    <Card.Body>
                      <Card.Title>{movies[counter].title}</Card.Title>
                      <Card.Text>
                        <p><span>Release Date:</span> {movies[counter].release_date}</p>
                        <p><span >Rating:</span> {movies[counter].vote_average} </p>
                      </Card.Text>
                      <MoviesCardInfo MovieId ={movies[counter].id}/>
                    </Card.Body>
                  </Card>
                  <div style={{ display: 'none' }}>{counter++}</div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
