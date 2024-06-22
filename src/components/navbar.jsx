import React ,{useState,useEffect}from "react";
 import logo from "../assets/logo.svg"

// import {NavLink} from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
   const [clicked , setClicked] = useState(false);
   const handleClick = () => !setClicked;
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
   return(
    <nav className={scrolled ? "scrolled" : ""}> 
       
       <div className="logo">
         <img src={logo} alt="logo" /> 
        
       </div>
       <ul id="container-links" className={clicked ? "#container-links active" :"#container-links"} >
      <NavLink to="/" className="links">
           Home
        </NavLink>
      <NavLink to="/schedule" className="links">schedule
      </NavLink>
      <NavLink to="/contact" className="links">
        Contact Us
        </NavLink>
       
        <NavLink to="/join" className="links a"><span>Register Now</span></NavLink>
       </ul>
    </nav>

  );
}

export default Navbar;
