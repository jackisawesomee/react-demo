import React from 'react';
import "./home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const aboutButton = async () => {
    try {
      //link to the next page
      navigate("/about");
      
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div>
      
      <header className="header">
        Website of Greatness
      </header>

      <div className="main-content">
        <div className="centered-container">
            <h1>Jack's Website</h1>
            <p>This is some cool content.</p>
            <button>Greatness</button>
          </div>
      </div>

      <div className="center">
        <h1 style={{ fontSize: '3rem', color: 'purple', textShadow: '2px 2px 4px #000000' }}>Welcome to My Cool Website!</h1>
        <p>Some text</p>
        <button>Click me</button>
      </div>  

      <div>
        <nav className="nav">
            <div className="nav-menu" id="navMenu">
              {/* <a href="#!" className="nav-link">Home</a>
              <a href="#!" className="nav-link">About</a>
              <a href="#!" className="nav-link">Services</a>
              <a href="#!" className="nav-link">Contact</a> */}
              <a onClick={aboutButton}>About</a>
            </div>
            <button className="nav-toggle" id="navToggle">Menu</button>
          </nav>
            {/* Rest of your JSX... */}
        
      </div>
    </div>
  );
};


export default Home;
