import React from 'react'
import { useState } from 'react';
import { Modal, Button, Text, Row, Col } from "@nextui-org/react";
import Moment from 'react-moment';

export default function TvShowsCardInfo(props) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  
  const [tvShowsDetailes, setTvShowsDetailes] = useState([]);

  const getTvShowsDetailes = async (props) => {

    const url = `https://api.themoviedb.org/3/tv/${props.TVId}?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setTvShowsDetailes(responseJson);
  };

  const getTvShowsData = () => {
    getTvShowsDetailes(props);
    console.log(props)

  }
  return (
    <div>
      <>
        <Button shadow color="gradient" auto onClick={() => { handler(); getTvShowsData() }}>
        <i style={{ fontSize: "24px" }} class="fa">&#xf05a;</i>
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
              {tvShowsDetailes.name}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col >
                <div >
                  <img className='card-info-img' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${tvShowsDetailes.poster_path}`} />
                </div>

              </Col>
              <Col>
                <p>
                  <Moment format="DD/MM/YYYY" className='date'>{tvShowsDetailes.release_date}</Moment>

                  {
                    tvShowsDetailes.genres?.map((item, idx) => (

                      <span className='card-info-span'>• {item.name}</span>
                    ))
                  }
                </p>
                <p className='tagline'> {tvShowsDetailes.tagline}</p>
                <h2>
                  Overview
                </h2>
                <p>{tvShowsDetailes.overview}</p>
              </Col>
            </Row>
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
}