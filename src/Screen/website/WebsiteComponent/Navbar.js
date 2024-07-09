import React from 'react';
import "../../website/style.scss";
import logo from "../../../assets/images/logo.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import MainHeading from './MainHeading';
import { ArrowDownward } from '@mui/icons-material/ArrowDownward';
import ChangeLanguage from './ChangeLanguage';

const Navbar = ({subHeading,heading}) => {
  
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">
            <img src={logo} width="30" height="30" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" style={{ color: "#fff", backgroundColor: "#000" }}>
  </span>
</button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            <div className="navbar-nav mx-auto">
              <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
              <NavLink to="/how-it-work" className="nav-link" activeClassName="active">How it works</NavLink>
              <NavLink to="/companies" className="nav-link" activeClassName="active">Companies</NavLink>
              <NavLink to="/individuals" className="nav-link" activeClassName="active">Individuals</NavLink>
              <NavLink to="/about-us" className="nav-link" activeClassName="active">About us</NavLink>
              <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </div>
            <div className="navbar-nav">
              <ChangeLanguage/>
            </div>
          </div>
        </div>
      </nav>
     <MainHeading
     heading={heading}
     subHeading={subHeading}

     />
    </>
  );
}

export default Navbar;
