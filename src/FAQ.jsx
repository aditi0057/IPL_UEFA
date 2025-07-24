import React, { useState, useRef, useEffect } from "react";
import "./FAQ.css"; // We'll keep a minimal CSS file for non-Tailwind styles

const FAQ = () => {
  const faqs = [
    {
      question: "How do I register for the event?",
      answer: "Click on the 'Register' button on the homepage and fill out the form.",
      image: "/1.jpeg", // Using your original image paths
    },
    {
      question: "Is it team-based or solo?",
      answer: "You can participate solo or in teams of up to 5 members.",
      image: "/2.jpg",
    },
    {
      question: "What's the prize pool?",
      answer: "Exciting prizes await the winners!",
      image: "/3.jpeg",
    },
    {
      question: "Do I need prior knowledge?",
      answer: "Not at all! It's designed to be fun for all experience levels.",
      image: "/4.jpeg",
    },
    {
      question: "Where will it be conducted?",
      answer: "The event will be held at the college TAN Audi.",
      image: "/5.jpg",
    },
  ];

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    // Update arrows on initial load and resize
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Update arrow visibility after scrolling
      setTimeout(updateArrows, 300);
    }
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      
      <div className="faq-outer-wrapper">
        {/* Left scroll button */}
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="faq-arrow faq-arrow-left"
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {/* Right scroll button */}
        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="faq-arrow faq-arrow-right"
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        
        {/* Scroll container */}
        <div 
          ref={scrollContainerRef}
          onScroll={updateArrows}
          className="faq-container"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-box"
            >
              <img src={faq.image} alt={`FAQ ${index + 1}`} />
              
              <div className="faq-overlay">
                {faq.answer}
              </div>
              
              <div className="faq-question">
                {faq.question}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;