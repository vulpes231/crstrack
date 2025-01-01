/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Chat = ({ messages }) => {
  return (
    <div className="flex flex-col max-w-lg mx-auto bg-white rounded-lg shadow-md h-[450px]">
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
    </div>
  );
};

export default Chat;
