import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us!</h1>
      <div className="contact-container">
        <div className="contact-details">
          <div className="hours">
            <h2>Hours of Service:</h2>
            <p>Monday to Sunday : 8am - 8pm</p>
          </div>
          <div className="message-form">
            <h2>Send us a Message!</h2>
            <form>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" placeholder="email@example.com" />
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" placeholder="Enter your question or message"></textarea>
              <button type="submit">Send to FAQ</button>
            </form>
          </div>
        </div>
        <div className="location">
          <h2>Search Location</h2>
          <input type="text" placeholder="Smitherton" />
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509421!2d144.9537353153183!3d-37.81627974202311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4f8e89a24e!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1572597430075!5m2!1sen!2sau"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <p>Call or Email:</p>
        <p>(613) 555-1234</p>
        <p>soccerPros@hCos.ca</p>
        <p>Address: 123 apple Street, Ottawa, ON, Canada K11 323</p>
      </div>
    </div>
  );
};

export default Contact;
