/* eslint-disable */

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap'; 
import { Link, Route, Switch } from 'react-router-dom';
import './CSS/App.css';
import dataAPI from './dataAPI';

function App() {

  let [api, apiChange] = useState(dataAPI);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Alcohol Recommendation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/">
          <Jumbotron className="background">
            <h1>What's your Alcohol?</h1>
            <br></br>
            <p>
              Get your Alcohol based on your personal taste!! 
              <br></br>
              Alcohol Recommendation System(ARS) is a specially designed deep learning program for perfect drink recommendation.
            </p>
            <p>* As the mechanism of ARS is based on your answers, the result of yours can be changed if you choose another answer on same question.</p>
            <p>
              <Button variant="primary">Start</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">
              {
                api.map((a, i)=>{
                  return <Card api={api[i]} i={i} />
                })
              }
            </div>
          </div>
        </Route>

        {/* <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route> */}

        <Route path="/:id">
          <div>아무거나 적었을떄 이거 보여주셔</div>
        </Route>
      </Switch>




    </div>
  );
}

function Card(props) {
  return(
    <div className="col-md-4">
      <img src={ process.env.PUBLIC_URL + '/img/'+ props.api.image } width="50%" />
      <h4>{ props.api.title }</h4>
    </div>
  )
}

export default App;
