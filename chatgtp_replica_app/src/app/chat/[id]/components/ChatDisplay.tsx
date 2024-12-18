'use client';

import { useState, useEffect } from 'react';


export const ChatDisplay = ({ message }: { message: string }) => {
  const [chatmessage, setChatmessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  
  const [response, setResponse] = useState<string[]>([]);

  // Event handler for updating chatmessage (user input)
  function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
    setChatmessage(event.target.value);
    setResponse([...response, chatmessage]);
  }

  // Event handler for sending message (both Enter key and Send button)
  function handleSendMessage() {
    if (chatmessage.trim() === "") return; // Don't send empty messages

    // Add the new message to the messages array
    setMessages([...messages, chatmessage]);
    setResponse([...response, chatmessage]);
    setChatmessage(''); // Clear the input after sending
  }

  // Handle Enter key press event
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSendMessage(); // Trigger sending message on Enter key press
    }
  }

  useEffect(() => {
    if (message) {
      // Add incoming message to chat history when message changes
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  }, [message]);

  return (
    <div className="flex flex-col gap-2 overflow-y-auto">
      <div className="flex flex-col gap-2">
        <p className="text-gray-300 text-sm">
          You can chat with it using the input box below.
        </p>
        
        <input
          type="text"
          className="bg-gray-700 text-white focus:outline-none"
          placeholder="Type your message..."
          value={chatmessage}
          onChange={updateResponse}
          onKeyDown={handleKeyPress} // Detect Enter key press
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>

      {/* Display chat messages */}
      <div className="flex-grow overflow-y-auto mt-4">
        {messages.map((msg, index) => (
          <p key={index} className="text-white text-sm mb-2">
            {msg}
          </p>
        ))}

     
      </div>
    </div>
  );
};