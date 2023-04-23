import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [messages, setMessages] = useState([{ input: '', response: '' }]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    setMessages([...messages, { input: inputValue, response: 'loading...' }]);
    setTimeout(() => {
      const randomResponse = `Respuesta para "${inputValue}"`;
      setMessages([
        ...messages,
        { input: inputValue, response: randomResponse },
      ]);
    }, Math.floor(Math.random() * 3000));

    setInputValue('');
  };

  const getResponse = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div>
      <div className="messageBox">
        {messages.map((message, index) => (
          <div key={index} className="inputResponse">
            <p className="userInput">{message.input}</p>
            <div className="cajaResponse">
              <p className="response">{message.response}</p>
            </div>
          </div>
        ))}
      </div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
