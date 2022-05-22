import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import TvShowsCardInfo from './tvShowsCardInfo';

export default function TVShowsList(props) {
  const [tvShows, setTvShows] = useState([]);
  var counter = 0;
  const getTvShowsRequest = async (url) => {

    const response = await fetch(url);
    const responseJson = await response.json();
    setTvShows(responseJson.results);
  };

  useEffect(() => {
    getTvShowsRequest(props.url);
  }, []);
  return (
    <div> <Row xs={1} md={5} className="g-4">
      {Array.from({ length: 20 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${tvShows[counter]?.poster_path}`} alt='movie' />
            <Card.Body>
              <Card.Title>{tvShows[counter]?.name}</Card.Title>
              <Card.Text>
                <p><span>Release Date:</span> {tvShows[counter]?.release_date}</p>
                <p><span >Rating:</span> {tvShows[counter]?.vote_average} </p>
              </Card.Text>
              <TvShowsCardInfo TVId={tvShows[counter]?.id} />
            </Card.Body>
          </Card>
          <div style={{ display: 'none' }}>{counter++}</div>
        </Col>
      ))}
    </Row></div>
  )
}