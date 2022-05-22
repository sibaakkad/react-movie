import React from 'react'
import { Card, Row, Col, Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import MoviesCardInfo from './moviesCardInfo';
import Moment from 'react-moment';

export default function PopularMovies() {
  const [movies, setMovies] = useState([]);
  var counter = 0;
  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  return (
    <div className='movies-container'>
      <div className='header' >
        <h1>
          Popular Movies
        </h1>
      </div>
      <Carousel variant="dark">
        {Array.from({ length: Math.ceil(movies.length / 6) }).map((_, idx) => (
          <Carousel.Item >
            <Row xs={1} md={5} className="g-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" className='card-img' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movies[counter].poster_path}`} alt='movie' />
                    <Card.Body>
                      <Card.Title>{movies[counter].title}</Card.Title>
                      <Card.Text>
                        <p><span>Release Date:</span> <Moment format="MMMM D, YYYY">{movies[counter].release_date}</Moment></p>
                        <p><span >Rating:</span> {movies[counter].vote_average} </p>
                      </Card.Text>
                      <MoviesCardInfo MovieId={movies[counter].id} />
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

{/* <Card cover css={{ w: "100%" }}>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    </Card.Header>
                    <Card.Body>
                      <Card.Image
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movies[counter].poster_path}`}
                        height={400}
                        width="100%"
                        alt="Card example background"
                      />
                    </Card.Body>
                    <Card.Footer
                      blur
                      css={{
                        position: "absolute",
                        bgBlur: "#ffffff",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                      }}
                    >
                      <Row>
                        <Col>
                          <Row justify="flex-end">
                            <MoviesCardInfo MovieId={movies[counter].id} />
                          </Row>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card> */}
