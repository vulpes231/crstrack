/* eslint-disable no-unused-vars */
import React from "react";
import { logo } from "../assets";

const Logo = () => {
  return (
    <div className="relative">
      <img src={logo} alt="" className="absolute top-0 w-[30px]" />
      <h3>cellphone remote access</h3>
    </div>
  );
};

export default Logo;
