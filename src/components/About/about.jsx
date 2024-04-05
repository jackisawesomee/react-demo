import React from 'react';
import "./about.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";


const About = () => {
  const navigate = useNavigate();

  const aboutbutton = async () => {
      try {
          //link to the next page
          navigate("/about");
          
      } catch (err) {
          console.error(err);
      }
  };

  const homebutton = async () => {
    try {
        //link to the next page
        navigate("/home");
        
    } catch (err) {
        console.error(err);
    }
  };

  const aboutButton = async () => {
    try {
        //link to the next page
        navigate("/about");
        
    } catch (err) {
        console.error(err);
    }
  };

  return (

    <div className='about'>
      <nav className="nav">
          <div className="nav-menu" id="navMenu">
            {/*<a href="#!" className="nav-link">Home</a>
            <a href="#!" className="nav-link">About</a>
            <a href="#!" className="nav-link">Services</a>
            <a href="#!" className="nav-link">Contact</a>*/}
            <a onClick={homebutton}>Home</a>
            <a onClick={aboutButton}>About</a>
          </div>
          <button className="nav-toggle" id="navToggle">Menu</button>
      </nav>
      <div className="about-image">
        <img className="about-image" src="mountain.jpg" alt="about" />
        <div className="about-container">
              <h1 className="about-title">About Us</h1>
              <p className="about-text">
                  We are a team of passionate individuals dedicated to providing the best service possible. Our team has a diverse set of skills and backgrounds, which allows us to approach problems from various angles and come up with the best solutions.
              </p>
        </div>
      </div>

      {/* <div className="about-image">
        <img className="about-image" src="mountain.jpg" alt="about" />
      </div> */}

    </div>
  );
}


export default About;