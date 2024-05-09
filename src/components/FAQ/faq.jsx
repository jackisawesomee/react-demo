// FAQ.js
import React, { useState } from 'react';
import "./faq.css";
import { useNavigate} from "react-router-dom";

const AirplaneFAQ = () => {

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
  
    const faqButton = async () => {
      try {
          //link to the next page
          navigate("/faq");
          
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

    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        { title: 'What is the fastest airplane?', content: 'The fastest airplane is the NASA X-43, with a speed of approximately 7,346 mph.' },
        { title: 'What is the largest airplane?', content: 'The largest airplane is the Stratolaunch, with a wingspan of 385 feet.' },
        { title: 'How do airplanes fly?', content: 'Airplanes fly due to the principles of lift, weight, thrust, and drag. The wings create lift by forcing air downwards due to their shape and angle, which pushes the airplane upwards.' },
        { title: 'What is the fastest airplane?', content: 'The fastest airplane is the NASA X-43, with a speed of approximately 7,346 mph.' },
        { title: 'What is the largest airplane?', content: 'The largest airplane is the Stratolaunch, with a wingspan of 385 feet.' },
        { title: 'What is the fastest airplane?', content: 'The fastest airplane is the NASA X-43, with a speed of approximately 7,346 mph.' },
        { title: 'What is the largest airplane?', content: 'The largest airplane is the Stratolaunch, with a wingspan of 385 feet.' },
        // Add more questions as needed
    ];

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedQuestions = questions.map((question, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={question.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {question.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{question.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="site">
            <header className="site-header">
                <h1>Airplane FAQ</h1>
            </header>
            <main>
                <div className="ui styled accordion">{renderedQuestions}</div>
            </main>
            <footer className="site-footer">
                <p>&copy; 2022 Airplane FAQ</p>
            </footer>
        </div>
    );


    return <div className="ui styled accordion">{renderedQuestions}</div>;
};
export default AirplaneFAQ;
// const FAQ = () => {
//     const navigate = useNavigate();

//     const aboutbutton = async () => {
//         try {
//             //link to the next page
//             navigate("/about");
            
//         } catch (err) {
//             console.error(err);
//         }
//     };
  
//     const homebutton = async () => {
//       try {
//           //link to the next page
//           navigate("/home");
          
//       } catch (err) {
//           console.error(err);
//       }
//     };
  
//     const faqButton = async () => {
//       try {
//           //link to the next page
//           navigate("/faq");
          
//       } catch (err) {
//           console.error(err);
//       }
//     };
  
//     const aboutButton = async () => {
//       try {
//           //link to the next page
//           navigate("/about");
          
//       } catch (err) {
//           console.error(err);
//       }
//     };

//     const [activeIndex, setActiveIndex] = useState(null);

//     const onTitleClick = (index) => {
//         setActiveIndex(index);
//     };

//     const questions = [
//         { title: 'Question 1', content: 'Answer 1' },
//         { title: 'Question 2', content: 'Answer 2' },
//         { title: 'Question 3', content: 'Answer 3' },
//         // Add more questions as needed
//     ];

//     return (
//         <div className="ui styled accordion">
//             <nav className="nav">
//                 <div className="nav-menu" id="navMenu">
//                     {/*<a href="#!" className="nav-link">Home</a>
//                     <a href="#!" className="nav-link">About</a>
//                     <a href="#!" className="nav-link">Services</a>
//                     <a href="#!" className="nav-link">Contact</a>*/}
//                     <a onClick={homebutton}>Home</a>
//                     <a onClick={aboutButton}>About</a>
//                     <a onClick={faqButton}>FAQ</a>
//                 </div>
//                 <button className="nav-toggle" id="navToggle">Menu</button>
//             </nav>
//             {questions.map((question, index) => {
//                 const active = index === activeIndex ? 'active' : '';

//                 return (
//                     <React.Fragment key={question.title}>
//                         <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
//                             <i className="dropdown icon"></i>
//                             {question.title}
//                         </div>
//                         <div className={`content ${active}`}>
//                             <p>{question.content}</p>
//                         </div>
//                     </React.Fragment>
//                 );
//             })}
//         </div>
//     );
// };

// export default FAQ;