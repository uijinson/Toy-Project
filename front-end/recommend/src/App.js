/* eslint-disable */

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap'; 
import { Link, Route, Switch } from 'react-router-dom';
import './css/App.css';
import dataAPI from './dataAPI';
import SignUpModal from './modals/SignUpModal';
import SignInModal from './modals/SignInModal';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [SignUpModalOn, setSignUpModalOn] = useState(false);
  const [SignInModalOn, setSignInModalOn] = useState(false);

  let [api, apiChange] = useState(dataAPI);

  const setEmailHandler = (ee) => {
    setEmail(ee)
  };

  return (
    <div className="App">
      <SignUpModal 
        show={SignUpModalOn} 
        onHide={()=>{ setSignUpModalOn(false) }}
      ></SignUpModal>
      <SignInModal 
        show={SignInModalOn} 
        onHide={()=>{ setSignInModalOn(false) }}
        setEmailHandler={setEmailHandler}
      ></SignInModal>

      <Switch>
        <Route exact path="/">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Cocktail Recommendation</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link>
                  <Button variant="primary" onClick={()=>setSignInModalOn(true)}>Sign In</Button>
                </Nav.Link>
                <Nav.Link>
                  <Button variant="secondary" onClick={()=>setSignUpModalOn(true)}>Sign Up</Button>
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/detail">Detail</Nav.Link> */}
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">{email}</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Jumbotron className="background">
            <div className="texts">
              <h1>What's your Cocktail?</h1>
              <br></br>
              <p>
                Get your Cocktail based on your personal taste!! 
                <br></br>
                Cocktail Recommendation System(CRS) is a specially designed deep learning program for perfect drink recommendation.
              </p>
              <p>* As the mechanism of ARS is based on your answers, the result of yours can be changed if you choose another answer on same question.</p>
              <p>
                <Button variant="primary">Start</Button>
              </p>
            </div>
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
