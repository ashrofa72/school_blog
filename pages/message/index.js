// pages/index.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const socket = io(); // Connect to the Socket.io server

  useEffect(() => {
    // Listen for 'message' event and update the messages state
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Emit the 'message' event to the server with the input text
    socket.emit('message', inputText);
    setInputText('');
  };

  return (
    <div>
      <h1>Instant Messaging App</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
