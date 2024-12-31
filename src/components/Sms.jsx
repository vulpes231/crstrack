import React from "react";
import { customStyle } from "../constants/constant";

const Sms = () => {
  return (
    <div>
      <h3 className={customStyle.title}>Sms Logs</h3>

      <div className="w-full  flex items-center justify-center bg-red-200 overflow-auto p-6">
        <p>No logs to show.</p>
      </div>
    </div>
  );
};

export default Sms;
