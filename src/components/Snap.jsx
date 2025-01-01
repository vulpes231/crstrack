/* eslint-disable no-unused-vars */
import React from "react";
import { customStyle } from "../constants/constant";
import Chat from "./Chat";
import Home from "./Home";
import { Link } from "react-router-dom";

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

const Snap = () => {
  return (
    <div>
      <h3 className={customStyle.title}>Snapchat Logs</h3>
      {messages.length > 0 ? (
        <div className="w-full  flex flex-col items-center justify-center overflow-auto p-6 gap-6">
          <Chat messages={messages} />
          <Home />
        </div>
      ) : (
        <div className="w-full  flex items-center justify-center overflow-auto p-6">
          <p>
            No logs to show.{" "}
            <Link className="underline" to={"/dashboard"}>
              go back
            </Link>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Snap;
