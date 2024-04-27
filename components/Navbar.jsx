import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
const Navbar=()=>{

  const navigate = useNavigate();
  
    return(
        <div>
    <nav class="navbar">
          <a class="logo"><img src="th.jpg"></img></a>
          <ul class="nav-list">
            <li><a href="/Home">HOME</a></li>
            <li><a href="/Aboutus">ABOUTUS</a></li>
            <li><a href="/Service"> PRODUCTS</a></li>
            <li><a href="/Rating">REVIEW</a></li>
          </ul>

          <div>
              <button onClick={() =>navigate('/SignIn')}>Sign Up</button>
              <button onClick={() =>navigate('/Login')}>Login</button>
            
          </div>
      </nav> 
          </div>
    );
}
export default Navbar;