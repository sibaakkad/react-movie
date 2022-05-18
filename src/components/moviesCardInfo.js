import React from 'react'

import { Button, Modal, Row, Col, Badge } from 'react-bootstrap';
import { useState } from 'react';


function MoviesCardInfo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [trailer, setTrailer] = useState([]);
  const [moviesDetailes, setMoviesDetailes] = useState([]);

  const getMovieDetailes = async (props) => {
    const url = `https://api.themoviedb.org/3/movie/${props.MovieId}?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMoviesDetailes(responseJson);
    // console.log(responseJson)
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
  return (
    <div>
      <>
        <Button variant="primary" onClick={() => { handleShow(); getMovieData() }}>
          Show More
        </Button>

        <Modal show={show} onHide={handleClose}
          size="lg"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{moviesDetailes.original_title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Row>
              <Col >
                <div>
                  {/* <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${moviesDetailes.poster_path}`} /> */}
                  <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/${trailer[0]?.key}`} >
                  </iframe>
                </div>
              </Col>
              <Col>
                <div>
                  <p> {moviesDetailes.tagline}</p>
                  <p> <Badge pill bg="secondary">Status </Badge>  : {moviesDetailes.status}    {"       "}
                    <Badge pill bg="secondary">  Release date </Badge>  : {moviesDetailes.release_date}
                  </p>
                  {
                    moviesDetailes.genres?.map((item, idx) => (
                      <Badge pill bg="secondary">{item.name}</Badge>
                    ))
                  }
                  <h3>
                    <Badge pill bg="dark">Overview</Badge>
                  </h3>
                  <p>{moviesDetailes.overview}</p>
                </div>
              </Col>
            </Row>
            <Row>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
} export default MoviesCardInfo;
