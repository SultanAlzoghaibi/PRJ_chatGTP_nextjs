'use client';

import { useState, useEffect } from 'react';

export const ChatDisplay = ({ message }: { message: string }) => {
  const [messages, setMessages] = useState<string[]>([]);


  function display(message: string) {
    console.log("THE MESSAGE IS", message);
    // Add the message to the messages array
    setMessages((prevMessages) => [...prevMessages, message]);

    // Create a new div element
    const divElement = document.createElement("div");

    // Create a new p element and set its text content
    const pElement = document.createElement("p");
    pElement.textContent = message;

    // Append the p element to the div
    divElement.appendChild(pElement);

    // Append the div element to the document body (or any other container)
    document.body.appendChild(divElement);
  }


  useEffect(() => {
    display(message);
  }, [message]);

  return (
    console.log("THE MESSAGES ARE"),
    console.log(messages),
    console.log(messages),
    console.log(messages),
    // Create a div element
    <div className="flex flex-col gap-4 p-4 bg-gray-900 min-h-screen">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded max-w-md ${
            index % 2 === 0 ? 'bg-gray-800 text-white self-start' : 'bg-blue-700 text-white self-end'
          }`}
        >
          {msg}
        </div>
      ))}
    </div>
  );
};