import React, { useState } from 'react';
import './hero.css';
import bannerImg from './assets/kholi.jpg'; // make sure image exists in assets
import uefaImg from './assets/ronaldo.jpg';     // make sure this image exists in assets

const HomeBanner = () => {
  const [showUEFA, setShowUEFA] = useState(false);
  
  const toggleContent = () => {
    setShowUEFA(!showUEFA);
  };

  const iplContent = {
    tag: "About Us",
    heading: "IPL AUCTION MANIA:",
    text: "Where Cricket Fever Meets Economic Acumen!\nCricket fans and economics minds unite for an electrifying showdown! Participants test their financial skills, bidding on star players, teams, and stadiums. Kohli, Bumrah, and legendary franchises are all up for grabs! Strategies clash, budgets are pushed, and excitement fills the room. But it's more than just a thrill; it's a lesson in player valuation, brand equity, and strategic resource allocation. IPL Auction Mania delivers a unique blend of cricket passion and economic strategy, making it an unforgettable experience for everyone.",
    image: bannerImg,
    alt: "Cricket Player"
  };

  const uefaContent = {
    tag: "ABOUT US",
    heading: "UEFA AUCTION MANIA",
    text: "Where Football Passion Meets Economic Precision! Football fanatics and strategic thinkers, get ready for a thrilling face-off! Dive into the electrifying world of European football as participants bid on iconic clubs, legendary players, and historic stadiums. From Ronaldo and Mbappé to Real Madrid and Old Trafford—everything’s on the table! Brace yourself for intense bidding wars, tactical budgeting, and dynamic decision-making. But this isn’t just a game—it’s a deep dive into market valuation, club worth, and smart asset management. UEFA Auction Blitz fuses the adrenaline of football with the sharp edge of economics for a one of a kind experience you won’t forget.",
    image: uefaImg,
    alt: "UEFA Champions League"
  };

  const currentContent = showUEFA ? uefaContent : iplContent;

  return (
    <div className="home-banner">
      <div className="banner-left">
        <img 
          src={currentContent.image} 
          alt={currentContent.alt} 
          className="banner-image content-transition" 
        />
      </div>
      <div className="banner-right">
        <span className="club-tag content-transition">{currentContent.tag}</span>
        <h1 className="banner-heading content-transition">
          {currentContent.heading}<br />
        </h1>
        <p className="banner-text content-transition">
          {currentContent.text}
        </p>
        <button className="history-button" onClick={toggleContent}>
          {showUEFA ? "IPL" : "UEFA"}
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;