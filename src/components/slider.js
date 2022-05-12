import React from 'react'
import {  Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react';

export default function Slider() {
  const [posters, setPosters] = useState([]);
  var counter = 0;
  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=7917b1f1a6ceb6e64d447919f0a82eef&language=en-US&page=1`

    const response = await fetch(url);
    const responseJson = await response.json();
    setPosters(responseJson.results);
    console.log(responseJson.results);
  };
  
  useEffect(() => {
    getMovieRequest();
 
  }, []);
  return (

    <div >
       <Carousel variant="dark">
      {Array.from({ length: 4 }).map((_, idx) => (   
        <Carousel.Item>
          <div style={{height:"100vh",width:"100%"}}>
          <img style={{height:"100vh",width:"100%",objectFit: "contain"}}
            className="d-block w-100" 
            src={`https://www.gazeteilksayfa.com/d/gallery/331_1.jpg`} alt='poster'
          />
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
          <div style={{ display: 'none' }}>{counter++}</div>
        </Carousel.Item> 
      
      ))}
        </Carousel>
    </div>
  )
}
