import React from "react";
import { customStyle } from "../constants/constant";
import Chat from "./Chat";

const Snap = () => {
  return (
    <div>
      <h3 className={customStyle.title}>Snapchat Logs</h3>
      <div className="w-full  flex items-center justify-center overflow-auto p-6">
        {/* <p>No logs to show.</p> */}
        <Chat />
      </div>
    </div>
  );
};

export default Snap;
