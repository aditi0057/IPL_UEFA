import React from 'react';
import './collage.css';

const CollageGrid = () => {
  return (
    <div className="collage-container">
      <div className="collage-grid">
        {/* Top row */}
        <div className="collage-box top-left">
          <span className="label">WE ARE BACK</span>
        </div>
        <div className="collage-box top-right">
          <span className="label">THREE DAYS, TWO LEAGUES</span>
        </div>
        
        {/* Middle sections that span horizontally */}
        <div className="collage-box mid-upper">
          <span className="label">STRATEGIC BIDDING WARS</span>
        </div>
        
        <div className="collage-box mid-lower">
          <span className="label">Watch. Hunt. Bid. Repeat the thrill!</span>
        </div>
        
        {/* Bottom row */}
        <div className="collage-box bottom-left">
          <span className="label">Auction Arena</span>
        </div>
        <div className="collage-box bottom-right">
          <span className="label">IPL × UEFA Showdown</span>
        </div>
      </div>
    </div>
  );
};

export default CollageGrid;