import React, { useState, useEffect } from 'react';
import './NextMatch.css';

const matchData = {
  ipl: {
    teams: "RCB  VS  DC"
  },
  uefa: {
    teams: "Barcelona VS Dortmund"
  }
};

const NextMatch = () => {
  const [activeTab, setActiveTab] = useState("ipl");
  const [timeLeft, setTimeLeft] = useState({});
  const [todayDate, setTodayDate] = useState("");

  const targetDate = new Date("2025-04-18T19:30:00"); // 18 April 2025, 7:30 PM

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      setTodayDate(now.toLocaleDateString('en-US', options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getMatchLine = () => matchData[activeTab].teams;

  return (
    <div className="next-match-container">
      <div className="next-match-wrapper">
        <div className="next-left next-slant-box">
          <div className="content">
            <h3>NEXT GAME</h3>
            <p><strong>{getMatchLine()}</strong></p>
            <p>LIVE SOON</p>
            <div className="button-group">
              <button 
                onClick={() => setActiveTab("ipl")}
                className={activeTab === "ipl" ? "active" : ""}
              >
                IPL 2025
              </button>
              <button 
                onClick={() => setActiveTab("uefa")}
                className={activeTab === "uefa" ? "active" : ""}
              >
                UEFA 2025
              </button>
            </div>
          </div>
        </div>

        <div className="next-right next-slant-box">
          <div className="next-timer">
            <h3 className="match-date">Today: {todayDate}</h3>
            <div className="next-countdown">
              <div className="next-timer-box">
                <span>{String(timeLeft.days).padStart(2, '0')}</span>Days
              </div>
              <div className="next-timer-box">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>Hours
              </div>
              <div className="next-timer-box">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>Minutes
              </div>
              <div className="next-timer-box">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMatch;
