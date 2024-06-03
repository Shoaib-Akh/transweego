import React from 'react'
import "../../website/style.scss"
import logo from "../../../assets/images/logo.svg"
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
    <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" >
        <img src={logo} width="30" height="30" alt="Logo" />
      </a>
      <div class="navbar-nav mx-auto">
      <Link to={"/"}>

        <a class="nav-link">
          Home
        </a>
      </Link>
        <Link to={"HowItWork"}>
        <a class="nav-link" >
          How it works
        </a>
        </Link>
        <a class="nav-link">
          Companies
        </a>
        <a class="nav-link" >
          Individuals
        </a>
        <a class="nav-link" >
          About us
        </a>
        <a class="nav-link" >
          Blog
        </a>
        <a class="nav-link">
          Contact

        </a>
      </div>
      <div class="navbar-nav">
        <button class="btn orange " onClick={()=> navigate("/login")}>Login</button>
        <button class="btn yellow " onClick={()=> navigate("/signUp")}>Sign Up</button>

      </div>
    </div>
  </nav>
   <div className="container h-75 d-flex align-items-lg-center main-heading">
   <div className="row">
     <div className="col-lg-7 col-md-6 col-12">
       <h1>Revolutionize Your Vehicle Transport</h1>
       <p>Drive Smart, Share More, Earn Big, Preserve Nature.</p>
       <div style={{ marginTop: 40 }} className='text-md-center '>

         <button className="btn orange mb-md-3 ">Send</button>
         <button className="btn yellow">Transparent</button>
       </div>
     </div>
   </div>
 </div>
 </>

  )
}

export default Navbar