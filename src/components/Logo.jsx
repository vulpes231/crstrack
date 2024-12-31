/* eslint-disable no-unused-vars */
import React from "react";
import { logo } from "../assets";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="" className="w-[30px] " />
      <h3 className="z-10 uppercase font-bold text-lg whitespace-nowrap md:text-xl">
        cellphone <span className="text-cyan-500">remote</span> access
      </h3>
    </div>
  );
};

export default Logo;
