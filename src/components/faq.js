// src/components/FAQ.js
import React from 'react';
import './faq.css';

const FAQ = () => {
  return (
    <div className="faq-page">
      <h1>SoccerPros FAQs</h1>
      <p>Got Questions, We got Answers!</p>
      <div className="faq-container">
        <div className="faq-item">
          <button className="faq-question">What age groups does SoccerPros cater to?</button>
          <div className="faq-answer">We cater to a wide range of age groups, from young children starting at age 5 to teenagers up to age 18.</div>
        </div>
        <div className="faq-item">
          <button className="faq-question">What is the cost of enrollment?</button>
          <div className="faq-answer">The cost of enrollment varies depending on the program. Please visit our pricing page for detailed information.</div>
        </div>
        <div className="faq-item">
          <button className="faq-question">Do you offer personalized coaching?</button>
          <div className="faq-answer">Yes, we offer personalized coaching tailored to each player's strengths and areas for improvement.</div>
        </div>
        <div className="faq-item">
          <button className="faq-question">Are there any trial sessions available?</button>
          <div className="faq-answer">Yes, we offer trial sessions for new members to experience our program before committing.</div>
        </div>
      </div>
      <div className="faq-form">
        <h2>Don't be shy to send us questions!</h2>
        <textarea placeholder="Enter your question or message"></textarea>
        <button>Send to FAQ</button>
      </div>
    </div>
  );
};

export default FAQ;
