import React from 'react'
import { Card, Row, Col, Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import TvShowsCardInfo from './tvShowsCardInfo';
import Moment from 'react-moment';
import PlayVedio from './playVedio';

export default function TopRatedTvShows() {
  const [tvShows, setTvShows] = useState([]);
  var counter = 0;
  const getTvShowsRequest = async () => {
    const url = ` https://api.themoviedb.org/3/tv/top_rated?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setTvShows(responseJson.results);
  };

  useEffect(() => {
    getTvShowsRequest();
  }, []);
  return (
    <div>
      <div className='header' >
        <h1>Top Rated Tv Shows</h1>
      </div>
      <Carousel variant="dark">
        {Array.from({ length: Math.ceil(tvShows.length / 6) }).map((_, idx) => (
          <Carousel.Item>
            <Row xs={1} md={5} className="g-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${tvShows[counter].poster_path}`} alt='movie' />
                    <Card.Body>
                      <Card.Title>{tvShows[counter].name}</Card.Title>
                      <Card.Text>
                        <p><span>Release Date:</span>  <Moment format="MMMM D, YYYY">{tvShows[counter].first_air_date}</Moment></p>
                        <p><span >Rating:</span> {tvShows[counter].vote_average} </p>
                      </Card.Text>
                      <div className="flex-container">
                        <TvShowsCardInfo TVId={tvShows[counter].id} />
                        <PlayVedio TVId={tvShows[counter].id} />
                      </div>
                    </Card.Body>
                  </Card>
                  <div style={{ display: 'none' }}>{counter++}</div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel></div>
  )
}
