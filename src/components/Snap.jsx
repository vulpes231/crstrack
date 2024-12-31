import React from "react";
import { customStyle } from "../constants/constant";

const Snap = () => {
  return (
    <div>
      <h3 className={customStyle.title}>Snapchat Logs</h3>
      <div className="w-full  flex items-center justify-center overflow-auto p-6">
        <p>No logs to show.</p>
      </div>
    </div>
  );
};

export default Snap;
