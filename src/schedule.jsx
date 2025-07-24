import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const descriptions = {
    1: 'April 18| IPL Screening :  Join us for an overnight cricket screening extravaganza!',
    2: 'April 19 | UEFA League Treasure Hunt: Dive into a football-fueled treasure hunt where every clue takes you closer to UEFA glory',
    3: 'April 20 | Grand Auction Day (IPL × UEFA) : Build your dream squad by making smart, strategic bids under tight budgets ',
  };

  return (
    <div className="schedule-wrapper">
      <div className="slant-box left-schedule">
        <div className="content">
          <h1>SCHEDULE</h1>
          <div className="timeline">
            <div className="line"></div>
            {[1, 2, 3].map((day) => (
              <div
                key={day}
                className={`day ${activeDay === day ? 'active' : ''}`}
                onClick={() => setActiveDay(day)}
              >
                <div className={`dot ${activeDay === day ? 'red' : 'gray'}`}></div>
                <p className="day-label">DAY {day}</p>
              </div>
            ))}
          </div>
          <p className="description">- {descriptions[activeDay]}</p>
        </div>
      </div>

      <div className="slant-box right-schedule">
        <div className="overlay-text">PLAY. PLAN. PREVAIL</div>
      </div>
    </div>
  );
};

export default Schedule;
