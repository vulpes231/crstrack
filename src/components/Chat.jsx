/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const messages = [
  { msg: "Hello Reinken", type: "sent" },
  {
    msg: "How are you doing and hope you are planning to put him out like we discussed?",
    type: "received",
  },
  {
    msg: "Yes, we had a little misunderstanding in the card and I broke his glasses and injured him",
    type: "sent",
  },
  {
    msg: "Wow, that are loving. He is claiming he is smart but he did not know you are smarter than him. Please make sure you put him out so I can pack my loads in okay",
    type: "received",
  },
  {
    msg: "Okay no problem I will do that, that was the main reason I stopped paying bills so he will know I don’t love him and he has all responsibility to take",
    type: "sent",
  },
  {
    msg: "He might take all responsibility but try your best to put him out so I can come in",
    type: "received",
  },
  {
    msg: "Okay, no problem",
    type: "sent",
  },
];

const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      messages.push({ msg: inputMessage, type: "sent" });
      setInputMessage("");
    }
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto bg-white rounded-lg shadow-md h-[400px]">
      <div className="bg-yellow-500 text-white p-4 rounded-t-lg text-center">
        <h2 className="text-xl font-semibold">Snapchat</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-xs p-3 my-2 rounded-lg ${
              message.type === "sent"
                ? "bg-green-100 self-end text-right"
                : "bg-gray-200 self-start text-left"
            }`}
          >
            {message.msg}
          </div>
        ))}
      </div>
      {/* <div className="p-4 bg-white border-t border-gray-200 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleInputChange}
          className="flex-1 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Send
        </button>
      </div> */}
    </div>
  );
};

export default Chat;
