import React from "react";
import "./AuctionSection.css";
import bg from "./assets/bg.png";

const AuctionSection = () => {
  return (
    <section className="auction-wrapper">
      <div className="auction-card">
        <div className="auction-left">
          <h1>FIFA AUCTION</h1>
          <p>
            The FIFA Auction brought together football legends and strategists from around the globe! Participants engaged in
            dynamic mock auctions, learning about economic principles while bidding on international teams and players. With
            fierce competition and adrenaline-pumping decisions, this event was a thrilling fusion of sports and strategy.
          </p>
        </div>
        <div
          className="auction-right"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </div>
    </section>
  );
};

export default AuctionSection;
