import React from 'react'
import { Button, Modal, Row, Col, Badge } from 'react-bootstrap';
import { useState } from 'react';

export default function TvShowsCardInfo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [trailer, setTrailer] = useState([]);
  const [tvShowsDetailes, setTvShowsDetailes] = useState([]);

  const getTvShowsDetailes = async (props) => {

    const url = `https://api.themoviedb.org/3/tv/${props.TVId}?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setTvShowsDetailes(responseJson);
    //  console.log(responseJson)
  };

  const getTrailer = async (props) => {
    
    const url = `https://api.themoviedb.org/3/tv/${props.TVId}/videos?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();
    const trailerList = responseJson.results.filter((item) => item.type == "Trailer");
    setTrailer(trailerList)
    console.log(trailerList)

  };
  const getTvShowsData = () => {
    getTrailer(props);
    getTvShowsDetailes(props);
    console.log(props)

  }
  return (
    <div>
      <>
        <Button variant="primary" onClick={() => { handleShow(); getTvShowsData() }}>
          Show More
        </Button>

        <Modal show={show} onHide={handleClose}
          size="lg"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{tvShowsDetailes.original_name}</Modal.Title>
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
                  <p> {tvShowsDetailes.tagline}</p>
                  <p> <Badge pill bg="secondary">Status </Badge>  : {tvShowsDetailes.status}    {"       "}
                    <Badge pill bg="secondary"> First air date  </Badge>  : {tvShowsDetailes.first_air_date}
                  </p>
                  {
                    tvShowsDetailes.genres?.map((item, idx) => (
                      <Badge pill bg="secondary">{item.name}</Badge>
                    ))
                  }
                  <h3>
                    <Badge pill bg="dark">Overview</Badge>
                  </h3>
                  <p>{tvShowsDetailes.overview}</p>
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
}