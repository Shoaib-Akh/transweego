import React from 'react'
import "../../website/style.scss"
import logo from "../../../assets/images/logo.png"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src={logo} width="30" height="30" alt="Logo" />
      </a>
      <div class="navbar-nav mx-auto">
        <a class="nav-link" href="#">
          Home
        </a>
        <a class="nav-link" href="#">
          How it works
        </a>
        <a class="nav-link" href="#">
          Companies
        </a>
        <a class="nav-link" href="#">
          Individuals
        </a>
        <a class="nav-link" href="#">
          About us
        </a>
        <a class="nav-link" href="#">
          Blog
        </a>
        <a class="nav-link" href="#">
          Contact

        </a>
      </div>
      <div class="navbar-nav">
        <button class="btn orange ">Login</button>
        <button class="btn yellow ">Sign Up</button>

      </div>
    </div>
  </nav>
  )
}

export default Navbar