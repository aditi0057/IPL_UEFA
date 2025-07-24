import "./App.css";
import React from 'react';
import logo from "./assets/lg.jpg";
import bgVideo from "./assets/intro2.mp4";
import Schedule from './schedule';
import NextMatch from './NextMatch'; // Importing the slanted next match section
import Collage from "./collage";
import Hero from "./hero";
import Faq from "./FAQ";
import ContactUs from "./contactus"
import { Link } from "react-scroll";
// Team Container Component
const TeamContainer = () => {
  return (
    <div className="team-container-wrapper">
      <div className="team-containers">
        <div className="team-box">
          <a
            href="https://ipl-uefa-registration.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            REGISTER
          </a>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <header className="top-nav">
        <div className="logo">
          <img src={logo} alt="Econ Club Logo" />
        </div>
        <nav className="nav-links">
  <Link to="home" smooth={true} duration={500}>HOME</Link>
  <Link to="about" smooth={true} duration={500}>ABOUT US</Link>
  <Link to="schedule" smooth={true} duration={500}>SCHEDULE</Link>
  <Link to="faq" smooth={true} duration={500}>FAQ</Link>
  <Link to="contact" smooth={true} duration={500}>CONTACT</Link>
</nav>
      </header>

      <div className="main-container"id = "home" >
        
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Section */}
        <div className="text-section">
          <h1>IPL × UEFA AUCTION</h1>

          {/* Team Container Component */}
          <TeamContainer />
        </div>

        {/* Rectangle Image Containers - Replacing the grid */}
        <div className="image-rectangles">
          <div className="rectangle-container uefa-container">
            <img src="/uefa2.png" alt="UEFA Players" />
            <div className="overlay">
              <h2>UEFA CHAMPIONS LEAGUE</h2>
            </div>
          </div>
          <div className="rectangle-container ipl-container">
            <img src="/ipl.webp" alt="IPL" />
            <div className="overlay">
              <h2>INDIAN PREMIER LEAGUE</h2>
            </div>
          </div>
        </div>
      </div>
      
      <NextMatch />
      <section id="about"><Hero/></section>
      <div className="spacer" />
     
      <section id="schedule"><Schedule /></section>

      <Collage />
      <div className="faq-wrapper">
      <section id="faq"><Faq /></section>
      </div>
      <section id="contact"><ContactUs /></section>

     
    </>
  );
}

export default App;










