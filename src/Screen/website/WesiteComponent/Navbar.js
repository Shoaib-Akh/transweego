import React from 'react';
import "../../website/style.scss";
import logo from "../../../assets/images/logo.svg";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">
            <img src={logo} width="30" height="30" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/HowItWork" className="nav-link">How it works</Link>
              <a className="nav-link">Companies</a>
              <a className="nav-link">Individuals</a>
              <a className="nav-link">About us</a>
              <a className="nav-link">Blog</a>
              <a className="nav-link">Contact</a>
            </div>
            <div className="navbar-nav">
              <button className="btn orange" onClick={() => navigate("/login")}>Login</button>
              <button className="btn yellow" onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container h-75 d-flex align-items-lg-center main-heading">
        <div className="row mt-md-4">
          <div className="col-lg-7 col-md-7 col-12">
            <h1>Revolutionize Your Vehicle Transport</h1>
            <p>Drive Smart, Share More, Earn Big, Preserve Nature.</p>
            <div style={{ marginTop: 40 }} className='d-flex align-items-center gap-sm-3 gap-1'>
              <button className="btn orange">Send</button>
              <button className="btn yellow">Transparent</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
