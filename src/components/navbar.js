import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function MovieNavbar(props) {
  const [searchValue, setSearchValue] = useState("");
  let navigate = useNavigate();
  const routeChange = () => {

    if (searchValue == "") {
      let path = `/`;
      navigate(path);
    } else {
      let path = `/search`;
      navigate(path);
    }

  }
  useEffect(() => {
    search();
  });
  const search = function () {
    if (searchValue == "") {

    } else {

    }
  };
  return (

    <div className='navbar-container'>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#">Movies & TV Shows</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Movies" id="basic-nav-dropdown">
                <NavDropdown.Item href="/movies/popular" >Popular </NavDropdown.Item>
                <NavDropdown.Item href="/movies/nowPlaying">Now Playing</NavDropdown.Item>
                <NavDropdown.Item href="/movies/upcoming">Upcoming</NavDropdown.Item>
                <NavDropdown.Item href="/movies/topRated">Top Rated</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="TV Shows" id="basic-nav-dropdown">
                <NavDropdown.Item href="/tvShows/popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="/tvShows/airingToday">Airing Today</NavDropdown.Item>
                <NavDropdown.Item href="/tvShows/onTV">On TV</NavDropdown.Item>
                <NavDropdown.Item href="/tvShows/topRated">Top Rated</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button shadow auto color="gradient" onClick={() => { routeChange(); props.Changedata(searchValue) }}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
