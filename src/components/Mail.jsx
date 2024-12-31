/* eslint-disable no-unused-vars */
import React from "react";
import { customStyle } from "../constants/constant";

const Mail = () => {
  return (
    <div>
      <h3 className={customStyle.title}>Gmail Logs</h3>
      <div className="w-full  flex items-center justify-center overflow-auto p-6">
        <p>No logs to show.</p>
      </div>
    </div>
  );
};

export default Mail;