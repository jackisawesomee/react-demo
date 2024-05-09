import React from 'react';
import "./about.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import airlineImage from './airplane.png'; // replace with your image path

const About = () => {
    const navigate = useNavigate();

    const goToPage = (page) => {
        try {
            navigate(`/${page}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="about-container">
            <h1>About Our Airline</h1>
            <img src={airlineImage} alt="Airline" className="airline-image" />
            <section>
                <h2>Our History</h2>
                <p>
                    Our airline was founded in 2000 with the goal of providing high-quality air travel. Over the years, we have grown to serve over 100 destinations worldwide.
                </p>
            </section>
            <section>
                <h2>Our Values</h2>
                <p>
                    We believe in putting our customers first. We strive to provide excellent service and ensure the safety and comfort of all our passengers.
                </p>
            </section>
            <section>
                <h2>Our Team</h2>
                <p>
                    Our team is made up of dedicated professionals who are passionate about aviation. From our pilots to our customer service representatives, everyone plays a crucial role in ensuring a great flight experience.
                </p>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>
                    Have questions or need assistance? Contact our customer service team at 1-800-123-4567 or email us at support@ourairline.com.
                </p>
            </section>
            <div className="navigation-buttons">
                <button onClick={() => goToPage('home')}>Home</button>
                <button onClick={() => goToPage('faq')}>FAQ</button>
            </div>
        </div>
    );
};

export default About;

// const About = () => {
//   const navigate = useNavigate();

//   const aboutbutton = async () => {
//       try {
//           //link to the next page
//           navigate("/about");
          
//       } catch (err) {
//           console.error(err);
//       }
//   };

//   const homebutton = async () => {
//     try {
//         //link to the next page
//         navigate("/home");
        
//     } catch (err) {
//         console.error(err);
//     }
//   };

//   const faqButton = async () => {
//     try {
//         //link to the next page
//         navigate("/faq");
        
//     } catch (err) {
//         console.error(err);
//     }
//   };

//   const aboutButton = async () => {
//     try {
//         //link to the next page
//         navigate("/about");
        
//     } catch (err) {
//         console.error(err);
//     }
//   };

//   return (

//     <div className='about'>
//       <nav className="nav">
//           <div className="nav-menu" id="navMenu">
//             {/*<a href="#!" className="nav-link">Home</a>
//             <a href="#!" className="nav-link">About</a>
//             <a href="#!" className="nav-link">Services</a>
//             <a href="#!" className="nav-link">Contact</a>*/}
//             <a onClick={homebutton}>Home</a>
//             <a onClick={aboutButton}>About</a>
//             <a onClick={faqButton}>FAQ</a>
//           </div>
//           <button className="nav-toggle" id="navToggle">Menu</button>
//       </nav>
//       <div className="about-image">
//         <img className="about-image" src="mountain.jpg" alt="about" />
//         <div className="about-container">
//               <h1 className="about-title">About Us</h1>
//               <p className="about-text">
//                   We are a team of passionate individuals dedicated to providing the best service possible. Our team has a diverse set of skills and backgrounds, which allows us to approach problems from various angles and come up with the best solutions.
//               </p>
//         </div>
//       </div>

//       {/* <div className="about-image">
//         <img className="about-image" src="mountain.jpg" alt="about" />
//       </div> */}

//     </div>
//   );
// }


// export default About;