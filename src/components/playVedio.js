import React from 'react'
import { Modal, Button} from "@nextui-org/react";
import { useState } from 'react';


export default function PlayVedio(props) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const [trailer, setTrailer] = useState([]);
  
  const getTrailer = async (props) => {
    console.log(props)
    var url="";
    if (props.type === "movie") {
      url = `https://api.themoviedb.org/3/movie/${props.MovieId}/videos?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US`;
    }
    else {
      url = `https://api.themoviedb.org/3/tv/${props.TVId}/videos?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US`;
    }

    const response = await fetch(url);
    const responseJson = await response.json();
    const trailerList = responseJson.results.filter((item) => item.type == "Trailer");
    setTrailer(trailerList)

  };

  const getMovieData = () => {
    getTrailer(props);
  }
  return (
    <div>
      <Button color="gradient" auto onClick={() => { handler(); getMovieData() }} className='player-button'><i class="fa fa-play-circle" style={{ fontSize: "30px" }}></i> Play Trailer</Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="50%"
      >
        <Modal.Header>
          {/* <Text b size={25}>
              {moviesDetailes.original_title}
            </Text> */}
        </Modal.Header>
        <Modal.Body>

          <div >
            <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/${trailer[0]?.key}`} >
            </iframe>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
