/* eslint-disable no-unused-vars */
import React from "react";
import { customStyle } from "../constants/constant";

const Fbchat = () => {
  return (
    <div className="h-screen">
      <h3 className={customStyle.title}>Facebook Messenger Logs</h3>
      <div className="w-full  flex items-center justify-center p-6 overflow-auto">
        <p>No logs to show.</p>
      </div>
    </div>
  );
};

export default Fbchat;
