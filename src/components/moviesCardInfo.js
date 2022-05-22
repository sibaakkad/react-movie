import React from 'react'
import { Modal, Button, Text, Row, Col } from "@nextui-org/react";
import { useState } from 'react';
import Moment from 'react-moment';
import PlayVedio from './playVedio';

function MoviesCardInfo(props) {

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [trailer, setTrailer] = useState([]);
  const [moviesDetailes, setMoviesDetailes] = useState([]);

  const getMovieDetailes = async (props) => {
    const url = `https://api.themoviedb.org/3/movie/${props.MovieId}?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMoviesDetailes(responseJson);
  };

  const getTrailer = async (props) => {

    const url = `https://api.themoviedb.org/3/movie/${props.MovieId}/videos?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();
    const trailerList = responseJson.results.filter((item) => item.type == "Trailer");
    setTrailer(trailerList)
  };
  const getMovieData = () => {
    getTrailer(props);
    getMovieDetailes(props);
  }
  const openTrailer = () => {
    <PlayVedio key={trailer[0]?.key} />
  }
  return (
    <div>
      <>
        <Button shadow color="gradient" onClick={() => { handler(); getMovieData() }}>
          Show More
        </Button>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          width="50%"
        >
          <Modal.Header>
            <Text b size={25}>
              {moviesDetailes.original_title}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col >
                <div >
                  <img className='card-info-img' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${moviesDetailes.poster_path}`} />
                  {/* <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/${trailer[0]?.key}`} >
                  </iframe> */}
                </div>
              </Col>
              <Col>
                <p>
                  <Moment format="DD/MM/YYYY" className='date'>{moviesDetailes.release_date}</Moment>

                  {
                    moviesDetailes.genres?.map((item, idx) => (

                      <span className='card-info-span'>• {item.name}</span>
                    ))
                  }
                </p>
                <p className='tagline'> {moviesDetailes.tagline}</p>
                <h2>
                  Overview
                </h2>
                <p>{moviesDetailes.overview}</p>
              </Col>
            </Row>
            <Button color="gradient" onClick={openTrailer} className='player-button'><i class="fa fa-play-circle" style={{ fontSize: "30px" }}></i> Play Trailer</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
} export default MoviesCardInfo;






