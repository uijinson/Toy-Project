/* eslint-disable */

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap'; 
import { Link, Route, Switch } from 'react-router-dom';
import './CSS/Login.css';
import dataUser from './dataUser';


function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let [user, setUser] = useState(dataUser);

  const submitHandler = (e) => {
    props.setEmail(email);
  }

  // const userCheck = (e) => {
  //   let result = ""
  //   result = user.map((a, i)=>{
  //     if(a.email === email) {
  //       if(a.password === password) {
  //         return email;
  //       }
  //     }
  //   })
  //   if(result === ""){
  //     return ""
  //   } else {
  //     return result;
  //   }
  // }

  // api.map((a, i)=>{
  //   return <Card api={api[i]} i={i} />
  return (
    <Switch>
      <Route path="/login">
        <div className="user_body">
          <div className="user_form">
            <h1>My Cocktail</h1>
              <div className="int-area">
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="id_email">EMAIL</label>
              </div>
              <br></br>
              <div className="int-area">
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                <label htmlFor="id_password">PASSWORD</label>
              </div>
              <div className="btn-area">
                <Link to="/" onClick={submitHandler}>LOGIN</Link>
              </div>
            <div className="process">
              <a>Forgot Password?</a>
              <a>Sign up</a>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  )
}

export default Login;