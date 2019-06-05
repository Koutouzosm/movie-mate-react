import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <NavLink className="navbar-brand" to="/">Movie-Mate</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/saved">Saved</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/matches">Matches</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;


{/* <div
      className={`
        jumbotron
        ${props.fluid ? 'jumbotron-fluid' : ''}
        bg-${props.bg || 'default'}
        text-${props.color || 'dark'}
        text-center
        `}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>{props.pageTitle}</h1>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-12 col-md-6">
            <NavLink to="/home" className="btn btn-lg">
              Home
            </NavLink>
          </div>
          <div className="col-12 col-md-6">
            <NavLink to="/saved" className="btn btn-lg">
              Saved
            </NavLink>
          </div>
          <div className="col-12 col-md-6">
            <NavLink to="/matches" className="btn btn-lg">
              Matches
            </NavLink>
          </div>
        </div>
      </div>
    </div> */}