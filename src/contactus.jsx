import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import './contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-boxes">
        {/* Left Slanted Box */}
        <div className="contact-box left-box">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>econclub@thapar.edu</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Thapar University, Patiala</span>
          </div>
        </div>

        {/* Right Slanted Box */}
        <div className="contact-box right-box">
          <a href="https://www.linkedin.com/company/econclub/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="https://www.instagram.com/econ_tiet/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCnyVX3sGVJEno_WwLouHXtA" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon youtube" />
          </a>
        </div>
      </div>
      <div className="contact-copyright">© 2025 Econ Club, Thapar University. All rights reserved.
      </div>
    </div>
  );
};

export default ContactUs;
