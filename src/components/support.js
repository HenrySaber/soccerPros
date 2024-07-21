// src/components/Support.js
import React, { useState } from 'react';
import './support.css';

const Support = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      setInput('');
      // Simulate a response from the assistant
      setTimeout(() => {
        setMessages([...messages, { user: 'You', text: input }, { user: 'Assistant', text: 'How can I assist you?' }]);
      }, 1000);
    }
  };

  return (
    <div className="support-page">
      <h1>Support Client</h1>
      <div className="chat-container">
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.user === 'You' ? 'user-message' : 'assistant-message'}`}>
              <strong>{message.user}:</strong> {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type your message..." 
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
