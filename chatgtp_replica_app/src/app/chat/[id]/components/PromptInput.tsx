'use client';

import { useState } from 'react';

export const PromptInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown} // Add the keydown event handler
        className="flex-grow p-2 rounded bg-gray-700 text-white focus:outline-none"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
    </div>
  );
}