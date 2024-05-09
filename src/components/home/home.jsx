// import React from 'react';
// import "./home.css";
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   const aboutButton = async () => {
//     try {
//       //link to the next page
//       navigate("/about");
      
//     } catch (err) {
//         console.error(err);
//     }
//   }

//   const faqButton = async () => {
//     try {
//       //link to the next page
//       navigate("/faq");
      
//     } catch (err) {
//         console.error(err);
//     }
//   }

//   return (
//     <div>
      
//       {/* <header className="header">
//         Website of Greatness
//       </header> */}

//       <div className="main-content">
//         <div className="centered-container">
//             <h1>Jack's Website</h1>
//             <p>This is some cool content.</p>
//             <button>Greatness</button>
//           </div>
//       </div>

//       <div className="center">
//         <h1 style={{ fontSize: '3rem', color: 'purple', textShadow: '2px 2px 4px #000000' }}>Welcome to My Cool Website!</h1>
//         <p>Some text</p>
//         <button>Click me</button>
//       </div>  

//       <div>
//         <nav className="nav">
//             <header className="header">
//               Website of Greatness
//             </header>
//             <div className="nav-menu" id="navMenu">
//               {/* <a href="#!" className="nav-link">Home</a>
//               <a href="#!" className="nav-link">About</a>
//               <a href="#!" className="nav-link">Services</a>
//               <a href="#!" className="nav-link">Contact</a> */}
//               <a onClick={aboutButton}>About</a>
//               <a onClick={faqButton}>FAQ</a>
//             </div>
//             <button className="nav-toggle" id="navToggle">Menu</button>
//           </nav>
//             {/* Rest of your JSX... */}
        
//       </div>

//         <footer class="site-footer">
//           <div class="container">
//             <div class="row flex">
//               <div class="col-sm-12 col-md-6 x1 center">
//                 <h6 class="headering">About</h6>
//                 <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
//               </div>

//               <div class="col-xs-6 col-md-3 x1 center">
//                 <h6 class="headering">Categories</h6>
//                 <ul class="footer-links">
//                   <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
//                   <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
//                   <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
//                   <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
//                   <li><a href="http://scanfcode.com/category/android/">Android</a></li>
//                   <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
//                 </ul>
//               </div>

//               <div class="col-xs-6 col-md-3 x1 center">
//                 <h6 class="headering">Quick Links</h6>
//                 <ul class="footer-links">
//                   <li><a href="http://scanfcode.com/about/">About Us</a></li>
//                   <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
//                   <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
//                   <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
//                   <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div class="container">
//             <div class="row">
//               <div class="col-md-8 col-sm-6 col-xs-12">
//                 <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
//             <a href="#"> Scanfcode</a>.
//                 </p>
//               </div>

//               <div class="col-md-4 col-sm-6 col-xs-12">
//                 <ul class="social-icons">
//                   <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
//                   <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
//                   <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
//                   <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </footer>



//     </div>
//   );
// };


// export default Home;


// Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";
import airplaneImage from './airplane.png'; // replace with your image path

const Home = () => {
    const navigate = useNavigate();

    const goToPage = (page) => {
        try {
            navigate(`/${page}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="home-container">
            <header className="hero">
                <h1>Welcome to Our Airline</h1>
                <p>Experience the joy of travel with us.</p>
                <button onClick={() => goToPage('booking')}>Book a Flight</button>
            </header>
            <nav>
                <button onClick={() => goToPage('faq')}>FAQ</button>
                <button onClick={() => goToPage('about')}>About Us</button>
            </nav>
            <footer>
                <p>&copy; 2022 Our Airline</p>
                <div>
                    <button onClick={() => goToPage('terms')}>Terms & Conditions</button>
                    <button onClick={() => goToPage('privacy')}>Privacy Policy</button>
                </div>
            </footer>
        </div>
    );
};

export default Home;
