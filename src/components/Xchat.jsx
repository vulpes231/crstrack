/* eslint-disable no-unused-vars */
import React from "react";
import { customStyle } from "../constants/constant";
import Chat from "./Chat";
import Home from "./Home";
import { Link } from "react-router-dom";

const messages = [];

const Xchat = () => {
  return (
    <div>
      <h3 className={customStyle.title}>Twitter Logs</h3>

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

export default Xchat;
