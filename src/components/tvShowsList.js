import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import TvShowsCardInfo from './tvShowsCardInfo';
import PlayVedio from './playVedio';
import Moment from 'react-moment';

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
              <p><span>Release Date:</span>  <Moment format="MMMM D, YYYY">{tvShows[counter]?.first_air_date}</Moment></p>
                <p><span >Rating:</span> {tvShows[counter]?.vote_average} </p>
              </Card.Text>
              <div className="flex-container">
                <TvShowsCardInfo TVId={tvShows[counter]?.id} />
                <PlayVedio TVId={tvShows[counter]?.id} />
              </div>
            </Card.Body>
          </Card>
          <div style={{ display: 'none' }}>{counter++}</div>
        </Col>
      ))}
    </Row></div>
  )
}